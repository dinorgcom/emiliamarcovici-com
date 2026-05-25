import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#f4ede0]"
    >
      {/* Mikromori painting backdrop — slow zoom-out + drift */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src="/artwork/mikromori.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Cream wash — keeps text legible, leaves colour bleeding through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4ede0]/95 via-[#f4ede0]/70 to-[#f4ede0]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4ede0]/40 via-transparent to-[#f4ede0]/60" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Top meta row */}
        <Reveal className="grid grid-cols-12 gap-4 text-xs uppercase tracking-[0.25em] text-black/75 mb-16 md:mb-24">
          <div className="col-span-6 md:col-span-3">
            <p className="mb-1 opacity-60">Artist</p>
            <p>Emilia Marcovici</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="mb-1 opacity-60">Based in</p>
            <p>
              Vienna · <span className="text-[#ff2e4c]">Austria</span>
            </p>
          </div>
          <div className="hidden md:block md:col-span-3">
            <p className="mb-1 opacity-60">Practice</p>
            <p>Painting · Mixed Media</p>
          </div>
          <div className="hidden md:block md:col-span-3 text-right">
            <p className="mb-1 opacity-60">Year</p>
            <p>2026 — Ongoing</p>
          </div>
        </Reveal>

        {/* Editorial headline */}
        <div className="relative">
          <Reveal
            as="h2"
            className="font-serif text-[14vw] md:text-[10vw] leading-[0.88] tracking-tight"
            delay={1}
          >
            <span className="block">Colour</span>
            <span className="block">
              <span className="italic text-[#ff2e4c]">in motion</span>
              <span className="text-[#0058ff]">.</span>
            </span>
          </Reveal>
        </div>

        {/* Subheading + CTA */}
        <Reveal
          className="grid grid-cols-12 gap-4 mt-12 md:mt-20"
          delay={2}
        >
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <p className="text-lg md:text-2xl font-serif leading-snug text-black/90 bg-[#f4ede0]/60 backdrop-blur-sm px-3 -mx-3 py-1 rounded inline-block">
              Paintings, portraits and mixed media — created at the
              intersection of pop, classical reference, and everyday
              observation.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 flex md:justify-end items-end gap-4">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em]"
            >
              <span className="border-b border-current pb-1">View works</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </Reveal>

        {/* Ticker */}
        <Reveal className="mt-20 md:mt-32 relative" delay={3}>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-black/60 border-t border-black/20 pt-6 overflow-hidden bg-[#f4ede0]/70 backdrop-blur-sm">
            <span className="shrink-0">Index of work</span>
            <div className="flex-1 overflow-hidden">
              <div className="flex gap-12 whitespace-nowrap animate-ticker">
                {[
                  "Portrait · 2025",
                  "Still Life · 2025",
                  "Pop · 2024",
                  "Watercolour · 2024",
                  "Pattern · 2024",
                  "Mixed Media · 2025",
                  "Typography · 2024",
                  "Portrait · 2025",
                  "Still Life · 2025",
                  "Pop · 2024",
                  "Watercolour · 2024",
                  "Pattern · 2024",
                  "Mixed Media · 2025",
                  "Typography · 2024",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-12"
                  >
                    {item}
                    <span className="text-[#ff2e4c]">●</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
