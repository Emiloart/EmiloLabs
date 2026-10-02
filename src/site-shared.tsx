import { useEffect, useMemo, useRef, useState, type AnchorHTMLAttributes, type CSSProperties, type ReactNode } from "react";

export type PageProps = {
  currentPath: string;
  onNavigate: (href: string) => void;
};

const staggerStyle = (index: number, interval = 60): CSSProperties =>
  ({ "--delay": `${index * interval}ms` } as CSSProperties);

export const CONTACT_EMAIL = "emilolabs@gmail.com";

export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Research", href: "/research" },
  { label: "Labs", href: "/labs" },
  { label: "About", href: "/about" },
];

export const FOOTER_GROUPS = [
  { title: "Institution", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/about" }] },
  { title: "Products", links: [{ label: "Product portfolio", href: "/products" }] },
  { title: "Research", links: [{ label: "Research archive", href: "/research" }] },
  { title: "Labs", links: [{ label: "Experiments", href: "/labs" }] },
];

export const PAGE_META = {
  "/": {
    title: "Emilo Labs | Humanity first. Technology second.",
    description: "Emilo Labs is a technology institution building digital trust, applied AI, security, information infrastructure, products, and future-facing research programs.",
  },
  "/about": {
    title: "About | Emilo Labs",
    description: "Understand the problems Emilo Labs exists to investigate and how research, infrastructure, products, and public impact connect.",
  },
  "/research": {
    title: "Research | Emilo Labs",
    description: "Research domains and investigation tracks across identity, privacy, security, intelligent systems, finance, and internet infrastructure.",
  },
  "/products": {
    title: "Products | Emilo Labs",
    description: "Active and upcoming Emilo Labs systems across communication, identity, verification, security, finance, and intelligent systems.",
  },
  "/labs": {
    title: "Labs | Emilo Labs",
    description: "Experiments, prototypes, and systems under active investigation at Emilo Labs.",
  },
};

export const INSTITUTION_FLOW = [
  { title: "Research", text: "Defines the questions worth solving.", signal: "Direction" },
  { title: "Labs", text: "Tests ideas through experiments.", signal: "Exploration" },
  { title: "Infrastructure", text: "Builds reusable systems and protocols.", signal: "Foundation" },
  { title: "Products", text: "Delivers systems to people and organizations.", signal: "Surface" },
  { title: "Public Impact", text: "Improves safety, trust, and coordination online.", signal: "Outcome" },
];

export const RESEARCH_AREAS = [
  ["Identity", "Reusable proof and portable credentials."],
  ["Privacy", "Continuity and communication without unnecessary exposure."],
  ["Security", "Threat-aware systems designed around failure and recovery."],
  ["Intelligent Systems", "Bounded AI assistance, structured reasoning, and automation."],
  ["Financial Systems", "Safer value exchange, lending, settlement, and coordination."],
  ["Internet Systems", "Infrastructure for communication, coordination, and safer participation."],
];

export const PRODUCT_TIERS = [
  {
    title: "Active",
    products: [
      ["ShadeFast", "Social systems", "Anonymous communities for real world groups."],
      ["Reach", "Private communication", "Encrypted messaging and anonymous groups."],
      ["HDIP", "Identity", "Portable identity and credential infrastructure."],
      ["VerifyFlow", "Verification", "Controlled measurement for identity flows."],
      ["Achievo", "Credentials", "Verifiable achievement records."],
      ["LabGuard", "Security", "Device protection and recovery control."],
      ["LendEarn", "Finance", "Peer lending and referral finance."],
    ],
  },
  {
    title: "Coming Soon",
    products: [
      ["ZKShade", "Privacy recovery", "Identity continuity without exposure."],
      ["ZKShade Starknet", "Identity recovery", "Anonymous recovery on Starknet."],
      ["UTB", "Research intelligence", "Automated research and structured insight."],
      ["HYEX", "Financial exchange", "Safer value exchange and settlement."],
      ["SCOS Pro", "Agent operations", "Autonomous coordination layer."],
      ["HSG Pro", "Safety intelligence", "Deception detection for digital environments."],
      ["SPFS Pro", "Personal finance", "AI native finance operating system."],
      ["ASL Pro", "Security automation", "Continuous vulnerability defense."],
      ["Ransomware DSS", "Threat defense", "Ransomware detection and deterrence."],
      ["AI Finance Tracker", "Finance intelligence", "Spending insight and budget intelligence."],
    ],
  },
];

type InsightRow = [title: string, category: string, summary: string, date: string, time: string, status: string, featured: boolean, url: string, cover: string | null];

export const INSIGHTS: InsightRow[] = [
  [
    "The Myth of Useless Data",
    "Research Essay",
    "How capability-dependent value changes what data means, why organizations retain it, and how latent value becomes infrastructure.",
    "Jul 1, 2026",
    "20 min read",
    "Published",
    true,
    "https://emiloart.medium.com/the-myth-of-useless-data-ec41adde9072",
    "https://miro.medium.com/v2/resize%3Afit%3A1358/format%3Awebp/1%2A11N__IroAmaRTw0te25trA.png",
  ],
  [
    "Identity Proofing as a Trust System",
    "Research Paper",
    "A systems model for identity proofing, confidence, failure propagation, verification uncertainty, and next-generation identity infrastructure.",
    "Jun 29, 2026",
    "31 min read",
    "Published",
    true,
    "https://emiloart.medium.com/identity-proofing-as-a-trust-system-failure-modes-confidence-and-the-future-of-digital-identity-c25f655fef5f",
    "https://miro.medium.com/v2/resize%3Afit%3A1358/format%3Awebp/1%2AHbAmpT7BG_DE5mqxdvu3iw.png",
  ],
  [
    "Cognitive Consent",
    "Privacy & AI Governance",
    "How interface design, behavioral optimization, and AI-era data collection challenge the assumptions behind procedural consent.",
    "Jun 27, 2026",
    "12 min read",
    "Published",
    true,
    "https://emiloart.medium.com/cognitive-consent-f46ae290e06d",
    null,
  ],
  [
    "The Internet Doesn't Have a Privacy Problem. It Has a Verification Problem.",
    "Privacy & Identity",
    "Why digital systems collect identities when they often need only a verified attribute, and what selective disclosure changes.",
    "Jun 23, 2026",
    "4 min read",
    "Published",
    true,
    "https://emiloart.medium.com/the-internet-doesnt-have-a-privacy-problem-it-has-a-verification-problem-ceb08b22c04a",
    "https://miro.medium.com/v2/resize%3Afit%3A1358/format%3Awebp/1%2A6A4A-AeJoZGcNjGrosRZDg.png",
  ],
];

const CAREER_PATHS = [
  ["Research collaborators", "Applied researchers, domain specialists, technical writers, and systems thinkers."],
  ["Engineering talent", "Frontend, backend, security, AI, infrastructure, and product engineers."],
  ["Design and product", "Interface designers, product strategists, experience researchers, and operators."],
  ["Internships and early talent", "People who can learn quickly, document clearly, and help build serious systems."],
  ["Institutional operations", "Partnerships, communications, finance, legal, and program coordination."],
];

const PRINCIPLES = [
  ["Build for trust", "Digital systems should be safer, more verifiable, and more private by default."],
  ["Research before scale", "Important technology should be shaped by clear questions, tests, and constraints."],
  ["Products as surfaces", "Products are how deeper infrastructure reaches people, teams, and institutions."],
  ["Avoid empty claims", "Ambition should be visible without presenting future research as finished proof."],
];

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function normalizePath(pathname: string) {
  const path = (pathname || "/").replace(/\/+$/, "") || "/";
  if (PAGE_META[path as keyof typeof PAGE_META]) return path;
  if (/^\/(products|research)\/[^/]+$/.test(path)) return path;
  return "/";
}

export function useRoute() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  const navigate = (href: string) => {
    const nextPath = normalizePath(href);
    if (nextPath !== path) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return [path, navigate] as const;
}

export function usePageMeta(path: string) {
  useEffect(() => {
    const meta = PAGE_META[path as keyof typeof PAGE_META] || (path.startsWith("/products/") ? { title: "Product | Emilo Labs", description: "A product in the Emilo Labs portfolio." } : path.startsWith("/research/") ? { title: "Research | Emilo Labs", description: "Published research from Emilo Labs." } : PAGE_META["/"]);
    document.title = meta.title;
    const update = (selector: string, attribute: string, value: string) => {
      document.head.querySelector(selector)?.setAttribute(attribute, value);
    };
    update('meta[name="description"]', "content", meta.description);
    update('meta[property="og:title"]', "content", meta.title);
    update('meta[property="og:description"]', "content", meta.description);
    update('meta[name="twitter:title"]', "content", meta.title);
    update('meta[name="twitter:description"]', "content", meta.description);
  }, [path]);
}

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  currentPath?: string;
  onNavigate?: (href: string) => void;
};

