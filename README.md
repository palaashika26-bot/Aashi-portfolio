# Aashika Pal — Developer Portfolio

A personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Static-export ready for **GitHub Pages**, Vercel, Netlify, or any static host.

---

## ✨ Features

- **Cinematic Hero** — gradient shimmer headline, animated typing subtitle, magnetic CTAs, trust row, scroll indicator
- **Glass Navbar** — transparent → glass on scroll, shrinking pill, animated active-link indicator, mobile menu
- **Featured Projects** — 3D tilt cards with cursor spotlight, tech badges, actions
- **Project Case Studies** — dedicated pages for each project
- **Experience Timeline** — animated on scroll
- **Skills Grid** — 6 categories, icon cards with hover glow
- **About** — personal story, stats, interests
- **Certifications**, **Education**, **Contact form**
- **Shared premium background** — near-black canvas + subtle radial blue/purple glows + faint grid + vignette
- **Micro-interactions everywhere** — hover lift, border transition, magnetic buttons, blur-reveal
- **Fully responsive**, **accessible**, **static-export compatible**

## 🧰 Tech Stack

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- `next/font` (Space Grotesk, Inter, JetBrains Mono)

## 🚀 Getting Started

```bash
# 1. Install deps
pnpm install    # or npm install / yarn

# 2. Run dev server
pnpm dev        # → http://localhost:3000

# 3. Type-check & lint
pnpm typecheck
pnpm lint

# 4. Static export (produces ./out)
pnpm build
```

The `out/` folder can be dropped on any static host.

## 🌐 Deploying to GitHub Pages

If your repo is `https://github.com/<user>/<repo>` (project page), set the base path:

```bash
NEXT_PUBLIC_BASE_PATH="/<repo>" pnpm build
```

Then push the contents of `out/` to the `gh-pages` branch (or configure GitHub Actions).

For a user page (`<user>.github.io`), leave `NEXT_PUBLIC_BASE_PATH` unset.

### One-shot GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: NEXT_PUBLIC_BASE_PATH="/${{ github.event.repository.name }}" npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 📁 Project Structure

- `/data` — all portfolio content (projects, skills, experience, stats)
- `/components` — reusable UI and section components
- `/app` — Next.js App Router pages and layouts

## 🎨 Design Tokens

Colors, radii, and shadows are defined as CSS variables in `styles/tokens.css` and consumed by `tailwind.config.ts`.
