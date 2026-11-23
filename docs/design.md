# Portfolio + CV — design

Last updated: 2026-11-23 (second design)

## Intent

A personal site for Ahmad Amhan that a hiring manager or client can read in two
minutes and trust, plus an up-to-date CV as a PDF.

## Goals

- One page, fast, works on a phone, dark by default with a light theme.
- The site and the CV never disagree: both read `src/content/profile.ts`.
- Deployable for free on any static host (`next build` → `out/`).
- Every claim traces to the previous CV, Ahmad's own words, his own commits, or a
  public listing. Skills he directs but does not practise say so.

## Non-goals

- No CMS, blog, contact form or analytics.
- No Arabic version yet. Content lives in one typed file so a second locale can be added.

## Anti-goals

- No invented numbers, testimonials or availability claims. The hero numbers are
  computed from the content arrays (`stats()` in `profile.ts`), never typed in.
- No material from employer or client repos. Images are public only: store-listing
  screenshots and icons, and GoVisual's public demo catalogs.
- Private contact details (second phone number, home town, date of birth, diploma
  scans) never reach the deployed site or git.

## Why there was a second design

The first design (git tag `v1-first-design`) used a cream background, a terracotta
accent, serif-italic words inside sans headings and outlined cards. Ahmad found it
traditional and too close to the Claude website. All four cues are gone.

## Visual direction

- **Identity:** dark-first, bold grotesque display type (Bricolage Grotesque), one
  acid-lime accent. On the light theme the accent becomes a highlighter stroke under
  dark text, so emphasis reads in both themes.
- **Mobile-first identity:** on phones the navigation is a bottom dock with icons,
  like an app's tab bar. Featured projects show real screens in phone frames.
- **Motion:** headline words rise in, a role ticker, drifting glows, a dot grid and
  card glow that follow the pointer, a portrait that tilts, count-up numbers, moving
  phone galleries, a line that draws through the approach steps, a timeline rail that
  fills on scroll, a rotating border on the contact card, and a scroll progress bar.
  All of it stops under `prefers-reduced-motion`, and with JavaScript off every word
  and image is still visible.
- **Keyframe names:** `spin` and `pulse` belong to Tailwind. Ours are `ring-sweep`,
  `dot-pulse` and `phone-float`; reusing Tailwind's names silently swaps the animation.

## Decisions

- **Content:** `src/content/profile.ts` is the only place facts live.
- **CV format:** written for CV parsers (ATS and AI screening) first. Black on white,
  one column, Arial, no photo, no icons, standard section names, contact details as
  plain text under the name, store links as underlined labels. Section headings have
  no letter-spacing: spaced capitals extract from the PDF as "SU MMARY". The site
  carries the visual design; the CV does not.
- **CV variants:** `cairo` is public (`/cv/cairo/`, `public/Ahmad_Amhan_CV.pdf`).
  Other variants live in git-ignored `content/cv-variants.local.json` and render only
  under `CV_PRIVATE=1`, which `pnpm cv` sets. The script deletes `out/` afterwards so
  a build containing a private variant cannot be deployed by accident.
- **Photo:** the original photo, cropped and otherwise untouched, shown small enough
  that it is not enlarged. Two attempts to erase the event lettering behind the head
  left artefacts, so retouching was dropped.
- **Store links:** from the apps sheet linked in the previous CV; each was checked live.
- **Footer:** no "Built with Next.js" line. The toolbox already lists it, and a footer
  credit says nothing about the person.
- **Domain:** none yet. Set `NEXT_PUBLIC_SITE_URL` at deploy time; it drives
  canonical URLs, the sitemap and the website line on the CV.
