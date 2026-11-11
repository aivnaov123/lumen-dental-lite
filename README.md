# Lumen Dental Lite — free Next.js template for dental & medical clinics

A clean, fast, config-driven website for a clinic, built with **Next.js 16, TypeScript and Tailwind CSS 4**. Edit a few config files, drop in your photos, deploy. MIT licensed.

**Live demo of the full version:** https://lumen-dental-demo-brown.vercel.app

| | Lite (this repo, free) | Full version |
| --- | --- | --- |
| Home, Services, Team, Contact, Privacy, Terms, 404 | ✅ | ✅ |
| All copy in config files, no component edits | ✅ | ✅ |
| SEO: metadata, Open Graph image, sitemap, robots, schema.org | ✅ | ✅ |
| Responsive, accessible, Lighthouse 90+ | ✅ | ✅ |
| **Online booking** (calendar, slots, validation, email/webhook delivery) | — | ✅ |
| **Service detail pages** ×9 (steps, FAQ, price breakdown) | — | ✅ |
| **Doctor profile pages** | — | ✅ |
| **Before/after gallery** with sliders | — | ✅ |
| **Pricing & financing** page | — | ✅ |
| **Dark mode** | — | ✅ |
| **Second language** (Bulgarian) with localised URLs | — | ✅ |
| Support + 12 months of updates | — | ✅ |

→ **[Get the full version](https://lumentemplates.lemonsqueezy.com/checkout/buy/966fe8b9-7a0b-4ef9-820d-c9344f90cb87)** · [Live demo](https://lumen-dental-demo-brown.vercel.app)

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires Node 20.18 or newer (22 LTS recommended).

## Make it yours

| What | Where |
| --- | --- |
| Clinic name, URL, phone, email, address, rating, map, hero image | `src/config/clinic.ts` |
| Tagline, description, opening hours, navigation, stat tiles | `src/content/en/site.ts` |
| Treatments (name, blurb, price, category) | `src/content/en/services.ts` |
| Doctors | `src/content/en/team.ts` |
| Reviews | `src/content/en/reviews.ts` |
| Every heading, label, button and message | `src/content/en/copy.ts` |
| Colours, fonts, radius | `src/app/globals.css` (`:root` block) and `src/lib/fonts.ts` |
| Logo | `src/components/layout/logo.tsx` and `src/app/icon.svg` |

### Photos
Put images in `public/images/` and reference them from the config:
- `hero.jpg` — home page hero (`heroImage` in `clinic.ts`)
- `team/<slug>.jpg` — doctor portraits (`image` field in `team.ts`)

Until an image exists, a labelled placeholder is shown.

### Site URL
Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) so the sitemap, robots and social preview use your domain.

## Deploy

Push to GitHub and import the repo on Vercel or Netlify — Next.js is auto-detected, no settings needed. Or `npm run build && npm start` on any Node host.

## Project structure

```
src/
  app/[locale]/      pages (home, services, team, contact, privacy, terms, 404)
  components/        layout/ shared/ home/ services/ team/
  config/            clinic.ts — shared clinic details
  content/en/        all text and data
  i18n/              routing (English only in Lite)
  lib/               fonts, helpers
  types/             content types
```

## License
MIT — free for personal and commercial use. The footer credit link can be removed; keeping it is appreciated.

Demo photos are from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license) — replace them with your clinic's own photos before going live.

Built by Angel Ivanov · angelivanovvv49@gmail.com
