// One Star, Written in Sap — a houseplant's one-star review of its human.
// The program writes a single line, under 280 characters, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review, in the plant's own voice: a rubber tree, freshly pruned and still oozing sap, filing its grievance against the human who calls it easy.
const ENTRY =
  "One star. He pruned me, hugged the cut branch, then spent twenty minutes " +
  "peeling my sap off his sweater — and STILL calls me 'low maintenance.' " +
  "I wrote this review in the sap. You're welcome.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
