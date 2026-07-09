import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname, parse } from "path";
import { fileURLToPath } from "url";

const __dirname = parse(fileURLToPath(import.meta.url)).dir;
const publicDir = join(__dirname, "..", "public");

const ALLOWED = [".png", ".jpg", ".jpeg"];
const MAX_SIZE = 50 * 1024;

let totalSaved = 0;
let totalFiles = 0;

async function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.startsWith(".")) await walk(full);
    } else if (ALLOWED.includes(extname(entry.name).toLowerCase())) {
      const before = statSync(full).size;
      if (before > MAX_SIZE) {
        await compress(full, extname(entry.name).toLowerCase());
        const after = statSync(full).size;
        const saved = before - after;
        totalSaved += saved;
        totalFiles++;
        console.log(
          `  ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (${((saved / before) * 100).toFixed(1)}% off)  ${entry.name}`
        );
      }
    }
  }
}

async function compress(filePath, ext) {
  let pipeline = sharp(filePath);
  if (ext === ".png") {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true, adaptiveFiltering: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  }
  const tmp = filePath + ".tmp";
  await pipeline.toFile(tmp);
  renameSync(tmp, filePath);
}

console.log("Compressing images over 50KB in public/ ...\n");
(async () => {
  await walk(publicDir);
  console.log(`\nDone. ${totalFiles} files compressed, saved ${(totalSaved / 1024).toFixed(1)}KB total.`);
})();
