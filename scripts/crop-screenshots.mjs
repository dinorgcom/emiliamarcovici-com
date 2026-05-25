/**
 * Aggressive cropping pass — get rid of all visible context (frames,
 * desks, fingers, paper margins) so each tile reads as just-the-artwork.
 *
 * The script operates on the upscaled JPGs in /public/artwork/works/.
 * Originals are kept in .thumbs/ for rollback.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

// Each entry: percentages cut from top / bottom / left / right of the
// CURRENT image (already upscaled). Idempotent: if you re-run after the
// crop already happened, the values are still relative to current size.
const targets = [
  { file: "work-022.jpg", t: 0.13 }, // Papaya: IG strip (already done)
  { file: "work-023.jpg", t: 0.13 }, // Campari: IG strip (already done)

  // Bearded sculpture (Drawings cover) — was 0.12/0.12, user says more.
  // Already cropped once; apply only the *additional* margin here.
  { file: "work-033.jpg", t: 0.08, b: 0.08, l: 0.02, r: 0.10 },

  // Sunset block — was 0.12/0.08/0.08/0.08, user says still not enough.
  // Crop further down to just the orange/pink/blue rectangle.
  { file: "work-055.jpg", t: 0.10, b: 0.06, l: 0.20, r: 0.20 },

  // Lemon picking — black photo frame all the way around + price note
  // on the right + fingers at the bottom.
  { file: "work-037.jpg", t: 0.06, b: 0.06, l: 0.05, r: 0.22 },

  // Study with pastels (was "Studio in oil") — cardboard, hands and
  // plastic at the top + drawing paper margins.
  { file: "work-043.jpg", t: 0.06, b: 0.12, l: 0.04, r: 0.12 },

  // Geometric abstract (iOS Photos screenshot) — keep only the artwork.
  { file: "work-059.png", t: 0.16, b: 0.22 },
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
  const newH = h - top - bottom;
  const newW = w - left - right;
  const out = await sharp(buf)
    .extract({ left, top, width: newW, height: newH })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  const jpgPath = t.file.endsWith(".png") ? p.replace(/\.png$/, ".jpg") : p;
  await fs.writeFile(jpgPath, out);
  if (t.file.endsWith(".png")) await fs.unlink(p).catch(() => {});
  console.log(`✓ ${t.file}: ${w}×${h} → ${newW}×${newH}`);
}
