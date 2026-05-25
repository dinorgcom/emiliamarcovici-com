/**
 * Upscale every /public/artwork/works/*.jpg from its 333×250 paste-thumb
 * size up to ~1200×900 using Lanczos3 + an unsharp-mask pass, so it stops
 * looking pixelated on HiDPI screens.
 *
 * Originals are kept under /public/artwork/works/.thumbs/ in case we ever
 * need to roll back.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WORKS_DIR = path.join(
  process.cwd(),
  "public",
  "artwork",
  "works"
);
const THUMBS_DIR = path.join(WORKS_DIR, ".thumbs");
await fs.mkdir(THUMBS_DIR, { recursive: true });

const TARGET_LONG_EDGE = 1600; // px on the long side

const files = (await fs.readdir(WORKS_DIR)).filter((f) =>
  /^work-\d+\.(jpg|jpeg|png|webp)$/.test(f)
);

let done = 0;
for (const file of files) {
  const inPath = path.join(WORKS_DIR, file);
  const backupPath = path.join(THUMBS_DIR, file);
  const buf = await fs.readFile(inPath);

  // Save original to .thumbs/ if not already there
  try {
    await fs.access(backupPath);
  } catch {
    await fs.writeFile(backupPath, buf);
  }

  const img = sharp(buf, { failOn: "none" });
  const meta = await img.metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (w === 0 || h === 0) {
    console.log(`! ${file}: bad metadata`);
    continue;
  }
  if (Math.max(w, h) >= TARGET_LONG_EDGE) {
    console.log(`= ${file}: already ${w}×${h}, skipping`);
    done++;
    continue;
  }
  const scale = TARGET_LONG_EDGE / Math.max(w, h);
  const newW = Math.round(w * scale);
  const newH = Math.round(h * scale);

  const out = await sharp(buf)
    .resize(newW, newH, {
      kernel: sharp.kernel.lanczos3,
      fit: "fill",
    })
    // unsharp mask: sigma 1.0, flat 1.0, jagged 2.0 — punches the edges
    // without making the JPEG noise scream
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.0 })
    // strong but not lossy enough to lose detail
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  await fs.writeFile(inPath, out);
  console.log(
    `↑ ${file}: ${w}×${h} → ${newW}×${newH}  (${Math.round(buf.length / 1024)}KB → ${Math.round(out.length / 1024)}KB)`
  );
  done++;
}
console.log(`\nProcessed ${done} files. Originals kept in ${THUMBS_DIR}`);
