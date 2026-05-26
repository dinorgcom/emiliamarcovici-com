/**
 * Rotate the two wood-board pieces so they read horizontally, then crop
 * away the white background so only the wood is visible.
 * Also crop the Cats folder cover to remove the noodle-bowl portion.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

// Each entry: rotate (CW degrees), then crop percentages from each side.
const ops = [
  // Wood plank with water/wave detail. Rotate 270° (CCW) so the detail
  // sits on the LEFT — consistent with the ebony plank below.
  {
    file: "work-062.jpg",
    rotate: 270,
    crop: { t: 0.20, b: 0.20, l: 0.04, r: 0.04 },
  },
  // Dark wood plank with painted eye detail. Rotate 90° CW so the eye
  // also sits on the LEFT.
  {
    file: "work-063.jpg",
    rotate: 90,
    crop: { t: 0.22, b: 0.22, l: 0.04, r: 0.04 },
  },
  // Cats cover: drop the noodle bowl + chopsticks at the bottom.
  {
    file: "work-001.jpg",
    rotate: 0,
    crop: { t: 0.02, b: 0.28, l: 0.04, r: 0.04 },
  },
];

for (const op of ops) {
  const p = path.join(WORKS, op.file);
  let buf;
  try {
    buf = await fs.readFile(p);
  } catch {
    console.log(`! ${op.file}: not found`);
    continue;
  }

  let img = sharp(buf);
  if (op.rotate) {
    img = img.rotate(op.rotate);
  }
  // Render once after rotate so width/height reflect post-rotation.
  const intermediate = await img.jpeg({ quality: 95 }).toBuffer();
  const meta = await sharp(intermediate).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;

  const top = Math.round(h * (op.crop.t || 0));
  const bottom = Math.round(h * (op.crop.b || 0));
  const left = Math.round(w * (op.crop.l || 0));
  const right = Math.round(w * (op.crop.r || 0));

  const out = await sharp(intermediate)
    .extract({
      left,
      top,
      width: w - left - right,
      height: h - top - bottom,
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  await fs.writeFile(p, out);
  console.log(
    `✓ ${op.file}: rotate ${op.rotate}° → ${w}×${h}, crop → ${w - left - right}×${h - top - bottom}`
  );
}
