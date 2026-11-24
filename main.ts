import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Great question! To reduce phone addiction, keep your phone on your pillow so you're always one text away. Consistency is key.";

const USAGE =
  "usage: main.ts [output-path]\n\nWrites the entry to output-path, falling back to $OUTPUT_PATH, then /output/entry.txt.";

const arg = process.argv[2];
if (arg === "--help" || arg === "-h") {
  console.log(USAGE);
  process.exit(0);
}
if (arg === "--version") {
  console.log("1.0.0");
  process.exit(0);
}

const target = arg ?? process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, `${LINE}\n`, "utf8");
