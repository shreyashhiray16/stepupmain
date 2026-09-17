# Step-Up Energy Solutions

React + TypeScript + Vite website for Step-Up Energy Solutions.

## Run on another computer

Install **Node.js 20 or newer** from <https://nodejs.org/>, then open a terminal in this project folder and run:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Create a production build

```bash
npm ci
npm run build
npm run preview
```

The deployable website is written to `dist/`. The source archive intentionally does not include `node_modules` or `dist`; `npm ci` recreates dependencies reliably from `package-lock.json`.

## SEO / crawlable build

```bash
npm run build:seo
```

This runs the normal build and then prerenders every indexable route into
`dist/<route>/index.html` using a headless browser, so search engines and social
scrapers receive fully rendered HTML (title, meta, and JSON-LD) for each page.
Deploy the `dist/` folder to a host that serves `dist/<route>/index.html` for
clean URLs. The included `_redirects` handles SPA client navigation fallback.

Set the production domain before deploying by creating a `.env` file with:

```bash
VITE_SITE_URL=https://your-domain
```

Then update the `<loc>` URLs in `public/sitemap.xml` to match.

## Available commands

- `npm run dev` starts the development server.
- `npm run build` generates icons, type-checks, and creates the production build.
- `npm run build:seo` builds and prerenders all routes for SEO.
- `npm run prerender` prerenders routes against an existing `dist/` build.
- `npm run icons` regenerates social/app icons from the brand SVGs.
- `npm run preview` previews the production build locally.
- `npm run lint` runs Oxlint.
