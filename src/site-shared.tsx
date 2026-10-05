import { useEffect, useId, useRef, useState, type AnchorHTMLAttributes, type CSSProperties, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  { title: "Institution", links: [{ label: "About", href: "/about" }, { label: "Email", href: `mailto:${CONTACT_EMAIL}` }] },
  { title: "Products", links: [{ label: "All products", href: "/products" }] },
  { title: "Research", links: [{ label: "Research archive", href: "/research" }] },
  { title: "Labs", links: [{ label: "Experiments", href: "/labs" }] },
];

export const PAGE_META = {
  "/": {
    title: "Emilo Labs | Humanity first. Technology second.",
    description: "Emilo Labs is a technology institution connecting research, experimental work, and products across the systems people use online.",
  },
  "/about": {
    title: "About | Emilo Labs",
    description: "The origin, founder, operating principles, and contact information for Emilo Labs.",
  },
  "/research": {
    title: "Research | Emilo Labs",
    description: "Published essays and papers from Emilo Labs, followed by areas of inquiry across connected digital systems.",
  },
  "/products": {
    title: "Products | Emilo Labs",
    description: "Active and upcoming Emilo Labs systems across communication, identity, verification, security, finance, and intelligent systems.",
  },
  "/labs": {
    title: "Labs | Emilo Labs",
    description: "Experiments and systems in development at Emilo Labs, with links to related products.",
  },
};

const INSTITUTION_FLOW = [
  { title: "Research", text: "Defines the questions worth solving.", signal: "Direction" },
  { title: "Labs", text: "Tests ideas through experiments.", signal: "Exploration" },
  { title: "Infrastructure", text: "Builds reusable systems and protocols.", signal: "Foundation" },
  { title: "Products", text: "Delivers systems to people and organizations.", signal: "Surface" },
  { title: "Public Impact", text: "Improves safety, trust, and coordination online.", signal: "Outcome" },
];

export const RESEARCH_AREAS = [
  ["Identity", "What can a service verify without retaining a person's full identity?"],
  ["Privacy", "How can people recover an account without connecting it to a public identity?"],
  ["Security", "Which device and recovery controls remain reliable when trust is lost?"],
  ["Intelligent Systems", "How can multiple agents coordinate work while preserving permissions and verifiable outcomes?"],
  ["Financial Systems", "How should lending and exchange workflows make settlement obligations explicit?"],
  ["Internet Systems", "How can pseudonymous communities handle participation, continuity, and abuse?"],
];

const TECHNOLOGY_AREAS = [
  ["Software & Internet Systems", "Applications, APIs, data services, and communication infrastructure.", "Systems layer"],
  ["Identity & Privacy", "Credentials, selective disclosure, anonymous continuity, and recovery.", "Trust layer"],
  ["Security Engineering", "Threat modeling, application security, and risk-aware system design.", "Defense layer"],
  ["Applied AI", "Research assistance, structured analysis, and bounded automation.", "Intelligence layer"],
  ["Financial Technology", "Lending workflows, value exchange, and settlement concepts.", "Value layer"],
  ["Infrastructure & Data", "Service architecture, data pipelines, and distributed components.", "Foundation layer"],
  ["Industrial Technology", "Exploratory work in automation, monitoring, and software-defined operations.", "Industry research"],
  ["Health Technology", "Exploration of privacy-aware data systems and safer digital workflows.", "Exploratory domain"],
  ["Frontier Systems", "Long-range inquiry into new interfaces and resilient system models.", "Frontier research"],
];

