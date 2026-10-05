# Emilo Labs

Emilo Labs is a technology institution connecting research, experimental work, and products across connected digital systems.

This repository contains its public institutional website.

Website: https://emilo-labs.vercel.app/

Public routes
- `/`: institutional overview
- `/products`: product directory with individual detail routes
- `/research`: published work and research areas
- `/labs`: experiments and prototypes
- `/about`: institution, principles, and contact

Tech stack
- React 19 and TypeScript
- Vite 8
- Plain CSS
- Client-side routing with history and per-route metadata

Repository status
- package.json declares the project as `private: true` (this repo is not published to npm)

Getting started (local development)

Prerequisites
- Node.js 22+
- npm

Install

```bash
npm ci
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
- `src/App.tsx`: route table and shared shell
- `src/pages/`: route components
- `src/site-shared.tsx`: shared content, navigation, metadata, and components
- `src/styles.css`: theme and layout
- `vercel.json`: SPA route rewrite

Contact
- Website: https://emilolabs.com/
- Email: emilolabs@gmail.com

