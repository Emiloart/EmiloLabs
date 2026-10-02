# AGENTS.md

Instructions for any AI agent (or human) working in this repository. Read this before editing anything.

## What this is

Emilo Labs' institutional website. Emilo Labs is a technology institution founded by Chukwuemeka Ilodubah (GitHub: Emiloart), operating across identity, privacy, security, intelligent systems, financial systems, and internet infrastructure. This site is the **parent-company discovery surface** for that work: its job is findability and clarity, not conversion. It is explicitly not a marketing site, not a SaaS landing page, and not a portfolio.

Reference model: Alphabet's relationship to Google, or OpenAI's relationship to its products. The site should let a visitor understand what Emilo Labs is and reach any product or publication in a small number of clicks, without being sold to.

## Stack

- React 19 + TypeScript, strict mode (`tsconfig.json` has `strict: true` and most additional strictness flags on)
- Vite 8 (no Next.js, no Astro — do not propose a framework migration to solve an IA problem)
- Three.js for the background scene (`LiveNetworkScene` in `src/site-shared.tsx`)
- Plain CSS (`src/styles.css`), no Tailwind, no CSS-in-JS
- Real client-side routing via a hand-rolled `useRoute`/`normalizePath`/`usePageMeta` system in `site-shared.tsx` — this already gives real URLs, per-page `<title>` and meta tags, and `popstate` support. It is not a stub. Do not replace it with React Router without a reason beyond "real routing."
- Deployed on Vercel; `vercel.json` rewrites all paths to `index.html` so the SPA router can take over
- `npm run build` runs `tsc --noEmit` before `vite build` — a type error fails the build, which is intentional

## File layout

```
src/
  main.tsx            entry point, mounts <EmiloLabsWebsite />
  App.tsx             route table (ROUTES), Navbar + page + Footer shell
  site-shared.tsx      ALL shared components, data arrays, hooks, and the route/meta system
  pages/
    HomePage.tsx, AboutPage.tsx, ResearchPage.tsx, ProductsPage.tsx,
    TechnologyPage.tsx, InsightsPage.tsx, CareersPage.tsx, PressPage.tsx,
    ContactPage.tsx    one file per route, each just composes components from site-shared
```

`site-shared.tsx` is large and intentionally the single source of truth for data (`PRODUCT_TIERS`, `RESEARCH_AREAS`, `RESEARCH_TRACKS`, `TECHNOLOGY_AREAS`, `ECOSYSTEM_MARKS`, `INSIGHTS`, `CAREER_PATHS`, `PRINCIPLES`, `NAV_LINKS`, `FOOTER_GROUPS`, `PAGE_META`) alongside the components that render them. When adding a new fact (a product, a research track, a publication), edit the array in `site-shared.tsx`, not a page file.

## Information architecture — current direction, mid-migration

The site is actively being restructured from a conventional multi-page corporate layout (Home/About/Research/Technology/Products/Insights/Careers/Press/Contact — 9 routes) toward a smaller **institutional index** model. Treat the following as the target state, not yet the committed state. Check `src/App.tsx`'s `ROUTES` object for what's actually live before assuming either state.

Target: 5–6 routes, content-primitive driven.

```
/              institutional index — one-sentence mission, product index, research preview
/products      directory, grouped by status (Active / Coming Soon), not by "featured"
/products/:slug   NOT YET BUILT — individual product detail page
/research      Published work (real, with links out) ABOVE Active Research (investigation
               tracks, not yet publications) — these are visually and semantically distinct
/research/:slug   NOT YET BUILT — individual publication/track detail page
/about         institution + founder + contact + a 1–2 sentence technology summary.
               Folds in what was /press, /careers (unless there are real open roles),
               /contact (email only, no form), and /technology (cut as a standalone route)
```

Routes being removed or folded as this migration lands: `/technology`, `/insights` (renamed and reframed as `/research`), `/careers`, `/press`, `/contact`. Do not add new standalone routes without checking whether the content belongs inside this smaller set instead.

## Content rules — read before writing any copy

These rules came out of a long iterative process and are not arbitrary style preferences. Follow them exactly.

### No em dashes, anywhere

Not in UI copy, not in code comments meant for humans, not in commit messages. Before committing any copy change, run:
```bash
grep -rn "—" src/
grep -rn "–" src/
```
Both must return nothing. This has regressed multiple times via copy pasted from draft documents — check every time.

### No overclaiming, no unproven positioning

