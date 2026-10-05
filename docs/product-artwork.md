# Product thumbnails

The website uses local SVG thumbnails with a square aspect ratio and an 8px
corner radius. Text remains HTML below the image so names and descriptions stay
readable, selectable, and accessible at every screen size.

## Source and treatment

ShadeFast uses its existing official white mark from
`apps/mobile/assets/brand/shadefast_mark_white.svg`, copied without modifying its
geometry or color. The copy was checked byte-for-byte against the GitHub source
at revision `d8c8268`. CSS places it on black and sizes it to the thumbnail.

The other 16 assets are product-specific icon compositions using Lucide icons.
This treatment was selected by the owner after the image-generation service
returned a usage-limit error. These assets are functional illustrations, not
new official product logos, screenshots, or representations of a released UI.

| Asset | Main symbol | Supporting symbol | Product connection |
| --- | --- | --- | --- |
| `reach.svg` | Conversation windows | Lock | Private conversations and messaging |
| `hdip.svg` | Fingerprint | Verified credential | Identity and reusable credentials |
| `verifyflow.svg` | Checklist | Completed check | KYC flow measurement and decisions |
| `labguard.svg` | Shield | Lock | Device control and VPN security |
| `lendearn.svg` | Hand and coins | Exchange arrows | Peer lending and participation |
| `zkshade.svg` | Recovery key | Fingerprint | Cryptographic identity continuity |
| `utb.svg` | Radar | Source object | Continuous information monitoring |
| `scos-pro.svg` | Calendar | Task list | Coordination across calendars and tasks |
| `hyex.svg` | Exchange arrows | Wallet | Exchange and settlement workflows |
| `hsg-pro.svg` | Inspection eye | Warning document | Investigation of deceptive interactions |
| `spfs-pro.svg` | Wallet | Chart | Personal finance and analysis |
| `asl-pro.svg` | Code object | Scan boundary | Code and infrastructure inspection |
| `ransomware-dss.svg` | Warning document | Assessment list | Awareness and simulated security workflows |
| `ai-finance-tracker.svg` | Chart | Transactions | Spending analysis and expense tracking |
| `achievo.svg` | Verified achievement | Milestones | Reviewed evidence and achievement records |
| `zkshade-starknet.svg` | Recovery key | Continuity arrows | Earlier recovery prototype |

## Generation

Run `npm run generate:product-artwork` to reproduce the 16 icon compositions.
The script does not overwrite ShadeFast's official mark. Artwork definitions,
including individual colors, live in `scripts/generate-product-artwork.mjs`.
All website assets live in `public/products/` and are served locally.

The attempted image-generation prompt for Reach requested a small square,
restrained illustration of two conversation envelopes and a sealed clasp on
pale mint, with no text, fake app screens, or security certification claims.
No output was produced. No generated bitmap has been represented as delivered.

## Carousel behavior

- Six thumbnails fit across a wide desktop track, five on medium desktops,
  four on tablets, and three on mobile.
- Images keep square dimensions. Product names and one-sentence descriptions
  sit below them without truncation.
- Native horizontal scrolling supports touch swipes, trackpads, and scrolling
  a focused product into view.
- Previous and next buttons move one visible group at a time and stop at the
  first and last products. Their names are available to assistive technology.
- A focused track accepts Left, Right, Home, and End. All product links remain
  reachable with Tab and open their existing detail routes.
- Reduced motion disables animated scrolling. There is no autoplay.
- Paused and discontinued work appears on the product page, with its real
  status. The homepage shows Active and Coming Soon work.
