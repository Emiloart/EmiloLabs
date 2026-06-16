import { useEffect, useMemo, useRef, useState } from "react";

const CONTACT_EMAIL = "emilolabs@gmail.com";

const NAV_LINKS = [
  { label: "Organization", href: "#organization" },
  { label: "Research", href: "#research" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Open Source", href: "#opensource" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Contact", href: "#contact" },
];

const FOCUS_AREAS = [
  {
    name: "Software Engineering",
    short: "Software",
    color: "#6EA8FE",
    angle: -112,
    summary: "Product systems, developer tooling, public websites, and production software foundations.",
  },
  {
    name: "Artificial Intelligence",
    short: "AI",
    color: "#A987FF",
    angle: -62,
    summary: "Research automation, agentic operations, deception detection, and decision-support systems.",
  },
  {
    name: "Cybersecurity",
    short: "Security",
    color: "#66E38C",
    angle: -12,
    summary: "Device protection, vulnerability automation, ransomware defense, and resilient control planes.",
  },
  {
    name: "Digital Identity",
    short: "Identity",
    color: "#4B7BE8",
    angle: 36,
    summary: "Reusable verification, credentials, reputation, and identity infrastructure.",
  },
  {
    name: "Privacy Technologies",
    short: "Privacy",
    color: "#63D6E8",
    angle: 86,
    summary: "Private recovery, selective disclosure, anonymous identity, and encrypted communication.",
  },
  {
    name: "Financial Technologies",
    short: "FinTech",
    color: "#F6B44B",
    angle: 136,
    summary: "Safer lending, exchange, escrow, personal finance, and value-transfer systems.",
  },
  {
    name: "Consumer Protection",
    short: "Protection",
    color: "#EF4B7A",
    angle: 186,
    summary: "Scam prevention, online safety, fraud research, and user protection before harm occurs.",
  },
  {
    name: "Internet Infrastructure",
    short: "Internet",
    color: "#E8D36F",
    angle: 236,
    summary: "Communication, coordination, open-source infrastructure, and public digital systems.",
  },
];

const RESEARCH_AREAS = [
  {
    tag: "AI SYSTEMS",
    title: "Intelligence that can be supervised",
    desc: "Agents, research automation, decision support, and safety loops designed around visibility and control.",
  },
  {
    tag: "SECURITY",
    title: "Protection before failure",
    desc: "Threat models, device control, ransomware defense, vulnerability response, and consumer safety tooling.",
  },
  {
    tag: "IDENTITY",
    title: "Reusable proof for digital systems",
    desc: "Credentials, verifier rails, KYC measurement, reputation, and evidence systems that move across contexts.",
  },
  {
    tag: "PRIVACY",
    title: "Continuity without exposure",
    desc: "Zero-knowledge recovery, anonymous identity, selective disclosure, and private communication models.",
  },
  {
    tag: "FINANCIAL TECHNOLOGY",
    title: "Safer value exchange",
    desc: "P2P lending, escrow settlement, financial automation, exchange flows, and explainable finance systems.",
  },
  {
    tag: "INTERNET INFRASTRUCTURE",
    title: "Better coordination online",
    desc: "Protocols, tools, communities, workflows, and public systems that help people coordinate with less friction.",
  },
];

const PROJECTS = [
  {
    name: "ShadeFast",
    repo: "shadeFast",
    domain: "Communication & Digital Experiences",
    language: "Dart",
    stage: "Product build",
    url: "https://github.com/Emiloart/shadeFast",
    updated: "Jun 15, 2026",
    summary: "Anonymous community app for schools, workplaces, faith groups, neighborhoods, and private groups.",
    signal: "Feeds, communities, private rooms, anonymous sessions, moderation controls, Supabase RLS, and retention workflows.",
  },
  {
    name: "Reach",
    repo: "Reach",
    domain: "Identity & Privacy",
    language: "Rust",
    stage: "Architecture",
    url: "https://github.com/Emiloart/Reach",
    updated: "Jun 14, 2026",
    summary: "Privacy-first messaging for direct chats, small private groups, and pseudonymous communities.",
    signal: "End-to-end encryption, metadata minimization, scoped identity, per-device trust, and abuse controls.",
  },
  {
    name: "LendEarn",
    repo: "lendearn",
    domain: "Financial Technology",
    language: "JavaScript",
    stage: "App build",
    url: "https://github.com/Emiloart/lendearn",
    updated: "Jun 12, 2026",
    summary: "P2P lending with referral mechanics on Shardeum.",
    signal: "Explores repayment behavior, referral proof, and on-chain context as part of a credit surface.",
  },
  {
    name: "ZKShade Starknet",
    repo: "Zkshade-starknet",
    domain: "Identity & Privacy",
    language: "Cairo",
    stage: "Prototype",
    url: "https://github.com/Emiloart/Zkshade-starknet",
    updated: "Jun 11, 2026",
    summary: "Cairo prototype for anonymous identity recovery on Starknet.",
    signal: "Uses commitments so a person can prove continuity without exposing email, phone, username, or platform IDs.",
  },
  {
    name: "ZKShade",
    repo: "zkshade",
    domain: "Identity & Privacy",
    language: "Leo",
    stage: "Prototype",
    url: "https://github.com/Emiloart/zkshade",
    updated: "Jun 10, 2026",
    summary: "Aleo/Leo recovery primitive for anonymous social identity.",
    signal: "Demonstrates registration and recovery with private material and commitments across device changes.",
  },
  {
    name: "LabGuard",
    repo: "labguard",
    domain: "Security & Consumer Protection",
    language: "Dart",
    stage: "Private suite",
    url: "https://github.com/Emiloart/labguard",
    updated: "Jun 6, 2026",
    summary: "Android-first security suite for VPN, trusted devices, and recovery actions.",
    signal: "Combines WireGuard control, trusted-device management, lost-device flows, and remote security actions.",
  },
  {
    name: "Achievo",
    repo: "achievo",
    domain: "Identity & Privacy",
    language: "TypeScript",
    stage: "Platform",
    url: "https://github.com/Emiloart/achievo",
    updated: "Jun 5, 2026",
    summary: "Verifiable achievement and credential infrastructure.",
    signal: "Organizations publish programs, reviewers validate evidence, and participants export proof artifacts.",
  },
  {
    name: "VerifyFlow",
    repo: "VerifyFlow",
    domain: "Identity & Privacy",
    language: "TypeScript",
    stage: "Product",
    url: "https://github.com/Emiloart/VerifyFlow",
    updated: "Jun 5, 2026",
    summary: "Controlled measurement system for KYC and verification flows.",
    signal: "Tests onboarding, provider checks, outcomes, re-checks, and tier upgrades through neutral adapters.",
  },
  {
    name: "Nest Foods Ltd",
    repo: "nestfoodsltd",
    domain: "Open Source & Delivery",
    language: "TypeScript",
    stage: "Corporate site",
    url: "https://github.com/Emiloart/nestfoodsltd",
    updated: "Jun 5, 2026",
    summary: "Corporate website for Nest Foods Limited and the De-Nest Bread public brand.",
    signal: "Public-facing web delivery with product information, standards, contact, careers, privacy, and forms.",
  },
  {
    name: "HDIP",
    repo: "HDIP",
    domain: "Identity & Privacy",
    language: "Go",
    stage: "Phase 1 hardening",
    url: "https://github.com/Emiloart/HDIP",
    updated: "May 2, 2026",
    summary: "Hybrid Decentralized Identity Passport for reusable verification and cross-platform identity.",
    signal: "Governance scaffolding, issuer and verifier logic, persistence, auth boundaries, bridge work, and runbooks.",
  },
  {
    name: "UTB",
    repo: "UTB",
    domain: "AI & Intelligent Systems",
    language: "Research",
    stage: "Concept",
    url: "https://github.com/Emiloart/UTB",
    updated: "Apr 3, 2026",
    summary: "Ultra Hybrid Brain, an AI-native intelligence platform for continuous automated research.",
    signal: "Collects from multiple data sources and turns scattered inputs into structured insight.",
  },
  {
    name: "HYEX",
    repo: "HYEX",
    domain: "Financial Technology",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/HYEX",
    updated: "Apr 3, 2026",
    summary: "Hybrid crypto-to-fiat exchange and marketplace system.",
    signal: "Safer P2P trading through in-app custody, escrow-controlled settlement, and merchant-oriented usability.",
  },
  {
    name: "SCOS Pro",
    repo: "SCOSpro",
    domain: "AI & Intelligent Systems",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/SCOSpro",
    updated: "Apr 3, 2026",
    summary: "Smart Chief of Staff Pro, a persistent autonomous agent layer for a user's digital environment.",
    signal: "Moves tasks, decisions, and workflows into supervised autonomous loops.",
  },
  {
    name: "HSG Pro",
    repo: "HSGpro",
    domain: "Security & Consumer Protection",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/HSGpro",
    updated: "Apr 3, 2026",
    summary: "Hybrid Smart Guard Pro, an AI-driven deception detection layer between users and the internet.",
    signal: "Targets the moment before a user trusts a message, link, seller, profile, or claim.",
  },
  {
    name: "SPFS Pro",
    repo: "SPFSpro",
    domain: "Financial Technology",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/SPFSpro",
    updated: "Apr 3, 2026",
    summary: "Smart Personal Finance System Pro, an AI-native personal finance operating system.",
    signal: "Financial visibility, planning, decisions, and automation beyond a narrow expense tracker.",
  },
  {
    name: "ASL Pro",
    repo: "ASLpro",
    domain: "Security & Consumer Protection",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/ASLpro",
    updated: "Apr 3, 2026",
    summary: "Autonomous Security Layer Pro for code, dependency, infrastructure, and CI/CD security.",
    signal: "Continuously scans software surfaces and moves from alerting toward prioritized remediation.",
  },
  {
    name: "Emilo Labs",
    repo: "EmiloLabs",
    domain: "Open Source & Delivery",
    language: "Website",
    stage: "Public hub",
    url: "https://github.com/Emiloart/EmiloLabs",
    updated: "Apr 3, 2026",
    summary: "Public home for the Emilo Labs organization.",
    signal: "Explains the mission, research areas, product registry, technology base, open-source work, and initiatives.",
  },
  {
    name: "Anonymous",
    repo: "anonymous-",
    domain: "Communication & Digital Experiences",
    language: "Seed",
    stage: "Seed repo",
    url: "https://github.com/Emiloart/anonymous-",
    updated: "Mar 21, 2026",
    summary: "Minimal public seed repository for an anonymous product idea.",
    signal: "Keeps the anonymous social track visible as a recurring exploration.",
  },
  {
    name: "Devflow Quest",
    repo: "devflow-quest",
    domain: "Open Source & Delivery",
    language: "Workflow",
    stage: "Lab",
    url: "https://github.com/Emiloart/devflow-quest",
    updated: "Oct 15, 2025",
    summary: "Developer workflow lab with CI and linting practice.",
    signal: "A lightweight experiment in repeatable delivery, linting, and workflow discipline.",
  },
  {
    name: "AI Finance Tracker",
    repo: "ai-finance-tracker",
    domain: "Financial Technology",
    language: "App",
    stage: "Prototype",
    url: "https://github.com/Emiloart/ai-finance-tracker",
    updated: "Oct 15, 2025",
    summary: "AI-powered personal finance tracker for expenses, budgets, and spending insight.",
    signal: "Explores how AI can reduce manual finance tracking and surface clearer spending patterns.",
  },
  {
    name: "Ransomware DSS",
    repo: "ransomware_dss",
    domain: "Security & Consumer Protection",
    language: "HTML / Python",
    stage: "Research prototype",
    url: "https://github.com/Emiloart/ransomware_dss",
    updated: "Oct 11, 2025",
    summary: "Research and prototype system focused on ransomware detection and deterrence.",
    signal: "Flask, authentication, dashboards, modules, and decision-support flows for ransomware defense.",
  },
];

const TECHNOLOGY_AREAS = [
  {
    area: "Software engineering",
    desc: "Product architecture, public web systems, application delivery, workflows, and maintainable implementation practice.",
    signals: ["ShadeFast", "Nest Foods Ltd", "Devflow Quest"],
  },
  {
    area: "Artificial intelligence",
    desc: "Autonomous research, personal operations, deception detection, finance assistance, and decision-support loops.",
    signals: ["UTB", "SCOS Pro", "HSG Pro"],
  },
  {
    area: "Cybersecurity",
    desc: "Device trust, VPN control planes, vulnerability automation, ransomware decision support, and recovery workflows.",
    signals: ["LabGuard", "ASL Pro", "Ransomware DSS"],
  },
  {
    area: "Identity systems",
    desc: "Credential issuance, verifier flows, KYC measurement, reputation records, and reusable verification infrastructure.",
    signals: ["HDIP", "VerifyFlow", "Achievo"],
  },
  {
    area: "Privacy technologies",
    desc: "Anonymous identity, zero-knowledge recovery, selective disclosure, encrypted communication, and scoped identity.",
    signals: ["ZKShade", "ZKShade Starknet", "Reach"],
  },
  {
    area: "Financial technology",
    desc: "Escrow, reputation lending, P2P settlement, personal finance intelligence, and safer value exchange.",
    signals: ["HYEX", "LendEarn", "SPFS Pro"],
  },
];

const INITIATIVES = [
  {
    title: "Internet safety",
    desc: "Systems that help people evaluate messages, links, profiles, sellers, claims, and online interactions before damage happens.",
  },
  {
    title: "Consumer protection",
    desc: "Research and product work focused on scams, fraud patterns, reputation gaps, and user protection in everyday digital life.",
  },
  {
    title: "Digital literacy",
    desc: "Clearer tools, explanations, and product experiences that help users understand what systems are asking them to trust.",
  },
  {
    title: "Open collaboration",
    desc: "Public repositories, technical notes, prototypes, and developer-facing work that make the organization inspectable.",
  },
  {
    title: "Future interfaces",
    desc: "Experiments in anonymous communities, AI assistants, private communication, identity recovery, and financial coordination.",
  },
];

const PRODUCT_DOMAINS = ["All", ...Array.from(new Set(PROJECTS.map(project => project.domain)))];

function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [duration, start, target]);

  return count;
}

