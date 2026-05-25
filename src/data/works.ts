/**
 * Artwork catalogue.
 *
 * Entry shapes:
 *   - Work    → single piece
 *   - Series  → clickable folder (cover + items)
 *
 * The only artwork sourced outside of user-pasted photos is /artwork/
 * hikikomori.jpg — pulled directly from the Instagram CDN because the
 * user-pasted version of the spiral painting was lost mid-session. All
 * other images live under /artwork/works/ and come from user pastes.
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
  // ── HAUPTWERK — Hikikomori (the spiral with the black square) ─────────
  {
    kind: "series",
    id: "hikikomori",
    title: "Hikikomori",
    category: "Acrylic on canvas · Hauptwerk",
    year: "2025",
    size: "featured",
    cover: "/artwork/hikikomori.jpg",
    items: [
      { src: "/artwork/hikikomori.jpg", title: "Hikikomori — full canvas" },
      // Variants (close-ups, on the easel, on the street) — drop matching
      // JPGs into /public/artwork/hikikomori-variants/ and add entries here.
    ],
  },

  // ── LOUVRE + COLLAGE — three statues in one folder ────────────────────
  // Cover is Venus pink ("hauptfoto"), with the print badge.
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
      { src: "/artwork/works/work-026.jpg", title: "Bather, mosaic" },
      { src: "/artwork/works/work-027.jpg", title: "Cupid, gold" },
    ],
  },

  // ── PORTRAITS & DRAWINGS — bearded sculpture as cover ─────────────────
  {
    kind: "series",
    id: "drawings",
    title: "Drawings & Studies",
    category: "Sketchbook · Folder",
    year: "2024 — 2025",
    size: "tall",
    cover: "/artwork/works/work-013.jpg",
    items: [
      { src: "/artwork/works/work-013.jpg", title: "Bearded sculpture" },
      { src: "/artwork/works/work-012.jpg", title: "Head with curls" },
      { src: "/artwork/works/work-015.jpg", title: "Apollo, three-quarter" },
      { src: "/artwork/works/work-014.jpg", title: "Profile, red" },
      { src: "/artwork/works/work-011.jpg", title: "Figure, falling" },
    ],
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
    size: "wide",
  },
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
    src: "/artwork/works/work-008.jpg",
    title: "Volcano",
    category: "Acrylic",
    year: "2024",
    size: "square",
  },
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
  {
    kind: "work",
    src: "/artwork/works/work-024.jpg",
    title: "Fuji, pink",
    category: "Acrylic · Japan",
    year: "2025",
    size: "wide",
  },
];

export const totalPieces = entries.reduce((n, e) => {
  return n + (e.kind === "series" ? e.items.length : 1);
}, 0);
