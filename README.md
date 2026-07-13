# Emilo Labs

Emilo Labs is a technology institution and venture studio building digital trust, applied AI, security, identity & privacy systems, information infrastructure, and developer tools for global-scale products.

This repository contains the source for the Emilo Labs marketing/landing website (single-page React app built with Vite).

Website: https://emilo-labs.vercel.app/

Highlights
- Lightweight React + Vite single-page site
- Uses Three.js for visual/3D effects
- Deployed with Vercel (rewrites to index.html to serve SPA)

Tech stack
- React 19
- Vite
- Three.js
- Plain CSS for styling

Repository status
- package.json declares the project as `private: true` (this repo is not published to npm)

Getting started (local development)

Prerequisites
- Node.js 18+ (or a recent LTS)
- npm (or pnpm/yarn if you prefer — commands below use npm)

Install

```bash
npm install
```

Run dev server

```bash
npm run dev
# open the local dev server URL printed by Vite (usually http://localhost:5173)
```

Build for production

```bash
npm run build
# build output will be in the `dist/` folder by default
```

Preview production build locally

```bash
npm run preview
# serves the production build locally for verification
```

Vercel deployment

This repository includes a `vercel.json` file which rewrites all routes to `/index.html`, supporting client-side routing for the SPA. To deploy:
1. Connect this repository to Vercel.
2. Ensure the build command is `npm run build` and the output directory is `dist` (default for Vite).

Project layout (key files)
- `index.html` — base HTML with meta tags and SPA mount point
- `src/` — React application source
  - `src/main.jsx` — entry point
  - `src/EmiloLabs.jsx` — main React component for the site
  - `src/styles.css` — global styles
- `package.json` — scripts and dependencies
- `vercel.json` — rewrite rules for Vercel

Notes and suggestions
- Consider adding a LICENSE file if you want to clarify reuse and distribution terms.
- If you intend the site to be public-facing and discoverable, add meta/social tags (index.html already includes basic OG/Twitter tags).
- If you want CI for builds and previews, consider adding a GitHub Actions workflow or a Vercel preview integration.

Contributing

Contributions are welcome. Open issues or pull requests for content, accessibility, or performance improvements.

Contact
- GitHub: https://github.com/Emiloart
- Website: https://emilolabs.com/

