# eleganto

Portfolio site for **neverocheg** — built with Astro 5, Tailwind CSS, and Lucide icons. Premium dark theme, minimal, animated, and ready for GitHub Pages.

## Stack

- [Astro](https://astro.build/) v5 — static site generator
- [Tailwind CSS](https://tailwindcss.com/) v3 — utility-first CSS
- [lucide-static](https://lucide.dev/guide/packages/lucide-static) — SVG icons as strings

## File structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectsGrid.astro
│   │   ├── StackSection.astro
│   │   ├── Footer.astro
│   │   ├── MarqueeBanner.astro
│   │   └── Icon.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── data/
│   │   └── projects.ts
│   ├── utils/
│   │   └── icon.ts
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Local development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

### Option 1 — GitHub Actions (recommended)

The repository already includes `.github/workflows/deploy.yml`. To use it:

1. Push this repository to GitHub under the name `eleganto`.
2. Go to **Settings → Pages → Build and deployment**.
3. Select **GitHub Actions** as the source.
4. Push to the `main` branch — the workflow will build and deploy automatically.

Your site will be live at `https://neverjoskiy.github.io/eleganto/`.

### Option 2 — Manual deploy via `astro-gh-pages`

```bash
npm install
npm run build
npx astro-gh-pages
```

Or with the Astro CLI:

```bash
npx astro add github-pages
npm run deploy
```

## Customization

- **Projects**: edit `src/data/projects.ts`
- **Colors**: edit `tailwind.config.mjs` under `theme.extend.colors`
- **Meta / SEO**: edit `src/layouts/Layout.astro`
- **Base path**: if your repo name is different from `eleganto`, update `base` in `astro.config.mjs`

## License

MIT · crafted with care by neverocheg
