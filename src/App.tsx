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
          --bg: #05070c;
          --bg-2: #090d15;
          --panel: rgba(11, 17, 28, 0.72);
          --panel-strong: rgba(12, 20, 34, 0.88);
          --text: #f3f7ff;
          --soft: #bfcbdf;
          --muted: #7f8ba3;
          --line: rgba(118, 170, 255, 0.18);
          --line-strong: rgba(118, 190, 255, 0.42);
          --blue: #4b7be8;
          --blue-2: #7bc2ff;
          --green: #66e38c;
          --amber: #f6b44b;
          --violet: #a987ff;
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
          color: var(--text);
          font-family: var(--sans);
        }

        html {
          scroll-behavior: smooth;
        }

        a,
        button {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          font: inherit;
        }

        button:focus-visible,
        a:focus-visible {
          outline: 2px solid var(--blue-2);
          outline-offset: 3px;
        }

        .site-shell {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          background:
            linear-gradient(180deg, rgba(5,7,12,0.18), rgba(5,7,12,0.92) 38%, rgba(5,7,12,0.96)),
            radial-gradient(circle at 50% 0%, rgba(75,123,232,0.16), transparent 38%);
        }

        .site-shell::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(123,194,255,0.035) 1px, transparent 1px),
            linear-gradient(rgba(123,194,255,0.03) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, black, transparent 82%);
          animation: gridDrift 22s linear infinite;
        }

        .site-shell::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.42;
          background:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 4px),
            linear-gradient(120deg, transparent 0 35%, rgba(123,194,255,0.08) 48%, transparent 60%);
          background-size: 100% 100%, 260% 260%;
          animation: lightSweep 13s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        .live-network-scene,
        .live-network-canvas {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .live-network-scene {
          z-index: 0;
        }

        .live-network-canvas {
          opacity: 0.86;
          filter: saturate(1.12) contrast(1.08);
        }

        .ambient-layer {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
          opacity: 0.82;
          mix-blend-mode: screen;
        }

        .ambient-circuit {
          position: absolute;
          inset: 11vh 7vw 9vh;
          border: 1px solid rgba(123,194,255,0.08);
          background:
            linear-gradient(90deg, transparent 0 12%, rgba(123,194,255,0.09) 12% 12.3%, transparent 12.3% 100%),
            linear-gradient(0deg, transparent 0 18%, rgba(123,194,255,0.07) 18% 18.25%, transparent 18.25% 100%);
          background-size: 32% 100%, 100% 24%;
          clip-path: polygon(0 8%, 8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%);
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 78%, transparent);
          animation: circuitPhase 18s linear infinite;
        }

        .ambient-circuit span {
          position: absolute;
          left: var(--left);
          top: var(--top);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--blue-2);
          box-shadow: 0 0 18px rgba(123,194,255,0.82);
          animation: circuitNode 6.5s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .ambient-rings {
          position: absolute;
          inset: 0;
          transform: translate3d(0, 0, 0);
        }

        .ambient-rings span {
          position: absolute;
          left: 50%;
          top: 48%;
          width: min(68vw, 920px);
          height: min(38vw, 500px);
          border: 1px solid rgba(123,194,255,0.08);
          transform: translate(-50%, -50%) rotate(0deg);
          box-shadow: inset 0 0 38px rgba(75,123,232,0.06), 0 0 48px rgba(75,123,232,0.04);
          animation: orbitFrame 26s linear infinite;
        }

        .ambient-rings span:nth-child(2) {
          width: min(54vw, 720px);
          height: min(30vw, 390px);
          border-color: rgba(102,227,140,0.06);
          animation-duration: 34s;
          animation-direction: reverse;
        }

        .ambient-rings span:nth-child(3) {
          width: min(82vw, 1080px);
          height: min(48vw, 620px);
          border-color: rgba(169,135,255,0.06);
          animation-duration: 42s;
        }

        .data-streams span {
          position: absolute;
          left: var(--left);
          top: -34vh;
          width: 1px;
          height: 34vh;
          background: linear-gradient(to bottom, transparent, rgba(123,194,255,0.02), rgba(123,194,255,0.36), transparent);
          box-shadow: 0 0 18px rgba(123,194,255,0.32);
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
          background: rgba(5, 7, 12, 0.84);
          border-bottom: 1px solid rgba(123,194,255,0.16);
          backdrop-filter: blur(20px);
        }

        .nav-inner,
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .nav-inner {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--text);
          text-decoration: none;
        }

        .brand-mark {
          width: 36px;
          height: 36px;
          object-fit: contain;
          opacity: 0.96;
          filter: brightness(1.38) saturate(1.2) drop-shadow(0 0 16px rgba(123,194,255,0.45));
        }

        .brand span {
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .desktop-nav a,
        .footer a {
          color: var(--muted);
          font-size: 0.86rem;
          text-decoration: none;
          transition: color 160ms ease;
        }

        .desktop-nav a:hover,
        .footer a:hover {
          color: var(--text);
        }

        .desktop-nav a.is-active,
        .mobile-menu a.is-active,
        .footer a.is-active {
          color: var(--text);
        }

        .menu-button {
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          margin-left: auto;
          border: 1px solid rgba(123,194,255,0.36);
          border-radius: var(--radius);
          background: rgba(12,20,34,0.94);
          box-shadow: 0 0 22px rgba(75,123,232,0.16);
          cursor: pointer;
        }

        .menu-button span {
          display: block;
          width: 18px;
          height: 2px;
          margin: 0;
          background: var(--text);
          border-radius: 999px;
        }

        .mobile-menu {
          width: min(1240px, calc(100% - 48px));
          margin: 12px auto 0;
          display: grid;
          gap: 4px;
          padding: 14px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.94);
          backdrop-filter: blur(18px);
        }

        .mobile-menu a {
          color: var(--soft);
          padding: 12px;
          text-decoration: none;
          border-radius: 6px;
        }

        .hero-section {
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding: 116px 0 82px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(420px, 0.92fr) minmax(480px, 1fr);
          align-items: center;
          gap: 44px;
        }

        .hero-logo {
          width: min(220px, 54vw);
          height: auto;
          margin-bottom: 22px;
          opacity: 0.98;
          filter: brightness(1.42) saturate(1.22) drop-shadow(0 0 28px rgba(123,194,255,0.42));
          animation: logoWake 6s ease-in-out infinite;
        }

        .hero-kicker,
        .section-label,
        .panel-topline,
        .credibility-band > span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.72rem;
          font-weight: 600;
        }

        .section-label {
          margin-bottom: 14px;
        }

        .hero-kicker::before {
          display: none;
        }

        .hero-copy h1,
        .section h2 {
          color: var(--text);
          font-weight: 600;
          letter-spacing: 0;
        }

        .hero-copy h1 {
          max-width: 700px;
          margin: 16px 0 22px;
          font-size: clamp(2.85rem, 4.55vw, 4.05rem);
          line-height: 1.04;
          text-wrap: balance;
          overflow-wrap: break-word;
        }

        .hero-copy p {
          max-width: 560px;
          color: var(--soft);
          font-size: 1.04rem;
          line-height: 1.62;
          margin-bottom: 0;
          overflow-wrap: break-word;
          text-wrap: balance;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 26px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 12px 20px;
          border-radius: var(--radius);
          font-weight: 600;
          text-decoration: none;
          transition: transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
        }

        .primary-button {
          color: var(--text);
          background: linear-gradient(135deg, rgba(75,123,232,0.96), rgba(38,108,216,0.88));
          border: 1px solid rgba(123,194,255,0.38);
          box-shadow: 0 0 32px rgba(75,123,232,0.32);
        }

        .secondary-button {
          color: var(--soft);
          background: rgba(12,20,34,0.58);
          border: 1px solid var(--line);
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-1px);
          border-color: var(--line-strong);
          box-shadow: 0 0 38px rgba(75,123,232,0.28);
        }

        .light-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background:
            linear-gradient(180deg, rgba(16,29,49,0.74), rgba(7,11,19,0.72)),
            rgba(8,12,20,0.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.24);
          backdrop-filter: blur(18px);
        }

        .light-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 0 38%, rgba(123,194,255,0.13) 48%, transparent 60%);
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
          stroke: rgba(123,194,255,0.32);
          stroke-width: 0.35;
          filter: drop-shadow(0 0 5px rgba(123,194,255,0.72));
          transition: stroke 240ms ease, stroke-width 240ms ease, opacity 240ms ease, filter 240ms ease;
          animation: linePulse 5.8s ease-in-out infinite;
        }

        .institution-links line.is-active {
          stroke: rgba(130,220,255,0.95);
          stroke-width: 0.62;
          opacity: 1;
          filter:
            drop-shadow(0 0 6px rgba(123,194,255,0.95))
            drop-shadow(0 0 18px rgba(75,123,232,0.72));
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
          border: 1px solid rgba(123,194,255,0.16);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.62);
          box-shadow: inset 0 0 18px rgba(75,123,232,0.08), 0 0 24px rgba(75,123,232,0.08);
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: border-color 220ms ease, box-shadow 220ms ease, background 220ms ease, color 220ms ease, width 220ms ease, min-height 220ms ease;
        }

        .graph-node span {
          display: block;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 0.62rem;
          margin-bottom: 8px;
        }

        .graph-node strong {
          display: block;
          color: var(--text);
          font-size: 0.98rem;
          line-height: 1.2;
        }

        .graph-node p {
          max-height: 0;
          overflow: hidden;
          color: var(--muted);
          font-size: 0.8rem;
          line-height: 1.36;
          opacity: 0;
          transition: max-height 220ms ease, opacity 220ms ease, margin-top 220ms ease;
        }

        .graph-node.is-active,
        .graph-node:hover,
        .graph-node:focus-visible {
          width: 190px;
          min-height: 112px;
          border-color: rgba(133,218,255,0.72);
          background:
            linear-gradient(180deg, rgba(20,40,70,0.78), rgba(5,8,14,0.66)),
            rgba(5,7,12,0.68);
          box-shadow:
            inset 0 0 28px rgba(75,123,232,0.18),
            0 0 34px rgba(75,123,232,0.24);
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
          border: 1px solid rgba(123,194,255,0.24);
          border-radius: 50%;
          box-shadow:
            0 0 70px rgba(75,123,232,0.24),
            inset 0 0 42px rgba(75,123,232,0.12);
          animation: ringTurn 18s linear infinite;
        }

        .core-ring::before,
        .core-ring::after {
          content: "";
          position: absolute;
          inset: 35px;
          border: 1px solid rgba(102,227,140,0.16);
          border-radius: 50%;
        }

        .core-ring::after {
          inset: 68px;
          border-color: rgba(169,135,255,0.18);
        }

        .preview-logo {
          width: 112px;
          opacity: 0.95;
          filter: brightness(1.42) saturate(1.2) drop-shadow(0 0 36px rgba(123,194,255,0.5));
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
          background:
            radial-gradient(circle at 18% 0%, rgba(123,194,255,0.14), transparent 34%),
            linear-gradient(145deg, rgba(15,30,52,0.86), rgba(5,8,14,0.74)),
            rgba(8,12,20,0.72);
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
          border: 1px solid rgba(123,194,255,0.22);
          border-radius: var(--radius);
          background:
            linear-gradient(90deg, rgba(75,123,232,0.16), rgba(5,7,12,0.32)),
            rgba(5,7,12,0.42);
          box-shadow: inset 0 0 28px rgba(75,123,232,0.12), 0 0 38px rgba(75,123,232,0.12);
        }

        .origin-signal::before {
          content: "";
          position: absolute;
          left: 18px;
          right: 18px;
          top: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(123,194,255,0.86), transparent);
          box-shadow: 0 0 22px rgba(123,194,255,0.58);
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
          background: rgba(123,194,255,0.14);
        }

        .map-line i {
          display: block;
          height: 100%;
          background: var(--blue-2);
          box-shadow: 0 0 20px rgba(123,194,255,0.7);
          transition: width 360ms ease;
        }

        .map-node {
          position: relative;
          min-height: 176px;
          padding: 18px 16px;
          text-align: left;
          color: var(--soft);
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.5);
          cursor: pointer;
          transition: border-color 180ms ease, transform 180ms ease, background 180ms ease;
        }

        .map-node::before {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          margin-bottom: 32px;
          border-radius: 50%;
          background: rgba(123,194,255,0.45);
          box-shadow: 0 0 18px rgba(123,194,255,0.45);
        }

        .map-node.is-active {
          border-color: rgba(123,194,255,0.58);
          background: rgba(14,27,48,0.74);
          transform: translateY(-3px);
        }

        .map-node span,
        .product-card span,
        .active-product span {
          display: block;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.66rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .map-node strong,
        .research-card strong,
        .technology-card strong,
        .initiative-card strong {
          display: block;
          color: var(--text);
          font-size: 1.1rem;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .map-node p,
        .research-card p,
        .product-card p,
        .active-product p,
        .technology-card p,
        .initiative-card p {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .research-section {
          padding-top: 54px;
          padding-bottom: 68px;
        }

        .research-shell {
          margin-bottom: 14px;
        }

        .research-carousel {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          overflow: hidden;
          padding: 10px 0 20px;
          mask-image: linear-gradient(to right, transparent, black 9%, black 91%, transparent);
        }

        .research-carousel::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: min(38vw, 520px);
          transform: translateX(-50%);
          background:
            radial-gradient(circle at 50% 50%, rgba(123,194,255,0.22), transparent 58%),
            linear-gradient(90deg, transparent, rgba(123,194,255,0.13), transparent);
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
          background: linear-gradient(to bottom, transparent, rgba(123,194,255,0.75), transparent);
          box-shadow: 0 0 24px rgba(123,194,255,0.72);
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
          background:
            radial-gradient(circle at 18% 0%, rgba(123,194,255,0.18), transparent 34%),
            linear-gradient(120deg, transparent 0 42%, rgba(123,194,255,0.1) 50%, transparent 62%);
          transition: opacity 220ms ease;
        }

        .research-card:hover,
        .technology-card:hover,
        .initiative-card:hover,
        .product-card:hover,
        .map-node:hover {
          border-color: rgba(123,194,255,0.46);
          transform: translateY(-4px);
          box-shadow:
            inset 0 0 30px rgba(75,123,232,0.1),
            0 18px 44px rgba(0,0,0,0.24),
            0 0 30px rgba(75,123,232,0.12);
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
          border: 1px solid rgba(123,194,255,0.12);
          border-radius: var(--radius);
          background:
            linear-gradient(90deg, rgba(123,194,255,0.08), transparent 24%, transparent 76%, rgba(123,194,255,0.08)),
            rgba(5,7,12,0.44);
          overflow: hidden;
        }

        .technology-spine::before {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          top: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(123,194,255,0.72), transparent);
          box-shadow: 0 0 28px rgba(123,194,255,0.54);
        }

        .technology-spine span {
          position: absolute;
          top: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--blue-2);
          box-shadow: 0 0 20px rgba(123,194,255,0.78);
          transform: translate(-50%, -50%);
          animation: techPulse 5.8s ease-in-out infinite;
        }

        .technology-spine span:nth-child(1) {
          left: 24%;
        }

        .technology-spine span:nth-child(2) {
          left: 50%;
          animation-delay: 420ms;
        }

        .technology-spine span:nth-child(3) {
          left: 76%;
          animation-delay: 840ms;
        }

        .technology-card {
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: var(--radius);
          background:
            linear-gradient(180deg, rgba(13,25,43,0.78), rgba(5,8,14,0.7)),
            rgba(8,12,20,0.68);
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
          background:
            radial-gradient(circle at 85% 12%, rgba(102,227,140,0.12), transparent 30%),
            linear-gradient(180deg, rgba(13,25,43,0.78), rgba(5,8,14,0.7)),
            rgba(8,12,20,0.68);
        }

        .initiative-card strong::after {
          content: "";
          display: block;
          width: 44px;
          height: 1px;
          margin-top: 12px;
          background: linear-gradient(90deg, rgba(123,194,255,0.9), transparent);
          box-shadow: 0 0 16px rgba(123,194,255,0.58);
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
          background: rgba(8,12,20,0.64);
          cursor: pointer;
          font-size: 0.82rem;
        }

        .tier-tabs button.is-active {
          color: var(--text);
          border-color: var(--line-strong);
          background: rgba(75,123,232,0.22);
          box-shadow: 0 0 26px rgba(75,123,232,0.18);
        }

        .product-stage {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 316px;
          gap: 12px;
          padding: 12px;
          outline: none;
        }

        .product-rail {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(218px, 30%);
          gap: 10px;
          overflow-x: auto;
          padding: 2px;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }

        .product-rail::-webkit-scrollbar {
          display: none;
        }

        .product-card {
          position: relative;
          isolation: isolate;
          min-height: 182px;
          padding: 18px 16px;
          text-align: left;
          color: var(--soft);
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: var(--radius);
          background:
            radial-gradient(circle at 86% 8%, rgba(var(--tone, 75,123,232),0.18), transparent 34%),
            linear-gradient(180deg, rgba(10,18,31,0.76), rgba(5,7,12,0.62)),
            rgba(5,7,12,0.58);
          cursor: pointer;
          scroll-snap-align: start;
          transform: translateY(0);
          transition: border-color 220ms ease, transform 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        .product-card.is-active,
        .product-card:hover {
          border-color: var(--line-strong);
          background: rgba(14,27,48,0.78);
          transform: translateY(-4px);
          box-shadow:
            inset 0 0 30px rgba(var(--tone, 75,123,232),0.14),
            0 0 34px rgba(var(--tone, 75,123,232),0.12);
        }

        .product-card strong {
          display: block;
          color: var(--text);
          font-size: 1.18rem;
          line-height: 1.12;
          margin-bottom: 12px;
        }

        .active-product {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-height: 260px;
          padding: 22px 20px;
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: var(--radius);
          background:
            radial-gradient(circle at 78% 0%, rgba(var(--tone, 75,123,232),0.2), transparent 36%),
            linear-gradient(180deg, rgba(10,18,31,0.82), rgba(5,7,12,0.64)),
            rgba(5,7,12,0.6);
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
          border: 1px solid rgba(123,194,255,0.24);
          border-radius: 999px;
          background: rgba(var(--tone, 75,123,232),0.16);
          font-size: 0.82rem;
        }

        .product-controls {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
          padding-top: 18px;
        }

        .product-controls button {
          width: 42px;
          height: 40px;
          color: var(--text);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(75,123,232,0.18);
          cursor: pointer;
        }

        .product-controls small {
          color: var(--muted);
          font-family: var(--mono);
        }

        .ecosystem-marquee {
          position: relative;
          display: flex;
          gap: 18px;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
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
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: 50%;
          background:
            linear-gradient(145deg, rgba(123,194,255,0.1), rgba(5,7,12,0.2)),
            rgba(5,7,12,0.54);
          box-shadow: inset 0 0 22px rgba(75,123,232,0.1), 0 0 22px rgba(75,123,232,0.08);
        }

        .ecosystem-logo img {
          display: block;
          width: 28px;
          height: 28px;
          object-fit: contain;
          opacity: 0.76;
          filter: drop-shadow(0 0 12px rgba(123,194,255,0.28));
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
          background:
            radial-gradient(circle at 50% 0%, rgba(123,194,255,0.18), transparent 38%),
            linear-gradient(180deg, rgba(16,29,49,0.78), rgba(5,8,14,0.76));
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
          border: 1px solid rgba(123,194,255,0.42);
          border-radius: var(--radius);
          background:
            radial-gradient(circle at 18% 0%, rgba(255,255,255,0.18), transparent 30%),
            linear-gradient(135deg, rgba(75,123,232,0.84), rgba(27,91,188,0.78)),
            rgba(8,12,20,0.58);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 0 22px rgba(75,123,232,0.22);
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.42), transparent);
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
          border-color: rgba(123,194,255,0.72);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.22),
            0 0 34px rgba(75,123,232,0.36);
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
          border: 1px solid rgba(123,194,255,0.18);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.38);
        }

        .insight-card.is-featured {
          grid-column: span 2;
        }

        .insight-meta,
        .insight-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .insight-meta {
          margin-bottom: 18px;
        }

        .insight-meta span,
        .insight-foot span {
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.66rem;
          font-weight: 600;
        }

        .insight-meta small,
        .insight-foot span:last-child {
          color: var(--muted);
        }

        .insight-foot {
          margin-top: 22px;
          padding-top: 14px;
          border-top: 1px solid rgba(123,194,255,0.12);
        }

        .press-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.42fr);
          gap: 12px;
        }

        .press-boilerplate,
        .fact-list {
          padding: clamp(20px, 3vw, 34px);
        }

        .press-boilerplate p + p {
          margin-top: 14px;
        }

        .fact-list {
          display: grid;
          gap: 12px;
        }

        .fact-list div {
          padding: 12px;
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.38);
        }

        .fact-list span {
          display: block;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.64rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .fact-list strong {
          display: block;
          color: var(--text);
          font-size: 0.95rem;
          line-height: 1.42;
          overflow-wrap: anywhere;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-card a {
          align-self: flex-start;
          margin-top: auto;
          color: var(--text);
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 600;
          padding: 8px 10px;
          border: 1px solid rgba(123,194,255,0.28);
          border-radius: var(--radius);
          background: rgba(75,123,232,0.16);
        }

        .footer {
          padding: 38px 0;
          border-top: 1px solid rgba(123,194,255,0.12);
          background: rgba(5,7,12,0.72);
          backdrop-filter: blur(12px);
        }

        .footer-inner {
          flex-wrap: wrap;
          align-items: flex-start;
        }

        .footer-groups {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
        }

        .footer-group {
          display: grid;
          gap: 9px;
        }

        .footer-group strong {
          color: var(--text);
          font-size: 0.78rem;
        }

        .footer small {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 0.72rem;
        }

        @keyframes logoWake {
          0%, 100% { transform: translateY(0); filter: brightness(1.42) saturate(1.22) drop-shadow(0 0 24px rgba(123,194,255,0.36)); }
          50% { transform: translateY(-4px); filter: brightness(1.55) saturate(1.28) drop-shadow(0 0 38px rgba(123,194,255,0.62)); }
        }

        @keyframes gridDrift {
          from { background-position: 0 0; }
          to { background-position: 72px 72px; }
        }

        @keyframes lightSweep {
          0%, 100% { background-position: 0 0, 0% 0%; }
          50% { background-position: 0 0, 100% 100%; }
        }

        @keyframes circuitPhase {
          from { background-position: 0 0, 0 0; }
          to { background-position: 32% 0, 0 24%; }
        }

        @keyframes circuitNode {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.72); opacity: 0.2; }
          44% { transform: translate3d(28px, -18px, 0) scale(1); opacity: 0.9; }
          68% { transform: translate3d(64px, 12px, 0) scale(0.82); opacity: 0.48; }
        }

        @keyframes orbitFrame {
          from { transform: translate(-50%, -50%) rotate(0deg) skewX(-8deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) skewX(-8deg); }
        }

        @keyframes streamFall {
          from { transform: translateY(0); opacity: 0; }
          12% { opacity: 0.68; }
          74% { opacity: 0.28; }
          to { transform: translateY(142vh); opacity: 0; }
        }

        @keyframes ecosystemMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 18px)); }
        }

        @keyframes researchMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-33.333% - 8px)); }
        }

        @keyframes panelSweep {
          0%, 42% { transform: translateX(-120%); }
          64%, 100% { transform: translateX(120%); }
        }

        @keyframes contactLight {
          0%, 45% { transform: translateX(0) skewX(-18deg); opacity: 0; }
          55% { opacity: 0.8; }
          72%, 100% { transform: translateX(420%) skewX(-18deg); opacity: 0; }
        }

        @keyframes riseSignal {
          0%, 100% { border-color: rgba(123,194,255,0.14); box-shadow: inset 0 0 18px rgba(75,123,232,0.08), 0 0 18px rgba(75,123,232,0.05); }
          50% { border-color: rgba(123,194,255,0.34); box-shadow: inset 0 0 22px rgba(75,123,232,0.14), 0 0 26px rgba(75,123,232,0.16); }
        }

        @keyframes linePulse {
          0%, 100% { opacity: 0.38; }
          50% { opacity: 0.9; }
        }

        @keyframes ringTurn {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes cardBreathe {
          0%, 100% { border-color: rgba(123,194,255,0.14); }
          50% { border-color: rgba(123,194,255,0.28); }
        }

        @keyframes techPulse {
          0%, 100% { opacity: 0.42; transform: translate(-50%, -50%) scale(0.74); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.18); }
        }

        @media (max-width: 1120px) {
          .container {
            width: min(100% - 40px, 960px);
          }

          .hero-grid,
          .split-heading {
            grid-template-columns: 1fr;
          }

          .hero-copy h1 {
            font-size: clamp(3rem, 7vw, 4rem);
          }

          .institution-preview {
            min-height: 430px;
            justify-self: stretch;
            max-width: none;
          }

          .institution-graph {
            height: 340px;
          }

          .graph-node {
            width: 132px;
            min-height: 76px;
            padding: 12px;
          }

          .graph-core {
            width: 158px;
            height: 158px;
          }

          .core-ring {
            width: 156px;
            height: 156px;
          }

          .core-ring::before {
            inset: 28px;
          }

          .core-ring::after {
            inset: 58px;
          }

          .preview-logo {
            width: 96px;
          }

          .relationship-map {
            grid-template-columns: 1fr;
          }

          .map-line {
            left: 34px;
            right: auto;
            top: 36px;
            bottom: 36px;
            width: 1px;
            height: auto;
          }

          .map-line i {
            width: 100% !important;
            height: 100%;
          }

          .map-node {
            min-height: 150px;
          }

          .map-node::before {
            margin-bottom: 18px;
          }

          .technology-grid,
          .initiative-grid,
          .metric-grid,
          .pillar-grid,
          .track-grid,
          .capability-grid,
          .insight-grid,
          .contact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .press-layout,
          .split-panel,
          .cta-band {
            grid-template-columns: 1fr;
          }

          .insight-card.is-featured {
            grid-column: span 1;
          }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: inline-flex;
            position: fixed;
            top: 14px;
            right: 14px;
            z-index: 40;
          }

          .product-stage {
            grid-template-columns: 1fr;
          }

          .product-rail {
            grid-auto-columns: minmax(220px, 44%);
          }

          .initiative-grid,
          .metric-grid,
          .pillar-grid,
          .track-grid,
          .capability-grid,
          .insight-grid,
          .contact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .container,
          .mobile-menu {
            width: calc(100% - 28px);
          }

          .ambient-layer {
            opacity: 0.46;
          }

          .ambient-circuit {
            inset: 8vh 4vw 12vh;
            background-size: 48% 100%, 100% 22%;
          }

          .ambient-rings span {
            width: 110vw;
            height: 64vw;
          }

          .data-streams span:nth-child(even) {
            display: none;
          }

          .hero-section {
            min-height: auto;
            padding: 96px 0 42px;
          }

          .hero-copy h1,
          .section h2 {
            line-height: 1.08;
          }

          .hero-copy h1 {
            font-size: clamp(1.92rem, 8.2vw, 2.34rem);
          }

          .section h2 {
            font-size: clamp(1.45rem, 6.4vw, 1.9rem);
          }

          .hero-copy p {
            font-size: 1rem;
          }

          .hero-logo {
            width: min(178px, 52vw);
            margin-bottom: 18px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .section {
            padding: 58px 0;
          }

          .origin-block {
            padding: 22px 18px;
          }

          .origin-block p {
            font-size: 0.95rem;
            line-height: 1.65;
          }

          .origin-signal {
            padding: 18px;
          }

          .contact-panel {
            display: inline-grid;
            gap: 10px;
            padding: 14px;
          }

          .contact-email {
            min-height: 32px;
            padding: 6px 10px;
            font-size: 0.72rem;
          }

          .institution-preview {
            min-height: 304px;
            padding: 12px;
          }

          .technology-grid,
          .initiative-grid,
          .metric-grid,
          .pillar-grid,
          .track-grid,
          .capability-grid,
          .insight-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .institution-graph {
            height: 248px;
            margin-top: 12px;
          }

          .institution-links line {
            stroke-width: 0.45;
          }

          .institution-links {
            transform: scaleX(0.78);
            transform-origin: center;
          }

          .graph-node {
            left: var(--mobile-x);
            top: var(--mobile-y);
            width: 84px;
            min-height: 50px;
            padding: 8px;
          }

          .graph-node span {
            font-size: 0.46rem;
            margin-bottom: 4px;
          }

          .graph-node strong {
            font-size: 0.68rem;
          }

          .graph-node.is-active,
          .graph-node:hover,
          .graph-node:focus-visible {
            width: 96px;
            min-height: 58px;
          }

          .graph-node p {
            display: none;
          }

          .graph-core {
            width: 96px;
            height: 96px;
          }

          .core-ring {
            width: 94px;
            height: 94px;
          }

          .core-ring::before {
            inset: 18px;
          }

          .core-ring::after {
            inset: 35px;
          }

          .preview-logo {
            width: 56px;
          }

          .map-node {
            min-height: 108px;
            padding: 16px;
          }

          .map-node::before {
            margin-bottom: 14px;
          }

          .research-card,
          .technology-card,
          .initiative-card {
            min-height: auto;
            padding: 17px 16px;
          }

          .tier-tabs button {
            min-height: 32px;
            padding: 6px 9px;
            font-size: 0.78rem;
          }

          .product-rail {
            grid-auto-columns: minmax(214px, 84%);
          }

          .product-card {
            min-height: 164px;
          }

          .active-product {
            min-height: 230px;
          }

          .active-product h3 {
            font-size: 1.68rem;
          }

          .ecosystem-track {
            animation-duration: 28s;
          }

          .ecosystem-logo {
            min-width: 108px;
          }

          .ecosystem-logo span {
            width: 50px;
            height: 50px;
          }

          .footer-inner,
          .footer-groups {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }

          .live-network-canvas {
            opacity: 0.34;
          }

          .ambient-layer {
            opacity: 0.22;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }

        /* Institutional visual restraint: remove decorative sci-fi overlays. */
        .site-shell {
          background:
            radial-gradient(ellipse at 72% 8%, rgba(118, 130, 150, 0.055), transparent 42%),
            linear-gradient(180deg, #090b10 0%, #080a0e 48%, #090b10 100%);
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
