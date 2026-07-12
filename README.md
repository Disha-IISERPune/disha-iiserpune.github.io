# Disha — IISER Pune

Website for **Disha**, the student-led social-outreach organisation of IISER Pune
(since 2010). Built with [Astro](https://astro.build), deployed to GitHub Pages.

All content from the old WordPress site (`iiserpunedisha.wordpress.com`) has been
migrated: pages, blog posts (2012–2022), images, newspaper clippings, and PDFs
(Pahal issues, the constitution) are all served locally — nothing depends on the
old site staying up.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

| What | Where |
|------|-------|
| Blog posts | `src/content/blog/*.md` |
| Programme pages | `src/content/programs/*.md` |
| Wiki pages | `src/content/wiki/*.md` |
| Team list | `src/pages/team.astro` (arrays at the top) |
| Home / About / Contact | `src/pages/*.astro` |
| Photos | `public/images/` (gallery picks up photos automatically) |
| PDFs & old uploads | `public/uploads/` |

Every markdown file needs frontmatter:

```markdown
---
title: "My Page"
date: 2026-07-12          # blog only
section: "Organisation"   # wiki only — creates sidebar groups automatically
summary: "One-liner"      # programs only — shown on cards
---
```

## Deploying

Push to `main` — the GitHub Actions workflow (`.github/workflows/deploy.yml`)
builds and publishes to GitHub Pages. In the repo settings, set
**Pages → Source → GitHub Actions** once.

If the site will live at `https://<org>.github.io/<repo>/` instead of the root,
set `base: '/<repo>'` in `astro.config.mjs`.

## Design

Warm, earthy palette drawn from the Warli-art logo (terracotta, ochre, cream),
with `Baloo 2` for headings and `Mukta` for body text (both support Devanagari).
Global styles: `src/styles/global.css`. Dark mode follows the system preference.

The private contact-form submissions from the WordPress export
(`custom/feedback/`) were deliberately **not** migrated — they contain personal
data (names, emails, IPs).