export function AppLink({ href, currentPath, onNavigate, className = "", children, ...props }: AppLinkProps) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  if (external || !onNavigate) return <a href={href} className={className} {...props}>{children}</a>;
  const active = normalizePath(href) === currentPath;
  return (
    <a
      {...props}
      href={href}
      className={`${className} ${active ? "is-active" : ""}`.trim()}
      aria-current={active ? "page" : undefined}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        onNavigate(href);
      }}
    >
      {children}
    </a>
  );
}

export function contactHref(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function LiveNetworkScene() {\n  return null;\n}\nexport function EmiloLogo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return <img className={className} src={compact ? "/emilo-labs-mark.svg" : "/emilo-labs-logo.svg"} alt={compact ? "" : "Emilo Labs"} draggable="false" />;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-label"><strong>{children}</strong></div>;
}

export function Reveal({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  const [ref, inView] = useInView();
  return <section id={id} ref={ref} className={`section reveal ${inView ? "is-visible" : ""} ${className}`}>{children}</section>;
}

export function Navbar({ currentPath, onNavigate }: PageProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled || menuOpen ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <AppLink href="/" currentPath={currentPath} onNavigate={onNavigate} className="brand" aria-label="Emilo Labs home">
          <EmiloLogo compact className="brand-mark" /><span>EMILO LABS</span>
        </AppLink>
        <div className="desktop-nav">
          {NAV_LINKS.map(link => <AppLink key={link.label} href={link.href} currentPath={currentPath} onNavigate={onNavigate}>{link.label}</AppLink>)}
        </div>
        <button type="button" className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span /><span /><span /></button>
      </div>
      {menuOpen && <div className="mobile-menu">{NAV_LINKS.map(link => <AppLink key={link.label} href={link.href} currentPath={currentPath} onNavigate={href => { setMenuOpen(false); onNavigate(href); }}>{link.label}</AppLink>)}</div>}
    </nav>
  );
}

