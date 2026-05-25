import Image from "next/image";
import Reveal from "./Reveal";
import { works } from "@/data/works";

function sizeClasses(size: "tall" | "wide" | "square" | "featured") {
  switch (size) {
    case "featured":
      return "md:col-span-3 md:row-span-3 aspect-[16/9] md:aspect-auto";
    case "tall":
      return "md:row-span-2 aspect-[3/4]";
    case "wide":
      return "md:col-span-2 aspect-[16/10]";
    default:
      return "aspect-square";
  }
}

const accents = ["#ff2e4c", "#ffd60a", "#0058ff", "#ff3ea5", "#00c896", "#7b2cbf"];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-[#f4ede0] overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#ffd60a]/15 blur-3xl pointer-events-none animate-drift" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#0058ff]/10 blur-3xl pointer-events-none animate-drift-rev" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0058ff]" />
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                (02) Selected Works · {works.length}
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
              studies. Most pieces are originals — for purchase enquiries,
              email the studio.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[260px]">
          {works.map((work, idx) => (
            <Reveal
              key={work.src}
              delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}
              as="article"
              className={`gallery-item group relative overflow-hidden cursor-pointer rounded-sm bg-black/10 ${sizeClasses(
                work.size
              )}`}
            >
              <Image
                src={work.src}
                alt={`${work.title} — ${work.category}, ${work.year}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div
                className="absolute top-0 right-0 w-12 h-12 transition-all duration-500 group-hover:w-20 group-hover:h-20 z-10"
                style={{ background: accents[idx % accents.length] }}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-500 z-10" />

              <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.25em] text-white font-mono z-20 drop-shadow">
                №{String(idx + 1).padStart(2, "0")}
              </div>

              {work.size === "featured" ? (
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#ffd60a] mb-2">
                    Hauptwerk · {work.year}
                  </p>
                  <h3 className="font-serif text-4xl md:text-7xl italic">
                    {work.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/85 mt-2">
                    {work.category}
                  </p>
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-xs uppercase tracking-[0.25em] opacity-85 mb-1">
                    {work.category} · {work.year}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl italic">
                    {work.title}
                  </h3>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
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
    </section>
  );
}
