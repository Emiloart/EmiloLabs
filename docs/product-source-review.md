# Product content review

Reviewed on October 5, 2026 against Emiloart's GitHub account, including the
authorized private ShadeFast and HDIP repositories. Sources are editorial
references, not links for public product cards.

## Public presentation

- Use `Products` and `All products` for navigation. Avoid portfolio language.
- `Active` identifies ongoing product work. It does not assert public availability.
- Product details state the implementation stage separately from project status.
- Keep short descriptions to one sentence that names a concrete function.
- Keep Achievo and ZKShade Starknet in earlier work, preserving their detail URLs.
- Never turn repository presence, a specification, or a prototype into a release claim.
- Existing official product marks take priority over newly created artwork.
- Product illustrations represent functions. They are not official logos or screenshots.

## Evidence record

| Product | Repository and reviewed revision | Evidence used | Presentation |
| --- | --- | --- | --- |
| ShadeFast | `shadeFast`, `d8c8268` | README, mobile brand assets, Android release evidence | Active. Pseudonymous social feeds, communities, polls, private rooms. No complete-anonymity or universal-encryption claim. |
| HDIP | `HDIP`, `c780ec5` | README Phase 1 and Phase 2 foundations | Active. Reusable credentials, selective disclosure, identity lifecycle and recovery work. No production-readiness claim. |
| VerifyFlow | `VerifyFlow`, `7e113e3` | README provider adapter loop and launch path | Active. KYC measurement, provider decisions, re-checks and upgrades. Local mock-provider implementation. |
| Reach | `Reach`, `584d7a0` | README, service structure | Active development. Private messaging and pseudonymous communities. Encryption is an architectural direction, not an audited release claim. |
| LabGuard | `labguard`, `6a5ffbf` | README current status and release readiness | Active internal development. VPN, device registry and recovery. Production provisioning remains unfinished. |
| LendEarn | `lendearn`, `84bf2e8` | Repository description and web implementation | Active project. Peer lending with referral flows on Shardeum. Public release status is not established by the repository. |
| ZKShade | `zkshade`, `33fee53` | README, Leo recovery program, testnet deployment | Coming Soon. Aleo recovery primitive. Full ShadeFast session restoration is not yet implemented. |
| UTB | `UTB`, `fa6a4f7` | README and build specification | Coming Soon. Continuous source monitoring, connected research, briefs and alerts. Specification does not establish running capabilities. |
| SCOS Pro | `SCOSpro`, `00f3b0e` | README and build plan | Coming Soon. Email, calendar and task coordination with scoped permissions and approval controls. |
| HYEX | `HYEX`, no commits | Repository description only | Coming Soon. Planned crypto-to-fiat exchange, custody and escrow. No implementation claims. |
| HSG Pro | `HSGpro`, no commits | Repository description only | Coming Soon. Planned deception detection. No detection performance claims. |
| SPFS Pro | `SPFSpro`, no commits | Repository description only | Coming Soon. Planned AI-assisted personal finance. Detailed product scope is still required. |
| ASL Pro | `ASLpro`, no commits | Repository description only | Coming Soon. Planned vulnerability scanning, prioritization and remediation. No claim that automatic fixes currently run. |
| Ransomware DSS | `ransomware_dss`, `3959460` | README simulation and assessment components | Coming Soon. Simulated scanning, awareness and team assessments. Do not describe this as a working ransomware detection engine. |
| AI Finance Tracker | `ai-finance-tracker`, `0dc7c3c` | README and initial Flask/database foundation | Coming Soon. Expense tracking, budgeting and spending analysis as the project scope. |
| Achievo | `achievo`, `ea7947d` | README program/evidence/reviewer loop and explicit pause | Paused. Retain achievement credentials and evidence workflow without presenting ongoing development. |
| ZKShade Starknet | `Zkshade-starknet`, `3d819d7` | README explicitly marked discontinued | Discontinued. Retain the prototype record. Current ZKShade work uses Aleo. |

## Other repositories reviewed

The account also contains client websites, personal sites, forks, and initial
scaffolds. These are not automatically Emilo Labs products. Baeruthys is a store
scaffold with a separate design branch; its institutional product scope and status
need confirmation before inclusion. Celetixo remains in Labs as an experiment in
coordinated software-engineering agents.

## Information still required

- Confirm public access URLs and release stages for each Active project.
- Supply the approved product scope for HYEX, HSG Pro, SPFS Pro and ASL Pro.
- Supply approved marks for projects that currently have no product logo asset.
- Confirm any status changes after this source review before updating public labels.

The source URLs follow `https://github.com/Emiloart/<repository>`. Private source
material is deliberately not reproduced here beyond the product-level facts used
by the website.

## Validation

The final production build was checked on October 5, 2026:

- `npm run build` passed TypeScript checking and Vite compilation.
- 115 browser cases covered the five public routes, all 17 product detail routes,
  and the unavailable-page route at 1440, 1024, 768, 390, and 320 pixels.
- All product thumbnails loaded, remained square, and had unclipped names and
  descriptions. Mobile tracks displayed three complete thumbnails.
- Arrow controls, first/last boundaries, Home/End, focus on an offscreen product,
  a dispatched touch swipe, detail navigation, and browser Back passed.
- Reduced-motion scrolling returned immediately to the first products.
- Main content contained no product links to GitHub and none of the rejected
  headings (`What exists`, `Full portfolio`, or `Also in the portfolio`).
- Desktop and mobile screenshots were inspected. Existing publication images
  were also checked for successful browser loading.
- The copy scan found no em dashes or en dashes in source, scripts, or documents.
- Build dependencies were patched within their existing version families:
  PostCSS 8.5.29, nanoid 3.3.20, and source-map-js 1.2.2. `npm audit` reported
  zero vulnerabilities after the update.
