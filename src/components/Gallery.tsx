import Reveal from "./Reveal";

type Work = {
  id: string;
  title: string;
  category: string;
  year: string;
  palette: string;
  accent: string;
  size: "tall" | "wide" | "square";
};

const works: Work[] = [
  {
    id: "01",
    title: "Iris, dilated",
    category: "Portrait",
    year: "2025",
    palette:
      "linear-gradient(135deg, #d4925a 0%, #8b4513 40%, #2b1810 100%)",
    accent: "#ffd60a",
    size: "tall",
  },
  {
    id: "02",
    title: "Coffee morning",
    category: "Still Life",
    year: "2025",
    palette:
      "linear-gradient(135deg, #f5e6d3 0%, #d4af37 30%, #ff2e4c 70%, #2b4865 100%)",
    accent: "#ff3ea5",
    size: "wide",
  },
  {
    id: "03",
    title: "Faces, repeating",
    category: "Pattern",
    year: "2024",
    palette:
      "radial-gradient(circle at 30% 30%, #c2956b, transparent 30%), radial-gradient(circle at 70% 70%, #8b5a3c, transparent 30%), #f4e4c1",
    accent: "#0058ff",
    size: "square",
  },
  {
    id: "04",
    title: "Mouth open",
    category: "Portrait",
    year: "2024",
    palette:
      "linear-gradient(180deg, #8b4513 0%, #d4925a 40%, #f5d4a0 70%, #c97c5d 100%)",
    accent: "#00c896",
    size: "tall",
  },
  {
    id: "05",
    title: "Pink netting",
    category: "Mixed Media",
    year: "2025",
    palette: "linear-gradient(135deg, #f5e6d3 0%, #ff3ea5 50%, #d4d4d4 100%)",
    accent: "#0058ff",
    size: "square",
  },
  {
    id: "06",
    title: "Fuji at dusk",
    category: "Pop",
    year: "2024",
    palette:
      "linear-gradient(180deg, #ff3ea5 0%, #ffffff 50%, #ff2e4c 60%, #ffd60a 100%)",
    accent: "#0a0a0a",
    size: "square",
  },
  {
    id: "07",
    title: "Citrus studies",
    category: "Watercolour",
    year: "2024",
    palette:
      "linear-gradient(135deg, #fffce8 0%, #ffd60a 35%, #00c896 70%, #0058ff 100%)",
    accent: "#ff2e4c",
    size: "wide",
  },
  {
    id: "08",
    title: "Three fruits",
    category: "Still Life",
    year: "2025",
    palette: "linear-gradient(135deg, #2a2a2a 0%, #ff2e4c 50%, #ffd60a 100%)",
    accent: "#ff3ea5",
    size: "tall",
  },
  {
    id: "09",
    title: "F · L · C · E",
    category: "Typography",
    year: "2024",
    palette:
      "linear-gradient(90deg, #00c896 0%, #ffd60a 25%, #ffffff 50%, #ff2e4c 75%, #0a0a0a 100%)",
    accent: "#7b2cbf",
    size: "wide",
  },
];

function sizeClasses(size: Work["size"]) {
  switch (size) {
    case "tall":
      return "md:row-span-2 aspect-[3/4]";
    case "wide":
      return "md:col-span-2 aspect-[16/10]";
    default:
      return "aspect-square";
  }
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-[#f4ede0] overflow-hidden"
    >
      {/* Quiet decorative geometry */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#ffd60a]/15 blur-3xl pointer-events-none animate-drift" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#0058ff]/10 blur-3xl pointer-events-none animate-drift-rev" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0058ff]" />
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                (02) Selected Works
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
              slide into the studio inbox below.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric, clean gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[260px]">
          {works.map((work, idx) => (
            <Reveal
              key={work.id}
              delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}
              as="article"
              className={`gallery-item group relative overflow-hidden cursor-pointer rounded-sm ${sizeClasses(
                work.size
              )}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ background: work.palette }}
              />

              {/* Bold accent square — Warhol pop block */}
              <div
                className="absolute top-0 right-0 w-12 h-12 transition-all duration-500 group-hover:w-20 group-hover:h-20"
                style={{ background: work.accent }}
              />

              {/* Black overlay for legibility on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500" />

              {/* Number stamp */}
              <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.25em] text-white font-mono">
                №{work.id}
              </div>

              {/* Info revealed on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-[0.25em] opacity-80 mb-1">
                  {work.category} · {work.year}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl italic">
                  {work.title}
                </h3>
              </div>
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
