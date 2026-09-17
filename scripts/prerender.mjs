// Post-build prerender: serves the built dist/ with `vite preview`, visits every
// indexable route with a headless browser, and writes fully-rendered HTML to
// dist/<route>/index.html so crawlers and social scrapers get complete markup.
// React Router and react-helmet-async are untouched.
import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');

// Keep in sync with ALL_INDEXABLE_PATHS in src/data/seo.ts
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/transformer-services',
  '/services/switchgear-panels',
  '/services/wiring-compliance',
  '/services/earthing-cabling',
  '/services/old-transformer-buy-sell',
  '/services/electrical-services',
  '/gallery',
  '/reviews',
  '/contact',
];

const PORT = 4180;

async function outputPathFor(route) {
  const clean = route === '/' ? '' : route.replace(/^\//, '');
  const dir = join(distDir, clean);
  await mkdir(dir, { recursive: true });
  return join(dir, 'index.html');
}

async function run() {
  const server = await preview({
    preview: { port: PORT, strictPort: true },
  });

  const base = `http://localhost:${PORT}`;
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`${base}${route}`, { waitUntil: 'networkidle0', timeout: 60000 });
      // Wait until Helmet has set a non-default title with content.
      await page.waitForFunction(
        () => document.title && document.title.length > 0,
        { timeout: 15000 },
      );
      // Dedupe head tags: the static index.html tags coexist with Helmet-managed
      // ones after client render. Keep Helmet's (data-rh) versions where present.
      await page.evaluate(() => {
        const head = document.head;

        const titles = Array.from(head.querySelectorAll('title'));
        const keptTitle = titles.find((t) => t.hasAttribute('data-rh')) || titles[titles.length - 1];
        titles.forEach((t) => {
          if (t !== keptTitle) t.remove();
        });

        const dedupeByKey = (selector, keyFn) => {
          const nodes = Array.from(head.querySelectorAll(selector));
          const seen = new Map();
          for (const node of nodes) {
            const key = keyFn(node);
            if (!key) continue;
            const existing = seen.get(key);
            if (!existing) {
              seen.set(key, node);
            } else if (node.hasAttribute('data-rh') && !existing.hasAttribute('data-rh')) {
              existing.remove();
              seen.set(key, node);
            } else {
              node.remove();
            }
          }
        };

        dedupeByKey('meta[name]', (n) => `name:${n.getAttribute('name')}`);
        dedupeByKey('meta[property]', (n) => `prop:${n.getAttribute('property')}`);
        dedupeByKey('link[rel="canonical"]', () => 'canonical');
      });
      const html = await page.content();
      const outPath = await outputPathFor(route);
      await writeFile(outPath, `<!doctype html>\n${html}`, 'utf8');
      console.log(`Prerendered ${route} -> ${outPath.replace(distDir, 'dist')}`);
      await page.close();
    }
  } finally {
    await browser.close();
    await new Promise((resolvePromise) => {
      server.httpServer.close(() => resolvePromise());
    });
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