const ECOSYSTEM_MARKS = [
  ["Starknet", "/ecosystem/starknet.svg"],
  ["Aleo", "/ecosystem/aleo.svg"],
  ["IOTA", "/ecosystem/iota.svg"],
  ["Ethereum", "/ecosystem/ethereum.svg"],
  ["Supabase", "/ecosystem/supabase.svg"],
  ["WireGuard", "/ecosystem/wireguard.svg"],
  ["Rust", "/ecosystem/rust.svg"],
  ["Go", "/ecosystem/go.svg"],
  ["React", "/ecosystem/react.svg"],
  ["Three.js", "/ecosystem/threejs.svg"],
  ["Vite", "/ecosystem/vite.svg"],
  ["Node.js", "/ecosystem/nodejs.svg"],
  ["PostgreSQL", "/ecosystem/postgresql.svg"],
  ["Cloudflare", "/ecosystem/cloudflare.svg"],
  ["Vercel", "/ecosystem/vercel.svg"],
];

export type Product = {
  name: string;
  domain: string;
  summary: string;
  description: string;
  status: "Active" | "Coming Soon" | "Paused" | "Discontinued";
  stage: string;
};

export const PRODUCT_TIERS: { title: string; products: Product[] }[] = [
  {
    title: "Active",
    products: [
      {
        name: "ShadeFast", domain: "Social systems", status: "Active",
        summary: "Pseudonymous feeds, communities, and private rooms.",
        description: "ShadeFast lets people publish posts, join communities, respond to polls, and exchange messages without publishing a real-world identity. Its social experience includes Ask links, Drops, challenges, and private rooms.",
        stage: "Android release; iOS and web development ongoing",
      },
      {
        name: "HDIP", domain: "Identity", status: "Active",
        summary: "Reusable identity credentials with selective disclosure and controlled recovery.",
        description: "HDIP connects credential issuance, verification, and identity lifecycle management. Current work covers a reusable-KYC foundation, selective disclosure, key history, and recovery authorization.",
        stage: "Reusable-KYC and identity foundations in development",
      },
      {
        name: "VerifyFlow", domain: "Verification", status: "Active",
        summary: "Measure KYC onboarding, provider decisions, re-checks, and tier upgrades.",
        description: "VerifyFlow runs a consistent onboarding and verification sequence through configured KYC provider adapters. Teams can examine provider decisions and how those decisions affect access, re-checks, and account upgrades.",
        stage: "Implementation with a local mock provider; launch work ongoing",
      },
      {
        name: "Reach", domain: "Private communication", status: "Active",
        summary: "Private messaging for direct conversations, small groups, and pseudonymous communities.",
        description: "Reach is being developed for direct messaging, private groups, and pseudonymous communities. Its architecture focuses on device trust, message encryption, reduced metadata, and scoped abuse reporting.",
        stage: "Architecture and service foundations in development",
      },
      {
        name: "LabGuard", domain: "Device security", status: "Active",
        summary: "VPN, trusted-device management, and lost-device recovery for Emilo Labs.",
        description: "LabGuard is an internal Android-first security suite combining a WireGuard VPN client, a device registry, lost-device workflows, and remote security actions. Production provisioning remains in development.",
        stage: "Internal suite; production provisioning in development",
      },
      {
        name: "LendEarn", domain: "Peer lending", status: "Active",
        summary: "Peer-to-peer lending with referral flows on Shardeum.",
        description: "LendEarn explores peer-to-peer lending and referral participation on Shardeum. The project connects lending workflows with a web interface for participants.",
        stage: "Web implementation; public release status unconfirmed",
      },
    ],
  },
  {
    title: "Coming Soon",
    products: [
      {
        name: "ZKShade", domain: "Identity recovery", status: "Coming Soon",
        summary: "Aleo-based recovery proofs for pseudonymous accounts.",
        description: "ZKShade registers an opaque recovery commitment and verifies knowledge of the same private recovery material on Aleo. The prototype covers the recovery primitive; ShadeFast session restoration is future integration work.",
        stage: "Aleo testnet prototype; application integration pending",
      },
      {
        name: "UTB", domain: "Research intelligence", status: "Coming Soon",
        summary: "Continuous source monitoring, connected research, and intelligence briefs.",
        description: "Ultra Hybrid Brain is being designed to monitor selected information sources, connect findings in a knowledge graph, and prepare reports and alerts. Its research workflows are intended to continue between user sessions.",
        stage: "Architecture and build specification",
      },
      {
        name: "SCOS Pro", domain: "Workflow coordination", status: "Coming Soon",
        summary: "Email, calendar, and task coordination with scoped permissions.",
        description: "Smart Chief of Staff Pro is being designed to coordinate work across connected email, calendars, documents, and tasks. Its planned execution model uses scoped permissions, durable workflows, approvals, and an action history.",
        stage: "Architecture and build specification",
      },
      {
        name: "HYEX", domain: "Financial exchange", status: "Coming Soon",
        summary: "Planned crypto-to-fiat exchange with custody and escrow settlement.",
        description: "Hybrid Exchange is planned as a peer-to-peer crypto-to-fiat exchange. Its proposed trading flow combines in-app custody, escrow-controlled settlement, and merchant tools.",
        stage: "Product direction; implementation not yet published",
      },
      {
        name: "HSG Pro", domain: "Online safety", status: "Coming Soon",
        summary: "A planned layer for detecting deception in online interactions.",
        description: "Hybrid Smart Guard Pro is a planned AI-assisted deception detection layer for online interactions.",
        stage: "Product direction; implementation not yet published",
      },
      {
        name: "SPFS Pro", domain: "Personal finance", status: "Coming Soon",
        summary: "A planned system for coordinating personal finances with AI.",
        description: "Smart Personal Finance System Pro is planned as an AI-assisted personal finance system.",
        stage: "Product direction; implementation not yet published",
      },
      {
        name: "ASL Pro", domain: "Security automation", status: "Coming Soon",
        summary: "Planned vulnerability scanning and remediation across code and infrastructure.",
        description: "Autonomous Security Layer Pro is planned to inspect code, dependencies, infrastructure, and delivery pipelines. Its proposed workflow includes vulnerability prioritization and automated remediation.",
        stage: "Product direction; implementation not yet published",
      },
      {
        name: "Ransomware DSS", domain: "Security education", status: "Coming Soon",
        summary: "Simulated scanning, ransomware awareness, and team assessments.",
        description: "Ransomware DSS combines simulated scanning and quarantine workflows with awareness quizzes and team assessment dashboards. The documented scanning behavior is a simulation, not a validated endpoint detection engine.",
        stage: "Research prototype with simulated security workflows",
      },
      {
        name: "AI Finance Tracker", domain: "Personal finance", status: "Coming Soon",
        summary: "Expense tracking, budget management, and spending analysis.",
        description: "AI Finance Tracker is a project for recording expenses, managing budgets, and developing spending insights. The repository contains an initial application and database foundation.",
        stage: "Initial application foundation",
      },
    ],
  },
  {
    title: "Earlier work",
    products: [
      {
        name: "Achievo", domain: "Achievement credentials", status: "Paused",
        summary: "Milestones, reviewed evidence, and verifiable achievement records.",
        description: "Achievo connects organization-issued programs and milestones with submitted evidence, reviewer attestations, and portable proof artifacts. Development is currently paused.",
        stage: "Development paused",
      },
      {
        name: "ZKShade Starknet", domain: "Identity recovery", status: "Discontinued",
        summary: "A Cairo prototype for pseudonymous account recovery.",
        description: "This earlier ZKShade implementation explored recovery commitments on Starknet using Cairo. The project has been discontinued; current ZKShade work uses Aleo.",
        stage: "Discontinued prototype",
      },
    ],
  },
];

