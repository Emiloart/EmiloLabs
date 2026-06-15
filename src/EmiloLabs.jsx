import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Research", href: "#research" },
  { label: "Open Source", href: "#opensource" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

const RESEARCH_AREAS = [
  {
    tag: "Identity Systems",
    title: "Identity as a trust primitive",
    desc: "Reusable KYC credentials, account recovery, reputation, and verifier rails for people who need identity without surrendering control.",
  },
  {
    tag: "Privacy Technology",
    title: "Private verification",
    desc: "Zero-knowledge recovery, selective disclosure, anonymous identity, and proof systems that let users prove continuity without exposing personal data.",
  },
  {
    tag: "Artificial Intelligence",
    title: "Operational trust and safety",
    desc: "Fraud detection, dispute support, automated compliance, and AI agents that help digital systems decide when to allow, challenge, or escalate.",
  },
  {
    tag: "Cybersecurity",
    title: "Resilient security architecture",
    desc: "Secure authentication, recovery design, threat modelling, VPN control planes, device trust, and vulnerability response workflows.",
  },
  {
    tag: "Financial Infrastructure",
    title: "Safer digital finance",
    desc: "Reputation-based lending, escrow-backed P2P markets, personal finance automation, wallets, and transaction systems designed around verifiable trust.",
  },
  {
    tag: "Consumer Protection",
    title: "Internet consumer protection",
    desc: "Scam prevention, identity fraud research, online reputation, platform trust, and user safety tooling for everyday internet interactions.",
  },
];

const PROJECTS = [
  {
    name: "ShadeFast",
    repo: "shadeFast",
    category: "Social Trust",
    language: "Dart",
    stage: "Product build",
    url: "https://github.com/Emiloart/shadeFast",
    updated: "Jun 15, 2026",
    full: "Anonymous community app for schools, workplaces, faith groups, neighborhoods, and private groups.",
    desc: "The current Flutter codebase covers feeds, communities, threaded replies, private rooms, anonymous sessions, moderation controls, Supabase RLS, edge functions, and scheduled retention work.",
    proof: "Turns social trust into a product surface: users can speak, join, reset, report, and recover without exposing their real-world identity by default.",
  },
  {
    name: "Reach",
    repo: "Reach",
    category: "Private Communication",
    language: "Rust",
    stage: "Architecture",
    url: "https://github.com/Emiloart/Reach",
    updated: "Jun 14, 2026",
    full: "Privacy-first messaging for direct chats, small private groups, and pseudonymous communities.",
    desc: "Reach is designed around end-to-end encryption, metadata minimization, scoped identity, ephemeral behavior, per-device trust, and abuse controls that do not require blanket content visibility.",
    proof: "Extends the trust thesis into communication: the server can route messages while learning as little as possible about who said what and when.",
  },
  {
    name: "LendEarn",
    repo: "lendearn",
    category: "Financial Trust",
    language: "JavaScript",
    stage: "App build",
    url: "https://github.com/Emiloart/lendearn",
    updated: "Jun 12, 2026",
    full: "P2P lending with referral mechanics on Shardeum.",
    desc: "LendEarn explores lending flows where social proof, referrals, repayment behavior, and on-chain context can become part of the credit surface.",
    proof: "Applies reputation infrastructure to money movement, where trust gaps usually become default risk, fraud risk, or inaccessible credit.",
  },
  {
    name: "ZKShade Starknet",
    repo: "Zkshade-starknet",
    category: "Private Recovery",
    language: "Cairo",
    stage: "Prototype",
    url: "https://github.com/Emiloart/Zkshade-starknet",
    updated: "Jun 11, 2026",
    full: "Cairo prototype for anonymous identity recovery on Starknet.",
    desc: "The contract stores an opaque recovery ID mapped to a commitment, allowing a user to prove identity continuity without placing email, phone, username, or platform IDs on-chain.",
    proof: "Makes account recovery compatible with privacy instead of forcing users to choose between permanence and exposure.",
  },
  {
    name: "ZKShade",
    repo: "zkshade",
    category: "Private Recovery",
    language: "Leo",
    stage: "Prototype",
    url: "https://github.com/Emiloart/zkshade",
    updated: "Jun 10, 2026",
    full: "Aleo/Leo recovery primitive for anonymous social identity.",
    desc: "ZKShade demonstrates registration and recovery with private recovery material and commitments, proving continuity across device changes without revealing personal identifiers.",
    proof: "Connects ShadeFast-style anonymous identity to verifiable recovery, so privacy does not have to mean losing the account forever.",
  },
  {
    name: "LabGuard",
    repo: "labguard",
    category: "Device Security",
    language: "Dart",
    stage: "Private suite",
    url: "https://github.com/Emiloart/labguard",
    updated: "Jun 6, 2026",
    full: "Android-first security suite for VPN, trusted devices, and recovery actions.",
    desc: "LabGuard combines a WireGuard-based VPN client, trusted-device management, lost-device recovery flows, remote security actions, and a small high-trust backend control plane.",
    proof: "Moves trust infrastructure down to the device layer, where account takeover, lost devices, and network exposure become operational problems.",
  },
  {
    name: "Achievo",
    repo: "achievo",
    category: "Credentials",
    language: "TypeScript",
    stage: "Platform",
    url: "https://github.com/Emiloart/achievo",
    updated: "Jun 5, 2026",
    full: "Verifiable achievement and identity infrastructure.",
    desc: "Organizations publish programs, participants submit evidence, reviewers validate outcomes, and Achievo produces proof artifacts that can be exported, shared, and publicly confirmed.",
    proof: "Turns work, learning, and contribution into portable reputation instead of leaving evidence trapped inside one platform.",
  },
  {
    name: "VerifyFlow",
    repo: "VerifyFlow",
    category: "Verification",
    language: "TypeScript",
    stage: "Product",
    url: "https://github.com/Emiloart/VerifyFlow",
    updated: "Jun 5, 2026",
    full: "Controlled measurement system for KYC and verification flows.",
    desc: "VerifyFlow tests onboarding, provider checks, provider presentations, verification outcomes, re-checks, and tier upgrades against neutral provider adapters.",
    proof: "Makes verification measurable and swappable, so compliance workflows can be evaluated instead of accepted as black boxes.",
  },
  {
    name: "Nest Foods Ltd",
    repo: "nestfoodsltd",
    category: "Web Delivery",
    language: "TypeScript",
    stage: "Corporate site",
    url: "https://github.com/Emiloart/nestfoodsltd",
    updated: "Jun 5, 2026",
    full: "Corporate website for Nest Foods Limited and the De-Nest Bread public brand.",
    desc: "The site focuses on credibility, bread product information, production standards, careers, contact, privacy, terms, WhatsApp-first enquiries, newsletter capture, and simple forms.",
    proof: "Shows Emilo Labs can ship practical public-facing web systems, not only deep infrastructure prototypes.",
  },
  {
    name: "HDIP",
    repo: "HDIP",
    category: "Identity",
    language: "Go",
    stage: "Phase 1 hardening",
    url: "https://github.com/Emiloart/HDIP",
    updated: "May 2, 2026",
    full: "Hybrid Decentralized Identity Passport for reusable verification, trust, privacy, and cross-platform identity.",
    desc: "HDIP includes governance scaffolding, issuer and verifier logic, SQL-primary persistence, Hydra-backed internal trust reads, auth boundaries, console shells, bridge work, sandbox automation, and pilot-readiness runbooks.",
    proof: "This is the identity backbone of the portfolio: portable credentials, verifier APIs, policy controls, and auditability in one trust rail.",
  },
  {
    name: "UTB",
    repo: "UTB",
    category: "AI Intelligence",
    language: "Research",
    stage: "Concept",
    url: "https://github.com/Emiloart/UTB",
    updated: "Apr 3, 2026",
    full: "Ultra Hybrid Brain, an AI-native intelligence platform for continuous automated research.",
    desc: "UTB is framed around collecting from multiple data sources and producing structured insights instead of leaving research as scattered tabs, notes, and feeds.",
    proof: "Connects AI to the lab function: research becomes an operating system, not a manual side activity.",
  },
  {
    name: "HYEX",
    repo: "HYEX",
    category: "Financial Trust",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/HYEX",
    updated: "Apr 3, 2026",
    full: "Hybrid crypto-to-fiat exchange and marketplace ecosystem.",
    desc: "HYEX focuses on safer P2P trading through in-app custody, escrow-controlled settlement, merchant-oriented usability, and a cleaner alternative to classic P2P exchange flows.",
    proof: "Brings transaction trust to the point where strangers trade value and the platform has to reduce settlement risk.",
  },
  {
    name: "SCOS Pro",
    repo: "SCOSpro",
    category: "AI Operations",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/SCOSpro",
    updated: "Apr 3, 2026",
    full: "Smart Chief of Staff Pro, a persistent autonomous agent layer for a user's digital environment.",
    desc: "SCOS Pro is positioned to manage tasks, decisions, and workflows continuously, shifting the user from direct operator to supervisor.",
    proof: "Explores operational trust: when agents act for people, the system must make decisions visible, reversible, and bounded.",
  },
  {
    name: "HSG Pro",
    repo: "HSGpro",
    category: "Consumer Protection",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/HSGpro",
    updated: "Apr 3, 2026",
    full: "Hybrid Smart Guard Pro, an AI-driven deception detection layer between users and the internet.",
    desc: "HSG Pro targets the moment before a user trusts a message, link, seller, profile, or claim, where scams and manipulation usually pass unchecked.",
    proof: "Makes consumer protection a product category instead of treating online safety as a support queue after harm happens.",
  },
  {
    name: "SPFS Pro",
    repo: "SPFSpro",
    category: "Financial Trust",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/SPFSpro",
    updated: "Apr 3, 2026",
    full: "Smart Personal Finance System Pro, an AI-native personal finance operating system.",
    desc: "SPFS Pro is designed around personal financial visibility, decisions, planning, and automation rather than a narrow expense tracker.",
    proof: "Extends trust infrastructure into household finance, where the system has to explain recommendations and protect user context.",
  },
  {
    name: "ASL Pro",
    repo: "ASLpro",
    category: "Security Automation",
    language: "Concept",
    stage: "Concept",
    url: "https://github.com/Emiloart/ASLpro",
    updated: "Apr 3, 2026",
    full: "Autonomous Security Layer Pro for code, dependency, infrastructure, and CI/CD security.",
    desc: "ASL Pro continuously scans software surfaces, detects and prioritizes vulnerabilities, and is positioned to move from alerting toward automatic remediation.",
    proof: "Treats security as an active infrastructure loop instead of a periodic checklist.",
  },
  {
    name: "Emilo Labs",
    repo: "EmiloLabs",
    category: "Company System",
    language: "Website",
    stage: "Public hub",
    url: "https://github.com/Emiloart/EmiloLabs",
    updated: "Apr 3, 2026",
    full: "Public home for the Emilo Labs trust infrastructure thesis.",
    desc: "The repository is the intended home for the parent organization website that explains the research mission, division map, open-source profile, capabilities, and ecosystem work.",
    proof: "Gives the organization one coherent frame so the child entities read as a coordinated network, not a scattered collection of apps.",
  },
  {
    name: "Anonymous",
    repo: "anonymous-",
    category: "Social Trust",
    language: "Seed",
    stage: "Seed repo",
    url: "https://github.com/Emiloart/anonymous-",
    updated: "Mar 21, 2026",
    full: "Minimal public seed repository for an anonymous product idea.",
    desc: "The repository is intentionally sparse, but it belongs to the same anonymous identity and protected expression track as ShadeFast and ZKShade.",
    proof: "Keeps the anonymous social trust line visible as a recurring exploration, even before full product structure exists.",
  },
  {
    name: "Devflow Quest",
    repo: "devflow-quest",
    category: "Developer Infrastructure",
    language: "Workflow",
    stage: "Lab",
    url: "https://github.com/Emiloart/devflow-quest",
    updated: "Oct 15, 2025",
    full: "Developer workflow lab with CI and linting practice.",
    desc: "The repository currently carries a workflow-lab README and lint workflow signal, useful as a lightweight developer infrastructure experiment.",
    proof: "Shows the internal builder muscle behind the portfolio: reliable shipping depends on workflow discipline as much as product ideas.",
  },
  {
    name: "AI Finance Tracker",
    repo: "ai-finance-tracker",
    category: "Financial Trust",
    language: "App",
    stage: "Prototype",
    url: "https://github.com/Emiloart/ai-finance-tracker",
    updated: "Oct 15, 2025",
    full: "AI-powered personal finance tracker for expenses, budgets, and spending insight.",
    desc: "The app explores how AI can help users track expenses, manage budgets, and understand spending patterns with less manual effort.",
    proof: "Acts as an earlier finance product thread that connects into SPFS Pro and the wider financial trust roadmap.",
  },
  {
    name: "Ransomware DSS",
    repo: "ransomware_dss",
    category: "Security Research",
    language: "HTML / Python",
    stage: "Research prototype",
    url: "https://github.com/Emiloart/ransomware_dss",
    updated: "Oct 11, 2025",
    full: "Research and prototype system focused on ransomware detection and deterrence.",
    desc: "The stack uses Flask, authentication, HTML, CSS, and JavaScript to explore dashboards, modules, and decision-support flows for ransomware defense.",
    proof: "Anchors the security research side of Emilo Labs in a concrete threat model rather than generic cybersecurity positioning.",
  },
];

const PUBLIC_REPO_COUNT = 51;
const FORK_REPO_COUNT = 30;
const SOURCE_PROJECT_COUNT = PROJECTS.length;

const DIVISIONS = [
  {
    name: "Identity & Verification",
    short: "Identity",
    signal: "Reusable proof",
    color: "#4B7BE8",
    angle: -108,
    thesis: "Builds the identity rails that let people, issuers, verifiers, and platforms trust credentials without forcing users to repeat the same checks everywhere.",
    focus: "Portable credentials, verifier APIs, KYC measurement, evidence validation, reputation, and reusable trust records.",
    maturity: "Hardening",
    children: ["HDIP", "VerifyFlow", "Achievo"],
    metrics: ["3 child systems", "Go + TypeScript", "Credential layer"],
  },
  {
    name: "Privacy & Recovery",
    short: "Privacy",
    signal: "Private continuity",
    color: "#63D6E8",
    angle: -48,
    thesis: "Develops recovery and proof systems where users can prove continuity, ownership, or eligibility without exposing personal identity by default.",
    focus: "Zero-knowledge recovery, anonymous identity, selective disclosure, device continuity, and privacy-preserving verification.",
    maturity: "Prototype",
    children: ["ZKShade", "ZKShade Starknet", "Anonymous"],
    metrics: ["3 child systems", "Leo + Cairo", "Recovery layer"],
  },
  {
    name: "Social & Communication",
    short: "Social",
    signal: "Protected expression",
    color: "#EF4B7A",
    angle: 8,
    thesis: "Creates social and messaging organizations where expression, community, and communication can be private, scoped, and abuse-aware.",
    focus: "Anonymous communities, private messaging, metadata minimization, ephemeral behavior, rooms, moderation, and scoped identity.",
    maturity: "Product build",
    children: ["ShadeFast", "Reach"],
    metrics: ["2 child systems", "Dart + Rust", "Community layer"],
  },
  {
    name: "Financial Trust",
    short: "Finance",
    signal: "Safer value exchange",
    color: "#F6B44B",
    angle: 64,
    thesis: "Builds finance organizations where reputation, custody, escrow, and AI-supported decision systems reduce the risk of trading, lending, and planning.",
    focus: "P2P lending, hybrid exchange flows, escrow settlement, personal finance intelligence, wallet-adjacent trust, and consumer finance.",
    maturity: "Concept to prototype",
    children: ["HYEX", "LendEarn", "SPFS Pro", "AI Finance Tracker"],
    metrics: ["4 child systems", "P2P + AI", "Finance layer"],
  },
  {
    name: "Security & Consumer Protection",
    short: "Security",
    signal: "Defense before harm",
    color: "#66E38C",
    angle: 124,
    thesis: "Coordinates security and consumer-protection systems that detect deception, harden devices, reduce vulnerability exposure, and support threat decisions.",
    focus: "Device trust, VPN control planes, vulnerability automation, deception detection, ransomware decision support, and scam prevention.",
    maturity: "Research to product",
    children: ["LabGuard", "ASL Pro", "HSG Pro", "Ransomware DSS"],
    metrics: ["4 child systems", "Security + AI", "Protection layer"],
  },
  {
    name: "AI Operations",
    short: "AI Ops",
    signal: "Autonomous coordination",
    color: "#A987FF",
    angle: 180,
    thesis: "Explores agentic operating systems that turn research, work coordination, decision support, and personal operations into supervised autonomous loops.",
    focus: "Continuous research, chief-of-staff agents, workflow supervision, decision visibility, bounded autonomy, and AI-native operating layers.",
    maturity: "Concept",
    children: ["UTB", "SCOS Pro"],
    metrics: ["2 child systems", "Agent layer", "Decision OS"],
  },
  {
    name: "Research & Open Source",
    short: "Research",
    signal: "Public credibility",
    color: "#F0F2F7",
    angle: 232,
    thesis: "Publishes technical work, architecture notes, research prototypes, and delivery systems that make the parent organization legible to ecosystems and collaborators.",
    focus: "GitHub repositories, technical papers, threat models, experiments, workflow systems, public websites, and applied research artifacts.",
    maturity: "Ongoing",
    children: ["Emilo Labs", "Devflow Quest", "Nest Foods Ltd"],
    metrics: ["3 child systems", "51 public repos", "Research layer"],
  },
];

const CAPABILITIES = [
  {
    area: "Security architecture",
    desc: "Threat models, control planes, device trust, vulnerability response, and resilience patterns for child organizations.",
    signals: ["LabGuard", "ASL Pro", "Ransomware DSS"],
  },
  {
    area: "Identity systems",
    desc: "Credential issuance, verifier flows, KYC measurement, reputation records, and reusable identity infrastructure.",
    signals: ["HDIP", "VerifyFlow", "Achievo"],
  },
  {
    area: "Privacy infrastructure",
    desc: "Anonymous identity, zero-knowledge recovery, selective disclosure, and privacy-preserving verification.",
    signals: ["ZKShade", "ZKShade Starknet", "Reach"],
  },
  {
    area: "AI trust and safety",
    desc: "Autonomous research, decision support, fraud/deception detection, governance loops, and bounded agent operations.",
    signals: ["UTB", "SCOS Pro", "HSG Pro"],
  },
  {
    area: "Financial trust systems",
    desc: "Escrow, reputation lending, P2P settlement, personal finance intelligence, and safer value exchange.",
    signals: ["HYEX", "LendEarn", "SPFS Pro"],
  },
  {
    area: "Open-source research",
    desc: "Public repositories, architecture notes, prototypes, experiments, and technical artifacts that make the ecosystem inspectable.",
    signals: ["Emilo Labs", "Devflow Quest", "GitHub"],
  },
];

const NETWORK_PROGRAMS = [
  { role: "IOTA Ecosystem Ambassador", org: "IOTA Foundation", type: "Ambassador" },
  { role: "Trust Wallet Squad Member", org: "Trust Wallet / Binance", type: "Developer Program" },
  { role: "Aleo Network — SCALE Grant", org: "Aleo Network Foundation", type: "Ecosystem" },
  { role: "Starknet Ecosystem", org: "Starknet Foundation", type: "Builder" },
  { role: "Shardeum Ecosystem", org: "Shardeum", type: "Builder" },
  { role: "Base Ecosystem", org: "Base / Coinbase", type: "Builder" },
];

// Animated counter hook
function useCountUp(target, duration = 1500, start = false) {
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
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// EL Logo SVG (text-based, matches the brand mark feel)
function ELMark({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <text x="8" y="72" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="82" fill="url(#elgrad)">E</text>
      <text x="42" y="72" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="82" fill="url(#elgrad)">L</text>
      <defs>
        <linearGradient id="elgrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4B7BE8" />
          <stop offset="100%" stopColor="#1E4DB7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Ghost grid background for hero
function HeroGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4B7BE8" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// Ghost EL watermark
function ELWatermark() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none"
      style={{ fontSize: "clamp(200px, 35vw, 500px)", fontFamily: "Syne, sans-serif", fontWeight: 800, color: "#4B7BE8", lineHeight: 1, letterSpacing: "-0.05em" }}>
      EL
    </div>
  );
}

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      style={{ background: scrolled ? "rgba(8,11,18,0.92)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid rgba(30,77,183,0.15)" : "none" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <ELMark size={36} />
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F0F2F7", letterSpacing: "0.12em" }}>
            EMILO LABS
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#7A8499", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#F0F2F7"}
              onMouseLeave={e => e.target.style.color = "#7A8499"}>
              {l.label}
            </a>
          ))}
          <a href="#contact"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#F0F2F7", background: "#1E4DB7", padding: "8px 20px", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.04em", transition: "background 0.2s" }}
            onMouseEnter={e => e.target.style.background = "#2558D4"}
            onMouseLeave={e => e.target.style.background = "#1E4DB7"}>
            Partner
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ display: "block", width: 22, height: 2, background: "#F0F2F7", borderRadius: 2, transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#F0F2F7", borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#F0F2F7", borderRadius: 2, transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(8,11,18,0.98)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(30,77,183,0.15)", padding: "24px 24px 32px" }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "#7A8499", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ display: "inline-block", marginTop: 20, fontFamily: "Inter, sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#F0F2F7", background: "#1E4DB7", padding: "10px 24px", borderRadius: "6px", textDecoration: "none" }}>
            Partner
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [heroRef, heroInView] = useInView(0.1);
  const [activeDivision, setActiveDivision] = useState(0);
  const divisions = useCountUp(DIVISIONS.length, 900, heroInView);
  const projects = useCountUp(SOURCE_PROJECT_COUNT, 1200, heroInView);
  const repos = useCountUp(PUBLIC_REPO_COUNT, 1200, heroInView);
  const active = DIVISIONS[activeDivision];
  const activeChildren = active.children
    .map(name => PROJECTS.find(project => project.name === name))
    .filter(Boolean);

  return (
    <section ref={heroRef} id="home" style={{ minHeight: "100vh", background: "#080B12", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <HeroGrid />
      <ELWatermark />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        <div className="hero-parent-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 44, alignItems: "center" }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(30,77,183,0.12)", border: "1px solid rgba(30,77,183,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4B7BE8", display: "block" }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: "#4B7BE8", letterSpacing: "0.12em" }}>PARENT ORGANIZATION OS</span>
            </div>

            <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2.45rem, 6vw, 4.75rem)", color: "#F0F2F7", lineHeight: 1.04, letterSpacing: "-0.02em", marginBottom: 24 }}>
              The parent organization<br />
              <span style={{ color: "#4B7BE8" }}>for trust infrastructure.</span>
            </h1>

            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2vw, 1.18rem)", color: "#8B94A8", lineHeight: 1.75, maxWidth: 650, marginBottom: 34 }}>
              Emilo Labs coordinates research, infrastructure, and product organizations building safer digital identity, private communication, secure finance, AI operations, and consumer protection systems.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 50 }}>
              <a href="#ecosystem"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#F0F2F7", background: "#1E4DB7", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.02em", transition: "background 0.2s, transform 0.15s" }}
                onMouseEnter={e => { e.target.style.background = "#2558D4"; e.target.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.target.style.background = "#1E4DB7"; e.target.style.transform = "translateY(0)"; }}>
                Explore the ecosystem
              </a>
              <a href="#research"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#8B94A8", background: "transparent", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", border: "1px solid rgba(122,132,153,0.25)", letterSpacing: "0.02em", transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.target.style.color = "#F0F2F7"; e.target.style.borderColor = "rgba(240,242,247,0.3)"; }}
                onMouseLeave={e => { e.target.style.color = "#8B94A8"; e.target.style.borderColor = "rgba(122,132,153,0.25)"; }}>
                View research thesis
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, maxWidth: 620 }}>
              {[
                { val: divisions, label: "Divisions" },
                { val: projects, label: "Child entities" },
                { val: repos, label: "Public repos" },
              ].map(s => (
                <div key={s.label} style={{ background: "rgba(15,20,32,0.78)", border: "1px solid rgba(75,123,232,0.14)", borderRadius: 10, padding: "16px 14px" }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#F0F2F7", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.76rem", color: "#7A8499", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-console" style={{ background: "linear-gradient(145deg, rgba(15,20,32,0.96), rgba(8,11,18,0.92))", border: "1px solid rgba(75,123,232,0.18)", borderRadius: 18, padding: 18, boxShadow: "0 28px 90px rgba(0,0,0,0.34)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#4B7BE8", fontSize: "0.68rem", letterSpacing: "0.12em" }}>ECOSYSTEM GRAPH</span>
              <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#68738B", fontSize: "0.68rem" }}>interactive</span>
            </div>

            <div className="hero-operating-grid" style={{ display: "grid", gridTemplateColumns: "1fr 0.78fr", gap: 16, alignItems: "stretch" }}>
              <div className="spatial-stage" style={{ position: "relative", minHeight: 430, borderRadius: 14, overflow: "hidden", background: "radial-gradient(circle at 50% 48%, rgba(75,123,232,0.16), rgba(8,11,18,0.3) 42%, rgba(8,11,18,0.95) 72%)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="scanline" />
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.75 }} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  {DIVISIONS.map((division, index) => {
                    const rad = (division.angle * Math.PI) / 180;
                    const x = 50 + 35 * Math.cos(rad);
                    const y = 50 + 35 * Math.sin(rad);
                    return (
                      <line key={division.name} x1="50" y1="50" x2={x} y2={y} stroke={activeDivision === index ? division.color : "rgba(122,132,153,0.24)"} strokeWidth={activeDivision === index ? "0.55" : "0.22"} />
                    );
                  })}
                </svg>

                <div className="core-node" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 168, height: 168, borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", background: "radial-gradient(circle, rgba(30,77,183,0.88), rgba(8,11,18,0.94) 68%)", border: "1px solid rgba(240,242,247,0.22)", boxShadow: "0 0 60px rgba(75,123,232,0.38)" }}>
                  <ELMark size={48} />
                  <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, color: "#F0F2F7", fontSize: "0.96rem", marginTop: 6 }}>Emilo Labs</span>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#9DB2FF", fontSize: "0.58rem", marginTop: 4 }}>parent layer</span>
                </div>

                {DIVISIONS.map((division, index) => {
                  const rad = (division.angle * Math.PI) / 180;
                  const left = 50 + 35 * Math.cos(rad);
                  const top = 50 + 35 * Math.sin(rad);
                  const selected = index === activeDivision;
                  return (
                    <button key={division.name} type="button"
                      onMouseEnter={() => setActiveDivision(index)}
                      onFocus={() => setActiveDivision(index)}
                      onClick={() => setActiveDivision(index)}
                      style={{ position: "absolute", left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)", width: 118, minHeight: 70, borderRadius: 12, border: selected ? `1px solid ${division.color}` : "1px solid rgba(122,132,153,0.2)", background: selected ? "rgba(15,20,32,0.96)" : "rgba(15,20,32,0.78)", color: "#F0F2F7", padding: "10px 9px", cursor: "pointer", boxShadow: selected ? `0 0 32px ${division.color}55` : "none", transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s" }}>
                      <span style={{ display: "block", width: 8, height: 8, borderRadius: "50%", background: division.color, marginBottom: 8 }} />
                      <span style={{ display: "block", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.78rem", lineHeight: 1.2, textAlign: "left" }}>{division.short}</span>
                      <span style={{ display: "block", fontFamily: "JetBrains Mono, monospace", color: "#7A8499", fontSize: "0.54rem", marginTop: 5, textAlign: "left" }}>{division.children.length} entities</span>
                    </button>
                  );
                })}
              </div>

              <aside style={{ borderRadius: 14, background: "#080B12", border: "1px solid rgba(255,255,255,0.07)", padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 430 }}>
                <div>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: active.color, letterSpacing: "0.1em" }}>{active.signal}</span>
                  <h2 style={{ fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontSize: "1.35rem", lineHeight: 1.15, marginTop: 10, marginBottom: 12 }}>{active.name}</h2>
                  <p style={{ fontFamily: "Inter, sans-serif", color: "#8B94A8", fontSize: "0.84rem", lineHeight: 1.65, marginBottom: 18 }}>{active.thesis}</p>

                  <div style={{ display: "grid", gap: 8, marginBottom: 18 }}>
                    {activeChildren.slice(0, 3).map(project => (
                      <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, alignItems: "center", background: "rgba(15,20,32,0.9)", border: "1px solid rgba(75,123,232,0.12)", borderRadius: 8, padding: "10px 10px", textDecoration: "none" }}>
                        <span>
                          <span style={{ display: "block", fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontWeight: 700, fontSize: "0.86rem" }}>{project.name}</span>
                          <span style={{ display: "block", fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "0.68rem", marginTop: 3 }}>{project.stage}</span>
                        </span>
                        <span style={{ fontFamily: "JetBrains Mono, monospace", color: active.color, fontSize: "0.58rem" }}>repo</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div style={{ background: "rgba(75,123,232,0.08)", border: "1px solid rgba(75,123,232,0.14)", borderRadius: 10, padding: 12 }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", color: "#4B7BE8", letterSpacing: "0.08em" }}>PRODUCT SIGNAL</span>
                  <p style={{ fontFamily: "Inter, sans-serif", color: "#B9C2D8", fontSize: "0.78rem", lineHeight: 1.55, marginTop: 8 }}>{active.focus}</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, #080B12)", pointerEvents: "none" }} />
    </section>
  );
}

function SectionLabel({ text }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div style={{ width: 24, height: 1, background: "#1E4DB7" }} />
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "#4B7BE8", letterSpacing: "0.14em" }}>{text}</span>
    </div>
  );
}

