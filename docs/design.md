# Portfolio + CV — design

Date: 2026-11-23

## Intent

A personal site for Ahmad Amhan that a hiring manager or client can read in two
minutes and trust, plus an up-to-date CV as a PDF. The CV had fallen behind: it
did not mention GoVisual (co-founder, full-stack) or Bulbul (three Flutter apps).

## Goals

- One page, fast, works on a phone, light and dark.
- The site and the CV never disagree: both read `src/content/profile.ts`.
- Deployable for free on any static host (`next build` → `out/`).
- Every claim traces to the previous CV, Ahmad's own words, or a public listing.

## Non-goals

- No CMS, blog, contact form or analytics.
- No Arabic version yet. Content lives in one typed file so a second locale can be added.

## Anti-goals

- No invented numbers, testimonials or availability claims.
- No screenshots or internal material from employer or client repos. The product
  visuals are abstract drawings, not product screens.
- Private contact details (second phone number, home town, date of birth, diploma
  scans) never reach the deployed site or git.

## Approaches considered

1. **Next.js static export (chosen).** App Router + TypeScript + Tailwind v4,
   `output: "export"`. Same stack as GoVisual, free to host anywhere, and the CV is
   a route printed to PDF by headless Chrome.
2. **Plain HTML/CSS.** Smallest, but the CV and site would be two hand-kept copies.
3. **A site builder (Framer/Wix).** Fast, but no single source for the CV, a monthly
   fee for a custom domain, and it would not show front-end skill.

## Decisions

- **Content:** `src/content/profile.ts` is the only place facts live.
- **CV variants:** `cairo` is public (`/cv/cairo/`, `public/Ahmad_Amhan_CV.pdf`).
  Other variants live in git-ignored `content/cv-variants.local.json` and render only
  under `CV_PRIVATE=1`, which `pnpm cv` sets. The script deletes `out/` afterwards so
  a build containing a private variant cannot be deployed by accident.
- **CV format:** written for CV parsers (ATS and AI screening) first. Black on white,
  one column, Arial, no photo, no icons, standard section names (Summary, Work
  Experience, Projects, Skills, Education, Languages), contact details as plain text
  under the name. Section headings have no letter-spacing: spaced capitals extract
  from the PDF as "SU MMARY". The site carries the visual design; the CV does not.
- **Theme:** warm paper / ink with one orange accent; system theme by default, toggle
  saved in `localStorage`, applied before paint to avoid a flash.
- **Motion:** scroll reveals only, disabled under `prefers-reduced-motion`, and
  content is never hidden unless JS has confirmed it can reveal it.
- **Photo:** the event lettering behind the head was removed with
  `scripts/clean-photo.py`. Replace with a studio headshot when one exists.
- **Domain:** none yet. Set `NEXT_PUBLIC_SITE_URL` at deploy time; it drives
  canonical URLs, the sitemap and the website line on the CV.