export const ALL_PRODUCTS = PRODUCT_TIERS.flatMap(tier => tier.products);

export const LABS_EXPERIMENTS = [
  ["Celetixo", "Engineering-state coordination and optimistic concurrency for AI coding agents."],
];

export const LABS_PRODUCT_NAMES = ["UTB", "SCOS Pro"];

export function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function ProductThumbnail({ product }: { product: Product }) {
  return (
    <div className={`product-thumbnail${product.name === "ShadeFast" ? " is-logo" : ""}`}>
      <img src={`/products/${slugify(product.name)}.svg`} alt="" width="320" height="320" loading="lazy" decoding="async" />
    </div>
  );
}

export function ProductCarousel({ title, products, currentPath, onNavigate, headingLevel = 3 }: PageProps & { title: string; products: Product[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const id = useId();
  const track = useRef<HTMLUListElement>(null);
  const reducedMotion = useReducedMotion();
  const [bounds, setBounds] = useState({ previous: false, next: false });

  useEffect(() => {
    const node = track.current;
    if (!node) return undefined;
    const update = () => {
      const maximum = node.scrollWidth - node.clientWidth;
      const previous = node.scrollLeft > 2;
      const next = node.scrollLeft < maximum - 2;
      setBounds(current => current.previous === previous && current.next === next ? current : { previous, next });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    node.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      node.removeEventListener("scroll", update);
    };
  }, [products]);

  const move = (direction: number) => {
    const node = track.current;
    if (!node) return;
    const tile = node.firstElementChild;
    const step = tile ? tile.getBoundingClientRect().width + parseFloat(getComputedStyle(node).columnGap) : node.clientWidth;
    const visible = Math.max(1, Math.round(node.clientWidth / step));
    node.scrollBy({ left: step * visible * direction, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <div className="product-carousel" role="region" aria-roledescription="carousel" aria-labelledby={`${id}-title`}>
      <div className="carousel-heading">
        <Heading id={`${id}-title`}>{title} <span>{products.length}</span></Heading>
        <div className="carousel-controls">
          <button type="button" aria-label={`Previous ${title.toLowerCase()} products`} title="Previous products" aria-controls={`${id}-track`} disabled={!bounds.previous} onClick={() => move(-1)}><ChevronLeft size={18} aria-hidden="true" /></button>
          <button type="button" aria-label={`Next ${title.toLowerCase()} products`} title="Next products" aria-controls={`${id}-track`} disabled={!bounds.next} onClick={() => move(1)}><ChevronRight size={18} aria-hidden="true" /></button>
        </div>
      </div>
      <ul
        className="carousel-track"
        id={`${id}-track`}
        ref={track}
        tabIndex={0}
        aria-label={`${title} products`}
        onKeyDown={event => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            track.current?.scrollTo({ left: event.key === "Home" ? 0 : track.current.scrollWidth, behavior: reducedMotion ? "instant" : "smooth" });
          }
        }}
      >
        {products.map(product => (
          <li className="carousel-item" key={product.name}>
            <AppLink href={`/products/${slugify(product.name)}`} currentPath={currentPath} onNavigate={onNavigate} className="carousel-product">
              <ProductThumbnail product={product} />
              <div className="carousel-product-copy">
                <h4>{product.name}</h4>
                <p>{product.summary}</p>
                {(product.status === "Paused" || product.status === "Discontinued") && <small>{product.status}</small>}
              </div>
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
  ["Limit data collection", "Define what each interaction needs to establish before deciding which personal data to collect."],
  ["Make authority explicit", "Give users and services defined permissions. Keep consequential actions traceable to their authorization."],
  ["Design for recovery", "Test account continuity, device loss, and key changes alongside the normal path through a product."],
  ["Verify release behavior", "Check deployed behavior against implementation evidence before presenting a capability as available."],
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
  return (pathname || "/").split(/[?#]/)[0].replace(/\/+$/, "") || "/";
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
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return [path, navigate] as const;
}

export function usePageMeta(path: string) {
  useEffect(() => {
    const product = path.startsWith("/products/")
      ? ALL_PRODUCTS.find(product => `/products/${slugify(product.name)}` === path)
      : undefined;
    const publication = path.startsWith("/research/")
      ? INSIGHTS.find(([title]) => `/research/${slugify(title)}` === path)
      : undefined;
    const staticMeta = PAGE_META[path as keyof typeof PAGE_META];
    const known = Boolean(staticMeta || product || publication);
    const meta = staticMeta || (product
      ? { title: `${product.name} | Products | Emilo Labs`, description: product.summary }
      : publication
        ? { title: `${publication[0]} | Research | Emilo Labs`, description: publication[2] }
        : { title: "Page unavailable | Emilo Labs", description: "The requested page is unavailable." });
    document.title = meta.title;
    const update = (selector: string, attribute: string, value: string) => {
      document.head.querySelector(selector)?.setAttribute(attribute, value);
    };
    update('meta[name="description"]', "content", meta.description);
    update('meta[property="og:title"]', "content", meta.title);
    update('meta[property="og:description"]', "content", meta.description);
    update('meta[name="twitter:title"]', "content", meta.title);
    update('meta[name="twitter:description"]', "content", meta.description);
    update('meta[name="robots"]', "content", known ? "index,follow" : "noindex");
    const pageUrl = `https://emilolabs.com${known ? (path === "/" ? "/" : path) : "/"}`;
    update('link[rel="canonical"]', "href", pageUrl);
    update('meta[property="og:url"]', "content", pageUrl);
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

export function EmiloLogo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
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
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
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
        <button type="button" className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span /><span /><span /></button>
      </div>
      <div id="mobile-navigation" className="mobile-menu" hidden={!menuOpen}>{NAV_LINKS.map(link => <AppLink key={link.label} href={link.href} currentPath={currentPath} onNavigate={href => { setMenuOpen(false); onNavigate(href); }}>{link.label}</AppLink>)}</div>
    </nav>
  );
}

export function Origin() {
  return (
    <Reveal id="origin" className="origin-section">
      <div className="container">
        <SectionLabel>ORIGIN</SectionLabel>
        <div className="origin-content">
          <div className="origin-statement">
            <h2>Founded by Chukwuemeka Ilodubah.</h2>
            <p>Emilo Labs develops products and conducts research around how people participate in digital systems. Its work includes ShadeFast's pseudonymous communities, HDIP's reusable credentials, and VerifyFlow's measurement of identity checks.</p>
            <p>Research examines the assumptions behind those systems, including what identity checks establish, how consent is obtained, and how the value of data changes with technical capability.</p>
          </div>
          <dl className="origin-facts">
            <div><dt>Founder</dt><dd>Chukwuemeka Ilodubah</dd></div>
            <div><dt>Work</dt><dd>Research, Labs, and products</dd></div>
            <div><dt>Contact</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div>
          </dl>
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

export function Technology() {
  return <Reveal id="technology" className="technology-section"><div className="container"><SectionLabel>TECHNOLOGY</SectionLabel><div className="technology-system light-panel"><div className="technology-grid">{TECHNOLOGY_AREAS.map(([title, text, signal], index) => <article key={title} className="technology-card" style={staggerStyle(index)}><span>{signal}</span><strong>{title}</strong><p>{text}</p></article>)}</div></div></div></Reveal>;
}

export function CredibilityBand() {
  const loop = [...ECOSYSTEM_MARKS, ...ECOSYSTEM_MARKS];
  return <Reveal id="ecosystems" className="credibility-section"><div className="ecosystem-marquee" aria-label="Technology ecosystem"><div className="ecosystem-track">{loop.map(([name, logo], index) => <div className="ecosystem-logo" key={`${name}-${index}`}><span><img src={logo} alt="" loading="lazy" /></span><strong>{name}</strong></div>)}</div></div></Reveal>;
}

export function PageHero({ label, title, summary, children }: { label: string; title: string; summary?: string; children?: ReactNode }) {
  return <header className="page-hero"><div className="container page-hero-inner"><SectionLabel>{label}</SectionLabel><h1>{title}</h1>{summary && <p>{summary}</p>}{children}</div></header>;
}

export function InsightGrid({ items = INSIGHTS, layout = "cards" }: { items?: InsightRow[]; layout?: "cards" | "index" }) {
  return (
    <div className={`insight-grid ${layout === "index" ? "insight-index" : ""}`}>
      {items.map(([title, category, summary, date, time, status, , url, cover]) => (
        <a
          key={title}
          className="insight-card light-panel"
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
          <div className="insight-body">
            <div className="insight-meta"><span>{category}</span><small>{status}</small></div>
            <strong>{title}</strong>
            <p>{summary}</p>
            <div className="insight-foot"><span>{date}</span><span>{time}</span><span>Read on Medium ↗</span></div>
          </div>
        </a>
      ))}
    </div>
  );
}

export function InsightsPreview({ currentPath, onNavigate, featuredOnly = true }: PageProps & { featuredOnly?: boolean }) {
  const items = featuredOnly ? INSIGHTS.filter(item => item[6]).slice(0, 3) : INSIGHTS;
  return <Reveal id="insights-preview" className="insights-preview-section"><div className="container"><div className="split-heading"><h2>Publications</h2><AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="section-link">All research <span aria-hidden="true">↗</span></AppLink></div><InsightGrid items={items} /></div></Reveal>;
}

export function CareersGrid() {
  return <Reveal id="career-paths" className="career-path-section"><div className="container"><SectionLabel>TALENT NETWORK</SectionLabel><div className="track-grid">{CAREER_PATHS.map(([title, text], index) => <article key={title} className="track-card light-panel" style={staggerStyle(index)}><span>Open interest</span><strong>{title}</strong><p>{text}</p></article>)}</div></div></Reveal>;
}

export function PressResources() {
  return <Reveal id="press-resources" className="press-resource-section"><div className="container"><SectionLabel>MEDIA READINESS</SectionLabel><div className="press-layout"><article className="press-boilerplate light-panel"><h2>Official company context</h2><p>Emilo Labs is a technology institution and parent organization working across identity, privacy, security, intelligent systems, finance, communication, and digital infrastructure.</p><p>The organization connects research, infrastructure, products, and public impact around the problems created by increasingly connected digital systems.</p></article><div className="fact-list light-panel"><div><span>Organization</span><strong>Emilo Labs</strong></div><div><span>Type</span><strong>Technology institution</strong></div><div><span>Official contact</span><strong>{CONTACT_EMAIL}</strong></div></div></div></div></Reveal>;
}

export function Contact() {
  return <Reveal id="contact" className="contact-section"><div className="container contact-inner"><div><SectionLabel>CONTACT</SectionLabel><h2>Contact Emilo Labs.</h2></div><a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <span aria-hidden="true">↗</span></a></div></Reveal>;
}

export function PrincipleGrid() {
  return <Reveal id="principles" className="principles-section"><div className="container"><SectionLabel>OPERATING PRINCIPLES</SectionLabel><div className="principle-grid">{PRINCIPLES.map(([title, text], index) => <article key={title} className="principle-item"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></Reveal>;
}

export function Footer({ currentPath, onNavigate }: PageProps) {
  return <footer className="footer"><div className="container footer-inner"><AppLink href="/" currentPath={currentPath} onNavigate={onNavigate} className="brand" aria-label="Emilo Labs home"><EmiloLogo compact className="brand-mark" /><span>EMILO LABS</span></AppLink><div className="footer-groups">{FOOTER_GROUPS.map(group => <div key={group.title} className="footer-group"><strong>{group.title}</strong>{group.links.map(link => <AppLink key={link.label} href={link.href} currentPath={currentPath} onNavigate={onNavigate}>{link.label}</AppLink>)}</div>)}</div><small>© {new Date().getFullYear()} Emilo Labs</small></div></footer>;
}
