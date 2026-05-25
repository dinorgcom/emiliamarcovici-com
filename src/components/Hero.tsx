import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#0a0a0a] text-[#f4ede0]"
    >
      {/* Full-bleed Hikikomori painting — saturated + animated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* outer: long zoom-out reveal */}
        <div className="absolute inset-0 animate-hero-zoom">
          {/* inner: continuous breathe + hue shift */}
          <div className="absolute inset-0 animate-hero-breathe">
            <Image
              src="/artwork/works/work-052.jpg"
              alt="Hikikomori — Emilia Marcovici"
              fill
              priority
              quality={92}
              sizes="100vw"
              // The canvas has its black square in the lower-left. The
              // headline sits left, so we mirror the painting (scaleX(-1))
              // to move the square to the lower-right where it doesn't
              // sit under text. object-position 75% 70% keeps it visible.
              style={{
                objectPosition: "75% 70%",
                transform: "scaleX(-1)",
              }}
              className="object-cover hero-image"
            />
          </div>
        </div>
        {/* Subtle vignette only — no cream wash. Keeps painting vibrant. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(10,10,10,0.55)_100%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Top meta row */}
        <Reveal className="grid grid-cols-12 gap-4 text-xs uppercase tracking-[0.25em] text-white/85 mb-16 md:mb-24">
          <div className="col-span-6 md:col-span-3">
            <p className="mb-1 opacity-60">Artist</p>
            <p>Emilia Marcovici</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="mb-1 opacity-60">Based in</p>
            <p>
              Vienna · <span className="text-[#ffd60a]">Austria</span>
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
            className="font-serif text-[14vw] md:text-[10vw] leading-[0.88] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            delay={1}
          >
            <span className="block">Colour</span>
            <span className="block">
              <span className="italic text-[#ffd60a]">in motion</span>
              <span className="text-[#ff2e4c]">.</span>
            </span>
          </Reveal>
        </div>

        {/* Subheading + CTA */}
        <Reveal className="grid grid-cols-12 gap-4 mt-12 md:mt-20" delay={2}>
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <p className="text-lg md:text-2xl font-serif leading-snug text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Paintings, portraits and mixed media — created at the
              intersection of pop, classical reference, and everyday
              observation.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 flex md:justify-end items-end gap-4">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white"
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
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/85 border-t border-white/25 pt-6 overflow-hidden">
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
                  <span key={i} className="flex items-center gap-12">
                    {item}
                    <span className="text-[#ffd60a]">●</span>
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