function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function ELMark({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <text x="8" y="72" fontFamily="IBM Plex Sans, sans-serif" fontWeight="700" fontSize="82" fill="url(#elgrad)">E</text>
      <text x="42" y="72" fontFamily="IBM Plex Sans, sans-serif" fontWeight="700" fontSize="82" fill="url(#elgrad)">L</text>
      <defs>
        <linearGradient id="elgrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EA8FE" />
          <stop offset="100%" stopColor="#4B7BE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="section-label">
      <span />
      <strong>{text}</strong>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 36);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Emilo Labs home">
          <ELMark size={36} />
          <span>EMILO LABS</span>
        </a>

        <div className="desktop-nav">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
          <a className="nav-cta" href={`mailto:${CONTACT_EMAIL}`}>Email</a>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => setMenuOpen(false)}>Email {CONTACT_EMAIL}</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [heroRef, heroInView] = useInView(0.1);
  const [activeFocus, setActiveFocus] = useState(0);
  const focusCount = useCountUp(FOCUS_AREAS.length, 900, heroInView);
  const productCount = useCountUp(PROJECTS.length, 1100, heroInView);
  const researchCount = useCountUp(RESEARCH_AREAS.length, 1000, heroInView);
  const active = FOCUS_AREAS[activeFocus];

  return (
    <section id="home" ref={heroRef} className="hero-section">
      <div className="grid-field" aria-hidden="true" />
      <div className="watermark" aria-hidden="true">EL</div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            TECHNOLOGY RESEARCH AND DEVELOPMENT
          </div>
          <h1>Emilo Labs is a technology research and development organization.</h1>
          <p className="hero-lede">
            Building software, infrastructure, intelligent systems, security technologies, and digital experiences for a safer, more connected future.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#organization">Understand Emilo Labs</a>
            <a className="secondary-button" href="#products">View products</a>
          </div>

          <div className="hero-stats" aria-label="Organization summary">
            {[
              { value: focusCount, label: "Focus areas" },
              { value: productCount, label: "Products and systems" },
              { value: researchCount, label: "Research tracks" },
            ].map(item => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="institution-console">
          <div className="console-header">
            <span>INSTITUTION MAP</span>
            <span>interactive</span>
          </div>

          <div className="console-layout">
            <div className="focus-graph">
              <div className="scanline" aria-hidden="true" />
              <svg className="focus-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {FOCUS_AREAS.map((area, index) => {
                  const radians = (area.angle * Math.PI) / 180;
                  const x = 50 + 35 * Math.cos(radians);
                  const y = 50 + 35 * Math.sin(radians);
                  return (
                    <line
                      key={area.name}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={index === activeFocus ? area.color : "rgba(146,156,178,0.25)"}
                      strokeWidth={index === activeFocus ? "0.55" : "0.22"}
                    />
                  );
                })}
              </svg>

              <div className="center-node">
                <ELMark size={46} />
                <strong>Emilo Labs</strong>
                <span>institution</span>
              </div>

              {FOCUS_AREAS.map((area, index) => {
                const radians = (area.angle * Math.PI) / 180;
                const left = 50 + 35 * Math.cos(radians);
                const top = 50 + 35 * Math.sin(radians);
                const selected = index === activeFocus;

                return (
                  <button
                    key={area.name}
                    type="button"
                    className={`focus-node ${selected ? "selected" : ""}`}
                    style={{ "--node-color": area.color, left: `${left}%`, top: `${top}%` }}
                    onMouseEnter={() => setActiveFocus(index)}
                    onFocus={() => setActiveFocus(index)}
                    onClick={() => setActiveFocus(index)}
                  >
                    <span />
                    <strong>{area.short}</strong>
                  </button>
                );
              })}
            </div>

            <aside className="focus-panel">
              <span style={{ color: active.color }}>ACTIVE FOCUS</span>
              <h2>{active.name}</h2>
              <p>{active.summary}</p>
              <div className="focus-panel-strip">
                <strong>Research</strong>
                <strong>Build</strong>
                <strong>Protect</strong>
                <strong>Innovate</strong>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Organization() {
  const pillars = [
    ["Research", "Emerging technologies, digital systems, AI, cybersecurity, privacy, and internet infrastructure."],
    ["Build", "Products, platforms, protocols, tools, websites, and software systems."],
    ["Protect", "Security, privacy, trust, and consumer protection across digital environments."],
    ["Innovate", "New interaction models for identity, communication, finance, automation, and coordination."],
  ];

  return (
    <section id="organization" className="section organization-section">
      <div className="container organization-grid">
        <div>
          <SectionLabel text="ORGANIZATION" />
          <h2>An institution first. Products second.</h2>
          <p className="section-lede">
            Emilo Labs is a multidisciplinary technology organization operating across research, software, intelligent systems, security, identity, privacy, finance, consumer protection, and internet infrastructure.
          </p>
          <p className="section-copy">
            The website should make one point immediately clear: Emilo Labs is not defined by one product category. It is the institution that researches, builds, tests, and connects multiple technology lines over time.
          </p>
        </div>

        <div className="pillar-grid">
          {pillars.map(([title, desc]) => (
            <article key={title} className="pillar-card">
              <span>{title}</span>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section research-section">
      <div className="container">
        <SectionLabel text="RESEARCH" />
        <div className="section-heading-row">
          <h2>Research defines the direction.</h2>
          <p>
            Product work starts from questions about intelligence, security, identity, privacy, finance, safety, and coordination online.
          </p>
        </div>

        <div className="research-grid">
          {RESEARCH_AREAS.map(area => (
            <article key={area.title} className="research-card">
              <span>{area.tag}</span>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsCarousel() {
  const [domain, setDomain] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef(null);
  const itemRefs = useRef([]);

  const filteredProjects = useMemo(() => {
    if (domain === "All") return PROJECTS;
    return PROJECTS.filter(project => project.domain === domain);
  }, [domain]);

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  const scrollActiveIntoView = (index) => {
    requestAnimationFrame(() => {
      itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  };

  const selectDomain = (nextDomain) => {
    setDomain(nextDomain);
    setActiveIndex(0);
    requestAnimationFrame(() => {
      railRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    });
  };

  const moveProject = (offset) => {
    if (!filteredProjects.length) return;
    const next = (activeIndex + offset + filteredProjects.length) % filteredProjects.length;
    setActiveIndex(next);
    scrollActiveIntoView(next);
  };

  const handleKeys = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveProject(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveProject(1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      scrollActiveIntoView(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      const last = filteredProjects.length - 1;
      setActiveIndex(last);
      scrollActiveIntoView(last);
    }
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <SectionLabel text="PRODUCTS" />
        <div className="section-heading-row">
          <h2>Products are organized by domain.</h2>
          <p>
            A curated registry of active builds, prototypes, research systems, and public software connected to the organization.
          </p>
        </div>

        <div className="domain-filter" aria-label="Product domain filters">
          {PRODUCT_DOMAINS.map(item => (
            <button
              key={item}
              type="button"
              className={item === domain ? "active" : ""}
              onClick={() => selectDomain(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-shell" onKeyDown={handleKeys} tabIndex={0}>
          <div className="product-carousel-wrap">
            <div className="product-rail" ref={railRef} aria-label="Product carousel">
              {filteredProjects.map((project, index) => (
                <button
                  key={`${project.repo}-${project.domain}`}
                  ref={node => { itemRefs.current[index] = node; }}
                  type="button"
                  className={`product-card ${index === activeIndex ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(index);
                    scrollActiveIntoView(index);
                  }}
                  aria-pressed={index === activeIndex}
                >
                  <span className="product-card-domain">{project.domain}</span>
                  <strong>{project.name}</strong>
                  <small>{project.stage}</small>
                  <p>{project.summary}</p>
                </button>
              ))}
            </div>

            <div className="carousel-controls">
              <button type="button" onClick={() => moveProject(-1)} aria-label="Previous product">&lt;</button>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => moveProject(1)} aria-label="Next product">&gt;</button>
            </div>
          </div>

          <aside className="active-product-panel">
            <span>{activeProject?.domain}</span>
            <h3>{activeProject?.name}</h3>
            <p className="active-summary">{activeProject?.summary}</p>
            <p className="active-signal">{activeProject?.signal}</p>

            <div className="product-meta-grid">
              {[
                ["Stage", activeProject?.stage],
                ["Stack", activeProject?.language],
                ["Repo", activeProject?.repo],
                ["Updated", activeProject?.updated],
              ].map(([label, value]) => (
                <div key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <a className="primary-button compact" href={activeProject?.url} target="_blank" rel="noopener noreferrer">
              Open repository
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="section technology-section">
      <div className="container">
        <SectionLabel text="TECHNOLOGY" />
        <div className="section-heading-row">
          <h2>The technical base of the organization.</h2>
          <p>
            These capabilities describe the systems Emilo Labs researches, builds, and improves across its work.
          </p>
        </div>

        <div className="technology-grid">
          {TECHNOLOGY_AREAS.map(area => (
            <article key={area.area} className="technology-card">
              <h3>{area.area}</h3>
              <p>{area.desc}</p>
              <div>
                {area.signals.map(signal => <span key={signal}>{signal}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  const lanes = [
    { label: "Identity and privacy", repos: "HDIP, VerifyFlow, ZKShade, Reach" },
    { label: "AI and operations", repos: "UTB, SCOS Pro, HSG Pro, AI Finance Tracker" },
    { label: "Security", repos: "LabGuard, ASL Pro, Ransomware DSS" },
    { label: "Finance", repos: "HYEX, LendEarn, SPFS Pro" },
    { label: "Communication", repos: "ShadeFast, anonymous-" },
    { label: "Delivery", repos: "EmiloLabs, Nest Foods Ltd, Devflow Quest" },
  ];

  return (
    <section id="opensource" className="section opensource-section">
      <div className="container opensource-grid">
        <div>
          <SectionLabel text="OPEN SOURCE" />
          <h2>GitHub is the public code surface.</h2>
          <p className="section-lede">
            The Emiloart GitHub profile exposes product repositories, prototypes, technical experiments, and delivery systems that make parts of the organization inspectable.
          </p>
          <a className="primary-button compact" href="https://github.com/Emiloart" target="_blank" rel="noopener noreferrer">
            github.com/Emiloart
          </a>
        </div>

        <div className="opensource-lanes">
          {lanes.map(lane => (
            <article key={lane.label}>
              <strong>{lane.label}</strong>
              <span>{lane.repos}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Initiatives() {
  return (
    <section id="initiatives" className="section initiatives-section">
      <div className="container">
        <SectionLabel text="INITIATIVES" />
        <div className="section-heading-row">
          <h2>Public-interest work belongs here.</h2>
          <p>
            Initiatives cover the safety, literacy, collaboration, and future-interface work that does not fit neatly into one product.
          </p>
        </div>

        <div className="initiatives-grid">
          {INITIATIVES.map((initiative, index) => (
            <article key={initiative.title} className="initiative-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{initiative.title}</h3>
              <p>{initiative.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <SectionLabel text="CONTACT" />
        <h2>Reach Emilo Labs.</h2>
        <p>
          For partnerships, research collaboration, media, product inquiries, or general contact, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <div className="contact-actions">
          <a className="primary-button" href={`mailto:${CONTACT_EMAIL}`}>Email {CONTACT_EMAIL}</a>
          <a className="secondary-button" href="https://x.com/Ilodubahe" target="_blank" rel="noopener noreferrer">@Ilodubahe</a>
        </div>

        <div className="structure-card" aria-label="Website hierarchy">
          <span>INSTITUTIONAL STRUCTURE</span>
          <pre>{`Emilo Labs
├── Organization
├── Research
├── Products
├── Technology
├── Open Source
├── Initiatives
└── Contact`}</pre>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="brand" aria-label="Emilo Labs home">
          <ELMark size={30} />
          <span>EMILO LABS</span>
        </a>
        <div>
          {NAV_LINKS.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
        </div>
        <small>© {new Date().getFullYear()} Emilo Labs</small>
      </div>
    </footer>
  );
}

export default function EmiloLabsWebsite() {
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
      <style>{`
        :root {
          --bg: #080A0F;
          --bg-2: #0D1119;
          --panel: #111722;
          --panel-2: #151C29;
          --text: #F3F6FB;
          --muted: #96A1B7;
          --soft: #C9D2E5;
          --line: rgba(151, 164, 188, 0.16);
          --blue: #4B7BE8;
          --blue-2: #6EA8FE;
          --green: #66E38C;
          --amber: #F6B44B;
          --rose: #EF4B7A;
          --violet: #A987FF;
          --radius: 8px;
          --mono: "IBM Plex Mono", monospace;
          --sans: "IBM Plex Sans", system-ui, sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          background: var(--bg);
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
        }

        a,
        button {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          font-family: inherit;
        }

        button:focus-visible,
        a:focus-visible {
          outline: 2px solid var(--blue-2);
          outline-offset: 3px;
        }

        .site-shell {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
        }

        .container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .nav {
          position: fixed;
          z-index: 60;
          inset: 0 0 auto;
          padding: 18px 0;
          transition: background 200ms ease, border-color 200ms ease, padding 200ms ease;
        }

        .nav-scrolled {
          padding: 12px 0;
          background: rgba(8, 10, 15, 0.92);
          border-bottom: 1px solid rgba(151, 164, 188, 0.14);
          backdrop-filter: blur(18px);
        }

        .nav-inner {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text);
          text-decoration: none;
        }

        .brand span {
          font-weight: 700;
          font-size: 0.92rem;
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
          transition: color 180ms ease;
        }

        .desktop-nav a:hover,
        .footer a:hover {
          color: var(--text);
        }

        .desktop-nav .nav-cta {
          color: var(--text);
          background: var(--blue);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
          padding: 9px 16px;
          font-weight: 600;
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(17, 23, 34, 0.88);
          cursor: pointer;
        }

        .menu-button span {
          display: block;
          width: 18px;
          height: 2px;
          margin: 4px auto;
          background: var(--text);
          border-radius: 999px;
        }

        .mobile-menu {
          display: grid;
          gap: 4px;
          width: min(1240px, calc(100% - 48px));
          margin: 14px auto 0;
          padding: 18px;
          background: rgba(13, 17, 25, 0.98);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          backdrop-filter: blur(18px);
        }

        .mobile-menu a {
          color: var(--soft);
          padding: 12px;
          text-decoration: none;
          border-radius: 6px;
        }

        .mobile-menu a:hover {
          background: rgba(255,255,255,0.04);
        }

        .hero-section {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 132px 0 96px;
          overflow: hidden;
        }

        .grid-field {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image:
            linear-gradient(rgba(110,168,254,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,168,254,0.35) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .watermark {
          position: absolute;
          right: -40px;
          top: 52%;
          transform: translateY(-50%);
          color: rgba(110,168,254,0.035);
          font-size: 28rem;
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          align-items: center;
          gap: 44px;
        }

        .eyebrow,
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.72rem;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .eyebrow span,
        .section-label span {
          width: 24px;
          height: 1px;
          background: var(--blue-2);
        }

        .hero-copy h1 {
          max-width: 720px;
          color: var(--text);
          font-size: 4.55rem;
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: 0;
          margin-bottom: 24px;
        }

        .hero-lede {
          max-width: 660px;
          color: var(--soft);
          font-size: 1.16rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hero-actions,
        .contact-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 42px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          border-radius: var(--radius);
          padding: 12px 20px;
          font-weight: 600;
          font-size: 0.94rem;
          text-decoration: none;
          transition: transform 160ms ease, background 180ms ease, border-color 180ms ease;
        }

        .primary-button {
          color: var(--text);
          background: var(--blue);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .primary-button:hover {
          background: #5E91F2;
          transform: translateY(-1px);
        }

        .secondary-button {
          color: var(--soft);
          background: rgba(17, 23, 34, 0.55);
          border: 1px solid var(--line);
        }

        .secondary-button:hover {
          border-color: rgba(201, 210, 229, 0.35);
          color: var(--text);
          transform: translateY(-1px);
        }

        .primary-button.compact {
          min-height: 40px;
          padding: 10px 15px;
          font-size: 0.86rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 610px;
        }

        .hero-stats div {
          background: rgba(17, 23, 34, 0.78);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 16px 15px;
        }

        .hero-stats strong {
          display: block;
          color: var(--text);
          font-size: 2rem;
          line-height: 1;
        }

        .hero-stats span {
          display: block;
          color: var(--muted);
          font-size: 0.78rem;
          margin-top: 7px;
        }

        .institution-console {
          padding: 18px;
          background: linear-gradient(145deg, rgba(21,28,41,0.96), rgba(8,10,15,0.94));
          border: 1px solid rgba(110,168,254,0.22);
          border-radius: 16px;
          box-shadow: 0 28px 90px rgba(0,0,0,0.34);
          animation: consoleFloat 7s ease-in-out infinite;
        }

        .console-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 0.68rem;
        }

        .console-header span:first-child {
          color: var(--blue-2);
          font-weight: 600;
        }

        .console-layout {
          display: grid;
          grid-template-columns: 1fr 0.74fr;
          gap: 16px;
        }

        .focus-graph {
          position: relative;
          min-height: 440px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          background:
            radial-gradient(circle at 50% 50%, rgba(110,168,254,0.15), rgba(8,10,15,0.16) 38%, rgba(8,10,15,0.96) 72%),
            linear-gradient(180deg, rgba(255,255,255,0.04), transparent);
        }

        .focus-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }

        .scanline {
          position: absolute;
          inset: 0 0 auto;
          height: 44%;
          background: linear-gradient(to bottom, transparent, rgba(110,168,254,0.08), transparent);
          animation: scanMove 5.8s linear infinite;
          pointer-events: none;
        }

        .center-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 166px;
          height: 166px;
          border-radius: 999px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: radial-gradient(circle, rgba(75,123,232,0.88), rgba(8,10,15,0.95) 70%);
          border: 1px solid rgba(243,246,251,0.22);
          box-shadow: 0 0 64px rgba(75,123,232,0.34);
        }

        .center-node::after {
          content: "";
          position: absolute;
          inset: -22px;
          border: 1px solid rgba(110,168,254,0.18);
          border-radius: inherit;
          animation: orbitPulse 5s ease-in-out infinite;
        }

        .center-node strong {
          font-size: 1rem;
          margin-top: 4px;
        }

        .center-node span {
          color: #B7C8FF;
          font-family: var(--mono);
          font-size: 0.62rem;
          margin-top: 4px;
        }

        .focus-node {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 118px;
          min-height: 66px;
          padding: 10px;
          text-align: left;
          color: var(--text);
          background: rgba(17,23,34,0.84);
          border: 1px solid rgba(151,164,188,0.22);
          border-radius: var(--radius);
          cursor: pointer;
          transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
        }

        .focus-node.selected {
          border-color: var(--node-color);
          box-shadow: 0 0 28px color-mix(in srgb, var(--node-color), transparent 62%);
        }

        .focus-node span {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--node-color);
          margin-bottom: 8px;
        }

        .focus-node strong {
          display: block;
          font-size: 0.78rem;
          line-height: 1.15;
        }

        .focus-panel {
          min-height: 440px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 20px;
          background: var(--bg);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
        }

        .focus-panel > span,
        .product-card-domain,
        .active-product-panel > span,
        .structure-card > span {
          font-family: var(--mono);
          font-size: 0.64rem;
          font-weight: 600;
        }

        .focus-panel h2 {
          font-size: 1.48rem;
          line-height: 1.12;
          margin: 10px 0 12px;
        }

        .focus-panel p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.65;
        }

        .focus-panel-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .focus-panel-strip strong {
          padding: 10px 9px;
          border: 1px solid var(--line);
          border-radius: 6px;
          color: var(--soft);
          background: rgba(21,28,41,0.75);
          font-size: 0.76rem;
        }

        .section {
          padding: 112px 0;
          background: var(--bg);
        }

        .research-section,
        .products-section,
        .initiatives-section,
        .contact-section {
          background: #06080C;
        }

        .organization-grid,
        .opensource-grid {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 54px;
          align-items: start;
        }

        .section h2,
        .opensource-grid h2,
        .contact-inner h2 {
          color: var(--text);
          font-size: 3.1rem;
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: 0;
          margin-bottom: 18px;
        }

        .section-lede,
        .section-copy,
        .section-heading-row p,
        .contact-inner p {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.72;
        }

        .section-lede {
          max-width: 660px;
          color: var(--soft);
          margin-bottom: 18px;
        }

        .section-copy {
          max-width: 660px;
        }

        .pillar-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .pillar-card,
        .research-card,
        .technology-card,
        .initiative-card,
        .opensource-lanes article,
        .structure-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: var(--radius);
        }

        .pillar-card {
          min-height: 170px;
          padding: 26px 24px;
        }

        .pillar-card span,
        .technology-card h3,
        .initiative-card h3,
        .opensource-lanes strong {
          display: block;
          color: var(--text);
          font-size: 1.08rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .pillar-card p,
        .technology-card p,
        .initiative-card p,
        .opensource-lanes span {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.65;
        }

        .section-heading-row {
          display: grid;
          grid-template-columns: 0.92fr 0.8fr;
          gap: 38px;
          align-items: end;
          margin-bottom: 40px;
        }

        .section-heading-row h2 {
          margin: 0;
          max-width: 660px;
        }

        .section-heading-row p {
          max-width: 530px;
          margin-bottom: 5px;
        }

        .research-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          background: rgba(151,164,188,0.12);
          border: 1px solid var(--line);
          border-radius: 14px;
        }

        .research-card {
          min-height: 245px;
          padding: 32px 28px;
          border-radius: 0;
          background: var(--bg);
          transition: background 180ms ease;
        }

        .research-card:hover {
          background: var(--panel);
        }

        .research-card span {
          color: var(--blue-2);
          display: block;
          font-family: var(--mono);
          font-size: 0.66rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .research-card h3 {
          font-size: 1.12rem;
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .research-card p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.68;
        }

        .domain-filter {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .domain-filter button {
          min-height: 38px;
          padding: 9px 13px;
          color: var(--soft);
          background: rgba(17,23,34,0.75);
          border: 1px solid var(--line);
          border-radius: 999px;
          cursor: pointer;
          font-size: 0.84rem;
        }

        .domain-filter button.active {
          color: var(--text);
          background: rgba(75,123,232,0.24);
          border-color: rgba(110,168,254,0.5);
        }

        .product-shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 380px;
          gap: 16px;
          outline: none;
        }

        .product-carousel-wrap {
          min-width: 0;
          padding: 16px;
          background: linear-gradient(145deg, rgba(21,28,41,0.96), rgba(8,10,15,0.96));
          border: 1px solid rgba(110,168,254,0.18);
          border-radius: 14px;
        }

        .product-rail {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(270px, 32%);
          gap: 12px;
          overflow-x: auto;
          padding: 2px 2px 14px;
          scroll-snap-type: x mandatory;
          scrollbar-color: rgba(110,168,254,0.6) rgba(255,255,255,0.06);
        }

        .product-card {
          scroll-snap-align: start;
          min-height: 265px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          text-align: left;
          gap: 10px;
          color: var(--text);
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 18px;
          cursor: pointer;
          transition: border-color 180ms ease, transform 180ms ease, background 180ms ease;
        }

        .product-card:hover,
        .product-card.active {
          border-color: rgba(110,168,254,0.55);
          background: var(--panel-2);
          transform: translateY(-2px);
        }

        .product-card-domain,
        .active-product-panel > span {
          color: var(--blue-2);
        }

        .product-card strong {
          font-size: 1.24rem;
          line-height: 1.15;
        }

        .product-card small {
          color: var(--amber);
          font-family: var(--mono);
          font-size: 0.68rem;
        }

        .product-card p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 6px;
        }

        .carousel-controls button {
          width: 44px;
          height: 42px;
          color: var(--text);
          background: rgba(75,123,232,0.2);
          border: 1px solid rgba(110,168,254,0.35);
          border-radius: var(--radius);
          cursor: pointer;
          font-weight: 700;
        }

        .carousel-controls span {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 0.78rem;
        }

        .active-product-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-height: 420px;
          padding: 26px 24px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 14px;
        }

        .active-product-panel h3 {
          font-size: 2rem;
          line-height: 1.08;
          margin: 12px 0 16px;
        }

        .active-summary {
          color: var(--soft);
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 12px;
        }

        .active-signal {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .product-meta-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: auto 0 20px;
        }

        .product-meta-grid div {
          min-width: 0;
          padding: 12px 10px;
          background: var(--bg);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 7px;
        }

        .product-meta-grid small {
          display: block;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 0.62rem;
          margin-bottom: 5px;
        }

        .product-meta-grid strong {
          display: block;
          color: var(--soft);
          font-size: 0.82rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .technology-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .technology-card {
          min-height: 260px;
          padding: 28px 24px;
        }

        .technology-card div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .technology-card span {
          color: var(--soft);
          border: 1px solid rgba(110,168,254,0.22);
          background: rgba(75,123,232,0.1);
          border-radius: 999px;
          padding: 6px 9px;
          font-size: 0.75rem;
        }

        .opensource-grid {
          align-items: center;
        }

        .opensource-lanes {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .opensource-lanes article {
          padding: 22px 20px;
        }

        .opensource-lanes span {
          display: block;
          color: var(--blue-2);
          font-family: var(--mono);
          font-size: 0.74rem;
        }

        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }

        .initiative-card {
          min-height: 260px;
          padding: 24px 20px;
        }

        .initiative-card > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          color: var(--text);
          background: rgba(75,123,232,0.18);
          border: 1px solid rgba(110,168,254,0.28);
          font-family: var(--mono);
          font-size: 0.72rem;
          margin-bottom: 22px;
        }

        .contact-inner {
          max-width: 720px;
          text-align: center;
        }

        .contact-inner .section-label {
          justify-content: center;
        }

        .contact-inner p {
          max-width: 620px;
          margin: 0 auto 34px;
        }

        .contact-inner p a {
          color: var(--blue-2);
          text-decoration: none;
        }

        .contact-actions {
          justify-content: center;
          margin-bottom: 46px;
        }

        .structure-card {
          text-align: left;
          padding: 28px 24px;
        }

        .structure-card > span {
          display: block;
          color: var(--blue-2);
          margin-bottom: 16px;
        }

        .structure-card pre {
          margin: 0;
          overflow: auto;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 0.82rem;
          line-height: 1.85;
        }

        .footer {
          padding: 38px 0;
          background: var(--bg);
          border-top: 1px solid var(--line);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 22px;
        }

        .footer-inner > div {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer small {
          color: #586276;
          font-family: var(--mono);
          font-size: 0.72rem;
        }

        @keyframes orbitPulse {
          0%, 100% { transform: scale(1); opacity: 0.68; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @keyframes scanMove {
          0% { transform: translateY(-100%); opacity: 0; }
          18%, 72% { opacity: 0.55; }
          100% { transform: translateY(155%); opacity: 0; }
        }

        @keyframes consoleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @media (max-width: 1180px) {
          .container,
          .nav-inner,
          .mobile-menu {
            width: min(100% - 40px, 980px);
          }

          .hero-grid,
          .organization-grid,
          .opensource-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy h1 {
            font-size: 3.8rem;
          }

          .console-layout {
            grid-template-columns: 1fr;
          }

          .focus-panel {
            min-height: auto;
          }

          .research-grid,
          .technology-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .initiatives-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 920px) {
          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .hero-section {
            padding-top: 118px;
          }

          .hero-copy h1 {
            font-size: 3.15rem;
          }

          .hero-lede {
            font-size: 1.06rem;
          }

          .product-shell,
          .section-heading-row {
            grid-template-columns: 1fr;
          }

          .product-rail {
            grid-auto-columns: minmax(260px, 46%);
          }

          .active-product-panel {
            min-height: auto;
          }
        }

        @media (max-width: 700px) {
          .container,
          .nav-inner,
          .mobile-menu {
            width: calc(100% - 28px);
          }

          .section {
            padding: 78px 0;
          }

          .hero-section {
            min-height: auto;
            padding: 108px 0 72px;
          }

          .hero-copy h1,
          .section h2,
          .opensource-grid h2,
          .contact-inner h2 {
            font-size: 2.32rem;
            line-height: 1.06;
          }

          .hero-actions,
          .contact-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .hero-stats,
          .pillar-grid,
          .research-grid,
          .technology-grid,
          .opensource-lanes,
          .initiatives-grid {
            grid-template-columns: 1fr;
          }

          .institution-console {
            padding: 12px;
          }

          .focus-graph {
            min-height: auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            padding: 14px;
          }

          .focus-lines {
            display: none;
          }

          .center-node {
            position: static !important;
            transform: none !important;
            grid-column: 1 / -1;
            width: 100%;
            height: auto;
            min-height: 116px;
            border-radius: var(--radius);
          }

          .center-node::after {
            display: none;
          }

          .focus-node {
            position: static !important;
            transform: none !important;
            width: 100%;
            min-height: 64px;
          }

          .product-rail {
            grid-auto-columns: minmax(245px, 86%);
          }

          .product-meta-grid {
            grid-template-columns: 1fr;
          }

          .footer-inner,
          .footer-inner > div {
            align-items: flex-start;
            flex-direction: column;
          }

          .watermark {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>
      <Navbar />
      <Hero />
      <Organization />
      <Research />
      <ProductsCarousel />
      <Technology />
      <OpenSource />
      <Initiatives />
      <Contact />
      <Footer />
    </div>
  );
}
