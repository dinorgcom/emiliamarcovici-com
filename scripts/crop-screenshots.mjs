/**
 * Crop pieces that have unwanted borders / chrome:
 *  - 022 (Papaya): IG username strip
 *  - 023 (Campari): IG username strip
 *  - 033 (Bearded sculpture drawing): white margins above & below
 *  - 055 (Sunset block canvas): pavement and fence around the canvas
 *  - 059 (geometric abstract): iOS Photos chrome (if still .png)
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

const targets = [
  { file: "work-022.jpg", crop: { top: 0.13 } },
  { file: "work-023.jpg", crop: { top: 0.13 } },
  { file: "work-033.jpg", crop: { top: 0.12, bottom: 0.12 } },
  { file: "work-055.jpg", crop: { top: 0.12, bottom: 0.08, left: 0.08, right: 0.08 } },
  { file: "work-059.png", crop: { top: 0.16, bottom: 0.22 } },
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
  const top = Math.round(h * (t.crop.top || 0));
  const bottom = Math.round(h * (t.crop.bottom || 0));
  const left = Math.round(w * (t.crop.left || 0));
  const right = Math.round(w * (t.crop.right || 0));
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
