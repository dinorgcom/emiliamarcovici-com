"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import SeriesLightbox from "./SeriesLightbox";
import { entries, totalPieces, type Entry, type Series } from "@/data/works";

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

  // Hauptwerk (the first featured entry) is pulled out and shown above the
  // masonry grid so it gets full-bleed treatment without warping the grid.
  const featured = entries.find(
    (e) => e.size === "featured"
  ) as Entry | undefined;
  // Banner-size entries also break out of the masonry — rendered as
  // full-width side-by-side strips below the masonry grid.
  const banners = entries.filter((e) => e.size === "banner");
  const rest = entries.filter(
    (e) => e !== featured && e.size !== "banner"
  );

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        // Pure black base — gives the noise texture and pop blobs full
        // contrast to read against.
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "linear-gradient(180deg, #0a0a0a 0%, #050505 50%, #000000 100%)",
      }}
    >
      {/* Subtle SVG-noise grain — gives the section a paper-like
          texture without changing the colour. */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.18  0 0 0 0 0.25  0 0 0 0 0.32  0 0 0 0.7 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />

      {/* Pop glow blobs — turned up to read against pure black */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#0058ff] opacity-40 blur-3xl pointer-events-none animate-drift" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#ff3ea5] opacity-35 blur-3xl pointer-events-none animate-drift-rev" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-[#ffd60a] opacity-25 blur-3xl pointer-events-none animate-drift" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-end justify-between mb-16 md:mb-20 flex-wrap gap-6">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0058ff]" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                (02) Selected Works · {totalPieces} pieces
              </p>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
              The <span className="italic">collection</span>
              <span className="text-[#ff2e4c]">.</span>
            </h2>
          </Reveal>
          <Reveal delay={1} className="max-w-sm">
            <p className="text-white/85 leading-relaxed">
              A rotating selection of paintings, mixed-media works and
              studies. Click any series to see all pieces inside.
            </p>
          </Reveal>
        </div>

        {/* Hauptwerk: full-width banner above the masonry */}
        {featured && (
          <Reveal as="article" className="gallery-item group relative overflow-hidden rounded-sm mb-6 md:mb-8 cursor-pointer">
            {featured.kind === "series" ? (
              <button
                type="button"
                onClick={() => onOpenSafe(featured, setOpenSeries)}
                className="block w-full text-left"
                aria-label={`Open series ${featured.title}`}
              >
                <FeaturedInner entry={featured} accent="#ff2e4c" />
              </button>
            ) : (
              <FeaturedInner entry={featured} accent="#ff2e4c" />
            )}
          </Reveal>
        )}

        {/* Masonry — natural aspect ratios via CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
          {rest.map((entry, idx) => (
            <MasonryTile
              key={entry.kind === "series" ? entry.id : entry.src}
              entry={entry}
              accent={accents[idx % accents.length]}
              index={idx}
              onOpen={(s) => setOpenSeries(s)}
            />
          ))}
        </div>

        {/* Banner-size tiles — full-bleed wood planks etc. */}
        {banners.length > 0 && (
          <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">
            {banners.map((entry, idx) => (
              <Reveal
                key={entry.kind === "series" ? entry.id : entry.src}
                as="article"
                className="gallery-item group relative overflow-hidden rounded-sm block"
              >
                <div className="relative w-full aspect-[16/5] bg-[#1a1a1a]">
                  <Image
                    src={entry.kind === "series" ? entry.cover : entry.src}
                    alt={entry.title}
                    fill
                    quality={92}
                    sizes="100vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
                  <div
                    className="absolute top-0 right-0 w-10 h-10 md:w-14 md:h-14"
                    style={{ background: accents[(idx + 4) % accents.length] }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] uppercase tracking-[0.25em] opacity-85 mb-1">
                      {entry.kind === "work"
                        ? `${entry.category} · ${entry.year}`
                        : `${entry.category} · ${entry.year}`}
                    </p>
                    <h3 className="font-serif text-xl md:text-3xl italic">
                      {entry.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-16 text-center">
          <a
            href="https://www.instagram.com/paintby_emilia/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#ffd60a] text-[#0a0a0a] rounded-full hover:bg-[#ff2e4c] hover:text-white transition-colors"
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

function onOpenSafe(e: Entry, fn: (s: Series) => void) {
  if (e.kind === "series") fn(e);
}

/* ─────────────────────────────────────────────────────────────────────── */

function FeaturedInner({ entry, accent }: { entry: Entry; accent: string }) {
  const cover = entry.kind === "series" ? entry.cover : entry.src;
  return (
    <div className="relative w-full">
      {/* aspect 16/7 banner — but actual image keeps native aspect via object-cover crop */}
      <div className="relative aspect-[16/7] w-full overflow-hidden">
        <Image
          src={cover}
          alt={entry.title}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
        />
        <div
          className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16"
          style={{ background: accent }}
        />
        {/* No dark gradient — text relies on drop-shadow for legibility. */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#ffd60a] mb-2">
            Hauptwerk · {entry.year}
          </p>
          <h3 className="font-serif text-4xl md:text-7xl italic leading-none">
            {entry.title}
          </h3>
          <p className="text-xs md:text-sm text-white/95 mt-2">
            {entry.category}
          </p>
        </div>
      </div>
    </div>
  );
}

function MasonryTile({
  entry,
  accent,
  index,
  onOpen,
}: {
  entry: Entry;
  accent: string;
  index: number;
  onOpen: (s: Series) => void;
}) {
  const isSeries = entry.kind === "series";
  const cover = entry.kind === "series" ? entry.cover : entry.src;
  const subtitle =
    entry.kind === "series"
      ? `${entry.items.length + 1} pieces · ${entry.year}`
      : `${entry.category} · ${entry.year}`;
  const badge = entry.badge;

  const inner = (
    <div className="relative">
      {/* Image rendered at its natural aspect ratio — no cropping. */}
      <Image
        src={cover}
        alt={entry.title}
        width={1200}
        height={1600}
        quality={92}
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        style={{ background: "#1a1a1a" }}
      />

      {/* Series stack effect — gives a "stack of cards" hint */}
      {isSeries && (
        <>
          <div className="absolute inset-0 -translate-y-1 translate-x-1 border border-black/15 rounded-sm pointer-events-none" />
          <div className="absolute inset-0 -translate-y-2 translate-x-2 border border-black/10 rounded-sm pointer-events-none" />
        </>
      )}

      <div
        className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 transition-all duration-500 group-hover:w-14 group-hover:h-14 z-10"
        style={{ background: accent }}
      />

      <div className="absolute top-2 left-2 md:top-3 md:left-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-mono z-20 drop-shadow">
        №{String(index + 2).padStart(2, "0")}
      </div>

      {isSeries && (
        <div className="absolute top-2 right-12 md:top-3 md:right-14 text-[10px] uppercase tracking-[0.2em] text-white z-20 bg-black/45 backdrop-blur px-2 py-0.5 rounded-full">
          Folder · {(entry as Series).items.length + 1}
        </div>
      )}

      {badge && (
        <div className="absolute bottom-2 right-2 z-20 text-[10px] uppercase tracking-[0.15em] bg-[#ffd60a] text-black px-2 py-1 rounded-full font-medium">
          {badge}
        </div>
      )}

      {/* Hover overlay with title */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 z-10" />
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-85 mb-0.5">
          {subtitle}
        </p>
        <h3 className="font-serif text-base md:text-xl italic leading-tight">
          {entry.title}
        </h3>
      </div>
    </div>
  );

  const wrapperCls =
    "gallery-item group relative overflow-hidden cursor-pointer rounded-sm mb-4 md:mb-5 break-inside-avoid block";

  if (isSeries) {
    return (
      <Reveal
        as="article"
        delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
        className={wrapperCls}
      >
        <button
          type="button"
          onClick={() => onOpen(entry as Series)}
          className="w-full text-left"
          aria-label={`Open series ${entry.title}`}
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
      className={wrapperCls}
    >
      {inner}
    </Reveal>
  );
}
