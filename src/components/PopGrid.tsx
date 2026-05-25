import Reveal from "./Reveal";

const tiles = [
  { bg: "#ff2e4c", fg: "#ffd60a", title: "Portrait" },
  { bg: "#ffd60a", fg: "#0058ff", title: "Still Life" },
  { bg: "#0058ff", fg: "#ff3ea5", title: "Mixed Media" },
  { bg: "#ff3ea5", fg: "#0a0a0a", title: "Abstract" },
];

export default function PopGrid() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {tiles.map((t, idx) => (
          <Reveal
            key={t.title}
            delay={(idx + 1) as 1 | 2 | 3 | 4}
            className="relative aspect-square flex items-end p-6 md:p-8 group cursor-pointer"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ background: t.bg }}
            />
            {/* halftone dot overlay */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply"
              style={{
                color: t.fg,
                backgroundImage:
                  "radial-gradient(circle, currentColor 1.5px, transparent 2px)",
                backgroundSize: "14px 14px",
              }}
            />
            {/* big silkscreen-style mark */}
            <div
              className="absolute top-6 right-6 w-14 h-14 rounded-full opacity-90 transition-transform duration-700 group-hover:rotate-90"
              style={{ background: t.fg }}
            />
            <div
              className="absolute top-10 right-10 w-6 h-6 rounded-full"
              style={{ background: t.bg }}
            />
            <h3
              className="relative font-serif italic text-3xl md:text-5xl lg:text-6xl tracking-tight"
              style={{ color: t.fg }}
            >
              {t.title}
            </h3>
            <span
              className="absolute top-6 left-6 text-xs font-mono tracking-[0.2em]"
              style={{ color: t.fg }}
            >
              0{idx + 1} / 04
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
