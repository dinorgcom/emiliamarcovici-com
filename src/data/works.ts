/**
 * Artwork catalogue — everything organised into clickable folders.
 *
 * Hero/Hauptwerk uses /artwork/hikikomori.jpg (kept at 1440×1920).
 * All other images live under /artwork/works/ and are sourced from
 * scripts/extract-attachments.mjs (user pastes only).
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
  // ── 01 · HAUPTWERK — Hikikomori ───────────────────────────────────────
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
      { src: "/artwork/works/work-050.jpg", title: "Close-up · brush strokes" },
      { src: "/artwork/works/work-052.jpg", title: "Full canvas, on easel" },
      { src: "/artwork/works/work-051.jpg", title: "Studio · angle" },
      { src: "/artwork/works/work-053.jpg", title: "Detail" },
      { src: "/artwork/works/work-054.jpg", title: "On the street" },
    ],
  },

  // ── 02 · LOUVRE + COLLAGE — statues with collage interventions ────────
  {
    kind: "series",
    id: "louvre",
    title: "Louvre + Collage",
    category: "Photography + Collage",
    year: "2025",
    size: "wide",
    cover: "/artwork/works/work-025.jpg",
    badge: "Available as print",
    items: [
      { src: "/artwork/works/work-025.jpg", title: "Venus, pink" },
      { src: "/artwork/works/work-058.jpg", title: "Cupid, gold" },
      { src: "/artwork/works/work-057.jpg", title: "Venus, pink · variant" },
    ],
  },

  // ── 03 · DRAWINGS & STUDIES — life drawing + Louvre studies ───────────
  {
    kind: "series",
    id: "drawings",
    title: "Drawings & Studies",
    category: "Pencil · Charcoal",
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
      { src: "/artwork/works/work-026.jpg", title: "Louvre study · head" },
      { src: "/artwork/works/work-027.jpg", title: "Louvre study · bearded" },
      { src: "/artwork/works/work-017.jpg", title: "Bonnet portrait" },
      { src: "/artwork/works/work-020.jpg", title: "Old man, watercolour" },
    ],
  },

  // ── 04 · TRAVEL POSTCARDS — country panels ────────────────────────────
  {
    kind: "series",
    id: "travel",
    title: "Travel postcards",
    category: "Watercolour",
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

  // ── 05 · TYPOGRAPHY & PATTERN ─────────────────────────────────────────
  {
    kind: "series",
    id: "typography",
    title: "Typography & Pattern",
    category: "Mixed media",
    year: "2024",
    size: "square",
    cover: "/artwork/works/work-010.jpg",
    items: [
      { src: "/artwork/works/work-010.jpg", title: "FACE" },
      { src: "/artwork/works/work-009.jpg", title: "AAAA?" },
      { src: "/artwork/works/work-011.jpg", title: "LOVE" },
      { src: "/artwork/works/work-006.jpg", title: "Pattern, blue" },
      { src: "/artwork/works/work-013.jpg", title: "Blue glasses" },
    ],
  },

  // ── 06 · STILL LIFE — fruit + objects ─────────────────────────────────
  {
    kind: "series",
    id: "still-life",
    title: "Still Life",
    category: "Oil pastel · Watercolour",
    year: "2024 — 2025",
    size: "tall",
    cover: "/artwork/works/work-040.jpg",
    items: [
      { src: "/artwork/works/work-040.jpg", title: "Apple, grapes, pear" },
      { src: "/artwork/works/work-046.jpg", title: "Pears" },
      { src: "/artwork/works/work-003.jpg", title: "Blueberries" },
      { src: "/artwork/works/work-004.jpg", title: "Half a lemon" },
      { src: "/artwork/works/work-022.jpg", title: "Papaya" },
      { src: "/artwork/works/work-042.jpg", title: "Dragon fruit" },
      { src: "/artwork/works/work-049.jpg", title: "Citrus studies" },
      { src: "/artwork/works/work-023.jpg", title: "Campari" },
    ],
  },

  // ── 07 · CATS ─────────────────────────────────────────────────────────
  {
    kind: "series",
    id: "cats",
    title: "Cats",
    category: "Acrylic · Pastel",
    year: "2024 — 2025",
    size: "square",
    cover: "/artwork/works/work-001.jpg",
    items: [
      { src: "/artwork/works/work-001.jpg", title: "你能读一下这个吗?" },
      { src: "/artwork/works/work-002.jpg", title: "Cat, from behind" },
    ],
  },

  // ── 08 · WALNUTS — object studies ─────────────────────────────────────
  {
    kind: "series",
    id: "walnuts",
    title: "Walnuts",
    category: "Object",
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

  // ── 09 · OBJECTS & MIXED MEDIA — sculptural / photographic works ──────
  {
    kind: "series",
    id: "objects",
    title: "Objects & Mixed Media",
    category: "Clay · Photography · Mixed",
    year: "2024 — 2025",
    size: "square",
    cover: "/artwork/works/work-038.jpg",
    items: [
      { src: "/artwork/works/work-038.jpg", title: "Reclining figure" },
      { src: "/artwork/works/work-041.jpg", title: "Red yarn" },
      { src: "/artwork/works/work-039.jpg", title: "Marbled pattern" },
      { src: "/artwork/works/work-036.jpg", title: "Doll by the harbour" },
      { src: "/artwork/works/work-028.jpg", title: "Lion door · Vienna" },
    ],
  },

  // ── 10 · PAINTINGS — small canvases & abstract ────────────────────────
  {
    kind: "series",
    id: "paintings",
    title: "Paintings",
    category: "Acrylic · Oil",
    year: "2024 — 2025",
    size: "wide",
    cover: "/artwork/works/work-044.jpg",
    items: [
      { src: "/artwork/works/work-044.jpg", title: "Fuji, pink" },
      { src: "/artwork/works/work-008.jpg", title: "Volcano" },
      { src: "/artwork/works/work-043.jpg", title: "Studio, in oil" },
      { src: "/artwork/works/work-024.jpg", title: "Tree of roots" },
      { src: "/artwork/works/work-055.jpg", title: "Sunset block · 3D" },
    ],
  },

  // ── 11 · SKETCHBOOK — coloured pencil + comic ─────────────────────────
  {
    kind: "series",
    id: "sketchbook",
    title: "Sketchbook",
    category: "Coloured pencil",
    year: "2024",
    size: "square",
    cover: "/artwork/works/work-021.jpg",
    items: [
      { src: "/artwork/works/work-021.jpg", title: "Girl in red" },
      { src: "/artwork/works/work-037.jpg", title: "Lemon picking" },
      { src: "/artwork/works/work-029.jpg", title: "Sea turtle" },
      { src: "/artwork/works/work-005.jpg", title: "Stamps" },
    ],
  },
];

export const totalPieces = entries.reduce((n, e) => {
  return n + (e.kind === "series" ? e.items.length : 1);
}, 0);