function About() {
  const parentRoles = [
    ["Creates", "New products, labs, and infrastructure organizations start inside the parent layer."],
    ["Incubates", "Ideas move from research primitive to prototype, then into child entities with clearer ownership."],
    ["Coordinates", "Shared identity, security, privacy, AI, finance, and open-source work stay aligned to one thesis."],
    ["Researches", "Technical papers, architecture notes, threat models, and prototypes become reusable intellectual capital."],
  ];

  return (
    <section id="about" style={{ background: "#080B12", padding: "120px 0 100px", position: "relative", overflow: "hidden" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 56, alignItems: "start" }}>
          <div>
            <SectionLabel text="ABOUT" />
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#F0F2F7", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 22, maxWidth: 760 }}>
              Emilo Labs is the parent organization, not the product itself.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "#8B94A8", fontSize: "1rem", lineHeight: 1.8, maxWidth: 660, marginBottom: 22 }}>
              Emilo Labs sits above a network of research labs, infrastructure systems, and product companies. The parent layer holds the thesis, operating discipline, research direction, and shared technical standards.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", color: "#8B94A8", fontSize: "1rem", lineHeight: 1.8, maxWidth: 660, marginBottom: 34 }}>
              The child entities answer different parts of one question: how do humans safely identify, communicate, recover, transact, automate, and coordinate in a digital world?
            </p>

            <div style={{ display: "grid", gap: 10 }}>
              {parentRoles.map(([role, desc]) => (
                <div key={role} style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, alignItems: "start", background: "rgba(15,20,32,0.72)", border: "1px solid rgba(75,123,232,0.12)", borderRadius: 10, padding: "14px 14px" }}>
                  <strong style={{ fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontSize: "0.96rem" }}>{role}</strong>
                  <span style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "0.86rem", lineHeight: 1.55 }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#0F1420", border: "1px solid rgba(30,77,183,0.16)", borderRadius: 14, padding: "30px 28px" }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "#4B7BE8", letterSpacing: "0.1em", display: "block", marginBottom: 22 }}>PARENT TO CHILD STRUCTURE</span>
            <div className="division-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
              {DIVISIONS.map(division => (
                <div key={division.name} style={{ background: "#080B12", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "16px 14px" }}>
                  <span style={{ display: "block", width: 8, height: 8, borderRadius: "50%", background: division.color, marginBottom: 12 }} />
                  <strong style={{ fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontSize: "0.92rem", lineHeight: 1.25 }}>{division.name}</strong>
                  <span style={{ display: "block", fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "0.74rem", lineHeight: 1.45, marginTop: 8 }}>{division.children.join(" / ")}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", color: "#8B94A8", fontSize: "0.9rem", lineHeight: 1.7, marginTop: 24 }}>
              The website should make this hierarchy obvious: Emilo Labs is the parent operating layer; the divisions organize the child entities; the child entities carry the product work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="research" ref={ref} style={{ background: "#080B12", padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel text="RESEARCH" />
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0F2F7", letterSpacing: "-0.02em", marginBottom: 16, maxWidth: 600 }}>
          Where the questions live.
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 64 }}>
          Emilo Labs operates as a parent research organization. Every child entity starts from a deeper question about how trust works inside digital systems.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 1, background: "rgba(30,77,183,0.08)", border: "1px solid rgba(30,77,183,0.1)", borderRadius: 16, overflow: "hidden" }}>
          {RESEARCH_AREAS.map((area, i) => (
            <div key={i}
              style={{ padding: "36px 32px", background: "#080B12", transition: "background 0.25s", cursor: "default", borderRight: "1px solid rgba(30,77,183,0.08)", borderBottom: "1px solid rgba(30,77,183,0.08)" }}
              onMouseEnter={e => e.currentTarget.style.background = "#0F1420"}
              onMouseLeave={e => e.currentTarget.style.background = "#080B12"}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.67rem", color: "#1E4DB7", letterSpacing: "0.1em", display: "block", marginBottom: 16 }}>{area.tag}</span>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F0F2F7", marginBottom: 12, lineHeight: 1.3 }}>{area.title}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "#7A8499", lineHeight: 1.7 }}>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemNavigator() {
  const [activeDivision, setActiveDivision] = useState(0);
  const [activeChild, setActiveChild] = useState(0);
  const division = DIVISIONS[activeDivision];
  const children = division.children
    .map(name => PROJECTS.find(project => project.name === name))
    .filter(Boolean);
  const child = children[activeChild] || children[0];

  useEffect(() => {
    setActiveChild(0);
  }, [activeDivision]);

  const moveDivision = (offset) => {
    setActiveDivision((activeDivision + offset + DIVISIONS.length) % DIVISIONS.length);
  };

  const moveChild = (offset) => {
    if (!children.length) return;
    setActiveChild((activeChild + offset + children.length) % children.length);
  };

  const handleKeys = (event) => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
    }
    if (event.key === "ArrowLeft") moveDivision(-1);
    if (event.key === "ArrowRight") moveDivision(1);
    if (event.key === "ArrowUp") moveChild(-1);
    if (event.key === "ArrowDown") moveChild(1);
  };

  return (
    <section id="ecosystem" onKeyDown={handleKeys} tabIndex={0} style={{ background: "#06080F", padding: "120px 0", outline: "none" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel text="ECOSYSTEM OPERATING SYSTEM" />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 32, alignItems: "end", flexWrap: "wrap", marginBottom: 34 }}>
          <div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0F2F7", letterSpacing: "-0.02em", marginBottom: 16 }}>
              One parent layer. Seven operating divisions.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "#8B94A8", fontSize: "1rem", lineHeight: 1.75, maxWidth: 680 }}>
              The child entities are grouped by the trust problem they solve. Select a division to see its thesis, product signals, maturity, and the repositories that make it visible.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button type="button" onClick={() => moveDivision(-1)} aria-label="Previous division"
              style={{ width: 44, height: 44, borderRadius: 8, border: "1px solid rgba(122,132,153,0.25)", background: "transparent", color: "#F0F2F7", fontFamily: "Inter, sans-serif", fontWeight: 700, cursor: "pointer" }}>
              &lt;
            </button>
            <button type="button" onClick={() => moveDivision(1)} aria-label="Next division"
              style={{ width: 44, height: 44, borderRadius: 8, border: "1px solid rgba(75,123,232,0.35)", background: "#1E4DB7", color: "#F0F2F7", fontFamily: "Inter, sans-serif", fontWeight: 700, cursor: "pointer" }}>
              &gt;
            </button>
          </div>
        </div>

        <div className="ecosystem-os-grid" style={{ display: "grid", gridTemplateColumns: "260px 1fr 330px", gap: 16, alignItems: "stretch" }}>
          <aside style={{ background: "#0F1420", border: "1px solid rgba(75,123,232,0.14)", borderRadius: 14, padding: 16 }}>
            <span style={{ display: "block", fontFamily: "JetBrains Mono, monospace", color: "#4B7BE8", fontSize: "0.62rem", letterSpacing: "0.1em", marginBottom: 14 }}>DIVISIONS</span>
            <div style={{ display: "grid", gap: 8 }}>
              {DIVISIONS.map((item, index) => {
                const selected = index === activeDivision;
                return (
                  <button key={item.name} type="button" onClick={() => setActiveDivision(index)}
                    style={{ display: "grid", gridTemplateColumns: "10px 1fr auto", gap: 10, alignItems: "center", textAlign: "left", background: selected ? "rgba(75,123,232,0.16)" : "#080B12", border: selected ? `1px solid ${item.color}` : "1px solid rgba(255,255,255,0.06)", borderRadius: 9, padding: "12px 10px", cursor: "pointer" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                    <span>
                      <span style={{ display: "block", fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontWeight: 700, fontSize: "0.84rem" }}>{item.name}</span>
                      <span style={{ display: "block", fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "0.68rem", marginTop: 3 }}>{item.signal}</span>
                    </span>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", color: selected ? item.color : "#3A4255", fontSize: "0.62rem" }}>{item.children.length}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div style={{ background: "linear-gradient(145deg, rgba(15,20,32,0.96), rgba(8,11,18,0.96))", border: "1px solid rgba(75,123,232,0.16)", borderRadius: 14, padding: 18, minHeight: 560, overflow: "hidden" }}>
            <div style={{ position: "relative", minHeight: 260, borderRadius: 12, background: "radial-gradient(circle at 50% 52%, rgba(75,123,232,0.14), transparent 46%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 16 }}>
              <div className="scanline" />
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 150, height: 150, borderRadius: "50%", border: "1px solid rgba(240,242,247,0.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(8,11,18,0.84)", boxShadow: `0 0 70px ${division.color}35` }}>
                <span style={{ fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontWeight: 800, fontSize: "1rem" }}>Emilo Labs</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#7A8499", fontSize: "0.58rem", marginTop: 5 }}>parent node</span>
              </div>
              {children.map((project, index) => {
                const angle = (-120 + index * (240 / Math.max(children.length - 1, 1))) * Math.PI / 180;
                const left = 50 + 33 * Math.cos(angle);
                const top = 50 + 32 * Math.sin(angle);
                const selected = index === activeChild;
                return (
                  <button key={project.name} type="button" onClick={() => setActiveChild(index)}
                    style={{ position: "absolute", left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)", width: 132, borderRadius: 10, border: selected ? `1px solid ${division.color}` : "1px solid rgba(122,132,153,0.2)", background: selected ? "rgba(15,20,32,0.98)" : "rgba(15,20,32,0.78)", padding: "11px 10px", textAlign: "left", cursor: "pointer", boxShadow: selected ? `0 0 36px ${division.color}44` : "none" }}>
                    <span style={{ display: "block", fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontWeight: 700, fontSize: "0.86rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{project.name}</span>
                    <span style={{ display: "block", fontFamily: "JetBrains Mono, monospace", color: division.color, fontSize: "0.56rem", marginTop: 6 }}>{project.stage}</span>
                  </button>
                );
              })}
            </div>

            <div className="child-surface-grid" style={{ display: "grid", gridTemplateColumns: "1fr 0.72fr", gap: 14 }}>
              <article style={{ background: "#080B12", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "22px 20px", minHeight: 250 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "start", marginBottom: 18 }}>
                  <div>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", color: division.color, fontSize: "0.62rem", letterSpacing: "0.1em" }}>ACTIVE CHILD ENTITY</span>
                    <h3 style={{ fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontSize: "clamp(1.6rem, 3vw, 2.35rem)", lineHeight: 1.05, marginTop: 9 }}>{child?.name}</h3>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#3A4255", fontSize: "0.72rem", whiteSpace: "nowrap" }}>
                    {String(activeChild + 1).padStart(2, "0")} / {String(children.length).padStart(2, "0")}
                  </span>
                </div>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#C7D0E5", fontSize: "0.96rem", lineHeight: 1.7, marginBottom: 14 }}>{child?.full}</p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "0.86rem", lineHeight: 1.7 }}>{child?.proof}</p>
              </article>

              <aside style={{ background: "rgba(8,11,18,0.82)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "18px 16px", minHeight: 250 }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#4B7BE8", fontSize: "0.62rem", letterSpacing: "0.1em" }}>PRODUCT SURFACE</span>
                <div style={{ marginTop: 15, display: "grid", gap: 10 }}>
                  {[
                    ["Division", division.short],
                    ["Maturity", child?.stage],
                    ["Stack", child?.language],
                    ["Repo", child?.repo],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: "grid", gridTemplateColumns: "82px 1fr", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 9 }}>
                      <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#68738B", fontSize: "0.58rem" }}>{label}</span>
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#B9C2D8", fontSize: "0.78rem", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <a href={child?.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", marginTop: 18, fontFamily: "Inter, sans-serif", color: "#F0F2F7", fontSize: "0.82rem", fontWeight: 700, background: "#1E4DB7", padding: "10px 14px", borderRadius: 8, textDecoration: "none" }}>
                  Open child repo
                </a>
              </aside>
            </div>
          </div>

          <aside style={{ background: "#0F1420", border: "1px solid rgba(75,123,232,0.14)", borderRadius: 14, padding: "24px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontFamily: "JetBrains Mono, monospace", color: division.color, fontSize: "0.62rem", letterSpacing: "0.1em" }}>{division.signal}</span>
              <h3 style={{ fontFamily: "Syne, sans-serif", color: "#F0F2F7", fontSize: "1.45rem", lineHeight: 1.15, marginTop: 10, marginBottom: 12 }}>{division.name}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", color: "#8B94A8", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 18 }}>{division.thesis}</p>
              <div style={{ display: "grid", gap: 8 }}>
                {division.metrics.map(metric => (
                  <div key={metric} style={{ background: "#080B12", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "10px 11px", fontFamily: "Inter, sans-serif", color: "#B9C2D8", fontSize: "0.78rem" }}>{metric}</div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 22, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 18 }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#4B7BE8", fontSize: "0.58rem", letterSpacing: "0.1em" }}>KEYBOARD</span>
              <p style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "0.78rem", lineHeight: 1.55, marginTop: 8 }}>
                Use left/right to move across divisions and up/down to move through child entities.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  const lanes = [
    { label: "Identity and verification", repos: "HDIP, VerifyFlow, ZKShade", detail: "Reusable credentials, KYC measurement, recovery commitments, and verifier rails." },
    { label: "Privacy and social systems", repos: "ShadeFast, Reach, anonymous-", detail: "Anonymous communities, encrypted messaging architecture, private rooms, and scoped identity." },
    { label: "Security research", repos: "LabGuard, ASL Pro, Ransomware DSS", detail: "VPN control planes, device recovery, vulnerability automation, and threat decision support." },
    { label: "Finance infrastructure", repos: "HYEX, LendEarn, SPFS Pro", detail: "Escrow-based exchange flows, reputation lending, and AI-native personal finance." },
    { label: "AI operations", repos: "UTB, SCOS Pro, HSG Pro", detail: "Research automation, chief-of-staff agents, deception detection, and operational trust loops." },
    { label: "Delivery systems", repos: "Achievo, Nest Foods Ltd, Devflow Quest", detail: "Verifiable outcomes, public web delivery, CI practice, and repeatable shipping workflows." },
  ];

  return (
    <section id="opensource" style={{ background: "#080B12", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="open-source-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "start" }}>
          <div>
            <SectionLabel text="OPEN SOURCE" />
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0F2F7", letterSpacing: "-0.02em", marginBottom: 20 }}>
              GitHub is part of the credibility layer.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
              The Emiloart profile currently shows {PUBLIC_REPO_COUNT} public repositories. {SOURCE_PROJECT_COUNT} are original/source child entities represented in the ecosystem navigator, while {FORK_REPO_COUNT} forks show external infrastructure being studied, adapted, or tracked.
            </p>
            <a href="https://github.com/Emiloart" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#F0F2F7", background: "#1E4DB7", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#2558D4"}
              onMouseLeave={e => e.currentTarget.style.background = "#1E4DB7"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              github.com/Emiloart
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {lanes.map((item) => (
              <div key={item.label} style={{ background: "#0F1420", border: "1px solid rgba(30,77,183,0.12)", borderRadius: 10, padding: "20px 18px", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(75,123,232,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(30,77,183,0.12)"}>
                <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#F0F2F7", display: "block", marginBottom: 8 }}>{item.label}</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.63rem", color: "#4B7BE8", display: "block", marginBottom: 10 }}>{item.repos}</span>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#7A8499", lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkLayer() {
  return (
    <section id="network" style={{ background: "#06080F", padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel text="NETWORK LAYER" />
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0F2F7", letterSpacing: "-0.02em", marginBottom: 16 }}>
          Ecosystems, grants, and builder networks.
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 64 }}>
          The parent organization can align with ecosystem teams, grant programs, developer communities, and research networks through long-term collaboration rather than one-off delivery work.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
          {NETWORK_PROGRAMS.map((item, i) => (
            <div key={i} style={{ background: "#0F1420", border: "1px solid rgba(30,77,183,0.12)", borderRadius: 12, padding: "28px 24px", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(75,123,232,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(30,77,183,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "#4B7BE8", background: "rgba(75,123,232,0.08)", border: "1px solid rgba(75,123,232,0.15)", borderRadius: 4, padding: "3px 8px", letterSpacing: "0.08em", display: "inline-block", marginBottom: 16 }}>{item.type}</span>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F0F2F7", marginBottom: 6 }}>{item.role}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#7A8499" }}>{item.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" style={{ background: "#080B12", padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel text="CAPABILITIES" />
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0F2F7", letterSpacing: "-0.02em", marginBottom: 16 }}>
          Capabilities shared across the child organizations.
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 64 }}>
          These are the technical capabilities the parent layer develops and distributes across its divisions. They describe what Emilo Labs can build, incubate, and coordinate across the network.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
          {CAPABILITIES.map((capability, i) => (
            <div key={i} style={{ background: "#0F1420", border: "1px solid rgba(30,77,183,0.12)", borderRadius: 12, padding: "32px 28px", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(75,123,232,0.4)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(30,77,183,0.12)"}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(30,77,183,0.15)", border: "1px solid rgba(30,77,183,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1E4DB7" }} />
              </div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F0F2F7", marginBottom: 12 }}>{capability.area}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#7A8499", lineHeight: 1.65, marginBottom: 20 }}>{capability.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {capability.signals.map((o, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#1E4DB7", flexShrink: 0 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#7A8499" }}>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: "#06080F", padding: "120px 0 80px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <SectionLabel text="CONTACT" />
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F0F2F7", letterSpacing: "-0.02em", marginBottom: 20 }}>
            Partner with the parent organization.
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: "#7A8499", fontSize: "1rem", lineHeight: 1.8, marginBottom: 48 }}>
            Reach out for ecosystem programs, grant alignment, research collaboration, strategic partnerships, or venture opportunities connected to the Emilo Labs network.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
            <a href="mailto:emilolabs@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#F0F2F7", background: "#1E4DB7", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#2558D4"}
              onMouseLeave={e => e.currentTarget.style.background = "#1E4DB7"}>
              Start a partnership conversation
            </a>
            <a href="https://x.com/Ilodubahe" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#7A8499", background: "transparent", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", border: "1px solid rgba(122,132,153,0.25)", transition: "color 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#F0F2F7"; e.currentTarget.style.borderColor = "rgba(240,242,247,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#7A8499"; e.currentTarget.style.borderColor = "rgba(122,132,153,0.25)"; }}>
              @Ilodubahe
            </a>
          </div>

          {/* Hierarchy diagram */}
          <div style={{ background: "#0F1420", border: "1px solid rgba(30,77,183,0.12)", borderRadius: 16, padding: "32px 28px", textAlign: "left" }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "#4B7BE8", letterSpacing: "0.1em", display: "block", marginBottom: 20 }}>ORGANIZATION STRUCTURE</span>
            <pre style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.78rem", color: "#7A8499", lineHeight: 1.9, margin: 0, overflow: "auto" }}>
{`Emilo Labs
├── Identity & Verification
│   ├── HDIP · VerifyFlow · Achievo
├── Privacy & Recovery
│   ├── ZKShade · ZKShade Starknet · Anonymous
├── Social & Communication
│   ├── ShadeFast · Reach
├── Financial Trust
│   ├── HYEX · LendEarn · SPFS Pro
├── Security & Consumer Protection
│   ├── LabGuard · ASL Pro · HSG Pro
├── AI Operations
│   ├── UTB · SCOS Pro
├── Research & Open Source
│   ├── Emilo Labs · Devflow Quest · Nest Foods Ltd
├── Open Source
├── Capabilities
└── Ecosystem`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#080B12", borderTop: "1px solid rgba(30,77,183,0.1)", padding: "40px 0" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-6">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ELMark size={28} />
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#F0F2F7", letterSpacing: "0.12em" }}>EMILO LABS</span>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#7A8499", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#F0F2F7"}
              onMouseLeave={e => e.target.style.color = "#7A8499"}>
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "#3A4255" }}>
          © {new Date().getFullYear()} Emilo Labs
        </span>
      </div>
    </footer>
  );
}

export default function EmiloLabsWebsite() {
  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.head.removeChild(link);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div style={{ background: "#080B12", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080B12; }
        @keyframes orbitPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.72; }
          50% { transform: translate(-50%, -50%) scale(1.045); opacity: 1; }
        }
        @keyframes scanMove {
          0% { transform: translateY(-100%); opacity: 0; }
          18%, 72% { opacity: 0.55; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes consoleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .hero-console { animation: consoleFloat 7s ease-in-out infinite; }
        .core-node::after {
          content: "";
          position: absolute;
          inset: -22px;
          border-radius: 999px;
          border: 1px solid rgba(75,123,232,0.18);
          animation: orbitPulse 4.8s ease-in-out infinite;
          pointer-events: none;
        }
        .scanline {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 45%;
          background: linear-gradient(to bottom, transparent, rgba(75,123,232,0.08), transparent);
          animation: scanMove 5.8s linear infinite;
          pointer-events: none;
        }
        button:focus-visible, a:focus-visible {
          outline: 2px solid #4B7BE8;
          outline-offset: 3px;
        }
        @media (max-width: 768px) {
          .hero-parent-grid,
          .hero-operating-grid,
          .about-grid,
          .ecosystem-os-grid,
          .child-surface-grid,
          .division-card-grid,
          .open-source-grid { grid-template-columns: 1fr !important; }
          .spatial-stage { min-height: 520px !important; }
          .open-source-grid > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <EcosystemNavigator />
      <Research />
      <OpenSource />
      <NetworkLayer />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}
