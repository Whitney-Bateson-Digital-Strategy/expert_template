# Expert — Editorial Astro Template

A premium, editorial website template for practitioners — the structured, magazine-style
sibling to the classic/basic template. Built by
[Whitney Bateson Digital Strategy](https://whitneybateson.com).

Built with [Astro 6](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/).

---

## What makes "expert" different

Same engine as the classic template — same file system, same design-token
architecture, the same component prop APIs — so the two are a maintainable matched
set. The difference is the **layout / design language**:

- Oversized Cormorant serif display headings with **italic accents** (`<em>`)
- Asymmetric, magazine-style grids; image/text overlap; sticky side rails
- Numbered editorial lists, hairline rules, flat/sharp shapes (minimal radii)
- Generous whitespace and a restrained, warm-neutral palette

**Designed to look premium in grayscale.** Color and font are 100% swappable
tokens (identical architecture to the classic template). The default palette is a
neutral cream + espresso register that reads as premium *before* a brand color is
chosen — so any client, in any field, can adopt it.

## What's included

- 25 editorial section components covering every standard page
  (Home, About, Services, Contact, Booking, Journal/Blog, Legal)
- Accessible, WCAG-minded markup; progressive-enhancement scroll reveals
  (content is never hidden without JS)
- Mobile-responsive layouts
- Netlify Forms integration (contact + lead magnet)
- Blog system with generic starter essays
- SEO meta, Open Graph, JSON-LD schema, sitemap, robots.txt
- Google Analytics integration (configure per client)

## Getting started (local dev)

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

> Note: if the dev server ever shows `504 (Outdated Optimize Dep)` after a
> `npm run build`, restart it (`rm -rf node_modules/.vite && npm run dev`).
> The production build (`npm run build` + `npm run preview`) is unaffected.

## Per-client setup checklist

- [ ] `src/styles/global.css` — change the `@theme {}` tokens for the client brand
      (colors + fonts). Everything updates automatically.
- [ ] `src/config.yaml` — site URL, brand name, GA4 ID, SEO defaults
- [ ] `src/navigation.ts` — nav links, footer links, social, footnote
- [ ] `src/components/common/SchemaOrg.astro` — business/person JSON-LD fields
- [ ] `public/favicon.png` — client favicon
- [ ] `public/og-default.png` — 1200×630px branded OG image (referenced in config)
- [ ] All page copy — replace demo content in `src/pages/*`
- [ ] Demo photography — replace the Unsplash placeholder URLs with client images
- [ ] Netlify Forms — test submissions after deployment

## Project structure

```
src/
  assets/images/      — client photos
  components/
    blog/             — blog primitives (InlineCTA)
    common/           — Header, Footer, Layout meta, SectionWrapper, scripts
    sections/         — the 25 editorial page sections
    ui/               — Button
  content/blog/       — blog posts (.mdx)
  layouts/            — Layout, PageLayout, MarkdownLayout
  pages/              — all site routes
  styles/global.css   — design tokens (@theme) + editorial base styles/utilities
  config.yaml         — site-wide configuration
public/
  favicon.png
  robots.txt
netlify.toml
```

## Design tokens (the swappable knob-set)

All brand values live in `src/styles/global.css` under `@theme {}`. The **token
names are identical to the classic template** — only the values differ. To
rebrand, change the values:

- Colors: `primary`, `primary-dark`, `secondary`, `accent`, `accent-light`,
  `accent2`, `accent2-light`, surfaces (`bg-base`, `bg-subtle`, `bg-card`),
  text (`text-base`, `text-heading`, `text-muted`), borders
- Fonts: `--font-heading` (serif display), `--font-body` (sans)
- Shape: `--radius-button`, `--radius-card`, `--radius-input`
- Type scale: `--text-h1`…`--text-h4`

## Deploying to Netlify

1. Push to GitHub
2. Netlify → **Add new site → Import an existing project → GitHub**
3. Select the repo — build settings are pre-configured in `netlify.toml`
4. **Deploy site**

---

*Built on top of [AstroWind](https://github.com/arthelokyo/astrowind) (MIT License). See `LICENSE.md`.*
