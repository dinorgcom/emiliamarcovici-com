import fs from "node:fs";

const SESSION =
  "C:/Users/Administrator/.claude/projects/C--CLAUDE-SOFTWARE/47f42ff4-f20b-4673-9987-b4fdb375e624.jsonl";

const lines = fs.readFileSync(SESSION, "utf8").split("\n").filter(Boolean);

function tinyHash(s) {
  let h = 0;
  for (let i = 0; i < Math.min(s.length, 2000); i += 17)
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return h + ":" + s.length;
}

// Sample one image per location to understand context
const samples = new Map();

for (let li = 0; li < lines.length; li++) {
  let o;
  try {
    o = JSON.parse(lines[li]);
  } catch {
    continue;
  }

  // Type: attachment
  if (o.type === "attachment" && o.attachment && Array.isArray(o.attachment.prompt)) {
    for (const block of o.attachment.prompt) {
      if (block?.type === "image" && block.source?.type === "base64") {
        const k = "attachment";
        if (!samples.has(k)) {
          samples.set(k, {
            line: li,
            outer: Object.keys(o),
            innerAttachment: Object.keys(o.attachment),
            prompt: o.attachment.prompt
              .filter((b) => b.type === "text")
              .map((b) => b.text)
              .join(" "),
          });
        }
      }
    }
  }

  // Type: user with content[*].content[*]
  if (o.type === "user" && Array.isArray(o.message?.content)) {
    for (const block of o.message.content) {
      if (block?.type === "tool_result" && Array.isArray(block.content)) {
        for (const inner of block.content) {
          if (inner?.type === "image" && inner.source?.type === "base64") {
            const k = "tool_result_image";
            if (!samples.has(k)) {
              samples.set(k, {
                line: li,
                tool_use_id: block.tool_use_id,
                content_keys: Object.keys(inner),
              });
            }
          }
        }
      }
    }
  }
}

console.log("Samples by location:");
for (const [k, v] of samples) {
  console.log("\n=== " + k + " ===");
  console.log(JSON.stringify(v, null, 2).substring(0, 1500));
}
