import Reveal from "./Reveal";

const EMAIL = "marcovici.clara.emilia@gmail.com";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-[#f4ede0] py-16 overflow-hidden">
      {/* Drifting glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[260px] bg-[#ff2e4c] opacity-20 blur-3xl pointer-events-none animate-drift" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[200px] bg-[#0058ff] opacity-20 blur-3xl pointer-events-none animate-drift-rev" />

      {/* Halftone band */}
      <div className="absolute top-0 left-0 right-0 h-12 text-[#ffd60a]/40 halftone pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tight">
              Emilia
              <br />
              <span className="italic text-[#ffd60a]">Marcovici</span>
              <span className="text-[#ff2e4c]">.</span>
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-block text-sm md:text-base text-white/80 hover:text-[#ffd60a] transition-colors break-all"
            >
              {EMAIL}
            </a>
            <p className="mt-4 text-sm text-white/50">
              © {new Date().getFullYear()} — Studio, Vienna.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10 text-sm">
            <a
              href="https://www.instagram.com/paintby_emilia/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-[#ffd60a] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff2e4c] group-hover:bg-[#ffd60a] transition-colors" />
              @paintby_emilia
            </a>
            <a
              href="https://www.instagram.com/emilia.marcovici/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-[#ffd60a] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#0058ff] group-hover:bg-[#ffd60a] transition-colors" />
              @emilia.marcovici
            </a>
            <a
              href="#top"
              className="group flex items-center gap-2 hover:text-[#ffd60a] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3ea5] group-hover:bg-[#ffd60a] transition-colors" />
              Back to top ↑
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
