/**
 * Artwork catalogue.
 *
 * All images live under /artwork/works/ (user pastes, upscaled to
 * ~1200×1600 by scripts/upscale-works.mjs). Some pieces are cropped
 * to remove screenshot chrome / paper margins.
 *
 * /artwork/hikikomori.jpg is the 1440×1920 IG-CDN reference shot,
 * used inside the Hikikomori folder only.
 */

export type Item = {
  src: string;
  title?: string;
  category?: string;
  year?: string;
};

export type Work = Item & {
  kind: "work";
  size: "tall" | "wide" | "square" | "featured" | "banner";
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
  size: "tall" | "wide" | "square" | "featured" | "banner";
  cover: string;
  badge?: string;
  items: Item[];
};

export type Entry = Work | Series;

export const entries: Entry[] = [
  // ── HAUPTWERK — The Spiral ────────────────────────────────────────────
  // Cover is the 1440×1920 IG-CDN reference shot — non-pixelated, fills
  // the banner cleanly. The user-pasted variants are inside the folder.
  {
    kind: "series",
    id: "the-spiral",
    title: "The Spiral",
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

  // ── LOUVRE + COLLAGE — three statues, no duplicates ──────────────────
  // After re-extracting attachments the file numbers shifted: Venus is
  // now work-056, Bather is work-057. Each piece appears once.
  {
    kind: "series",
    id: "louvre",
    title: "Louvre + Collage",
    category: "Photography + Collage",
    year: "2025",
    size: "wide",
    cover: "/artwork/works/work-064.jpg",
    badge: "Available as print",
    items: [
      { src: "/artwork/works/work-056.jpg", title: "Venus, full statue" },
      { src: "/artwork/works/work-057.jpg", title: "Bather, turquoise" },
      { src: "/artwork/works/work-058.jpg", title: "Cupid, gold" },
      { src: "/artwork/works/work-026.jpg", title: "Louvre study · curly head" },
      { src: "/artwork/works/work-027.jpg", title: "Louvre study · bearded" },
    ],
  },

  // ── DRAWINGS & STUDIES — bearded sculpture (cropped) as cover ────────
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
      { src: "/artwork/works/work-017.jpg", title: "Bonnet portrait" },
      { src: "/artwork/works/work-020.jpg", title: "Old man, watercolour" },
      { src: "/artwork/works/work-059.jpg", title: "Geometric abstract" },
    ],
  },

  // ── TRAVEL POSTCARDS — all country panels ────────────────────────────
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

  // ── SKETCHES ──────────────────────────────────────────────────────────
  {
    kind: "series",
    id: "sketches",
    title: "Sketches",
    category: "Oil pastel · Watercolour",
    year: "2024 — 2025",
    size: "tall",
    cover: "/artwork/works/work-025.jpg",
    items: [
      { src: "/artwork/works/work-040.jpg", title: "Apple, grapes, pear" },
      { src: "/artwork/works/work-042.jpg", title: "Pears + orange" },
      { src: "/artwork/works/work-004.jpg", title: "Half a lemon" },
      { src: "/artwork/works/work-022.jpg", title: "Papaya" },
      { src: "/artwork/works/work-049.jpg", title: "Citrus studies" },
      { src: "/artwork/works/work-023.jpg", title: "Campari" },
      // Added per request — were N09, N11, N12, N17 standalones.
      { src: "/artwork/works/work-044.jpg", title: "Fuji, pink" },
      { src: "/artwork/works/work-043.jpg", title: "Study with pastels" },
      { src: "/artwork/works/work-024.jpg", title: "Tree of roots" },
      { src: "/artwork/works/work-029.jpg", title: "Sea turtle" },
    ],
  },

  // (Cats folder removed per request — work-001, 002, 060 dropped.)

  // ── WALNUTS — pure walnut studies, no statues ────────────────────────
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
      { src: "/artwork/works/work-046.jpg", title: "Walnut · detail" },
    ],
  },

  // ── RECLINING FIGURE + RED YARN — new folder per request ─────────────
  {
    kind: "series",
    id: "figure-yarn",
    title: "Figure + Yarn",
    category: "Clay · Object",
    year: "2025",
    size: "square",
    cover: "/artwork/works/work-038.jpg",
    items: [
      { src: "/artwork/works/work-041.jpg", title: "Red yarn" },
    ],
  },

  // ── STANDALONE WORKS ──────────────────────────────────────────────────
  // Fuji-pink, Study-with-pastels and Tree-of-roots moved into the
  // Sketches folder per request — only Volcano remains here.
  {
    kind: "work",
    src: "/artwork/works/work-008.jpg",
    title: "Volcano",
    category: "Acrylic",
    year: "2024",
    size: "square",
  },
  // (Wave on cherry + Eye on ebony removed per request.)
  // Blueberries stays as a standalone fruit tile per earlier request.
  // (Dragon fruit is now the Still Life folder cover, no duplicate here.)
  {
    kind: "work",
    src: "/artwork/works/work-003.jpg",
    title: "Blueberries",
    category: "Oil · Fruit",
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
  {
    kind: "work",
    src: "/artwork/works/work-061.jpg",
    title: "Film negatives",
    category: "Photography · Contact sheet",
    year: "2024",
    size: "wide",
  },
];

export const totalPieces = entries.reduce((n, e) => {
  return n + (e.kind === "series" ? e.items.length + 1 : 1);
}, 0);