export function Hero({ currentPath, onNavigate }: PageProps) {
  return (
    <header id="home" className="hero-section">
      <div className="container">
        <div className="hero-frame">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">EMILO LABS</div>
              <h1>Humanity first. Technology second.</h1>
              <p>Building connected systems with privacy, security, and human needs at the center.</p>
              <div className="hero-actions">
                <AppLink href="/about" currentPath={currentPath} onNavigate={onNavigate} className="primary-button">Explore the institution</AppLink>
                <AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">View research</AppLink>
              </div>
            </div>
            <InstitutionPreview />
          </div>
        </div>
      </div>
    </header>
  );
}

export function Origin() {
  return (
    <Reveal id="origin" className="origin-section">
      <div className="container origin-layout">
        <SectionLabel>ORIGIN</SectionLabel>
        <div className="origin-block light-panel">
          <p>Connected technology creates connected problems.</p>
          <p>Identity needs verification. Communication needs privacy. Digital services need security. Online finance needs trust. Complex systems need coordination and recovery.</p>
          <p>These are infrastructure problems, not isolated product categories. Emilo Labs exists to research and build across that connective layer.</p>
          <div className="origin-signal"><span>EMILO LABS</span><strong>At the Core of a Connected Future.</strong><p>Research, infrastructure, products, and public impact connected by the systems people depend on.</p></div>
          <p className="origin-close">The institution works on the class of problems created by a connected digital world.</p>
        </div>
      </div>
    </Reveal>
  );
}

