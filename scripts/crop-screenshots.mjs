/**
 * Some pieces were pasted as screenshots and need cropping so they
 * don't read as screenshots in the gallery:
 *  - work-022 (Papaya): Instagram username strip on top
 *  - work-023 (Campari): same IG strip
 *  - work-059 (Geometric abstract): full iOS Photos screenshot — crop
 *    away the status bar and the thumbnail scrubber at the bottom.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

const targets = [
  { file: "work-022.jpg", crop: { top: 0.13 } },
  { file: "work-023.jpg", crop: { top: 0.13 } },
  // iOS Photos screenshot — keep only the middle artwork band
  { file: "work-059.png", crop: { top: 0.16, bottom: 0.22 } },
];

for (const t of targets) {
  const p = path.join(WORKS, t.file);
  let buf;
  try {
    buf = await fs.readFile(p);
  } catch {
    console.log(`! ${t.file}: not found, skipping`);
    continue;
  }
  const meta = await sharp(buf).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  const top = Math.round(h * (t.crop.top || 0));
  const bottom = Math.round(h * (t.crop.bottom || 0));
  const newH = h - top - bottom;
  const out = await sharp(buf)
    .extract({ left: 0, top, width: w, height: newH })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  // If the source was .png, save the cropped result as .jpg and remove
  // the .png so the catalogue can reference a single .jpg path.
  if (t.file.endsWith(".png")) {
    const jpgPath = p.replace(/\.png$/, ".jpg");
    await fs.writeFile(jpgPath, out);
    await fs.unlink(p);
    console.log(`✓ ${t.file} → ${path.basename(jpgPath)}: ${w}×${h} → ${w}×${newH}`);
  } else {
    await fs.writeFile(p, out);
    console.log(`✓ ${t.file}: ${w}×${h} → ${w}×${newH}`);
  }
}