- Never describe Emilo Labs as "AI infrastructure" company, a "trust infrastructure" company, or any single-domain label. It spans identity, privacy, security, intelligent systems, finance, and internet infrastructure — do not narrow the hero or origin copy to fit one of these.
- Never write belief-language ("we believe," "we exist because X deserves Y," "our purpose is to define the foundation of..."). Write from observation and necessity, not conviction. Test: swap "Emilo Labs" for any other serious tech org's name in the sentence — if it still reads coherently and specifically, it's good; if it could describe any company, rewrite it.
- The origin/mission copy should not enumerate a fixed domain list (e.g. "Identity. Privacy. Security. Intelligence. Finance.") as a tag stack in the hero — that caps scope instead of expressing it. State function, not category.
- Do not reference grant programs, funding status, or investor positioning anywhere on this site.
- "Concept"-stage products are labeled **"Coming Soon"**, not "Concept" — Concept reads unfinished; Coming Soon reads planned.
- Product cards never link to their GitHub repo. A dedicated Open Source / GitHub section on the parent site has been explicitly removed — it reads as "solo developer" rather than "institution." Do not re-add it.

### Research vs. Insights — this distinction matters

`/research` must separate **Published** work (the four real Medium articles below, with real publish dates, reading times, and cover images, linking out to `emiloart.medium.com`) from **Active Research** (the `RESEARCH_TRACKS` array — these are open investigation questions, not finished publications, and must be visually subordinate and clearly labeled as ongoing). Do not treat `RESEARCH_TRACKS` entries as if they were articles, and do not invent placeholder "Planned" publications — the `INSIGHTS` array previously contained six fictional placeholder rows (all status "Planned"/"Template"/"In development") that were mistaken for real content; replace these with the real four below rather than reintroducing placeholders.

The four confirmed published pieces (verify against source before reusing if this file is more than a few months old — Medium URLs and metadata can change):

| Title | Date | Reading time | Medium slug |
|---|---|---|---|
| The Myth of Useless Data | Jul 1, 2026 | 20 min | `the-myth-of-useless-data-ec41adde9072` |
| Identity Proofing as a Trust System | Jun 29, 2026 | 31 min | `identity-proofing-as-a-trust-system-failure-modes-confidence-and-the-future-of-digital-identity-c25f655fef5f` |
| Cognitive Consent | Jun 27, 2026 | 12 min | `cognitive-consent-f46ae290e06d` |
| The Internet Doesn't Have a Privacy Problem. It Has a Verification Problem. | Jun 23, 2026 | 4 min | `the-internet-doesnt-have-a-privacy-problem-it-has-a-verification-problem-ceb08b22c04a` |

All four are at `https://emiloart.medium.com/<slug>`. Cover images are hosted on `miro.medium.com` — fetch the live page's `og:image` meta tag rather than hardcoding a CDN URL, Medium's image URLs can be regenerated.

### Pills and tags — strict policy

A pill/chip/badge must be either a **status indicator** (Active, Coming Soon, Published, Active Investigation — one per card, max) or an **interactive filter control**. Nothing else qualifies:
- No decorative section-eyebrow pills
- No per-card category tags (category becomes a grouping heading instead, e.g. "Identity" as a section header, not a chip on every card under it)
- No tech-stack tags on product cards
- No "ecosystem partner" logo strip presenting tools-used (React, Vite, Supabase, etc.) as if they were trust signals — this was flagged as noise and is a cut candidate (`ECOSYSTEM_MARKS` / `CredibilityBand`)

If you're about to add a pill, ask: is this a status, or is this decoration restating what the typography should already be communicating through hierarchy? If decoration, don't add it — fix the type scale instead.

### Visual theme — do not reintroduce a multi-stop gradient

Earlier iterations used a four-stop background gradient (navy → navy-soft → teal-deep → teal) that was explicitly rejected as looking "childish" / candy-stripe. Current approach: a single clean fade from navy (header/hero) to white (`--field: #ffffff`) at a fixed pixel offset in `.site-shell`'s `background`, then plain white (or `--field-deep`, a near-white grey, for card fills) for the rest of the page, navy again only in the footer. Do not add intermediate color stops. Palette tokens live in `:root` in `src/styles.css`:

```
--navy: #06015e        header/hero/footer background
--field: #ffffff        default page background below the hero
--field-deep: #f3f4f1   card fill on the white field (not pure white, so cards read as cards)
--accent-border: #ffa3ff   borders — pink
--accent-button: #77a174  primary button fill — sage green
--ink: #122623           body text on light backgrounds
```

Check contrast before changing any of these. Pink border on teal and sage button on teal were both previously below WCAG AA (~1.1:1 and ~1.8:1) until fixed against the correct backgrounds — if you reintroduce a teal/colored field background anywhere, recheck every foreground color against it, don't assume prior contrast fixes still hold.

## Workflow

- This repo's `main` branch is the live production site via Vercel. Do not push directly to `main` for anything beyond trivial fixes — use a feature branch and a PR so a Vercel preview deployment can be checked first.
- When editing `site-shared.tsx`, confirm you're reading the actual current branch content before writing — it has been rewritten substantially multiple times across this project's history and stale assumptions about its contents are a recurring failure mode.
- Prefer `str_replace`/targeted diffs over full-file rewrites when the change is small; this file has a lot of near-duplicate card/grid CSS classes and large rewrites risk silently reintroducing a removed rule.
