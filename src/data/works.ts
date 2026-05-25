/**
 * The artwork catalogue. Edit this file to add, rename, or reorder works.
 *
 * - `src`: path under /public
 * - `featured: true` makes the tile span across the gallery as a hero piece
 * - `size`: regular grid footprint ("tall" | "wide" | "square")
 *
 * To add new pieces:
 *   1. Drop a JPG into /public/artwork/works/  (or run scripts/extract-attachments.mjs)
 *   2. Add an entry below.
 */

export type Work = {
  src: string;
  title: string;
  category: string;
  year: string;
  size: "tall" | "wide" | "square" | "featured";
};

export const works: Work[] = [
  // ── HAUPTWERK ──────────────────────────────────────────────────────────
  {
    src: "/artwork/mikromori.jpg",
    title: "Mikromori",
    category: "Acrylic on canvas · Hauptwerk",
    year: "2025",
    size: "featured",
  },

  // ── PORTRAIT & STILL LIFE ─────────────────────────────────────────────
  {
    src: "/artwork/works/work-001.jpg",
    title: "你能读一下这个吗?",
    category: "Acrylic · Cat series",
    year: "2025",
    size: "tall",
  },
  {
    src: "/artwork/works/work-002.jpg",
    title: "Cat, from behind",
    category: "Oil pastel",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-003.jpg",
    title: "Blueberries",
    category: "Oil · Still life",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-004.jpg",
    title: "Half a lemon",
    category: "Pastel · Still life",
    year: "2024",
    size: "square",
  },

  // ── COMIC / SERIES ────────────────────────────────────────────────────
  {
    src: "/artwork/works/work-005.jpg",
    title: "Stamps · series",
    category: "Mixed media",
    year: "2024",
    size: "wide",
  },
  {
    src: "/artwork/works/work-006.jpg",
    title: "Pattern, blue",
    category: "Print",
    year: "2024",
    size: "tall",
  },
  {
    src: "/artwork/works/work-007.jpg",
    title: "Japan, in panels",
    category: "Comic / Watercolour",
    year: "2024",
    size: "tall",
  },
  {
    src: "/artwork/works/work-008.jpg",
    title: "Volcano",
    category: "Acrylic",
    year: "2024",
    size: "square",
  },
  {
    src: "/artwork/works/work-009.jpg",
    title: "AAAA?",
    category: "Typography · Collage",
    year: "2024",
    size: "square",
  },
  {
    src: "/artwork/works/work-010.jpg",
    title: "FACE",
    category: "Typography · Collage",
    year: "2024",
    size: "tall",
  },

  // ── LIFE DRAWING / SCULPTURE STUDIES ──────────────────────────────────
  {
    src: "/artwork/works/work-011.jpg",
    title: "Figure, falling",
    category: "Charcoal · Life drawing",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-012.jpg",
    title: "Head with curls",
    category: "Pencil · Louvre study",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-013.jpg",
    title: "Bearded sculpture",
    category: "Pencil · Louvre study",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-014.jpg",
    title: "Profile, in red",
    category: "Red pencil",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-015.jpg",
    title: "Apollo, three-quarter",
    category: "Red pencil",
    year: "2025",
    size: "square",
  },

  // ── OBJECTS / MIXED MEDIA ─────────────────────────────────────────────
  {
    src: "/artwork/works/work-016.jpg",
    title: "Doll by the harbour",
    category: "Photography",
    year: "2024",
    size: "tall",
  },
  {
    src: "/artwork/works/work-017.jpg",
    title: "Lemon picking",
    category: "Coloured pencil",
    year: "2024",
    size: "tall",
  },
  {
    src: "/artwork/works/work-018.jpg",
    title: "Reclining figure",
    category: "Clay · Mixed media",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-019.jpg",
    title: "Marbled pattern",
    category: "Marbling",
    year: "2025",
    size: "square",
  },

  // ── STILL LIFE 2025 ───────────────────────────────────────────────────
  {
    src: "/artwork/works/work-020.jpg",
    title: "Apple, grapes, pear",
    category: "Oil pastel · Still life",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-021.jpg",
    title: "Red yarn",
    category: "Mixed media · Object",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-022.jpg",
    title: "Pears",
    category: "Oil pastel · Still life",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-023.jpg",
    title: "Studio, in oil",
    category: "Oil · Abstract",
    year: "2025",
    size: "tall",
  },
  {
    src: "/artwork/works/work-024.jpg",
    title: "Fuji, pink",
    category: "Acrylic · Japan series",
    year: "2025",
    size: "wide",
  },
];
