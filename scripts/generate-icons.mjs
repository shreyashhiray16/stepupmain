// Rasterizes brand SVGs into social/app icon formats that scrapers and iOS support.
// Run automatically as part of the build.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');

const ogSvg = resolve(publicDir, 'og-image.svg');
const faviconSvg = resolve(publicDir, 'favicon.svg');

async function run() {
  if (existsSync(ogSvg)) {
    await sharp(ogSvg, { density: 200 })
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 88 })
      .toFile(resolve(publicDir, 'og-image.jpg'));
    console.log('Generated og-image.jpg (1200x630)');
  } else {
    console.warn('Skipped og-image.jpg — og-image.svg not found');
  }

  if (existsSync(faviconSvg)) {
    await sharp(faviconSvg, { density: 400 })
      .resize(180, 180, { fit: 'contain', background: { r: 26, g: 26, b: 30, alpha: 1 } })
      .png()
      .toFile(resolve(publicDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png (180x180)');

    await sharp(faviconSvg, { density: 200 })
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(resolve(publicDir, 'favicon-32.png'));

    await sharp(faviconSvg, { density: 200 })
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(resolve(publicDir, 'favicon-16.png'));
    console.log('Generated favicon-32.png and favicon-16.png');
  } else {
    console.warn('Skipped app icons — favicon.svg not found');
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