export function InstitutionMap() {
  const [active, setActive] = useState(0);
  return (
    <Reveal id="institution" className="map-section">
      <div className="container">
        <SectionLabel>INSTITUTION</SectionLabel>
        <div className="relationship-map light-panel">
          <div className="map-line" aria-hidden="true"><i style={{ width: `${((active + 1) / INSTITUTION_FLOW.length) * 100}%` }} /></div>
          {INSTITUTION_FLOW.map((item, index) => (
            <button key={item.title} type="button" className={`map-node ${index <= active ? "is-active" : ""}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
              <span>{item.signal}</span><strong>{item.title}</strong><p>{item.text}</p>
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function ResearchTrackGrid() {
  const research = INSIGHTS.filter(item =>
    item[1] === "Research Essay" ||
    item[1] === "Research Paper" ||
    item[1] === "Privacy & Identity"
  );
  return (
    <Reveal id="research-tracks" className="research-track-section">
      <div className="container">
        <SectionLabel>PUBLISHED RESEARCH</SectionLabel>
        <div className="split-heading">
          <h2>Research already in the world.</h2>
          <p>Published work from Emilo Labs' research surface, linked directly to the original essays and papers.</p>
        </div>
        <div className="track-grid">
          {research.map(([title, category, summary, date, time, , , url, cover], index) => (
            <a
              key={title}
              className="track-card light-panel"
              style={staggerStyle(index)}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="insight-cover research-cover">
                {cover ? <img src={cover} alt="" loading="lazy" /> : <div className="insight-cover-fallback"><span>EMILO LABS</span><strong>{title}</strong></div>}
              </div>
              <span>{category}</span>
              <strong>{title}</strong>
              <p>{summary}</p>
              <small>{date} · {time} · Read on Medium ↗</small>
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

type PillarItem = string[] | { title: string; summary: string; signal: string };

export function PillarCards({ items = RESEARCH_AREAS, limit }: { items?: PillarItem[]; limit?: number }) {
  const visible = limit ? items.slice(0, limit) : items;
  return (
    <div className="pillar-grid">
      {visible.map((item, index) => {
        const [title, description, signal] = Array.isArray(item) ? item : [item.title, item.summary, item.signal];
        return (
          <article key={title} className="pillar-card light-panel" style={staggerStyle(index)}>
            <span>{signal}</span><strong>{title}</strong><p>{description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function Products() {
  const [tierIndex, setTierIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const tier = PRODUCT_TIERS[tierIndex];
  const productCards = useMemo(() => tier.products.map(([name, domain, summary]) => ({ name, domain, summary })), [tier]);
  const activeProduct = tier.products[productIndex] || tier.products[0];
  const move = (offset: number) => setProductIndex((productIndex + offset + productCards.length) % productCards.length);
  return (
    <Reveal id="products" className="products-section">
      <div className="container">
        <SectionLabel>PRODUCTS</SectionLabel>
        <div className="tier-tabs" aria-label="Product status">
          {PRODUCT_TIERS.map((item, index) => <button key={item.title} type="button" className={index === tierIndex ? "is-active" : ""} onClick={() => { setTierIndex(index); setProductIndex(0); }}>{item.title}</button>)}
        </div>
        <div className="product-stage light-panel">
          <div className="product-rail">{productCards.map((product, index) => <button key={product.name} type="button" className={`product-card ${index === productIndex ? "is-active" : ""}`} onClick={() => setProductIndex(index)} aria-pressed={index === productIndex}><span>{product.domain}</span><strong>{product.name}</strong><p>{product.summary}</p></button>)}</div>
          <aside className="active-product"><span>{tier.title}</span><h3>{activeProduct[0]}</h3><p>{activeProduct[2]}</p><strong>{activeProduct[1]}</strong><div className="product-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous product">&lt;</button><small>{String(productIndex + 1).padStart(2, "0")} / {String(productCards.length).padStart(2, "0")}</small><button type="button" onClick={() => move(1)} aria-label="Next product">&gt;</button></div></aside>
        </div>
      </div>
    </Reveal>
  );
}

export function Technology() {
  return <Reveal id="technology" className="technology-section"><div className="container"><SectionLabel>TECHNOLOGY</SectionLabel><div className="technology-system light-panel"><div className="technology-grid">{TECHNOLOGY_AREAS.map(([title, text, signal], index) => <article key={title} className="technology-card" style={staggerStyle(index)}><span>{signal}</span><strong>{title}</strong><p>{text}</p></article>)}</div></div></div></Reveal>;
}

export function CredibilityBand() {
  const loop = [...ECOSYSTEM_MARKS, ...ECOSYSTEM_MARKS];
  return <Reveal id="ecosystems" className="credibility-section"><div className="ecosystem-marquee" aria-label="Technology ecosystem"><div className="ecosystem-track">{loop.map(([name, logo], index) => <div className="ecosystem-logo" key={`${name}-${index}`}><span><img src={logo} alt="" loading="lazy" /></span><strong>{name}</strong></div>)}</div></div></Reveal>;
}

export function PageHero({ label, title, summary, children }: { label: string; title: string; summary: string; children?: ReactNode }) {
  return <header className="page-hero"><div className="container page-hero-inner"><SectionLabel>{label}</SectionLabel><h1>{title}</h1><p>{summary}</p>{children}</div></header>;
}

export function ProductOperatingModel() {
  return <Reveal id="portfolio-model" className="portfolio-model-section"><div className="container"><SectionLabel>PORTFOLIO MODEL</SectionLabel><div className="split-panel light-panel"><div><h2>Products are the practical surface of deeper infrastructure.</h2><p>Active systems are separated from upcoming systems so the portfolio communicates what exists now without presenting future work as finished.</p></div><div className="mini-list"><span>Active</span><span>Coming Soon</span><span>Research-backed</span></div></div></div></Reveal>;
}

export function InsightGrid({ items = INSIGHTS }: { items?: InsightRow[] }) {
  return (
    <div className="insight-grid">
      {items.map(([title, category, summary, date, time, status, featured, url, cover]) => (
        <a
          key={title}
          className={`insight-card light-panel ${featured ? "is-featured" : ""}`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="insight-cover">
            {cover ? (
              <img src={cover} alt="" loading="lazy" />
            ) : (
              <div className="insight-cover-fallback"><span>EMILO LABS</span><strong>{title}</strong></div>
            )}
          </div>
          <div className="insight-meta"><span>{category}</span><small>{status}</small></div>
          <strong>{title}</strong>
          <p>{summary}</p>
          <div className="insight-foot"><span>{date}</span><span>{time}</span><span>Read on Medium ↗</span></div>
        </a>
      ))}
    </div>
  );
}

export function InsightsPreview({ currentPath, onNavigate, featuredOnly = true }: PageProps & { featuredOnly?: boolean }) {
  const items = featuredOnly ? INSIGHTS.filter(item => item[6]).slice(0, 3) : INSIGHTS;
  return <Reveal id="insights-preview" className="insights-preview-section"><div className="container"><SectionLabel>RESEARCH</SectionLabel><div className="split-heading"><h2>Published work.</h2><p>Research publications from the institution, linked to their original sources.</p></div><InsightGrid items={items} /><div className="home-actions"><AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">Open research</AppLink></div></div></Reveal>;
}

export function CareersGrid() {
  return <Reveal id="career-paths" className="career-path-section"><div className="container"><SectionLabel>TALENT NETWORK</SectionLabel><div className="track-grid">{CAREER_PATHS.map(([title, text], index) => <article key={title} className="track-card light-panel" style={staggerStyle(index)}><span>Open interest</span><strong>{title}</strong><p>{text}</p></article>)}</div></div></Reveal>;
}

export function PressResources() {
  return <Reveal id="press-resources" className="press-resource-section"><div className="container"><SectionLabel>MEDIA READINESS</SectionLabel><div className="press-layout"><article className="press-boilerplate light-panel"><h2>Official company context</h2><p>Emilo Labs is a technology institution and parent organization working across identity, privacy, security, intelligent systems, finance, communication, and digital infrastructure.</p><p>The organization connects research, infrastructure, products, and public impact around the problems created by increasingly connected digital systems.</p></article><div className="fact-list light-panel"><div><span>Organization</span><strong>Emilo Labs</strong></div><div><span>Type</span><strong>Technology institution</strong></div><div><span>Official contact</span><strong>{CONTACT_EMAIL}</strong></div></div></div></div></Reveal>;
}

export function Contact() {
  return <Reveal id="contact" className="contact-section"><div className="container contact-inner"><div className="contact-panel light-panel"><SectionLabel>CONTACT</SectionLabel><a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div></Reveal>;
}

export function PrincipleGrid() {
  return <Reveal id="principles" className="principles-section"><div className="container"><SectionLabel>OPERATING PRINCIPLES</SectionLabel><div className="initiative-grid">{PRINCIPLES.map(([title, text], index) => <article key={title} className="initiative-card light-panel" style={staggerStyle(index, 70)}><strong>{title}</strong><p>{text}</p></article>)}</div></div></Reveal>;
}

export function Footer({ currentPath, onNavigate }: PageProps) {
  return <footer className="footer"><div className="container footer-inner"><AppLink href="/" currentPath={currentPath} onNavigate={onNavigate} className="brand" aria-label="Emilo Labs home"><EmiloLogo compact className="brand-mark" /><span>EMILO LABS</span></AppLink><div className="footer-groups">{FOOTER_GROUPS.map(group => <div key={group.title} className="footer-group"><strong>{group.title}</strong>{group.links.map(link => <AppLink key={link.label} href={link.href} currentPath={currentPath} onNavigate={onNavigate}>{link.label}</AppLink>)}</div>)}</div><small>© {new Date().getFullYear()} Emilo Labs</small></div></footer>;