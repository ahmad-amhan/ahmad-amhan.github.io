/**
 * Renders public/og.png (the 1200x630 social preview) with headless Chrome.
 * Run `node scripts/make-og.mjs` after changing the name, title or colours.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = `<!doctype html><html><body style="margin:0;width:1200px;height:630px;background:#07080b;color:#f2f4f8;font-family:'Segoe UI',Arial,sans-serif;position:relative;overflow:hidden">
<div style="position:absolute;left:-140px;top:-160px;width:520px;height:520px;border-radius:50%;background:#c6f432;filter:blur(130px);opacity:.35"></div>
<div style="position:absolute;right:-180px;bottom:-220px;width:560px;height:560px;border-radius:50%;background:#4f7cff;filter:blur(140px);opacity:.4"></div>
<div style="position:absolute;inset:0;padding:72px;display:flex;flex-direction:column;justify-content:space-between">
  <div style="display:flex;align-items:center;gap:20px">
    <div style="width:68px;height:68px;border-radius:50%;background:#c6f432;color:#0a0c05;display:flex;align-items:center;justify-content:center;font-size:27px;font-weight:800">AA</div>
    <div style="font-size:28px;color:#8b92a1">Cairo, Egypt</div>
  </div>
  <div>
    <div style="font-size:104px;font-weight:800;letter-spacing:-5px;line-height:1">Ahmad Amhan</div>
    <div style="margin-top:22px;font-size:42px;font-weight:700;color:#c6f432">Product Owner &amp; Mobile Team Lead</div>
    <div style="margin-top:26px;font-size:29px;color:#8b92a1">Mobile products, led from first requirement to store release.</div>
  </div>
</div></body></html>`;

let browser;
for (const channel of ["chrome", "msedge"]) {
  try {
    browser = await chromium.launch({ channel });
    break;
  } catch {
    // try the next installed browser
  }
}
if (!browser) throw new Error("Neither Google Chrome nor Microsoft Edge was found.");
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.screenshot({ path: path.join(root, "public", "og.png") });
await browser.close();
console.log("wrote public/og.png");
