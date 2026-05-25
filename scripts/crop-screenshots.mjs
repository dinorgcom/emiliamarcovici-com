/**
 * Iteratively aggressive crops. Run after upscale. The values cut a
 * percentage off each side of the CURRENT image (already cropped if
 * previous runs already trimmed it). To redo from scratch, restore the
 * file from /artwork/works/.thumbs/ first.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

const targets = [
  // Lemon picking — frame and table still visible. Aggressive.
  { file: "work-037.jpg", t: 0.12, b: 0.12, l: 0.10, r: 0.10 },
  // Study with pastels — cardboard, table edges, plastic. Aggressive.
  { file: "work-043.jpg", t: 0.18, b: 0.10, l: 0.06, r: 0.10 },
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
  await fs.writeFile(p, out);
  console.log(`✓ ${t.file}: ${w}×${h} → ${w - left - right}×${h - top - bottom}`);
}
