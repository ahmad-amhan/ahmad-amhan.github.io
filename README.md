# Ahmad Amhan — portfolio and CV

One-page portfolio plus a printable CV, built with Next.js (App Router),
TypeScript and Tailwind CSS. It exports to plain static files.

## Commands

```bash
pnpm dev        # http://localhost:3000
pnpm build      # static site in out/
pnpm lint
pnpm typecheck
pnpm cv         # regenerate the CV PDFs (needs Chrome or Edge installed)
pnpm og         # regenerate public/og.png, the social preview image
```

## Editing content

Everything the site and the CV say lives in **`src/content/profile.ts`**.
Change it there, then run `pnpm cv` so the PDF matches.

- Web CV: `/cv/cairo/`
- Downloadable PDF: `public/Ahmad_Amhan_CV.pdf`

## CV variants

`pnpm cv` writes one PDF per variant to `cv-output/` (or to `--out <folder>`):

```bash
pnpm cv --out "C:/Users/you/Desktop/cv"
```

The public variant is `cairo`. Extra variants (a different phone number or
address) go in `content/cv-variants.local.json`, which is git-ignored; see
`content/cv-variants.example.json` for the shape. They are never part of a normal
`pnpm build`, so they never reach the deployed site.

`pnpm cv` deletes `out/` when it finishes. Run `pnpm build` again before deploying.

## Deploying

The site is published with GitHub Pages at <https://ahmad-amhan.github.io>.
Every push to `master` runs `.github/workflows/deploy.yml`, which lints, builds
and publishes `out/`. Nothing needs to be built by hand.

The workflow sets `NEXT_PUBLIC_SITE_URL`, which enables canonical URLs, the
sitemap and the website line on the CV page. Change it there when the site moves
to its own domain.

`pnpm build` produces `out/`, so any other static host works too: build command
`pnpm build`, output directory `out`.

## Images

- `public/images/bulbul/` — screenshots from the Bulbul listings on the App Store.
- `public/images/govisual/` — screenshots of the public demo catalogs on govisual.info.
- `public/images/apps/` — app icons from the public store listings.
- `public/images/ahmad-amhan-portrait.jpg` — the original photo, cropped only.

Only public material goes here. Nothing from client or employer repos.

## Other notes

- `public/og.png` is the social preview image (1200×630); `pnpm og` rebuilds it.
- The first design is kept at the git tag `v1-first-design`.
- See `docs/design.md` for the design decisions.
