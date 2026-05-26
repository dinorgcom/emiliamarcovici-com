/**
 * Run after upscale-works.mjs to crop away frames, IG strips, paper
 * margins and other context that doesn't belong to the artwork.
 * Each target gives percentage cuts from each side of the current image.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

const targets = [
  { file: "work-022.jpg", t: 0.13 },                                  // Papaya: IG strip
  { file: "work-023.jpg", t: 0.13 },                                  // Campari: IG strip
  { file: "work-033.jpg", t: 0.20, b: 0.20, l: 0.02, r: 0.10 },       // Bearded sculpture
  { file: "work-037.jpg", t: 0.18, b: 0.18, l: 0.15, r: 0.32 },       // Lemon picking — frame + price card
  { file: "work-043.jpg", t: 0.24, b: 0.22, l: 0.10, r: 0.22 },       // Study with pastels
  { file: "work-055.jpg", t: 0.10, b: 0.06, l: 0.20, r: 0.20 },       // Sunset block
  { file: "work-059.png", t: 0.16, b: 0.22 },                         // Geometric (iOS chrome)
  // Dragon fruit (Sketches folder cover) — sketchbook spiral on the
  // left and wooden desk on the right showing through. Crop the sides.
  { file: "work-025.jpg", l: 0.14, r: 0.10 },
];

for (const t of targets) {
  const p = path.join(WORKS, t.file);
  let buf;
  try {
    buf = await fs.readFile(p);
  } catch {
    continue;
  }
  const meta = await sharp(buf).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  const top = Math.round(h * (t.t || 0));
  const bottom = Math.round(h * (t.b || 0));
  const left = Math.round(w * (t.l || 0));
  const right = Math.round(w * (t.r || 0));
  const out = await sharp(buf)
    .extract({
      left,
      top,
      width: w - left - right,
      height: h - top - bottom,
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  const outPath = t.file.endsWith(".png") ? p.replace(/\.png$/, ".jpg") : p;
  await fs.writeFile(outPath, out);
  if (t.file.endsWith(".png")) await fs.unlink(p).catch(() => {});
  console.log(`✓ ${t.file}: ${w}×${h} → ${w - left - right}×${h - top - bottom}`);
}
