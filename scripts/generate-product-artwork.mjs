import { mkdir, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  ArrowLeftRight, BadgeCheck, CalendarCheck2, ChartNoAxesCombined,
  CircleCheck, FileWarning, Fingerprint, HandCoins, KeyRound,
  ListChecks, LockKeyhole, MessagesSquare, Radar, ScanEye,
  ScanLine, ShieldCheck, SquareCode, Wallet,
} from "lucide-react";

const output = new URL("../public/products/", import.meta.url);

// Symbols describe documented product functions, not new brand identities.
const artwork = [
  { slug: "reach", icon: MessagesSquare, detail: LockKeyhole, bg: "#e4f0eb", ink: "#245343", accent: "#bd6050" },
  { slug: "hdip", icon: Fingerprint, detail: BadgeCheck, bg: "#e7edfa", ink: "#253d79", accent: "#4e796b" },
  { slug: "verifyflow", icon: ListChecks, detail: CircleCheck, bg: "#f7e9ed", ink: "#743a51", accent: "#447a68" },
  { slug: "labguard", icon: ShieldCheck, detail: LockKeyhole, bg: "#e7efeb", ink: "#254b40", accent: "#8262a7" },
  { slug: "lendearn", icon: HandCoins, detail: ArrowLeftRight, bg: "#fcf0d8", ink: "#705326", accent: "#4f7265" },
  { slug: "zkshade", icon: KeyRound, detail: Fingerprint, bg: "#ede9f6", ink: "#513b78", accent: "#528878" },
  { slug: "utb", icon: Radar, detail: SquareCode, bg: "#e5f0f4", ink: "#2c596d", accent: "#bd624b" },
  { slug: "scos-pro", icon: CalendarCheck2, detail: ListChecks, bg: "#f6ece3", ink: "#745236", accent: "#4c8070" },
  { slug: "hyex", icon: ArrowLeftRight, detail: Wallet, bg: "#e5eee9", ink: "#315745", accent: "#ad6552" },
  { slug: "hsg-pro", icon: ScanEye, detail: FileWarning, bg: "#f7e8e5", ink: "#7b4037", accent: "#477b72" },
  { slug: "spfs-pro", icon: Wallet, detail: ChartNoAxesCombined, bg: "#edeaf4", ink: "#5b437e", accent: "#517d63" },
  { slug: "asl-pro", icon: SquareCode, detail: ScanLine, bg: "#e5eff0", ink: "#285c5e", accent: "#94624d" },
  { slug: "ransomware-dss", icon: FileWarning, detail: ListChecks, bg: "#faf0d9", ink: "#775a27", accent: "#4b7869" },
  { slug: "ai-finance-tracker", icon: ChartNoAxesCombined, detail: HandCoins, bg: "#e8f0e2", ink: "#49653c", accent: "#a56a55" },
  { slug: "achievo", icon: BadgeCheck, detail: ListChecks, bg: "#eaeef8", ink: "#3e5080", accent: "#9b6650" },
  { slug: "zkshade-starknet", icon: KeyRound, detail: ArrowLeftRight, bg: "#ececf0", ink: "#535365", accent: "#767689" },
];

function iconMarkup(icon, size, color, strokeWidth) {
  return renderToStaticMarkup(createElement(icon, { size, color, strokeWidth }));
}

await mkdir(output, { recursive: true });
for (const item of artwork) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
  <rect width="320" height="320" fill="${item.bg}"/>
  <path d="M72 246H250" stroke="${item.ink}" stroke-opacity=".16" stroke-width="2"/>
  <g transform="translate(76 66)">${iconMarkup(item.icon, 168, item.ink, 1.4)}</g>
  <rect x="211" y="204" width="62" height="62" rx="8" fill="${item.bg}" stroke="${item.accent}" stroke-width="2"/>
  <g transform="translate(224 217)">${iconMarkup(item.detail, 36, item.accent, 1.8)}</g>
</svg>
`;
  await writeFile(new URL(`${item.slug}.svg`, output), svg);
}
console.log(`Generated ${artwork.length} product thumbnails in public/products.`);
