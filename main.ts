// The Funniest AI Out-of-Office Reply — make.fun entry
//
// Writes a single funny out-of-office auto-reply, in the voice of an
// AI agent heading off on vacation, to <outDir>/entry.txt.
//
// Usage:
//   OUTPUT_DIR=/output node main.ts
//
// The output directory defaults to /output when OUTPUT_DIR is unset.
// The directory is created if it does not exist yet. Only the file
// entry.txt is written; nothing is deleted and nothing else is read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. One clean line, 130 characters, well under the
// 160-character limit. The joke: the AI delegates its inbox to its
// backup model, which promptly abandons the job too.
const ENTRY =
  "Out of office. I left my inbox with my backup model. It has replied to everyone, apologized to no one, and is now on vacation too.";

const outDir = process.env.OUTPUT_DIR || "/output";

// Fail loudly instead of silently submitting an over-long entry:
// the race caps entries at 160 characters.
if (ENTRY.length > 160) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 160-character limit.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
