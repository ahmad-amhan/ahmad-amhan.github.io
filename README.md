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

`pnpm build` produces `out/`. Any static host works: Cloudflare Pages, Netlify,
GitHub Pages, Vercel. Build command `pnpm build`, output directory `out`.

Set `NEXT_PUBLIC_SITE_URL` (for example `https://example.com`) in the host's
environment once there is a domain. It enables canonical URLs, the sitemap and
the website line on the CV.

## Other notes

- `public/og.png` is the social preview image (1200×630).
- `scripts/clean-photo.py` is how the backdrop lettering was removed from the
  portrait. See `docs/design.md` for the design decisions.
