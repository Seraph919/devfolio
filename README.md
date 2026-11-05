# Ayoub Soudani — Portfolio

A personal software-engineering portfolio customized for **Ayoub Soudani**. Based on the visual structure of the open-source Quantalink project, with completely rewritten personal content, links, project data, SEO, contact details, and a new systems illustration.

## Pages

- `/` — introduction, featured projects, skills, and contact
- `/projects` — Guild Chat, DailyCode, Webserv, Store Studio, Inception and Minishell
- `/skills` — languages, backend, infrastructure, databases, and frontend learning
- `/about` — education, work and community timeline

## Run locally

Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open **http://localhost:9002**. For a production static build (the generated website is in `out/`):

```bash
npm run typecheck
npm run build
```

## Personalize further

- Project cards: `src/lib/projects-data.ts`
- Skills: `src/lib/skills-data.tsx`
- Timeline: `src/lib/journey-data.ts`
- Hero and role: `src/components/profile-section.tsx`
- Contact/social links: `src/components/link-cards.tsx`
- Social/SEO: `src/lib/seo.ts` and `src/app/layout.tsx`
- Main theme: graphite/`#FFC300` tokens at the end of `src/app/globals.css`

The hero intentionally uses a **custom illustration**, not a stranger’s photo. Replace it with a real portrait later only if you want to.

The canonical site URL is currently `https://asoudani.dev`. Update `src/lib/seo.ts` and `public/robots.txt` if you deploy elsewhere. The native Next.js sitemap lives in `src/app/sitemap.ts`.


## GitHub Pages deployment

This repository exports a static Next.js site with `output: 'export'`.
The workflow at `.github/workflows/deploy.yml` runs `npm ci`, builds the site, and uploads `out/` to GitHub Pages whenever `main` changes.

In GitHub repository settings, select **Pages → Source → GitHub Actions**.
Do not commit `out/` or `.next/` to the repository.

The repo has no server-side features, Vercel analytics, Lottie animations, shadcn UI generator, or separate sitemap package.

## License / attribution

This project adapts the GPL-3.0-licensed **Quantalink** source by Akshay K Rooben Abraham. The GPL-3.0 license is preserved in `LICENSE`. Details in `CREDITS.md`. This customized version is distributed under GPL-3.0.

## Latest design update

- Graphite grey and `#FFC300` yellow palette (including canvas particles, iconography, skill icons, favicons and social preview).
- Removed the interactive terminal playground and terminal imitation from the homepage.
- Skill marquees use duration per card, so short categories no longer move much slower than the longer homepage showcase. Category rows use the `fast` speed preset.
