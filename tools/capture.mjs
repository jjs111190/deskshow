/**
 * DESKSHOW capture — screenshots of locally-served builds.
 * Read-only w.r.t. originals (serves existing build output or dev servers).
 * Usage: node tools/capture.mjs <url> <out.png> [width] [height]
 */
import { chromium } from 'playwright';

const [url, out, w = '390', h = '844'] = process.argv.slice(2);
if (!url || !out) {
  console.error('usage: node tools/capture.mjs <url> <out.png> [width] [height]');
  process.exit(1);
}
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(w), height: Number(h) } });
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);
await page.screenshot({ path: out });
await browser.close();
console.log('captured', out);
