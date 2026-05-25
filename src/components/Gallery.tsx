"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import SeriesLightbox from "./SeriesLightbox";
import { entries, totalPieces, type Entry, type Series } from "@/data/works";

function sizeClasses(size: "tall" | "wide" | "square" | "featured") {
  switch (size) {
    case "featured":
      return "col-span-2 md:col-span-4 md:row-span-3 aspect-[16/9] md:aspect-auto";
    case "tall":
      return "row-span-2 aspect-[3/4]";
    case "wide":
      return "col-span-2 aspect-[16/10]";
    default:
      return "aspect-square";
  }
}

const accents = [
  "#ff2e4c",
  "#ffd60a",
  "#0058ff",
  "#ff3ea5",
  "#00c896",
  "#7b2cbf",
];

export default function Gallery() {
  const [openSeries, setOpenSeries] = useState<Series | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-[#f4ede0] overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#ffd60a]/15 blur-3xl pointer-events-none animate-drift" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#0058ff]/10 blur-3xl pointer-events-none animate-drift-rev" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-end justify-between mb-16 md:mb-20 flex-wrap gap-6">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0058ff]" />
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                (02) Selected Works · {totalPieces} pieces
              </p>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
              The <span className="italic">collection</span>
              <span className="text-[#ff2e4c]">.</span>
            </h2>
          </Reveal>
          <Reveal delay={1} className="max-w-sm">
            <p className="text-black/80 leading-relaxed">
              A rotating selection of paintings, mixed-media works and
              studies. Click any series to see all pieces inside.
            </p>
          </Reveal>
        </div>

        {/* Tighter 4-column grid, smaller row height — better for low-res phone shots */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {entries.map((entry, idx) => (
            <EntryTile
              key={entry.kind === "series" ? entry.id : entry.src}
              entry={entry}
              index={idx}
              onOpen={setOpenSeries}
            />
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <a
            href="https://www.instagram.com/paintby_emilia/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] text-[#f4ede0] rounded-full hover:bg-[#ff2e4c] transition-colors"
          >
            <span>See the full archive on Instagram</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </Reveal>
      </div>

      <SeriesLightbox
        series={openSeries}
        onClose={() => setOpenSeries(null)}
      />
    </section>
  );
}

function EntryTile({
  entry,
  index,
  onOpen,
}: {
  entry: Entry;
  index: number;
  onOpen: (s: Series) => void;
}) {
  const accent = accents[index % accents.length];
  const isSeries = entry.kind === "series";
  const cover =
    entry.kind === "series" ? entry.cover : entry.src;
  const title = entry.title;
  const subtitle =
    entry.kind === "series"
      ? `${entry.items.length} pieces · ${entry.year}`
      : `${entry.category} · ${entry.year}`;
  const featured = entry.kind === "work" && entry.size === "featured";
  const badge = entry.kind === "work" ? entry.badge : undefined;

  const cls = `gallery-item group relative overflow-hidden cursor-pointer rounded-sm bg-black/10 ${sizeClasses(
    entry.size
  )}`;

  const inner = (
    <>
      <Image
        src={cover}
        alt={title}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />

      {/* Series stack effect */}
      {isSeries && (
        <>
          <div className="absolute -top-1 -right-1 w-full h-full border border-white/30 rounded-sm pointer-events-none" />
          <div className="absolute -top-2 -right-2 w-full h-full border border-white/20 rounded-sm pointer-events-none" />
        </>
      )}

      {/* Accent square */}
      <div
        className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 transition-all duration-500 group-hover:w-16 group-hover:h-16 z-10"
        style={{ background: accent }}
      />

      {/* Hover-darken */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-500 z-10" />

      {/* Number stamp */}
      <div className="absolute top-2 left-2 md:top-3 md:left-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-mono z-20 drop-shadow">
        №{String(index + 1).padStart(2, "0")}
      </div>

      {/* Series indicator */}
      {isSeries && (
        <div className="absolute top-2 right-12 md:top-3 md:right-14 text-[10px] uppercase tracking-[0.2em] text-white z-20 bg-black/40 backdrop-blur px-2 py-0.5 rounded-full">
          Folder · {(entry as Series).items.length}
        </div>
      )}

      {/* Print badge */}
      {badge && (
        <div className="absolute bottom-2 right-2 z-20 text-[10px] uppercase tracking-[0.15em] bg-[#ffd60a] text-black px-2 py-1 rounded-full font-medium">
          {badge}
        </div>
      )}

      {/* Caption: always-on for featured, hover-reveal otherwise */}
      {featured ? (
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white z-20 bg-gradient-to-t from-black/75 via-black/30 to-transparent">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#ffd60a] mb-1">
            Hauptwerk · {(entry as { year: string }).year}
          </p>
          <h3 className="font-serif text-3xl md:text-6xl italic leading-none">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-white/85 mt-1.5">
            {(entry as { category: string }).category}
          </p>
        </div>
      ) : (
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-85 mb-0.5">
            {subtitle}
          </p>
          <h3 className="font-serif text-base md:text-xl italic leading-tight">
            {title}
          </h3>
        </div>
      )}
    </>
  );

  if (isSeries) {
    return (
      <Reveal
        as="article"
        delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
        className={cls}
      >
        <button
          type="button"
          onClick={() => onOpen(entry as Series)}
          className="absolute inset-0 w-full h-full text-left"
          aria-label={`Open series ${title}`}
        >
          {inner}
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal
      as="article"
      delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
      className={cls}
    >
      {inner}
    </Reveal>
  );
}
