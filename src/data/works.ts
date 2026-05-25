/**
 * The artwork catalogue. Edit this file to add, rename, or reorder works.
 *
 * - `src`: path under /public, e.g. "/artwork/works/work-001.jpg"
 * - `title`, `category`, `year`: shown on hover
 * - `size`: layout footprint in the asymmetric grid ("tall" | "wide" | "square")
 *
 * To add new pieces:
 *   1. Drop a JPG into /public/artwork/works/
 *   2. Add an entry below.
 * (The extract-attachments.mjs script writes them as work-NNN.jpg.)
 */

export type Work = {
  src: string;
  title: string;
  category: string;
  year: string;
  size: "tall" | "wide" | "square";
};

export const works: Work[] = [
  {
    src: "/artwork/works/work-001.jpg",
    title: "Can you read this?",
    category: "Acrylic · Mixed",
    year: "2025",
    size: "tall",
  },
  {
    src: "/artwork/works/work-002.jpg",
    title: "Cat, from behind",
    category: "Oil Pastel",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-003.jpg",
    title: "Blueberries",
    category: "Still Life",
    year: "2025",
    size: "square",
  },
  {
    src: "/artwork/works/work-004.jpg",
    title: "Half a lemon",
    category: "Still Life",
    year: "2024",
    size: "square",
  },
  {
    src: "/artwork/works/work-005.jpg",
    title: "Stripe sequence",
    category: "Comic / Series",
    year: "2024",
    size: "wide",
  },
  {
    src: "/artwork/works/work-006.jpg",
    title: "Pattern, blue",
    category: "Pattern",
    year: "2024",
    size: "tall",
  },
  {
    src: "/artwork/works/work-007.jpg",
    title: "Fuji at dusk",
    category: "Japan Series",
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
    category: "Typography",
    year: "2024",
    size: "square",
  },
  {
    src: "/artwork/works/work-010.jpg",
    title: "FACE",
    category: "Typography",
    year: "2024",
    size: "tall",
  },
];
