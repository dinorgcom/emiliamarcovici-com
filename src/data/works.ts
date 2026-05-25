/**
 * Artwork catalogue.
 *
 * Two entry shapes:
 *   - Work     → a single piece
 *   - Series   → a clickable folder of multiple pieces (cover + items)
 *
 * To add pieces, drop JPGs into /public/artwork/works/ (see
 * scripts/extract-attachments.mjs) and add an entry below.
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
  size: "tall" | "wide" | "square";
  cover: string;
  items: Item[];
};

export type Entry = Work | Series;

export const entries: Entry[] = [
  // ── HAUPTWERK — Hikikomori series ─────────────────────────────────────
  // Cover is the canvas with the black square. Click to open all variants.
  {
    kind: "series",
    id: "hikikomori",
    title: "Hikikomori",
    category: "Acrylic on canvas · Hauptwerk",
    year: "2025",
    size: "featured",
    cover: "/artwork/hikikomori.jpg",
    items: [
      { src: "/artwork/hikikomori.jpg", title: "Hikikomori — canvas" },
      // Variants (close-ups, on the easel, on the street) — drop matching
      // JPGs into /public/artwork/hikikomori-variants/ and add entries here.
      // { src: "/artwork/hikikomori-variants/full.jpg", title: "Full canvas" },
      // { src: "/artwork/hikikomori-variants/detail-1.jpg", title: "Detail" },
      // { src: "/artwork/hikikomori-variants/detail-2.jpg", title: "Detail (2)" },
      // { src: "/artwork/hikikomori-variants/on-easel.jpg", title: "In studio" },
      // { src: "/artwork/hikikomori-variants/street.jpg", title: "On the way" },
    ],
  },

  // ── LOUVRE + COLLAGE — neue Serie, available as print ─────────────────
  {
    kind: "work",
    src: "/artwork/works/work-025.jpg",
    title: "Venus, pink",
    category: "Louvre · Collage",
    year: "2025",
    size: "wide",
    badge: "Available as print",
  },
  {
    kind: "work",
    src: "/artwork/works/work-026.jpg",
    title: "Bather, mosaic",
    category: "Louvre · Collage",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-027.jpg",
    title: "Cupid, gold",
    category: "Louvre · Collage",
    year: "2025",
    size: "square",
  },

  // ── PAINTINGS & MIXED MEDIA ───────────────────────────────────────────
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

  // ── TYPOGRAPHY & PATTERN — series (work-006, work-009, work-010) ──────
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
      { src: "/artwork/works/work-006.jpg", title: "Pattern, blue" },
    ],
  },

  // ── JAPAN SERIES ──────────────────────────────────────────────────────
  {
    kind: "work",
    src: "/artwork/works/work-007.jpg",
    title: "Japan, in panels",
    category: "Watercolour",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-024.jpg",
    title: "Fuji, pink",
    category: "Acrylic · Japan",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-008.jpg",
    title: "Volcano",
    category: "Acrylic",
    year: "2024",
    size: "square",
  },

  // ── PORTRAITS & DRAWINGS — click the red portrait to open the folder ──
  {
    kind: "series",
    id: "portraits",
    title: "Drawings & Studies",
    category: "Sketchbook · Folder",
    year: "2024 — 2025",
    size: "wide",
    cover: "/artwork/works/work-014.jpg",
    items: [
      { src: "/artwork/works/work-014.jpg", title: "Profile, red" },
      { src: "/artwork/works/work-015.jpg", title: "Apollo, three-quarter" },
      { src: "/artwork/works/work-012.jpg", title: "Head with curls" },
      { src: "/artwork/works/work-013.jpg", title: "Bearded sculpture" },
      { src: "/artwork/works/work-011.jpg", title: "Figure, falling" },
    ],
  },

  // ── OBJECTS / MIXED MEDIA ─────────────────────────────────────────────
  {
    kind: "work",
    src: "/artwork/works/work-016.jpg",
    title: "Doll by the harbour",
    category: "Photography",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-017.jpg",
    title: "Lemon picking",
    category: "Coloured pencil",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-018.jpg",
    title: "Reclining figure",
    category: "Clay · Mixed media",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-019.jpg",
    title: "Marbled pattern",
    category: "Marbling",
    year: "2025",
    size: "square",
  },

  // ── STILL LIFE ────────────────────────────────────────────────────────
  {
    kind: "work",
    src: "/artwork/works/work-020.jpg",
    title: "Apple, grapes, pear",
    category: "Oil pastel · Still life",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-021.jpg",
    title: "Red yarn",
    category: "Object",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-022.jpg",
    title: "Pears",
    category: "Oil pastel · Still life",
    year: "2025",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-023.jpg",
    title: "Studio, in oil",
    category: "Oil · Abstract",
    year: "2025",
    size: "tall",
  },
];

// Helper for the gallery — flattens series cover into a tile too.
export const totalPieces = entries.reduce((n, e) => {
  return n + (e.kind === "series" ? e.items.length : 1);
}, 0);
