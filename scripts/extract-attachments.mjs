import fs from "node:fs";
import path from "node:path";

const SESSION = "C:/Users/Administrator/.claude/projects/C--CLAUDE-SOFTWARE/47f42ff4-f20b-4673-9987-b4fdb375e624.jsonl";
const OUT_DIR = "C:/CLAUDE SOFTWARE/emilia-marcovici-art/public/artwork/works";

fs.mkdirSync(OUT_DIR, { recursive: true });

const lines = fs.readFileSync(SESSION, "utf8").split("\n").filter(Boolean);

let saved = 0;
const hashes = new Set();
function hash(s) {
  let h = 0;
  for (let i = 0; i < Math.min(s.length, 2000); i += 17) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return h + ":" + s.length;
}

function saveImage(img) {
  const k = hash(img.data);
  if (hashes.has(k)) return;
  hashes.add(k);
  const ext = (img.mt || "image/jpeg").split("/")[1].replace("jpeg", "jpg");
  const buf = Buffer.from(img.data, "base64");
  const name = `work-${String(++saved).padStart(3, "0")}.${ext}`;
  fs.writeFileSync(path.join(OUT_DIR, name), buf);
}

for (const line of lines) {
  let obj;
  try {
    obj = JSON.parse(line);
  } catch {
    continue;
  }
  if (obj.type !== "user") continue;
  const content = obj.message && obj.message.content;
  if (!Array.isArray(content)) continue;

  // ONLY take blocks that are direct image attachments in a user prompt.
  // Skip tool_result blocks (those carry assistant-tool screenshots).
  for (const block of content) {
    if (block && block.type === "image" && block.source && block.source.type === "base64") {
      saveImage({ mt: block.source.media_type, data: block.source.data });
    }
  }
}

console.log("Saved", saved, "user-attached images to", OUT_DIR);
