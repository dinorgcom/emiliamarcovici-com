import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Drifting pop-color blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#ff2e4c] opacity-25 blur-3xl pointer-events-none animate-drift" />
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#0058ff] opacity-20 blur-3xl pointer-events-none animate-drift-rev" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#ffd60a] opacity-30 blur-3xl pointer-events-none animate-drift" />

      {/* Geometric Warhol-style markers (no scribbles) */}
      <div className="absolute top-32 right-24 hidden md:block">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-[#ff2e4c] animate-rotate-slow" />
          <div className="absolute inset-3 rounded-full bg-[#ffd60a]" />
          <div className="absolute inset-7 rounded-full bg-[#0058ff]" />
          <div className="absolute inset-12 rounded-full bg-[#f4ede0]" />
        </div>
      </div>
      <div className="absolute bottom-20 left-10 hidden md:block">
        <div className="w-20 h-20 bg-[#ff3ea5] animate-rotate-slow-rev" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Top meta row */}
        <Reveal className="grid grid-cols-12 gap-4 text-xs uppercase tracking-[0.25em] text-black/70 mb-16 md:mb-24">
          <div className="col-span-6 md:col-span-3">
            <p className="mb-1 opacity-50">Artist</p>
            <p>Emilia Marcovici</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="mb-1 opacity-50">Based in</p>
            <p>
              Vienna · <span className="text-[#ff2e4c]">Austria</span>
            </p>
          </div>
          <div className="hidden md:block md:col-span-3">
            <p className="mb-1 opacity-50">Practice</p>
            <p>Painting · Mixed Media</p>
          </div>
          <div className="hidden md:block md:col-span-3 text-right">
            <p className="mb-1 opacity-50">Year</p>
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
            <p className="text-lg md:text-2xl font-serif leading-snug text-black/85">
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

        {/* Ticker — replaces childish marquee, but in same horizontal motion spirit */}
        <Reveal className="mt-20 md:mt-32 relative" delay={3}>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-black/50 border-t border-black/15 pt-6 overflow-hidden">
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
                  <span key={i} className="text-black/60 flex items-center gap-12">
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
