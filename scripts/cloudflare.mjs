import { execSync } from "child_process";
import { readdirSync, statSync } from "fs";
import { join, relative, extname } from "path";

const BUCKET_NAME = process.env.R2_BUCKET || "your-r2-bucket-name";
const ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const ASSETS_DIR = "dist/client/oneshot3d-game.com";
const R2_PREFIX = "static/oneshot3d-game.com";

if (!process.env.CLOUDFLARE_API_TOKEN) {
  console.error("missing CLOUDFLARE_API_TOKEN");
  process.exit(1);
}
if (!ACCOUNT_ID) {
  console.error("missing CF_ACCOUNT_ID");
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
console.log(`uploading ${files.length} files to R2...\n`);

for (const file of files) {
  const rel = relative(ASSETS_DIR, file);
  const key = `${R2_PREFIX}/${rel}`;
  const mime = MIME_MAP[extname(file)] || "application/octet-stream";

  console.log(`  ${rel} -> ${key} (${mime})`);
  execSync(
    `npx wrangler r2 object put "${BUCKET_NAME}/${key}" --file="${file}" --content-type="${mime}"`,
    { stdio: "inherit" },
  );
}

console.log("\ndone");
