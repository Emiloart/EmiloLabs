import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CONTACT_EMAIL = "emilolabs@gmail.com";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_GROUPS = [
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Press", href: "/press" }] },
  { title: "Research", links: [{ label: "Research tracks", href: "/research" }] },
  { title: "Products", links: [{ label: "Product portfolio", href: "/products" }] },
  { title: "Insights", links: [{ label: "Insights hub", href: "/insights" }] },
  { title: "Careers", links: [{ label: "Talent network", href: "/careers" }] },
  { title: "Contact", links: [{ label: "Contact Emilo Labs", href: "/contact" }] },
];

const PAGE_META = {
  "/": {
    title: "Emilo Labs | At the Core of a Connected Future",
    description: "Emilo Labs is a technology institution building digital trust, applied AI, security, information infrastructure, products, and future-facing research programs.",
  },
  "/about": {
    title: "About Emilo Labs | Technology Institution",
    description: "Learn how Emilo Labs operates as a technology institution across research, infrastructure, products, and public impact.",
  },
  "/research": {
    title: "Research | Emilo Labs",
    description: "Research tracks, questions, and briefs from Emilo Labs across digital trust, applied AI, internet infrastructure, health technology, industrial systems, and frontier systems research.",
  },
  "/technology": {
    title: "Technology | Emilo Labs",
    description: "Engineering capabilities and technical foundations Emilo Labs is building across software, security, AI, identity, privacy, infrastructure, and coordination systems.",
  },
  "/products": {
    title: "Products | Emilo Labs",
    description: "Active and upcoming Emilo Labs products across social systems, private communication, identity, security, finance, verification, and research intelligence.",
  },
  "/insights": {
    title: "Insights | Emilo Labs",
    description: "Articles, blog notes, research briefs, documentaries, announcements, and field reports from Emilo Labs.",
  },
  "/careers": {
    title: "Careers | Emilo Labs",
    description: "Join the Emilo Labs talent network for future roles, internships, research collaboration, engineering, design, security, and institutional operations.",
  },
  "/press": {
    title: "Press | Emilo Labs",
    description: "Official Emilo Labs company summary, media contact, boilerplate, and future press resources.",
  },
  "/contact": {
    title: "Contact | Emilo Labs",
    description: "Contact Emilo Labs for partnerships, careers, press, product inquiries, research collaboration, and general communication.",
  },
};

const INSTITUTION_FLOW = [
  {
    title: "Research",
    text: "Defines the questions worth solving.",
    signal: "Direction",
  },
  {
    title: "Labs",
    text: "Tests ideas through experiments.",
    signal: "Exploration",
  },
  {
    title: "Infrastructure",
    text: "Builds reusable systems and protocols.",
    signal: "Foundation",
  },
  {
    title: "Products",
    text: "Delivers systems to people and organizations.",
    signal: "Surface",
  },
  {
    title: "Public Impact",
    text: "Improves safety, trust, and coordination online.",
    signal: "Outcome",
  },
];

const RESEARCH_AREAS = [
  ["Identity", "Reusable proof."],
  ["Privacy", "Continuity without exposure."],
  ["Security", "Protection before failure."],
  ["Intelligent Systems", "Bounded AI assistance."],
  ["Financial Systems", "Safer value exchange."],
  ["Internet Systems", "Coordination infrastructure."],
];

const RESEARCH_LOOP = [...RESEARCH_AREAS, ...RESEARCH_AREAS, ...RESEARCH_AREAS];

