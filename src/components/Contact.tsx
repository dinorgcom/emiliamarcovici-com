import Reveal from "./Reveal";

const EMAIL = "marcovici.clara.emilia@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-40 bg-[#f4ede0] overflow-hidden"
    >
      {/* Pop accents */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#ff2e4c]/20 animate-drift pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#0058ff]/20 animate-rotate-slow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-24 h-24 rounded-full bg-[#ffd60a]/30 animate-drift-rev pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3ea5]" />
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                (04) Contact
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-9">
            <Reveal
              as="h2"
              className="font-serif text-5xl md:text-8xl leading-[0.95] tracking-tight mb-12"
            >
              Interested in
              <br />a <span className="italic text-[#ff2e4c]">piece?</span>
            </Reveal>

            <Reveal
              delay={1}
              as="p"
              className="text-lg md:text-xl leading-relaxed text-black/85 max-w-xl mb-10"
            >
              Send an email or DM with the work you have in mind — happy to
              share dimensions, availability and pricing. Commissions
              welcome.
            </Reveal>

            {/* Primary CTA — Email */}
            <Reveal delay={2} className="mb-6">
              <a
                href={`mailto:${EMAIL}?subject=Artwork enquiry`}
                className="group inline-flex items-center gap-4 px-7 py-5 bg-[#0a0a0a] text-[#f4ede0] rounded-full hover:bg-[#ff2e4c] transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[#ffd60a] group-hover:text-[#0a0a0a]">
                  Buy / Commission →
                </span>
                <span className="font-serif text-lg md:text-2xl italic">
                  {EMAIL}
                </span>
              </a>
            </Reveal>

            {/* Secondary CTAs — Instagram */}
            <Reveal delay={3} className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/paintby_emilia/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-3 border border-black/25 rounded-full hover:bg-black hover:text-[#f4ede0] hover:border-black transition-colors text-sm"
              >
                <span>DM · @paintby_emilia</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
              <a
                href="https://www.instagram.com/emilia.marcovici/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-3 border border-black/25 rounded-full hover:bg-black hover:text-[#f4ede0] hover:border-black transition-colors text-sm"
              >
                <span>Personal · @emilia.marcovici</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
            </Reveal>

            {/* Info cards */}
            <Reveal
              delay={3}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-black/15"
            >
              {[
                { label: "Studio", value: "Vienna · AT", color: "#ff2e4c" },
                { label: "Hours", value: "By appointment", color: "#0058ff" },
                { label: "Shipping", value: "Worldwide", color: "#ffd60a" },
                { label: "Originals", value: "One of one", color: "#ff3ea5" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`relative p-5 ${
                    idx !== 3 ? "md:border-r border-black/15" : ""
                  } ${idx < 2 ? "border-b md:border-b-0 border-black/15" : ""}`}
                >
                  <span
                    className="absolute top-5 right-5 w-2 h-2 rounded-full"
                    style={{ background: item.color }}
                  />
                  <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-2">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
