//yes this is skidded, i dont give a fuck
import { execSync } from "child_process";
import { readdirSync, statSync } from "fs";
import { join, relative, extname } from "path";

const BUCKET_NAME = process.env.R2_BUCKET || "cdn-alex427com";
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ASSETS_DIR = "dist/client/oneshot3d-game.com";
const R2_PREFIX = "static/oneshot3d-game.com";

if (!TOKEN) {
  console.error("missing CLOUDFLARE_API_TOKEN");
  process.exit(1);
}
if (!ACCOUNT_ID) {
  console.error("missing CLOUDFLARE_ACCOUNT_ID");
  process.exit(1);
}

const MIME_MAP = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".ico": "image/x-icon",
  ".webm": "video/webm",
  ".mp4": "video/mp4",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

function getAllFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...getAllFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

const files = getAllFiles(ASSETS_DIR);
console.log(`\nuploading ${files.length} files to R2...\n`);

let failed = 0;
let success = 0;

for (const file of files) {
  const rel = relative(ASSETS_DIR, file);
  const key = `${R2_PREFIX}/${rel}`;
  const mime = MIME_MAP[extname(file)] || "application/octet-stream";

  console.log(`  ${rel} -> ${key} (${mime})`);
  try {
    const output = execSync(
      `bunx wrangler r2 object put "${BUCKET_NAME}/${key}" --file="${file}" --content-type="${mime}" --remote`,
      { encoding: "utf-8" },
    );
    console.log(output);
    success++;
  } catch (e) {
    console.error(
      `  ✗ failed: ${e.stdout?.toString() || ""} ${e.stderr?.toString() || e.message}`,
    );
    failed++;
  }
}

console.log(`\ndone: ${success} uploaded, ${failed} failed`);
if (failed > 0) process.exit(1);
