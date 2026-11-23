/**
 * Renders the CV pages to PDF with headless Chrome.
 *
 *   pnpm cv                      -> public/Ahmad_Amhan_CV.pdf + cv-output/*.pdf
 *   pnpm cv --out "C:\some\dir"  -> same, with the copies written to that folder
 *
 * It makes a production build with CV_PRIVATE=1 (so private variants from
 * content/cv-variants.local.json render too), serves it locally, prints each
 * variant, then deletes `out/` so a build containing private variants can
 * never be deployed by accident. Run `pnpm build` afterwards to deploy.
 */
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const outFlag = process.argv.indexOf("--out");
const copyDir = path.resolve(outFlag > -1 ? process.argv[outFlag + 1] : path.join(root, "cv-output"));

const PUBLIC_VARIANT = "cairo";
const PUBLIC_PDF = path.join(root, "public", "Ahmad_Amhan_CV.pdf");
const localFile = path.join(root, "content", "cv-variants.local.json");
const variants = [
  PUBLIC_VARIANT,
  ...(existsSync(localFile) ? Object.keys(JSON.parse(readFileSync(localFile, "utf8"))) : []),
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".pdf": "application/pdf",
};

function serve(dir) {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = path.join(dir, urlPath);
    if (!file.startsWith(dir)) return res.writeHead(403).end();
    if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, "index.html");
    if (!existsSync(file)) return res.writeHead(404).end("Not found");
    res.writeHead(200, { "content-type": MIME[path.extname(file)] ?? "application/octet-stream" });
    res.end(readFileSync(file));
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

async function launch() {
  for (const channel of ["chrome", "msedge"]) {
    try {
      return await chromium.launch({ channel });
    } catch {
      // try the next installed browser
    }
  }
  throw new Error("Neither Google Chrome nor Microsoft Edge was found. Install one of them and retry.");
}

console.log(`Building with variants: ${variants.join(", ")}`);
const build = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build"], {
  cwd: root,
  env: { ...process.env, CV_PRIVATE: "1" },
  stdio: "inherit",
});
if (build.status !== 0) process.exit(build.status ?? 1);

const outDir = path.join(root, "out");
const server = await serve(outDir);
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await launch();

try {
  mkdirSync(copyDir, { recursive: true });
  const page = await browser.newPage();
  for (const variant of variants) {
    const res = await page.goto(`${base}/cv/${variant}/`, { waitUntil: "networkidle" });
    if (!res?.ok()) throw new Error(`/cv/${variant}/ returned ${res?.status()}`);
    await page.evaluate(() => document.fonts.ready);
    const label = variant[0].toUpperCase() + variant.slice(1);
    const target = path.join(copyDir, `Ahmad_Amhan_CV_${label}.pdf`);
    await page.pdf({ path: target, preferCSSPageSize: true, printBackground: true, tagged: true });
    console.log(`  wrote ${target}`);
    if (variant === PUBLIC_VARIANT) {
      copyFileSync(target, PUBLIC_PDF);
      console.log(`  wrote ${PUBLIC_PDF}`);
    }
  }
} finally {
  await browser.close();
  server.close();
  rmSync(outDir, { recursive: true, force: true });
}
console.log("Done. `out/` was removed; run `pnpm build` for a deployable build.");
