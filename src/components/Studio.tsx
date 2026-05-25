import Reveal from "./Reveal";

export default function Studio() {
  const timeline = [
    { year: "2026", label: "Continuing studio practice — Vienna", color: "#ff2e4c" },
    { year: "2025", label: "New work across portrait and still life", color: "#ffd60a" },
    { year: "2024", label: "Typography & pattern series", color: "#0058ff" },
    { year: "—", label: "Trained at BRG Wien III, Boerhaavegasse", color: "#ff3ea5" },
  ];

  return (
    <section
      id="studio"
      className="relative py-24 md:py-40 bg-[#0a0a0a] text-[#f4ede0] overflow-hidden"
    >
      {/* Drifting glows */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full bg-[#ff2e4c] opacity-25 blur-3xl pointer-events-none animate-drift" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-[#0058ff] opacity-25 blur-3xl pointer-events-none animate-drift-rev" />

      {/* Halftone band — Warhol silkscreen reference */}
      <div
        className="absolute top-0 left-0 right-0 h-20 text-[#ffd60a]/40 halftone pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 text-[#ff3ea5]/40 halftone pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd60a]" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                (03) Studio
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-9">
            <Reveal as="h2" className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-12">
              A studio practice,
              <br />
              <span className="italic text-[#ffd60a]">not a brand</span>
              <span className="text-[#ff2e4c]">.</span>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <Reveal delay={1}>
                <p className="text-xs uppercase tracking-[0.3em] text-[#ffd60a] mb-3">
                  Currently
                </p>
                <p className="text-lg leading-relaxed">
                  Working on a new series of small-format still lifes
                  alongside larger pop-inflected canvases. Available for
                  portrait commissions on a limited basis.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-xs uppercase tracking-[0.3em] text-[#ff3ea5] mb-3">
                  Materials
                </p>
                <p className="text-lg leading-relaxed">
                  Oil, acrylic and watercolour on canvas, paper and board.
                  Occasional mixed-media collage and small ceramic objects.
                </p>
              </Reveal>
            </div>

            {/* Timeline */}
            <div className="mt-20 border-t border-white/15 pt-4">
              {timeline.map((item, idx) => (
                <Reveal
                  key={item.year + item.label}
                  delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}
                  className="grid grid-cols-12 gap-4 items-center border-b border-white/10 py-6 group"
                >
                  <div className="col-span-3 md:col-span-2 flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-full transition-transform duration-500 group-hover:scale-150"
                      style={{ background: item.color }}
                    />
                    <span
                      className="font-serif text-2xl"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="col-span-9 md:col-span-10 text-white/85 transition-transform duration-500 group-hover:translate-x-2">
                    {item.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