const PRODUCT_TIERS = [
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

const PRODUCT_TONES = [
  "75,123,232",
  "102,227,140",
  "123,194,255",
  "169,135,255",
  "246,180,75",
  "80,220,208",
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
  { name: "Starknet", logo: "/ecosystem/starknet.svg" },
  { name: "Aleo", logo: "/ecosystem/aleo.svg" },
  { name: "IOTA", logo: "/ecosystem/iota.svg" },
  { name: "Ethereum", logo: "/ecosystem/ethereum.svg" },
  { name: "Supabase", logo: "/ecosystem/supabase.svg" },
  { name: "WireGuard", logo: "/ecosystem/wireguard.svg" },
  { name: "Rust", logo: "/ecosystem/rust.svg" },
  { name: "Go", logo: "/ecosystem/go.svg" },
  { name: "React", logo: "/ecosystem/react.svg" },
  { name: "Three.js", logo: "/ecosystem/threejs.svg" },
  { name: "Vite", logo: "/ecosystem/vite.svg" },
  { name: "Node.js", logo: "/ecosystem/nodejs.svg" },
  { name: "PostgreSQL", logo: "/ecosystem/postgresql.svg" },
  { name: "Cloudflare", logo: "/ecosystem/cloudflare.svg" },
  { name: "Vercel", logo: "/ecosystem/vercel.svg" },
];

const ECOSYSTEM_LOOP = [...ECOSYSTEM_MARKS, ...ECOSYSTEM_MARKS];

const INITIATIVES = [
  ["Internet safety", "Safer digital decisions."],
  ["Consumer protection", "Less fraud and identity harm."],
  ["Digital literacy", "Clearer trust surfaces."],
  ["Future interfaces", "New ways to coordinate."],
];

const ORGANIZATION_PILLARS = [
  {
    title: "Digital Trust & Security",
    summary: "Identity, privacy, verification, threat defense, and safer digital decisions.",
    signal: "Trust systems",
  },
  {
    title: "Applied AI & Intelligent Systems",
    summary: "Guarded automation, research intelligence, agent operations, and decision support.",
    signal: "Intelligence",
  },
  {
    title: "Internet & Information Infrastructure",
    summary: "Communication layers, coordination systems, data flows, and resilient digital services.",
    signal: "Infrastructure",
  },
  {
    title: "Financial & Coordination Systems",
    summary: "Value exchange, lending, settlement, and systems that help people coordinate safely.",
    signal: "Value layer",
  },
  {
    title: "Industrial Technology",
    summary: "Research into software-controlled operations, automation, monitoring, and applied systems.",
    signal: "Industry",
  },
  {
    title: "Health & Medical Technology",
    summary: "Careful exploration of privacy, workflow safety, assistive software, and health data systems.",
    signal: "Health systems",
  },
  {
    title: "Frontier Systems Research",
    summary: "Long-range investigations into unfamiliar interfaces, resilient systems, and future technology models.",
    signal: "Frontier",
  },
];

const PRINCIPLES = [
  ["Build for trust", "Digital systems should be safer, more verifiable, and more private by default."],
  ["Research before scale", "Important technology should be shaped by clear questions, tests, and constraints."],
  ["Products as surfaces", "Products are how deeper infrastructure reaches people, teams, and institutions."],
  ["Avoid empty claims", "Ambition should be visible without presenting future research as finished proof."],
];

const RESEARCH_TRACKS = [
  {
    title: "Portable Identity and Proof",
    question: "How can people prove who they are, what they own, or what they have achieved without exposing more than necessary?",
    output: "Briefs, prototypes, credential models, recovery flows.",
    status: "Active investigation",
  },
  {
    title: "Privacy-Preserving Continuity",
    question: "How can access, communication, and recovery remain continuous when identity must stay protected?",
    output: "Private communication models, anonymous continuity patterns, guarded recovery systems.",
    status: "Active investigation",
  },
  {
    title: "Security Decision Systems",
    question: "How can digital environments detect risk earlier and help users or organizations respond before failure?",
    output: "Threat models, device trust patterns, ransomware defense research, deception signals.",
    status: "Applied research",
  },
  {
    title: "Applied AI and Research Intelligence",
    question: "How can AI support research, planning, analysis, and operations without removing human accountability?",
    output: "Agent boundaries, structured research workflows, controlled automation methods.",
    status: "Applied research",
  },
  {
    title: "Health and Medical Technology Systems",
    question: "How can privacy, verification, workflow clarity, and decision support improve health technology without overstating clinical claims?",
    output: "Workflow concepts, data safety research, assistive software patterns.",
    status: "Exploratory",
  },
  {
    title: "Industrial and Frontier Systems",
    question: "What future infrastructure is needed for complex systems, industrial automation, unfamiliar interfaces, and resilient coordination?",
    output: "Research notes, system maps, long-range prototypes.",
    status: "Exploratory",
  },
];

const TECHNOLOGY_CAPABILITIES = [
  {
    title: "Software and Internet Systems",
    summary: "Full-stack product engineering, communication layers, data services, APIs, and operational interfaces.",
    proof: "Used across the active and upcoming product portfolio.",
  },
  {
    title: "Identity, Privacy, and Verification",
    summary: "Credential flows, anonymous continuity, recovery logic, verification surfaces, and privacy-aware UX.",
    proof: "Connected to HDIP, VerifyFlow, Achievo, Reach, and ZKShade research.",
  },
  {
    title: "Security Engineering",
    summary: "Device protection, threat decision support, security automation, vulnerability defense, and risk modeling.",
    proof: "Connected to LabGuard, ASL Pro, HSG Pro, and ransomware defense work.",
  },
  {
    title: "Applied AI Systems",
    summary: "Research automation, structured insight, bounded agents, finance intelligence, and operational assistance.",
    proof: "Connected to UTB, SCOS Pro, SPFS Pro, and AI Finance Tracker.",
  },
  {
    title: "Financial Technology Infrastructure",
    summary: "Lending logic, safer value exchange, referral finance, settlement concepts, and financial decision interfaces.",
    proof: "Connected to LendEarn, HYEX, and finance intelligence products.",
  },
  {
    title: "Experience and Interface Systems",
    summary: "Interfaces for complex technical systems that need clarity, credibility, and repeated operational use.",
    proof: "Used across product dashboards, research surfaces, and institutional pages.",
  },
];

const INSIGHTS = [
  {
    title: "Why digital trust needs institutional infrastructure",
    category: "Article",
    summary: "A founder-level essay on identity, privacy, verification, and security as connected infrastructure problems.",
    date: "Editorial pipeline",
    time: "7 min read",
    status: "Planned",
    featured: true,
  },
  {
    title: "Building products from research questions",
    category: "Blog Note",
    summary: "A practical note on how Emilo Labs turns investigation areas into product surfaces without collapsing research into marketing.",
    date: "Editorial pipeline",
    time: "4 min read",
    status: "Planned",
    featured: false,
  },
  {
    title: "Identity continuity without unnecessary exposure",
    category: "Research Brief",
    summary: "A structured brief covering portable proof, recovery, anonymous continuity, and the product systems connected to that work.",
    date: "Editorial pipeline",
    time: "6 min read",
    status: "Planned",
    featured: true,
  },
  {
    title: "The connected future: systems, safety, and coordination",
    category: "Documentary",
    summary: "A future documentary track about infrastructure, internet safety, intelligent systems, and the institution behind the work.",
    date: "In development",
    time: "Watch series",
    status: "Future",
    featured: false,
  },
  {
    title: "Product ecosystem update",
    category: "Announcement",
    summary: "A recurring update format for active products, upcoming systems, partnerships, and institutional milestones.",
    date: "Editorial pipeline",
    time: "3 min read",
    status: "Template",
    featured: false,
  },
  {
    title: "Field notes from applied security work",
    category: "Field Report",
    summary: "Operational lessons from security, device trust, vulnerability defense, and user-facing safety systems.",
    date: "Editorial pipeline",
    time: "5 min read",
    status: "Planned",
    featured: false,
  },
];

const CAREER_PATHS = [
  ["Research collaborators", "Applied researchers, domain specialists, technical writers, and systems thinkers."],
  ["Engineering talent", "Frontend, backend, security, AI, infrastructure, and product engineers."],
  ["Design and product", "Interface designers, product strategists, experience researchers, and operators."],
  ["Internships and early talent", "People who can learn quickly, document clearly, and help build serious systems."],
  ["Institutional operations", "Partnerships, communications, finance, legal, and program coordination."],
];

const PRESS_FACTS = [
  ["Organization", "Emilo Labs"],
  ["Type", "Independent technology institution and parent organization"],
  ["Focus", "Digital trust, applied AI, security, information infrastructure, products, and future-facing research"],
  ["Official contact", CONTACT_EMAIL],
];

const CONTACT_CHANNELS = [
  ["Partnerships", "Institutional collaboration, product partnerships, research relationships, and ecosystem work.", "Partnership inquiry"],
  ["Careers", "Open applications, internships, future roles, and talent network introductions.", "Talent inquiry"],
  ["Press", "Media questions, company boilerplate, interview requests, and official statements.", "Press inquiry"],
  ["Products", "Product questions, access requests, active systems, and upcoming portfolio areas.", "Product inquiry"],
  ["Research", "Research collaboration, technical writing, field notes, and exploratory programs.", "Research inquiry"],
  ["General", "Use this for anything that does not fit the other channels.", "General inquiry"],
];

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

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

function normalizePath(pathname) {
  const path = (pathname || "/").replace(/\/+$/, "") || "/";
  return PAGE_META[path] ? path : "/";
}

function useRoute() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (href) => {
    const nextPath = normalizePath(href);
    if (nextPath !== path) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return [path, navigate];
}

function usePageMeta(path) {
  useEffect(() => {
    const meta = PAGE_META[path] || PAGE_META["/"];
    document.title = meta.title;

    const updateMeta = (selector, attribute, value) => {
      const node = document.head.querySelector(selector);
      if (node) node.setAttribute(attribute, value);
    };

    updateMeta('meta[name="description"]', "content", meta.description);
    updateMeta('meta[property="og:title"]', "content", meta.title);
    updateMeta('meta[property="og:description"]', "content", meta.description);
    updateMeta('meta[property="og:url"]', "content", `https://emilolabs.com${path === "/" ? "/" : path}`);
    updateMeta('meta[name="twitter:title"]', "content", meta.title);
    updateMeta('meta[name="twitter:description"]', "content", meta.description);
  }, [path]);
}

function AppLink({ href, currentPath, onNavigate, className = "", children, ...props }) {
  const external = href.startsWith("mailto:") || href.startsWith("http");

  if (external) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  const active = normalizePath(href) === currentPath;

  return (
    <a
      href={href}
      className={`${className} ${active ? "is-active" : ""}`.trim()}
      aria-current={active ? "page" : undefined}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        onNavigate(href);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function contactHref(subject) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

function LiveNetworkScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 720;
    const particleCount = reduced ? (mobile ? 130 : 240) : (mobile ? 260 : 780);
    const depthCount = reduced ? 80 : mobile ? 120 : 320;
    const pulseCount = reduced ? 4 : mobile ? 8 : 14;
    const radius = mobile ? 6.7 : 11.6;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 140);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, reduced ? 1 : 1.6));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.className = "live-network-canvas";
    mount.appendChild(renderer.domElement);
    camera.position.set(0, 0, mobile ? 35 : 32);

    const root = new THREE.Group();
    scene.add(root);

    const spherePositions = new Float32Array(particleCount * 3);
    const scatterPositions = new Float32Array(particleCount * 3);
    const positions = new Float32Array(particleCount * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const smooth = value => value * value * (3 - 2 * value);

    for (let i = 0; i < particleCount; i += 1) {
      const y = 1 - (i / Math.max(1, particleCount - 1)) * 2;
      const ring = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * goldenAngle;
      const sx = Math.cos(theta) * ring * radius;
      const sy = y * radius;
      const sz = Math.sin(theta) * ring * radius;
      const spread = mobile ? 18 : 36;
      const scatterAngle = i * 2.399 + Math.sin(i * 0.37) * 0.6;
      const scatterRadius = spread * (0.38 + ((i * 37) % 100) / 100);
      const scatterY = Math.sin(i * 0.91) * (mobile ? 10 : 18);
      const scatterZ = Math.cos(i * 1.27) * (mobile ? 9 : 20);

      spherePositions[i * 3] = sx;
      spherePositions[i * 3 + 1] = sy;
      spherePositions[i * 3 + 2] = sz;
      scatterPositions[i * 3] = Math.cos(scatterAngle) * scatterRadius;
      scatterPositions[i * 3 + 1] = scatterY;
      scatterPositions[i * 3 + 2] = scatterZ;
      positions[i * 3] = sx;
      positions[i * 3 + 1] = sy;
      positions[i * 3 + 2] = sz;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x79b7ff,
      size: mobile ? 0.07 : 0.055,
      transparent: true,
      opacity: reduced ? 0.38 : 0.74,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(nodeGeometry, nodeMaterial);
    root.add(points);

    const lineVertices = [];
    const ringSegments = mobile ? 56 : 86;
    const latitudes = reduced ? [-0.48, 0, 0.48] : [-0.68, -0.36, 0, 0.36, 0.68];
    const meridians = reduced ? 4 : 7;

    latitudes.forEach(latitude => {
      const y = latitude * radius;
      const ringRadius = Math.sqrt(Math.max(0, radius * radius - y * y));
      for (let i = 0; i < ringSegments; i += 1) {
        const a = (i / ringSegments) * Math.PI * 2;
        const b = ((i + 1) / ringSegments) * Math.PI * 2;
        lineVertices.push(
          Math.cos(a) * ringRadius, y, Math.sin(a) * ringRadius,
          Math.cos(b) * ringRadius, y, Math.sin(b) * ringRadius,
        );
      }
    });

    for (let m = 0; m < meridians; m += 1) {
      const meridian = (m / meridians) * Math.PI;
      for (let i = 0; i < ringSegments; i += 1) {
        const a = -Math.PI / 2 + (i / ringSegments) * Math.PI;
        const b = -Math.PI / 2 + ((i + 1) / ringSegments) * Math.PI;
        lineVertices.push(
          Math.cos(a) * Math.cos(meridian) * radius,
          Math.sin(a) * radius,
          Math.cos(a) * Math.sin(meridian) * radius,
          Math.cos(b) * Math.cos(meridian) * radius,
          Math.sin(b) * radius,
          Math.cos(b) * Math.sin(meridian) * radius,
        );
      }
    }

    const linePositions = new Float32Array(lineVertices);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2f8cff,
      transparent: true,
      opacity: reduced ? 0.025 : 0.1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    root.add(lines);

    const depthPositions = new Float32Array(depthCount * 3);
    for (let i = 0; i < depthCount; i += 1) {
      const angle = i * 2.17;
      const layer = ((i * 29) % 100) / 100;
      const spread = mobile ? 26 : 52;
      depthPositions[i * 3] = Math.cos(angle) * spread * (0.36 + layer);
      depthPositions[i * 3 + 1] = Math.sin(i * 1.31) * (mobile ? 16 : 30);
      depthPositions[i * 3 + 2] = -22 - layer * (mobile ? 20 : 28);
    }
    const depthGeometry = new THREE.BufferGeometry();
    depthGeometry.setAttribute("position", new THREE.BufferAttribute(depthPositions, 3));
    const depthMaterial = new THREE.PointsMaterial({
      color: 0x9ddcff,
      size: mobile ? 0.045 : 0.035,
      transparent: true,
      opacity: reduced ? 0.12 : 0.24,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const depthParticles = new THREE.Points(depthGeometry, depthMaterial);
    scene.add(depthParticles);

    const pulseMaterial = new THREE.MeshBasicMaterial({
      color: 0x9ddcff,
      transparent: true,
      opacity: reduced ? 0.28 : 0.82,
      blending: THREE.AdditiveBlending,
    });
    const pulseGeometry = new THREE.SphereGeometry(mobile ? 0.075 : 0.065, 12, 12);
    const pulses = Array.from({ length: pulseCount }, (_, i) => {
      const mesh = new THREE.Mesh(pulseGeometry, pulseMaterial);
      mesh.userData = {
        lane: i / Math.max(1, pulseCount - 1),
        offset: i * 0.41,
      };
      root.add(mesh);
      return mesh;
    });

    const updateSize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, reduced ? 1 : 1.6));
    };

    const updatePointer = (event) => {
      const point = event.touches?.[0] || event;
      targetMouse.x = (point.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = (point.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("resize", updateSize);
    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("touchmove", updatePointer, { passive: true });

    let frame = 0;
    const animate = (time = 0) => {
      const t = time * 0.001;
      const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scroll = window.scrollY / scrollMax;
      const cycle = 9;
      const phase = (t % cycle) / cycle;
      let globeStrength = 1;

      if (phase < 1 / 3) {
        globeStrength = 1;
      } else if (phase < 0.55) {
        globeStrength = 1 - smooth((phase - 1 / 3) / (0.55 - 1 / 3));
      } else if (phase < 0.76) {
        globeStrength = 0;
      } else {
        globeStrength = smooth((phase - 0.76) / 0.24);
      }

      mouse.x += (targetMouse.x - mouse.x) * 0.045;
      mouse.y += (targetMouse.y - mouse.y) * 0.045;

      for (let i = 0; i < particleCount; i += 1) {
        const si = i * 3;
        const drift = reduced ? 0 : Math.sin(t * 0.75 + i * 0.19) * (1 - globeStrength);
        const breathe = reduced ? 0 : Math.sin(t * 1.15 + i * 0.07) * 0.18 * globeStrength;
        const sx = spherePositions[si] * (1 + breathe * 0.012);
        const sy = spherePositions[si + 1] * (1 + breathe * 0.012);
        const sz = spherePositions[si + 2] * (1 + breathe * 0.012);
        const dx = scatterPositions[si] + Math.cos(t * 0.9 + i) * drift * 1.4;
        const dy = scatterPositions[si + 1] + Math.sin(t * 0.72 + i * 0.41) * drift;
        const dz = scatterPositions[si + 2] + Math.sin(t * 0.54 + i * 0.23) * drift * 1.8;

        positions[si] = THREE.MathUtils.lerp(dx, sx, globeStrength);
        positions[si + 1] = THREE.MathUtils.lerp(dy, sy, globeStrength);
        positions[si + 2] = THREE.MathUtils.lerp(dz, sz, globeStrength);
      }
      nodeGeometry.attributes.position.needsUpdate = true;

      pulses.forEach((pulse, index) => {
        const progress = (t * (0.11 + index * 0.006) + pulse.userData.offset) % 1;
        const latitude = THREE.MathUtils.lerp(-0.58, 0.58, pulse.userData.lane);
        const y = latitude * radius;
        const ringRadius = Math.sqrt(Math.max(0, radius * radius - y * y));
        const angle = progress * Math.PI * 2;
        pulse.position.set(
          Math.cos(angle) * ringRadius,
          y,
          Math.sin(angle) * ringRadius,
        );
        pulse.scale.setScalar((0.55 + Math.sin(progress * Math.PI) * 1.35) * Math.max(0.15, globeStrength));
        pulse.visible = globeStrength > 0.08;
      });

      root.rotation.y = t * 0.36 + scroll * 0.95 + mouse.x * 0.1;
      root.rotation.x = -0.18 + Math.sin(t * 0.17) * 0.04 + mouse.y * 0.08;
      root.rotation.z = Math.sin(t * 0.11) * 0.035;
      root.scale.setScalar((mobile ? 0.82 : 0.92) + globeStrength * (mobile ? 0.05 : 0.08));
      nodeMaterial.opacity = (reduced ? 0.32 : 0.62) + globeStrength * (reduced ? 0.08 : 0.22);
      lineMaterial.opacity = (reduced ? 0.01 : 0.025) + globeStrength * (reduced ? 0.04 : 0.095);
      depthParticles.rotation.y = -t * 0.018 + scroll * 0.24;
      depthParticles.rotation.x = mouse.y * 0.025;
      camera.position.x = mouse.x * (mobile ? 1.2 : 2.2);
      camera.position.y = -mouse.y * (mobile ? 0.8 : 1.4) + scroll * 3;
      camera.position.z = (mobile ? 35 : 31) + scroll * (mobile ? 3 : 6);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      if (!reduced) {
        frame = requestAnimationFrame(animate);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("touchmove", updatePointer);
      mount.removeChild(renderer.domElement);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      depthGeometry.dispose();
      depthMaterial.dispose();
      pulseGeometry.dispose();
      pulseMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="live-network-scene" aria-hidden="true" />;
}

function AmbientLayer() {
  return (
    <div className="ambient-layer" aria-hidden="true">
      <div className="ambient-circuit">
        {Array.from({ length: 8 }, (_, index) => (
          <span
            key={`node-${index}`}
            style={{
              "--left": `${8 + index * 11}%`,
              "--top": `${14 + (index % 4) * 18}%`,
              "--delay": `${index * -560}ms`,
            }}
          />
        ))}
      </div>
      <div className="ambient-rings">
        <span />
        <span />
        <span />
      </div>
      <div className="data-streams">
        {Array.from({ length: 9 }, (_, index) => (
          <span
            key={`stream-${index}`}
            style={{
              "--left": `${7 + index * 10.75}%`,
              "--delay": `${index * -780}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function EmiloLogo({ className = "", compact = false }) {
  return (
    <img
      className={className}
      src={compact ? "/emilo-labs-mark.svg" : "/emilo-labs-logo.svg"}
      alt={compact ? "" : "Emilo Labs"}
      aria-hidden={compact ? "true" : undefined}
      draggable="false"
    />
  );
}

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <strong>{children}</strong>
    </div>
  );
}

function Reveal({ id, className = "", children }) {
  const [ref, inView] = useInView(0.16);
  return (
    <section id={id} ref={ref} className={`section reveal ${inView ? "is-visible" : ""} ${className}`}>
      {children}
    </section>
  );
}

function Navbar({ currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <AppLink href="/" currentPath={currentPath} onNavigate={onNavigate} className="brand" aria-label="Emilo Labs home">
          <EmiloLogo compact className="brand-mark" />
          <span>EMILO LABS</span>
        </AppLink>

        <div className="desktop-nav">
          {NAV_LINKS.map(link => (
            <AppLink key={link.label} href={link.href} currentPath={currentPath} onNavigate={onNavigate}>
              {link.label}
            </AppLink>
          ))}
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
            <AppLink
              key={link.label}
              href={link.href}
              currentPath={currentPath}
              onNavigate={(href) => {
                setMenuOpen(false);
                onNavigate(href);
              }}
            >
              {link.label}
            </AppLink>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero({ currentPath, onNavigate }) {
  return (
    <header id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker">EMILO LABS</div>
          <h1>At the Core of a Connected Future.</h1>
          <p>
            A technology institution building digital trust, applied AI, security, information infrastructure, products, and future-facing research programs.
          </p>
          <div className="hero-actions">
            <AppLink href="/about" currentPath={currentPath} onNavigate={onNavigate} className="primary-button">
              Explore the institution
            </AppLink>
            <AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
              View research tracks
            </AppLink>
          </div>
        </div>

        <InstitutionPreview />
      </div>
    </header>
  );
}

function InstitutionPreview() {
  const [active, setActive] = useState(0);

  return (
    <div className="institution-preview light-panel">
      <div className="panel-topline">
        <span>CONNECTED SYSTEM</span>
      </div>
      <div className="institution-graph" style={{ "--active-index": active }}>
        <svg className="institution-links" viewBox="0 0 100 100" aria-hidden="true">
          <line className={active === 0 ? "is-active" : ""} x1="50" y1="50" x2="50" y2="16" />
          <line className={active === 1 ? "is-active" : ""} x1="50" y1="50" x2="82" y2="32" />
          <line className={active === 2 ? "is-active" : ""} x1="50" y1="50" x2="82" y2="70" />
          <line className={active === 3 ? "is-active" : ""} x1="50" y1="50" x2="18" y2="70" />
          <line className={active === 4 ? "is-active" : ""} x1="50" y1="50" x2="18" y2="32" />
        </svg>
        <div className="graph-core">
          <div className="core-ring" />
          <EmiloLogo compact className="preview-logo" />
        </div>
        {INSTITUTION_FLOW.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`graph-node ${index === active ? "is-active" : ""}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            style={{
              "--x": ["50%", "82%", "82%", "18%", "18%"][index],
              "--y": ["16%", "32%", "70%", "70%", "32%"][index],
              "--mobile-x": ["50%", "70%", "70%", "30%", "30%"][index],
              "--mobile-y": ["16%", "34%", "72%", "72%", "34%"][index],
              "--delay": `${index * 90}ms`,
            }}
          >
            <span>{item.signal}</span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function Origin() {
  return (
    <Reveal id="origin" className="origin-section">
      <div className="container origin-layout">
        <SectionLabel>ORIGIN</SectionLabel>
        <div className="origin-block light-panel">
          <p>
            Every major shift in how people use technology produces a new class of problems.
          </p>
          <p>
            Networks created the need for security. Digital identity created the need for verification. Financial systems moved online and created the need for trust infrastructure. Communication scaled and created the need for privacy.
          </p>
          <p>
            These problems do not wait for products to appear. They exist because people interact with digital systems, and digital systems are not yet built for that interaction to be safe, private, verifiable, or resilient by default.
          </p>
          <div className="origin-signal">
            <span>EMILO LABS</span>
            <strong>At the Core of a Connected Future.</strong>
            <p>A technology institution building infrastructure for how digital systems operate, communicate, transact, and connect.</p>
          </div>
          <p className="origin-close">
            Emilo Labs was built to work on that class of problems. Not one of them. The class.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function InstitutionMap() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const update = () => {
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (viewport * 0.72 - rect.top) / (rect.height + viewport * 0.2)));
      setActive(Math.min(INSTITUTION_FLOW.length - 1, Math.floor(progress * INSTITUTION_FLOW.length)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduced]);

  return (
    <Reveal id="institution" className="map-section">
      <div className="container" ref={sectionRef}>
        <SectionLabel>INSTITUTION</SectionLabel>

        <div className="relationship-map light-panel">
          <div className="map-line" aria-hidden="true">
            <i style={{ width: `${((active + 1) / INSTITUTION_FLOW.length) * 100}%` }} />
          </div>
          {INSTITUTION_FLOW.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`map-node ${index <= active ? "is-active" : ""}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span>{item.signal}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Research() {
  return (
    <Reveal id="research" className="research-section">
      <div className="container research-shell">
        <SectionLabel>RESEARCH</SectionLabel>
      </div>
      <div className="research-carousel" aria-label="Research areas">
        <div className="research-track">
          {RESEARCH_LOOP.map(([title, text], index) => (
            <article key={`${title}-${index}`} className="research-card light-panel" style={{ "--delay": `${index * 70}ms` }}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Products() {
  const [tierIndex, setTierIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const tier = PRODUCT_TIERS[tierIndex];
  const activeProduct = tier.products[productIndex] || tier.products[0];

  const productCards = useMemo(() => tier.products.map(([name, domain, summary]) => ({ name, domain, summary })), [tier]);

  const moveProduct = (offset) => {
    const next = (productIndex + offset + productCards.length) % productCards.length;
    setProductIndex(next);
  };

  const handleKeys = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveProduct(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveProduct(1);
    }
  };

  return (
    <Reveal id="products" className="products-section">
      <div className="container">
        <SectionLabel>PRODUCTS</SectionLabel>

        <div className="tier-tabs" aria-label="Product tiers">
          {PRODUCT_TIERS.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={index === tierIndex ? "is-active" : ""}
              onClick={() => {
                setTierIndex(index);
                setProductIndex(0);
              }}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="product-stage light-panel" onKeyDown={handleKeys} tabIndex={0}>
          <div className="product-rail">
            {productCards.map((product, index) => (
              <button
                key={product.name}
                type="button"
                className={`product-card ${index === productIndex ? "is-active" : ""}`}
                onClick={() => setProductIndex(index)}
                aria-pressed={index === productIndex}
                style={{ "--delay": `${index * 55}ms`, "--tone": PRODUCT_TONES[index % PRODUCT_TONES.length] }}
              >
                <span>{product.domain}</span>
                <strong>{product.name}</strong>
                <p>{product.summary}</p>
              </button>
            ))}
          </div>

          <aside className="active-product" style={{ "--tone": PRODUCT_TONES[productIndex % PRODUCT_TONES.length] }}>
            <span>{tier.title}</span>
            <h3>{activeProduct[0]}</h3>
            <p>{activeProduct[2]}</p>
            <strong>{activeProduct[1]}</strong>
            <div className="product-controls">
              <button type="button" onClick={() => moveProduct(-1)} aria-label="Previous product">&lt;</button>
              <small>{String(productIndex + 1).padStart(2, "0")} / {String(productCards.length).padStart(2, "0")}</small>
              <button type="button" onClick={() => moveProduct(1)} aria-label="Next product">&gt;</button>
            </div>
          </aside>
        </div>
      </div>
    </Reveal>
  );
}

function Technology() {
  return (
    <Reveal id="technology" className="technology-section">
      <div className="container">
        <SectionLabel>TECHNOLOGY</SectionLabel>

        <div className="technology-system light-panel">
          <div className="technology-spine" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="technology-grid">
            {TECHNOLOGY_AREAS.map(([title, text, signal], index) => (
              <article key={title} className="technology-card" style={{ "--delay": `${index * 60}ms` }}>
                <span>{signal}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function CredibilityBand() {
  return (
    <Reveal id="ecosystems" className="credibility-section">
      <div className="ecosystem-marquee" aria-label="Ecosystems and technologies around the work">
        <div className="ecosystem-track">
          {ECOSYSTEM_LOOP.map((item, index) => (
            <div className="ecosystem-logo" key={`${item.name}-${index}`} aria-hidden={index >= ECOSYSTEM_MARKS.length ? "true" : undefined}>
              <span><img src={item.logo} alt="" loading="lazy" /></span>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
        <div className="ecosystem-track" aria-hidden="true">
          {ECOSYSTEM_LOOP.map((item, index) => (
            <div className="ecosystem-logo" key={`copy-${item.name}-${index}`}>
              <span><img src={item.logo} alt="" loading="lazy" /></span>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function PageHero({ label, title, summary, children }) {
  return (
    <header className="page-hero">
      <div className="container page-hero-inner">
        <SectionLabel>{label}</SectionLabel>
        <h1>{title}</h1>
        <p>{summary}</p>
        {children}
      </div>
    </header>
  );
}

function PillarCards({ items = ORGANIZATION_PILLARS, limit }) {
  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="pillar-grid">
      {visibleItems.map((item, index) => (
        <article key={item.title} className="pillar-card light-panel" style={{ "--delay": `${index * 60}ms` }}>
          <span>{item.signal}</span>
          <strong>{item.title}</strong>
          <p>{item.summary}</p>
        </article>
      ))}
    </div>
  );
}

function HomeOverview({ currentPath, onNavigate }) {
  return (
    <Reveal id="overview" className="overview-section">
      <div className="container">
        <SectionLabel>INSTITUTIONAL SCOPE</SectionLabel>
        <div className="split-heading">
          <h2>A parent organization for research, infrastructure, and products.</h2>
          <p>
            Emilo Labs works across connected technology problems: how people prove, communicate,
            coordinate, transact, stay safe, and use intelligent systems with clearer boundaries.
          </p>
        </div>

        <div className="metric-grid">
          {[
            ["Research", "Questions before scale"],
            ["Labs", "Experiments and prototypes"],
            ["Infrastructure", "Reusable systems"],
            ["Products", "Practical surfaces"],
          ].map(([value, label]) => (
            <article key={value} className="metric-card light-panel">
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>

        <div className="home-actions">
          <AppLink href="/about" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
            About Emilo Labs
          </AppLink>
          <AppLink href="/products" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
            Product portfolio
          </AppLink>
        </div>
      </div>
    </Reveal>
  );
}

function HomePillars({ currentPath, onNavigate }) {
  return (
    <Reveal id="focus" className="pillars-section">
      <div className="container">
        <SectionLabel>PUBLIC FOCUS AREAS</SectionLabel>
        <div className="split-heading">
          <h2>Broad enough for long-term expansion. Specific enough to stay credible.</h2>
          <p>
            The public structure uses institutional pillars, not a raw ambition list. Dedicated pages
            separate investigation areas from existing engineering capability.
          </p>
        </div>
        <PillarCards limit={4} />
        <div className="home-actions">
          <AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="primary-button">
            Research questions
          </AppLink>
          <AppLink href="/technology" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
            Technology capabilities
          </AppLink>
        </div>
      </div>
    </Reveal>
  );
}

function InsightsPreview({ currentPath, onNavigate, featuredOnly = true }) {
  const items = featuredOnly ? INSIGHTS.filter(item => item.featured) : INSIGHTS.slice(0, 3);

  return (
    <Reveal id="insights-preview" className="insights-preview-section">
      <div className="container">
        <SectionLabel>INSIGHTS</SectionLabel>
        <div className="split-heading">
          <h2>Articles, briefs, documentary tracks, and field notes.</h2>
          <p>
            A single editorial hub keeps publishing coherent while giving research, product,
            and institutional updates their own formats.
          </p>
        </div>
        <InsightGrid items={items} />
        <div className="home-actions">
          <AppLink href="/insights" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
            Open insights hub
          </AppLink>
        </div>
      </div>
    </Reveal>
  );
}

function TalentMediaBand({ currentPath, onNavigate }) {
  return (
    <Reveal id="join" className="cta-section">
      <div className="container">
        <div className="cta-band light-panel">
          <div>
            <SectionLabel>TALENT AND MEDIA</SectionLabel>
            <h2>Built for serious collaborators, not empty signals.</h2>
            <p>
              Careers works as a talent network. Press exists for institutional readiness, company
              context, and official inquiries even before coverage is published.
            </p>
          </div>
          <div className="cta-actions">
            <AppLink href="/careers" currentPath={currentPath} onNavigate={onNavigate} className="primary-button">
              Join the talent network
            </AppLink>
            <AppLink href="/press" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
              Press and media
            </AppLink>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function PrincipleGrid() {
  return (
    <Reveal id="principles" className="principles-section">
      <div className="container">
        <SectionLabel>OPERATING PRINCIPLES</SectionLabel>
        <div className="initiative-grid">
          {PRINCIPLES.map(([title, text], index) => (
            <article key={title} className="initiative-card light-panel" style={{ "--delay": `${index * 70}ms` }}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ResearchTrackGrid() {
  return (
    <Reveal id="research-tracks" className="research-track-section">
      <div className="container">
        <SectionLabel>RESEARCH TRACKS</SectionLabel>
        <div className="track-grid">
          {RESEARCH_TRACKS.map((track, index) => (
            <article key={track.title} className="track-card light-panel" style={{ "--delay": `${index * 60}ms` }}>
              <span>{track.status}</span>
              <strong>{track.title}</strong>
              <p>{track.question}</p>
              <small>{track.output}</small>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function TechnologyCapabilityGrid() {
  return (
    <Reveal id="capabilities" className="capability-section">
      <div className="container">
        <SectionLabel>CAPABILITIES</SectionLabel>
        <div className="capability-grid">
          {TECHNOLOGY_CAPABILITIES.map((item, index) => (
            <article key={item.title} className="capability-card light-panel" style={{ "--delay": `${index * 60}ms` }}>
              <strong>{item.title}</strong>
              <p>{item.summary}</p>
              <small>{item.proof}</small>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ProductOperatingModel() {
  return (
    <Reveal id="portfolio-model" className="portfolio-model-section">
      <div className="container">
        <SectionLabel>PORTFOLIO MODEL</SectionLabel>
        <div className="split-panel light-panel">
          <div>
            <h2>Products are the practical surface of deeper infrastructure.</h2>
            <p>
              The portfolio is organized by active systems and upcoming systems. Active products
              stay close to usable communication, identity, verification, security, and finance
              problems. Upcoming products signal the next technical surfaces without pretending
              future systems are already mature.
            </p>
          </div>
          <div className="mini-list">
            <span>Active systems</span>
            <span>Coming soon</span>
            <span>Research-backed concepts</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function InsightGrid({ items = INSIGHTS }) {
  return (
    <div className="insight-grid">
      {items.map((item, index) => (
        <article key={item.title} className={`insight-card light-panel ${item.featured ? "is-featured" : ""}`} style={{ "--delay": `${index * 60}ms` }}>
          <div className="insight-meta">
            <span>{item.category}</span>
            <small>{item.status}</small>
          </div>
          <strong>{item.title}</strong>
          <p>{item.summary}</p>
          <div className="insight-foot">
            <span>{item.date}</span>
            <span>{item.time}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function CareersGrid() {
  return (
    <Reveal id="career-paths" className="career-path-section">
      <div className="container">
        <SectionLabel>TALENT NETWORK</SectionLabel>
        <div className="track-grid">
          {CAREER_PATHS.map(([title, text], index) => (
            <article key={title} className="track-card light-panel" style={{ "--delay": `${index * 60}ms` }}>
              <span>Open interest</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function PressResources() {
  return (
    <Reveal id="press-resources" className="press-resource-section">
      <div className="container">
        <SectionLabel>MEDIA READINESS</SectionLabel>
        <div className="press-layout">
          <article className="press-boilerplate light-panel">
            <h2>Official boilerplate</h2>
            <p>
              Emilo Labs is an independent technology institution and parent organization building
              digital trust, applied AI, security, information infrastructure, product systems, and
              future-facing research programs.
            </p>
            <p>
              The organization develops products and research tracks across identity, privacy,
              communication, security, finance, intelligent systems, industrial technology, health
              technology, and frontier systems research.
            </p>
          </article>
          <div className="fact-list light-panel">
            {PRESS_FACTS.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ContactChannelGrid() {
  return (
    <Reveal id="contact-options" className="contact-options-section">
      <div className="container">
        <SectionLabel>CONTACT CHANNELS</SectionLabel>
        <div className="contact-grid">
          {CONTACT_CHANNELS.map(([title, text, subject], index) => (
            <article key={title} className="contact-card light-panel" style={{ "--delay": `${index * 55}ms` }}>
              <span>{title}</span>
              <p>{text}</p>
              <a href={contactHref(subject)}>Email {title.toLowerCase()}</a>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function HomePage({ currentPath, onNavigate }) {
  return (
    <>
      <Hero currentPath={currentPath} onNavigate={onNavigate} />
      <HomeOverview currentPath={currentPath} onNavigate={onNavigate} />
      <HomePillars currentPath={currentPath} onNavigate={onNavigate} />
      <Products />
      <InsightsPreview currentPath={currentPath} onNavigate={onNavigate} />
      <CredibilityBand />
      <TalentMediaBand currentPath={currentPath} onNavigate={onNavigate} />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT EMILO LABS"
        title="A technology institution built around connected problems."
        summary="Emilo Labs exists to research, design, and build systems for trust, privacy, security, intelligence, coordination, and future technology infrastructure."
      />
      <Origin />
      <InstitutionMap />
      <PrincipleGrid />
    </>
  );
}

function ResearchPage({ currentPath, onNavigate }) {
  return (
    <>
      <PageHero
        label="RESEARCH"
        title="What Emilo Labs is investigating."
        summary="Research is the question layer: tracks, briefs, findings, prototypes, and long-range inquiry areas. It is separate from the technology page, which describes existing capability."
      />
      <ResearchTrackGrid />
      <Reveal id="research-pillars" className="pillars-section">
        <div className="container">
          <SectionLabel>RESEARCH DOMAINS</SectionLabel>
          <PillarCards />
        </div>
      </Reveal>
      <InsightsPreview currentPath={currentPath} onNavigate={onNavigate} featuredOnly={false} />
    </>
  );
}

function TechnologyPage() {
  return (
    <>
      <PageHero
        label="TECHNOLOGY"
        title="What Emilo Labs has built capability in."
        summary="Technology is the capability layer: engineering systems, tools, infrastructure, product foundations, and competencies that support the organization now."
      />
      <TechnologyCapabilityGrid />
      <Technology />
      <CredibilityBand />
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHero
        label="PRODUCTS"
        title="A portfolio connected by identity, privacy, security, intelligence, and coordination."
        summary="The product ecosystem is grouped by active and upcoming systems so visitors can understand what exists now and what is being prepared without confusing future work for finished products."
      />
      <ProductOperatingModel />
      <Products />
    </>
  );
}

function InsightsPage() {
  return (
    <>
      <PageHero
        label="INSIGHTS"
        title="One editorial hub for serious publishing."
        summary="Articles, blog notes, research briefs, documentaries, announcements, and field reports live together so the institution can publish without fragmenting its voice."
      />
      <Reveal id="insights" className="insights-section">
        <div className="container">
          <InsightGrid />
        </div>
      </Reveal>
    </>
  );
}

function CareersPage() {
  return (
    <>
      <PageHero
        label="CAREERS"
        title="A talent network for people who want to build serious systems."
        summary="Emilo Labs is not presenting a fake job board. This page is for future roles, internships, open applications, research collaboration, and people who can help shape the institution."
      >
        <div className="page-hero-actions">
          <a href={contactHref("Talent inquiry")} className="primary-button">Send open application</a>
        </div>
      </PageHero>
      <CareersGrid />
      <Reveal id="careers-note" className="cta-section">
        <div className="container">
          <div className="cta-band light-panel">
            <div>
              <SectionLabel>HOW TO APPROACH</SectionLabel>
              <h2>Show the work, the judgment, and the area you want to strengthen.</h2>
              <p>
                Strong introductions should include what you can build or research, which Emilo Labs
                areas you understand, and the kind of responsibility you are ready to take on.
              </p>
            </div>
            <a href={contactHref("Talent inquiry")} className="secondary-button">Contact careers</a>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function PressPage() {
  return (
    <>
      <PageHero
        label="PRESS"
        title="Official information for media and institutional inquiries."
        summary="This page provides a clean contact path, company summary, and future home for press coverage and brand assets."
      >
        <div className="page-hero-actions">
          <a href={contactHref("Press inquiry")} className="primary-button">Contact press</a>
        </div>
      </PageHero>
      <PressResources />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="Reach the right part of Emilo Labs."
        summary="Use structured contact paths for partnerships, careers, press, products, research collaboration, and general communication."
      />
      <ContactChannelGrid />
      <Contact />
    </>
  );
}

function Contact() {
  return (
    <Reveal id="contact" className="contact-section">
      <div className="container contact-inner">
        <div className="contact-panel light-panel">
          <SectionLabel>CONTACT</SectionLabel>
          <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </Reveal>
  );
}

function Initiatives() {
  return (
    <Reveal id="initiatives" className="initiatives-section">
      <div className="container">
        <SectionLabel>INITIATIVES</SectionLabel>
        <div className="split-heading">
          <h2>Beyond products.</h2>
          <p>Safety. Literacy. Protection. Future interfaces.</p>
        </div>

        <div className="initiative-grid">
          {INITIATIVES.map(([title, text], index) => (
            <article key={title} className="initiative-card light-panel" style={{ "--delay": `${index * 70}ms` }}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Footer({ currentPath, onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <AppLink href="/" currentPath={currentPath} onNavigate={onNavigate} className="brand" aria-label="Emilo Labs home">
          <EmiloLogo compact className="brand-mark" />
          <span>EMILO LABS</span>
        </AppLink>
        <div className="footer-groups">
          {FOOTER_GROUPS.map(group => (
            <div key={group.title} className="footer-group">
              <strong>{group.title}</strong>
              {group.links.map(link => (
                <AppLink key={link.label} href={link.href} currentPath={currentPath} onNavigate={onNavigate}>
                  {link.label}
                </AppLink>
              ))}
            </div>
          ))}
        </div>
        <small>© {new Date().getFullYear()} Emilo Labs</small>
      </div>
    </footer>
  );
}

const ROUTE_COMPONENTS = {
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
  const ActivePage = ROUTE_COMPONENTS[currentPath] || HomePage;

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
      `}</style>
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main>
        <ActivePage currentPath={currentPath} onNavigate={navigate} />
      </main>
      <Footer currentPath={currentPath} onNavigate={navigate} />
    </div>
  );
}
