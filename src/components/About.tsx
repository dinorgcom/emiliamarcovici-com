import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 bg-[#f4ede0] overflow-hidden"
    >
      {/* Quiet Warhol-style decorative geometry */}
      <div className="absolute top-20 right-10 hidden md:block">
        <div className="w-32 h-32 rounded-full bg-[#ff2e4c]/15" />
      </div>
      <div className="absolute bottom-40 left-10 hidden md:block">
        <div className="w-40 h-40 bg-[#0058ff]/10 animate-rotate-slow-rev" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2e4c]" />
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                (01) About
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-9">
            <Reveal as="h2" className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-10">
              I paint the things
              <br />I keep <span className="italic text-[#ff2e4c]">looking at</span>
              <span className="text-[#0058ff]">.</span>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-base md:text-lg leading-relaxed text-black/85">
              <Reveal as="p" delay={1}>
                Emilia Marcovici (b. Vienna) works across painting, drawing
                and small sculpture. Her practice is shaped by years at BRG
                Wien III, Boerhaavegasse — a school known for its visual arts
                and music focus — and an ongoing curiosity for the way colour
                behaves when nobody is watching.
              </Reveal>
              <Reveal as="p" delay={2}>
                Recent works move between intimate portraits, still lifes
                built around fruit and ceramic, and bolder abstract pieces
                that push pattern and pop until the canvas almost vibrates.
                Each work is made and finished in her Vienna studio.
              </Reveal>
            </div>

            {/* Stats row — clean Warhol grid */}
            <Reveal
              className="mt-16 grid grid-cols-3 border-t border-black/15"
              delay={3}
            >
              <div className="relative py-8 pr-4 border-r border-black/15">
                <p className="font-serif text-5xl md:text-7xl text-[#ff2e4c] leading-none">
                  49<span className="text-[#0a0a0a]">+</span>
                </p>
                <p className="text-xs uppercase tracking-[0.25em] mt-4 text-black/70">
                  Works
                </p>
              </div>
              <div className="relative py-8 px-4 border-r border-black/15">
                <p className="font-serif text-5xl md:text-7xl text-[#0058ff] leading-none">
                  6
                </p>
                <p className="text-xs uppercase tracking-[0.25em] mt-4 text-black/70">
                  Series
                </p>
              </div>
              <div className="relative py-8 pl-4">
                <p className="font-serif text-5xl md:text-7xl text-[#ffd60a] leading-none" style={{ WebkitTextStroke: "1.5px #0a0a0a" }}>
                  VIE
                </p>
                <p className="text-xs uppercase tracking-[0.25em] mt-4 text-black/70">
                  Studio
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
