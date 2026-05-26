/**
 * Crop only the pieces that genuinely need it. Other folder items keep
 * their natural (upscaled) photo so the paper margins are visible.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

const targets = [
  // Drawings folder cover — pencil drawing on paper, edges to be tight.
  { file: "work-033.jpg", t: 0.20, b: 0.20, l: 0.02, r: 0.10 },
  // Geometric abstract — iOS Photos chrome above + scrubber below.
  { file: "work-059.png", t: 0.16, b: 0.22 },
  // Sketches folder cover (Dragon fruit) — sketchbook spiral on the
  // left and wooden desk on the right both showing through.
  { file: "work-025.jpg", l: 0.22, r: 0.18 },
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
