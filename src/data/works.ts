/**
 * Artwork catalogue. No duplicates inside a folder. Hauptwerk +
 * themed folders + standalone tiles for the looser-themed pieces.
 *
 * All images live under /artwork/works/ (user pastes, upscaled to
 * ~1200×1600 by scripts/upscale-works.mjs), except the Hauptwerk
 * cover /artwork/hikikomori.jpg which is the 1440×1920 IG-CDN pull.
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
  // ── HAUPTWERK — Hikikomori ────────────────────────────────────────────
  // Cover = the high-res IG canvas. The folder shows context shots only
  // (close-up, on the easel, detail, on the street). No duplicate of
  // the cover image inside.
  {
    kind: "series",
    id: "hikikomori",
    title: "Hikikomori",
    category: "Acrylic on canvas · Hauptwerk",
    year: "2025",
    size: "featured",
    cover: "/artwork/hikikomori.jpg",
    items: [
      { src: "/artwork/works/work-052.jpg", title: "Full canvas, on easel" },
      { src: "/artwork/works/work-050.jpg", title: "Close-up · brush strokes" },
      { src: "/artwork/works/work-051.jpg", title: "Studio · angle" },
      { src: "/artwork/works/work-053.jpg", title: "Detail" },
      { src: "/artwork/works/work-054.jpg", title: "On the street" },
    ],
  },

  // ── LOUVRE + COLLAGE ──────────────────────────────────────────────────
  // Cover = Venus pink. No duplicate Venus inside.
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
      { src: "/artwork/works/work-058.jpg", title: "Cupid, gold" },
      { src: "/artwork/works/work-057.jpg", title: "Venus, alt angle" },
    ],
  },

  // ── DRAWINGS & STUDIES ────────────────────────────────────────────────
  // Cover = bearded sculpture (work-033). Cover is intentionally omitted
  // from the inside list to avoid duplication.
  {
    kind: "series",
    id: "drawings",
    title: "Drawings & Studies",
    category: "Pencil · Charcoal",
    year: "2024 — 2025",
    size: "tall",
    cover: "/artwork/works/work-033.jpg",
    items: [
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

  // ── TRAVEL POSTCARDS — landscape/landmark panels only ────────────────
  // The three panels with prominent face content (NY Lady-Liberty + pop
  // woman; London Paddington; Russia portraits) were removed per request.
  {
    kind: "series",
    id: "travel",
    title: "Travel postcards",
    category: "Watercolour",
    year: "2024",
    size: "wide",
    cover: "/artwork/works/work-015.jpg",
    items: [
      { src: "/artwork/works/work-012.jpg", title: "Brazil · Rio" },
      { src: "/artwork/works/work-016.jpg", title: "Paris" },
      { src: "/artwork/works/work-007.jpg", title: "Japan · Fuji panels" },
    ],
  },

  // ── TYPOGRAPHY & PATTERN ──────────────────────────────────────────────
  // Cover = FACE. Inside list excludes the cover.
  {
    kind: "series",
    id: "typography",
    title: "Typography & Pattern",
    category: "Mixed media",
    year: "2024",
    size: "square",
    cover: "/artwork/works/work-010.jpg",
    items: [
      { src: "/artwork/works/work-009.jpg", title: "AAAA?" },
      { src: "/artwork/works/work-011.jpg", title: "LOVE" },
      { src: "/artwork/works/work-006.jpg", title: "Pattern, blue" },
      { src: "/artwork/works/work-013.jpg", title: "Blue glasses" },
    ],
  },

  // ── STILL LIFE — no walnuts (those have their own folder) ────────────
  // Cover = apple/grapes/pear. Inside list excludes the cover.
  {
    kind: "series",
    id: "still-life",
    title: "Still Life",
    category: "Oil pastel · Watercolour",
    year: "2024 — 2025",
    size: "tall",
    cover: "/artwork/works/work-040.jpg",
    items: [
      { src: "/artwork/works/work-046.jpg", title: "Pears" },
      { src: "/artwork/works/work-003.jpg", title: "Blueberries" },
      { src: "/artwork/works/work-004.jpg", title: "Half a lemon" },
      { src: "/artwork/works/work-022.jpg", title: "Papaya" },
      { src: "/artwork/works/work-042.jpg", title: "Dragon fruit" },
      { src: "/artwork/works/work-049.jpg", title: "Citrus studies" },
      { src: "/artwork/works/work-023.jpg", title: "Campari" },
    ],
  },

  // ── CATS ──────────────────────────────────────────────────────────────
  // Cover = Chinese-text ramen cat. Inside list excludes the cover.
  {
    kind: "series",
    id: "cats",
    title: "Cats",
    category: "Acrylic · Pastel",
    year: "2024 — 2025",
    size: "square",
    cover: "/artwork/works/work-001.jpg",
    items: [{ src: "/artwork/works/work-002.jpg", title: "Cat, from behind" }],
  },

  // ── WALNUTS ───────────────────────────────────────────────────────────
  // Cover = first walnut composition. Inside list excludes the cover.
  {
    kind: "series",
    id: "walnuts",
    title: "Walnuts",
    category: "Object · Study",
    year: "2025",
    size: "square",
    cover: "/artwork/works/work-045.jpg",
    items: [
      { src: "/artwork/works/work-047.jpg", title: "Walnut composition · 2" },
      { src: "/artwork/works/work-048.jpg", title: "Blue walnuts" },
      { src: "/artwork/works/work-056.jpg", title: "Walnut · detail" },
    ],
  },

  // ── STANDALONE WORKS — formerly "Paintings" and "Objects & Mixed Media"
  // folders, now broken out into individual tiles per request.
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
    src: "/artwork/works/work-008.jpg",
    title: "Volcano",
    category: "Acrylic",
    year: "2024",
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
    src: "/artwork/works/work-024.jpg",
    title: "Tree of roots",
    category: "Mixed media",
    year: "2024",
    size: "square",
  },
  {
    kind: "work",
    src: "/artwork/works/work-055.jpg",
    title: "Sunset block",
    category: "Acrylic + 3D paint",
    year: "2025",
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
    src: "/artwork/works/work-041.jpg",
    title: "Red yarn",
    category: "Object",
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
    src: "/artwork/works/work-036.jpg",
    title: "Doll by the harbour",
    category: "Photography",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-028.jpg",
    title: "Lion door",
    category: "Photography · Vienna",
    year: "2024",
    size: "square",
  },

  // ── SKETCHBOOK (small mixed group) ───────────────────────────────────
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
    src: "/artwork/works/work-037.jpg",
    title: "Lemon picking",
    category: "Coloured pencil",
    year: "2024",
    size: "tall",
  },
  {
    kind: "work",
    src: "/artwork/works/work-029.jpg",
    title: "Sea turtle",
    category: "Coloured pencil",
    year: "2024",
    size: "square",
  },
];

export const totalPieces = entries.reduce((n, e) => {
  return n + (e.kind === "series" ? e.items.length + 1 : 1); // +1 counts the cover
}, 0);
