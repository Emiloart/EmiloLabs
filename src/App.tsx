import { useEffect } from "react";
import { AmbientLayer, Footer, LiveNetworkScene, Navbar, usePageMeta, useRoute } from "./site-shared";
import { HomePage, AboutPage, ResearchPage, TechnologyPage, ProductsPage, InsightsPage, CareersPage, PressPage, ContactPage } from "./pages";

const ROUTES = {
  "/": HomePage,
  "/about": AboutPage,
  "/research": ResearchPage,
  "/technology": TechnologyPage,
  "/products": ProductsPage,
  "/insights": InsightsPage,
  "/careers": CareersPage,
  "/press": PressPage,
  "/contact": ContactPage,
};

export default function EmiloLabsWebsite() {
  const [currentPath, navigate] = useRoute();
  const ActivePage = ROUTES[currentPath] || HomePage;

  usePageMeta(currentPath);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.head.removeChild(link);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="site-shell">
      <LiveNetworkScene />
      <AmbientLayer />
      <style>{`
        :root {
          --bg: #06015e;
          --bg-2: #06015e;
          --panel: #06015e;
          --panel-strong: #06015e;
          --text: #f4f7f5;
          --soft: #b9c5c2;
          --muted: #b9c5c2;
          --line: #ffa3ff;
          --line-strong: #ffa3ff;
          --blue: #77a174;
          --blue-2: #6fded3;
          --green: #77a174;
          --amber: #ffa3ff;
          --violet: #ffa3ff;
          --dark-text: #122623;
          --dark-muted: #35504b;
          --radius: 8px;
          --sans: "IBM Plex Sans", system-ui, sans-serif;
          --mono: "IBM Plex Mono", monospace;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          background: var(--bg);
          animation: gridDrift 22s linear infinite;
        }

        .site-shell::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.42;
          background: var(--bg);
          animation: circuitPhase 18s linear infinite;
        }

        .ambient-circuit span {
          position: absolute;
          left: var(--left);
          top: var(--top);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--bg);
          box-shadow: 0 0 18px rgba(111,222,211,0.32);
          animation: streamFall 8.5s linear infinite;
          animation-delay: var(--delay);
        }

        .container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .narrow {
          max-width: 850px;
        }

        .nav,
        .section,
        .hero-section,
        .footer {
          position: relative;
          z-index: 2;
        }

        .section,
        .hero-section {
          scroll-margin-top: 86px;
        }

        .nav {
          position: fixed;
          inset: 0 0 auto;
          z-index: 20;
          padding: 14px 0;
          transition: padding 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .nav-scrolled {
          padding: 9px 0;
          background: var(--bg);
          border: 1px solid rgba(111,222,211,0.38);
          box-shadow: 0 0 32px rgba(119,161,116,0.32);
        }

        .secondary-button {
          color: var(--soft);
          background: var(--bg);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.24);
          backdrop-filter: blur(18px);
        }

        .light-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--bg);
          transform: translateX(-120%);
          animation: panelSweep 8s ease-in-out infinite;
          pointer-events: none;
        }

        .institution-preview {
          min-height: 500px;
          max-width: 760px;
          width: 100%;
          justify-self: end;
          padding: 18px;
        }

        .panel-topline {
          justify-content: flex-start;
          width: 100%;
          color: var(--muted);
        }

        .panel-topline span:first-child {
          color: var(--blue-2);
        }

        .institution-graph {
          position: relative;
          z-index: 2;
          height: 410px;
          margin-top: 18px;
          overflow: hidden;
        }

        .institution-links {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .institution-links line {
          stroke: rgba(111,222,211,0.32);
          stroke-width: 0.35;
          filter: drop-shadow(0 0 5px rgba(111,222,211,0.72));
          transition: stroke 240ms ease, stroke-width 240ms ease, opacity 240ms ease, filter 240ms ease;
          animation: linePulse 5.8s ease-in-out infinite;
        }

        .institution-links line.is-active {
          stroke: rgba(130,220,255,0.95);
          stroke-width: 0.62;
          opacity: 1;
          filter:
            drop-shadow(0 0 6px rgba(111,222,211,0.95))
            drop-shadow(0 0 18px rgba(119,161,116,0.72));
        }

        .graph-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 188px;
          height: 188px;
          display: grid;
          place-items: center;
          transform: translate(-50%, -50%);
          transition: filter 240ms ease, transform 240ms ease;
        }

        .graph-node {
          position: absolute;
          appearance: none;
          left: var(--x);
          top: var(--y);
          width: 144px;
          min-height: 82px;
          padding: 13px 14px;
          border: 1px solid rgba(111,222,211,0.16);
          border-radius: var(--radius);
          background: var(--bg);
          box-shadow:
            inset 0 0 28px rgba(119,161,116,0.18),
            0 0 34px rgba(119,161,116,0.24);
        }

        .graph-node.is-active p,
        .graph-node:hover p,
        .graph-node:focus-visible p {
          max-height: 64px;
          margin-top: 8px;
          opacity: 1;
        }

        .core-ring {
          position: absolute;
          width: 186px;
          height: 186px;
          border: 1px solid rgba(111,222,211,0.24);
          border-radius: 50%;
          box-shadow:
            0 0 70px rgba(119,161,116,0.24),
            inset 0 0 42px rgba(119,161,116,0.12);
          animation: ringTurn 18s linear infinite;
        }

        .core-ring::before,
        .core-ring::after {
          content: "";
          position: absolute;
          inset: 35px;
          border: 1px solid rgba(119,161,116,0.16);
          border-radius: 50%;
        }

        .core-ring::after {
          inset: 68px;
          border-color: rgba(255,163,255,0.18);
        }

        .preview-logo {
          width: 112px;
          opacity: 0.95;
          filter: brightness(1.42) saturate(1.2) drop-shadow(0 0 36px rgba(111,222,211,0.5));
          z-index: 2;
        }

        .section {
          padding: 86px 0;
        }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section h2 {
          max-width: 680px;
          font-size: clamp(1.75rem, 2.8vw, 2.35rem);
          line-height: 1.12;
          margin-bottom: 16px;
        }

        .origin-section p,
        .split-heading p,
        .contact-inner p {
          color: var(--soft);
          font-size: 1rem;
          line-height: 1.7;
        }

        .origin-section p {
          margin-bottom: 16px;
        }

        .origin-layout {
          max-width: 980px;
        }

        .origin-block {
          width: 100%;
          padding: clamp(22px, 4vw, 42px);
          background: var(--bg);
        }

        .origin-block p {
          max-width: 100%;
          font-size: clamp(1rem, 1.7vw, 1.12rem);
          overflow-wrap: break-word;
        }

        .origin-signal {
          position: relative;
          width: 100%;
          margin: 28px 0 18px;
          padding: 20px;
          border: 1px solid rgba(111,222,211,0.22);
          border-radius: var(--radius);
          background: var(--bg);
          box-shadow: inset 0 0 28px rgba(119,161,116,0.12), 0 0 38px rgba(119,161,116,0.12);
        }

        .origin-signal::before {
          content: "";
          position: absolute;
          left: 18px;
          right: 18px;
          top: 0;
          height: 1px;
          background: var(--bg);
          box-shadow: 0 0 22px rgba(111,222,211,0.58);
        }

        .origin-signal span {
          display: block;
          margin-bottom: 10px;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.72rem;
          font-weight: 600;
        }

        .origin-signal strong {
          display: block;
          color: var(--text);
          font-size: clamp(1.45rem, 3vw, 2.25rem);
          line-height: 1.05;
          margin-bottom: 12px;
        }

        .origin-signal p {
          margin-bottom: 0;
          color: var(--soft);
        }

        .origin-close {
          margin-bottom: 0 !important;
          color: var(--text) !important;
          font-weight: 600;
        }

        .split-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.62fr);
          gap: 34px;
          align-items: end;
          margin-bottom: 26px;
        }

        .split-heading h2 {
          margin-bottom: 0;
        }

        .relationship-map {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
          padding: 16px;
          margin-top: 10px;
        }

        .map-line {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 74px;
          height: 1px;
          background: var(--bg);
        }

        .research-carousel::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: min(38vw, 520px);
          transform: translateX(-50%);
          background: var(--bg);
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .research-carousel::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 8px;
          bottom: 18px;
          width: 1px;
          background: var(--bg);
          box-shadow: 0 0 24px rgba(111,222,211,0.72);
          pointer-events: none;
        }

        .research-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: researchMarquee 38s linear infinite;
        }

        .research-card {
          flex: 0 0 clamp(230px, 24vw, 318px);
        }

        .technology-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .initiative-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .research-card,
        .technology-card,
        .initiative-card {
          position: relative;
          isolation: isolate;
          min-height: 136px;
          padding: 20px 18px;
          transform: translateY(0);
          animation: cardBreathe 7s ease-in-out infinite;
          animation-delay: var(--delay, 0ms);
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        .research-card.light-panel::after,
        .initiative-card.light-panel::after,
        .product-card::after {
          display: none;
        }

        .research-card::before,
        .technology-card::before,
        .initiative-card::before,
        .product-card::before,
        .map-node::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0;
          background: var(--bg);
          transition: opacity 220ms ease;
        }

        .research-card:hover,
        .technology-card:hover,
        .initiative-card:hover,
        .product-card:hover,
        .map-node:hover {
          border-color: rgba(111,222,211,0.46);
          transform: translateY(-4px);
          box-shadow:
            inset 0 0 30px rgba(119,161,116,0.1),
            0 18px 44px rgba(0,0,0,0.24),
            0 0 30px rgba(119,161,116,0.12);
        }

        .research-card:hover::before,
        .technology-card:hover::before,
        .initiative-card:hover::before,
        .product-card:hover::before,
        .map-node:hover::after {
          opacity: 1;
        }

        .technology-section,
        .initiatives-section {
          padding-top: 66px;
          padding-bottom: 66px;
        }

        .technology-system {
          padding: 16px;
        }

        .technology-spine {
          position: relative;
          height: 70px;
          margin-bottom: 12px;
          border: 1px solid rgba(111,222,211,0.12);
          border-radius: var(--radius);
          background: var(--bg);
          overflow: hidden;
        }

        .technology-spine::before {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          top: 50%;
          height: 1px;
          background: var(--bg);
          box-shadow: 0 0 28px rgba(111,222,211,0.54);
        }

        .technology-spine span {
          position: absolute;
          top: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg);
        }

        .technology-card span {
          display: block;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.65rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .initiative-card {
          min-height: 122px;
          background: var(--bg);
        }

        .initiative-card strong::after {
          content: "";
          display: block;
          width: 44px;
          height: 1px;
          margin-top: 12px;
          background: var(--bg);
          box-shadow: 0 0 16px rgba(111,222,211,0.58);
        }

        .tier-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 12px 0;
        }

        .tier-tabs button {
          min-height: 34px;
          padding: 7px 12px;
          color: var(--soft);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: var(--bg);
          cursor: pointer;
          scroll-snap-align: start;
          transform: translateY(0);
          transition: border-color 220ms ease, transform 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        .product-card.is-active,
        .product-card:hover {
          border-color: var(--line-strong);
          background: var(--bg);
        }

        .active-product h3 {
          color: var(--text);
          font-size: 1.92rem;
          line-height: 1.04;
          margin-bottom: 16px;
        }

        .active-product strong {
          display: inline-flex;
          color: var(--text);
          margin-top: 18px;
          padding: 8px 10px;
          border: 1px solid rgba(111,222,211,0.24);
          border-radius: 999px;
          background: var(--bg);
        }

        .ecosystem-track {
          display: flex;
          flex: 0 0 auto;
          gap: 18px;
          min-width: max-content;
          animation: ecosystemMarquee 34s linear infinite;
        }

        .ecosystem-logo {
          display: grid;
          place-items: center;
          gap: 10px;
          min-width: 132px;
          color: rgba(207,226,255,0.62);
        }

        .ecosystem-logo span {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border: 1px solid rgba(111,222,211,0.14);
          border-radius: 50%;
          background: var(--bg);
          box-shadow: inset 0 0 22px rgba(119,161,116,0.1), 0 0 22px rgba(119,161,116,0.08);
        }

        .ecosystem-logo img {
          display: block;
          width: 28px;
          height: 28px;
          object-fit: contain;
          opacity: 0.76;
          filter: drop-shadow(0 0 12px rgba(111,222,211,0.28));
        }

        .ecosystem-logo strong {
          color: rgba(207,226,255,0.54);
          font-size: 0.76rem;
          font-weight: 600;
        }

        .contact-inner {
          max-width: 540px;
          text-align: center;
        }

        .contact-panel {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: auto;
          max-width: 100%;
          padding: 14px 16px;
          background: var(--bg);
        }

        .contact-inner .section-label {
          justify-content: center;
          margin-bottom: 0;
        }

        .contact-inner h2 {
          margin-left: auto;
          margin-right: auto;
        }

        .contact-email {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          max-width: 100%;
          padding: 7px 12px;
          color: var(--text);
          border: 1px solid rgba(111,222,211,0.42);
          border-radius: var(--radius);
          background: var(--bg);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 0 22px rgba(119,161,116,0.22);
          font-size: clamp(0.74rem, 1.25vw, 0.84rem);
          font-weight: 600;
          text-decoration: none;
          overflow: hidden;
          overflow-wrap: anywhere;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .contact-email::before {
          content: "";
          position: absolute;
          inset: -40% auto -40% -55%;
          width: 42%;
          background: var(--bg);
          transform: skewX(-18deg);
          animation: contactLight 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .contact-email::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: calc(var(--radius) - 1px);
          border: 1px solid rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .contact-email:hover {
          transform: translateY(-2px);
          border-color: rgba(111,222,211,0.72);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.22),
            0 0 34px rgba(119,161,116,0.36);
        }

        .page-hero {
          position: relative;
          z-index: 2;
          padding: 142px 0 58px;
        }

        .page-hero-inner {
          max-width: 980px;
        }

        .page-hero h1 {
          max-width: 860px;
          color: var(--text);
          font-size: clamp(2.25rem, 5vw, 4rem);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: 0;
          text-wrap: balance;
          overflow-wrap: break-word;
        }

        .page-hero p {
          max-width: 720px;
          margin-top: 18px;
          color: var(--soft);
          font-size: 1.05rem;
          line-height: 1.72;
          text-wrap: balance;
        }

        .page-hero-actions,
        .home-actions,
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .overview-section,
        .pillars-section,
        .research-track-section,
        .capability-section,
        .portfolio-model-section,
        .insights-section,
        .insights-preview-section,
        .career-path-section,
        .press-resource-section,
        .contact-options-section,
        .principles-section,
        .cta-section {
          padding-top: 70px;
          padding-bottom: 70px;
        }

        .metric-grid,
        .pillar-grid,
        .track-grid,
        .capability-grid,
        .insight-grid,
        .contact-grid {
          display: grid;
          gap: 12px;
        }

        .metric-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .pillar-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .track-grid,
        .capability-grid,
        .contact-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .insight-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .metric-card,
        .pillar-card,
        .track-card,
        .capability-card,
        .insight-card,
        .contact-card {
          position: relative;
          min-height: 168px;
          padding: 20px 18px;
        }

        .metric-card {
          min-height: 112px;
        }

        .metric-card strong {
          display: block;
          color: var(--text);
          font-size: 1.28rem;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .metric-card span,
        .pillar-card span,
        .track-card span,
        .contact-card span {
          display: block;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.66rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .pillar-card strong,
        .track-card strong,
        .capability-card strong,
        .insight-card strong {
          display: block;
          color: var(--text);
          font-size: 1.12rem;
          line-height: 1.22;
          margin-bottom: 12px;
        }

        .pillar-card p,
        .track-card p,
        .capability-card p,
        .insight-card p,
        .contact-card p,
        .split-panel p,
        .cta-band p,
        .press-boilerplate p {
          color: var(--soft);
          font-size: 0.95rem;
          line-height: 1.62;
        }

        .track-card small,
        .capability-card small {
          display: block;
          margin-top: 16px;
          color: var(--muted);
          font-size: 0.8rem;
          line-height: 1.45;
        }

        .split-panel,
        .cta-band {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.34fr);
          gap: 28px;
          align-items: center;
          padding: clamp(22px, 4vw, 40px);
        }

        .split-panel h2,
        .cta-band h2,
        .press-boilerplate h2 {
          color: var(--text);
          font-size: clamp(1.55rem, 2.7vw, 2.25rem);
          line-height: 1.12;
          margin-bottom: 14px;
        }

        .mini-list {
          display: grid;
          gap: 10px;
        }

        .mini-list span {
          display: block;
          padding: 12px;
          color: var(--soft);
          border: 1px solid rgba(111,222,211,0.18);
          border-radius: var(--radius);
          background: var(--bg);
        }

        .site-shell::before,
        .site-shell::after {
          content: none;
          display: none;
          animation: none;
        }

        .ambient-layer {
          display: none;
        }

        .live-network-canvas {
          opacity: 0.11;
          filter: grayscale(0.72) saturate(0.32) contrast(0.94);
        }

        @media (prefers-reduced-motion: reduce) {
          .live-network-canvas {
            opacity: 0.07;
          }
        }

      `}</style>
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main>
        <ActivePage currentPath={currentPath} onNavigate={navigate} />
      </main>
      <Footer currentPath={currentPath} onNavigate={navigate} />
    </div>
  );
}

        /* Emilo Labs colour system */
        .site-shell {
          background: #06015e !important;
          color: #f4f7f5;
        }

        .site-shell::before,
        .site-shell::after {
          display: none !important;
          content: none !important;
        }

        .live-network-canvas {
          opacity: 0.08 !important;
          filter: none !important;
        }

        .nav-scrolled {
          background: #06015e !important;
          border-bottom-color: #ffa3ff !important;
          backdrop-filter: none;
        }

        .desktop-nav a.is-active,
        .mobile-menu a.is-active,
        .footer a.is-active,
        .hero-kicker,
        .section-label,
        .panel-topline span:first-child,
        .metric-card span,
        .pillar-card span,
        .track-card span,
        .contact-card span,
        .insight-meta span,
        .insight-foot span {
          color: #ffa3ff !important;
        }

        .primary-button {
          color: #122623 !important;
          background: #77a174 !important;
          border-color: #ffa3ff !important;
          box-shadow: none !important;
        }

        .secondary-button {
          color: #f4f7f5 !important;
          background: #06015e !important;
          border-color: #ffa3ff !important;
          box-shadow: none !important;
        }

        .primary-button:hover,
        .secondary-button:hover {
          background: #6fded3 !important;
          color: #122623 !important;
          border-color: #ffa3ff !important;
          box-shadow: none !important;
        }

        .light-panel,
        .origin-block,
        .split-panel,
        .cta-band,
        .press-boilerplate,
        .fact-list {
          background: #6fded3 !important;
          border-color: #ffa3ff !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
        }

        .light-panel h1,
        .light-panel h2,
        .light-panel h3,
        .light-panel strong,
        .origin-block h2,
        .origin-block h3,
        .origin-block strong,
        .split-panel h2,
        .split-panel h3,
        .split-panel strong,
        .cta-band h2,
        .cta-band h3,
        .cta-band strong,
        .press-boilerplate h2,
        .press-boilerplate h3,
        .press-boilerplate strong,
        .fact-list strong {
          color: #122623 !important;
        }

        .light-panel p,
        .origin-block p,
        .split-panel p,
        .cta-band p,
        .press-boilerplate p,
        .fact-list p,
        .light-panel .muted,
        .origin-block .muted {
          color: #35504b !important;
        }

        .graph-node,
        .mini-list span,
        .fact-list div {
          background: #06015e !important;
          border-color: #ffa3ff !important;
          box-shadow: none !important;
        }

        .graph-node span,
        .graph-node strong,
        .graph-node p {
          color: #f4f7f5 !important;
        }

        .technology-chip,
        .ecosystem-strip span,
        .contact-card a {
          background: #6fded3 !important;
          color: #122623 !important;
          border-color: #ffa3ff !important;
          box-shadow: none !important;
        }

        .footer {
          background: #06015e !important;
          border-top-color: #ffa3ff !important;
          backdrop-filter: none !important;
        }

        button:focus-visible,
        a:focus-visible {
          outline-color: #ffa3ff !important;
        }
