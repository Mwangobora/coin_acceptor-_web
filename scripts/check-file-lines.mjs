import { readdirSync, statSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const limit = 120;
const extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);
const ignoredDirs = new Set(["node_modules", ".next", ".git", "out", "build"]);
const ignoredFiles = new Set(["next-env.d.ts"]);
const violations = [];

function scan(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      if (!ignoredDirs.has(entry)) scan(path);
      continue;
    }

    if (!extensions.has(extname(entry)) || ignoredFiles.has(entry)) {
      continue;
    }

    const lineCount = readFileSync(path, "utf8").split(/\r?\n/).length;

    if (lineCount > limit) {
      violations.push({ file: relative(root, path), lineCount });
    }
  }
}

scan(root);

if (violations.length > 0) {
  for (const violation of violations) {
    console.error(`${violation.file}: ${violation.lineCount} lines`);
  }

  process.exit(1);
}

console.log(`All maintained source files are within ${limit} lines.`);
