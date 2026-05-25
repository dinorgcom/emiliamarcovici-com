import fs from "node:fs";
import path from "node:path";

const SESSION =
  "C:/Users/Administrator/.claude/projects/C--CLAUDE-SOFTWARE/47f42ff4-f20b-4673-9987-b4fdb375e624.jsonl";
const OUT_DIR =
  "C:/CLAUDE SOFTWARE/emilia-marcovici-art/public/artwork/works";

fs.mkdirSync(OUT_DIR, { recursive: true });

const lines = fs.readFileSync(SESSION, "utf8").split("\n").filter(Boolean);

const hashes = new Set();
function tinyHash(s) {
  let h = 0;
  for (let i = 0; i < Math.min(s.length, 2000); i += 17)
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return h + ":" + s.length;
}

let saved = 0;
function saveImage(b64, mediaType, label) {
  const k = tinyHash(b64);
  if (hashes.has(k)) return;
  hashes.add(k);
  const ext = (mediaType || "image/jpeg").split("/")[1].replace("jpeg", "jpg");
  const buf = Buffer.from(b64, "base64");
  const name = `work-${String(++saved).padStart(3, "0")}.${ext}`;
  fs.writeFileSync(path.join(OUT_DIR, name), buf);
}

let counts = { userPrompt: 0, attachment: 0, skipped: 0 };

for (const line of lines) {
  let obj;
  try {
    obj = JSON.parse(line);
  } catch {
    continue;
  }

  // Case 1: type === "user" with image blocks DIRECTLY in content
  // (not inside tool_result — those are Claude's own screenshots/Read output)
  if (obj.type === "user" && Array.isArray(obj.message?.content)) {
    for (const block of obj.message.content) {
      if (
        block?.type === "image" &&
        block.source?.type === "base64" &&
        typeof block.source.data === "string"
      ) {
        const before = saved;
        saveImage(block.source.data, block.source.media_type, "user");
        if (saved > before) counts.userPrompt++;
        else counts.skipped++;
      }
    }
  }

  // Case 2: type === "attachment" — images attached to a side-channel
  // user prompt (typically the "dasselbe mit diesen" system-reminder pastes).
  if (obj.type === "attachment" && Array.isArray(obj.attachment?.prompt)) {
    for (const block of obj.attachment.prompt) {
      if (
        block?.type === "image" &&
        block.source?.type === "base64" &&
        typeof block.source.data === "string"
      ) {
        const before = saved;
        saveImage(block.source.data, block.source.media_type, "attachment");
        if (saved > before) counts.attachment++;
        else counts.skipped++;
      }
    }
  }
}

console.log("Saved", saved, "images");
console.log(
  "  from user-prompts:",
  counts.userPrompt,
  "from attachments:",
  counts.attachment,
  "deduped/skipped:",
  counts.skipped
);
console.log("→", OUT_DIR);
