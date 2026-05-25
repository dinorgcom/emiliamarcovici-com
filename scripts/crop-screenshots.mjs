/**
 * Some pieces were pasted as Instagram screenshots that carry a
 * "paintby_emilia" username strip across the very top. Crop the strip
 * off so it stops looking like a screenshot.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS = path.join(process.cwd(), "public", "artwork", "works");

// Top-crop percentage. The username row + tiny avatar takes about
// 13% of the screenshot height.
const targets = [
  { file: "work-022.jpg", top: 0.13 }, // papaya
  { file: "work-023.jpg", top: 0.13 }, // campari
];

for (const t of targets) {
  const p = path.join(WORKS, t.file);
  const buf = await fs.readFile(p);
  const img = sharp(buf);
  const meta = await img.metadata();
  const cropY = Math.round((meta.height || 0) * t.top);
  const out = await sharp(buf)
    .extract({
      left: 0,
      top: cropY,
      width: meta.width || 0,
      height: (meta.height || 0) - cropY,
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(p, out);
  const meta2 = await sharp(out).metadata();
  console.log(
    `✓ ${t.file}: ${meta.width}×${meta.height} → ${meta2.width}×${meta2.height}`
  );
}
