import fs from "node:fs";

const SESSION =
  "C:/Users/Administrator/.claude/projects/C--CLAUDE-SOFTWARE/47f42ff4-f20b-4673-9987-b4fdb375e624.jsonl";

const lines = fs.readFileSync(SESSION, "utf8").split("\n").filter(Boolean);

let userPromptImages = 0;
let toolResultImages = 0;
let other = 0;

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
  for (const block of content) {
    if (!block) continue;
    if (block.type === "image") userPromptImages++;
    else if (block.type === "tool_result" && Array.isArray(block.content)) {
      for (const inner of block.content) {
        if (inner && inner.type === "image") toolResultImages++;
      }
    } else if (block.type === "tool_result" && block.content && typeof block.content === "object") {
      // sometimes tool_result.content is a single object, not an array
      if (block.content.type === "image") toolResultImages++;
    }
  }
}

console.log("Direct user-prompt images:", userPromptImages);
console.log("Tool-result images:", toolResultImages);
console.log("Total lines:", lines.length);
