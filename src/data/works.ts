/**
 * Artwork catalogue — only user-pasted photos. All 58 images live under
 * /public/artwork/works/. The script scripts/extract-attachments.mjs
 * pulls them from the session jsonl (both direct user-prompt blocks
 * and "attachment"-type pastes).
 */

export type Item = {
  src: string;
  title?: string;
  category?: string;
  year?: string;
};

export type Work = Item & {
  kind: "work";
  size: "tall" | "wide" | "square" | "featured";
  title: string;
  category: string;
  year: string;
  badge?: string;
};

export type Series = {
  kind: "series";
  id: string;
  title: string;
  category: string;
  year: string;
  size: "tall" | "wide" | "square" | "featured";
  cover: string;
  badge?: string;
  items: Item[];
};

export type Entry = Work | Series;

export const entries: Entry[] = [
  // ── HAUPTWERK — Hikikomori (spiral with the black square) ─────────────
  {
    kind: "series",
    id: "hikikomori",
    title: "Hikikomori",
    category: "Acrylic on canvas · Hauptwerk",
    year: "2025",
    size: "featured",
    cover: "/artwork/works/work-050.jpg",
    items: [
      { src: "/artwork/works/work-050.jpg", title: "Hikikomori — close-up" },
      { src: "/artwork/works/work-052.jpg", title: "Full canvas, on easel" },
      { src: "/artwork/works/work-051.jpg", title: "Studio · angle" },
      { src: "/artwork/works/work-053.jpg", title: "Detail · brush strokes" },
      { src: "/artwork/works/work-054.jpg", title: "On the street" },
    ],
  },

  // ── LOUVRE + COLLAGE — three statues with collage interventions ──────
  {
    kind: "series",
    id: "louvre",
    title: "Louvre + Collage",
    category: "Photography + Collage · Series",
    year: "2025",
    size: "wide",
    cover: "/artwork/works/work-025.jpg",
    badge: "Available as print",
    items: [
      { src: "/artwork/works/work-025.jpg", title: "Venus, pink" },
      { src: "/artwork/works/work-058.jpg", title: "Cupid, gold" },
      { src: "/artwork/works/work-057.jpg", title: "Venus, pink (variant)" },
    ],
  },

  // ── DRAWINGS & STUDIES — pencil + charcoal sketches ──────────────────
  {
    kind: "series",
    id: "drawings",
    title: "Drawings & Studies",
    category: "Sketchbook · Folder",
    year: "2024 — 2025",
    size: "tall",
    cover: "/artwork/works/work-033.jpg",
    items: [
      { src: "/artwork/works/work-033.jpg", title: "Bearded sculpture" },
      { src: "/artwork/works/work-032.jpg", title: "Head with curls" },
      { src: "/artwork/works/work-035.jpg", title: "Apollo, three-quarter" },
      { src: "/artwork/works/work-034.jpg", title: "Profile, red" },
      { src: "/artwork/works/work-031.jpg", title: "Figure, falling" },
      { src: "/artwork/works/work-030.jpg", title: "Life-drawing pair" },
      { src: "/artwork/works/work-026.jpg", title: "Louvre study, head" },
      { src: "/artwork/works/work-027.jpg", title: "Louvre study, bearded" },
      { src: "/artwork/works/work-017.jpg", title: "Bonnet portrait" },
      { src: "/artwork/works/work-020.jpg", title: "Old man, watercolour" },
    ],
  },

  // ── TRAVEL POSTCARDS — country panels in watercolour ─────────────────
  {
    kind: "series",
    id: "travel",
    title: "Travel postcards",
    category: "Watercolour · Series",
    year: "2024",
    size: "wide",
    cover: "/artwork/works/work-015.jpg",
    items: [
      { src: "/artwork/works/work-015.jpg", title: "Japan" },
      { src: "/artwork/works/work-012.jpg", title: "Brazil · Rio" },
      { src: "/artwork/works/work-014.jpg", title: "New York · Jazz" },
      { src: "/artwork/works/work-016.jpg", title: "Paris" },
      { src: "/artwork/works/work-018.jpg", title: "London" },
      { src: "/artwork/works/work-019.jpg", title: "Russia" },
      { src: "/artwork/works/work-007.jpg", title: "Japan · Fuji panels" },
    ],
  },

  // ── TYPOGRAPHY & PATTERN ──────────────────────────────────────────────
  {
    kind: "series",
    id: "typography",
    title: "Typography & Pattern",
    category: "Mixed media · Series",
    year: "2024",
    size: "wide",
    cover: "/artwork/works/work-010.jpg",
    items: [
      { src: "/artwork/works/work-010.jpg", title: "FACE" },
      { src: "/artwork/works/work-009.jpg", title: "AAAA?" },
      { src: "/artwork/works/work-011.jpg", title: "LOVE" },
      { src: "/artwork/works/work-006.jpg", title: "Pattern, blue" },
      { src: "/artwork/works/work-013.jpg", title: "Blue glasses" },
    ],
  },

  // ── WALNUTS — small object series ─────────────────────────────────────
  {
    kind: "series",
    id: "walnuts",
    title: "Walnuts",
    category: "Object · Series",
    year: "2025",
    size: "square",
    cover: "/artwork/works/work-045.jpg",
    items: [
      { src: "/artwork/works/work-045.jpg", title: "Walnut composition" },
      { src: "/artwork/works/work-047.jpg", title: "Walnut composition · 2" },
      { src: "/artwork/works/work-048.jpg", title: "Blue walnuts" },
      { src: "/artwork/works/work-056.jpg", title: "Walnut · detail" },
    ],
  },

  // ── INDIVIDUAL WORKS ──────────────────────────────────────────────────
  {
    kind: "work",
    src: "/artwork/works/work-001.jpg",
    title: "你能读一下这个吗?",
    category: "Acrylic · Cat series",
    year: "2025",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-002.jpg",
    title: "Cat, from behind",
    category: "Oil pastel",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-003.jpg",
    title: "Blueberries",
    category: "Oil · Still life",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-004.jpg",
    title: "Half a lemon",
    category: "Pastel · Still life",
    year: "2024",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-005.jpg",
    title: "Stamps",
    category: "Mixed media",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-008.jpg",
    title: "Volcano",
    category: "Acrylic",
    year: "2024",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-021.jpg",
    title: "Girl in red",
    category: "Coloured pencil",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-022.jpg",
    title: "Papaya",
    category: "Coloured pencil · Still life",
    year: "2024",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-023.jpg",
    title: "Campari",
    category: "Acrylic · Still life",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-024.jpg",
    title: "Tree of roots",
    category: "Mixed media",
    year: "2024",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-028.jpg",
    title: "Lion door",
    category: "Photography · Vienna",
    year: "2024",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-029.jpg",
    title: "Sea turtle",
    category: "Coloured pencil",
    year: "2024",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-036.jpg",
    title: "Doll by the harbour",
    category: "Photography",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-037.jpg",
    title: "Lemon picking",
    category: "Coloured pencil",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-038.jpg",
    title: "Reclining figure",
    category: "Clay · Mixed media",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-039.jpg",
    title: "Marbled pattern",
    category: "Marbling",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-040.jpg",
    title: "Apple, grapes, pear",
    category: "Oil pastel · Still life",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-041.jpg",
    title: "Red yarn",
    category: "Object",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-042.jpg",
    title: "Dragon fruit",
    category: "Watercolour",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-043.jpg",
    title: "Studio, in oil",
    category: "Oil · Abstract",
    year: "2025",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-044.jpg",
    title: "Fuji, pink",
    category: "Acrylic · Japan",
    year: "2025",
    size: "wide",
  },
  {
    kind: "work",
    src: "/artwork/works/work-046.jpg",
    title: "Pears",
    category: "Oil pastel · Still life",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-049.jpg",
    title: "Citrus studies",
    category: "Watercolour · Still life",
    year: "2024",
    size: "wide",
  },
  {
    kind: "work",
    src: "/artwork/works/work-055.jpg",
    title: "Sunset block",
    category: "Acrylic + 3D paint",
    year: "2025",
    size: "tall",
  },
];

export const totalPieces = entries.reduce((n, e) => {
  return n + (e.kind === "series" ? e.items.length : 1);
}, 0);
