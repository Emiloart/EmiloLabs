import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

export const CONTACT_EMAIL = "emilolabs@gmail.com";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_GROUPS = [
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Press", href: "/press" }] },
  { title: "Research", links: [{ label: "Research tracks", href: "/research" }] },
  { title: "Products", links: [{ label: "Product portfolio", href: "/products" }] },
  { title: "Insights", links: [{ label: "Insights hub", href: "/insights" }] },
  { title: "Careers", links: [{ label: "Talent network", href: "/careers" }] },
  { title: "Contact", links: [{ label: "Contact Emilo Labs", href: "/contact" }] },
];

export const PAGE_META = {
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

export const INSTITUTION_FLOW = [
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

export const RESEARCH_AREAS = [
  ["Identity", "Reusable proof."],
  ["Privacy", "Continuity without exposure."],
  ["Security", "Protection before failure."],
  ["Intelligent Systems", "Bounded AI assistance."],
  ["Financial Systems", "Safer value exchange."],
  ["Internet Systems", "Coordination infrastructure."],
];

export const RESEARCH_LOOP = [...RESEARCH_AREAS, ...RESEARCH_AREAS, ...RESEARCH_AREAS];

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

export const PRODUCT_TONES = [
  "75,123,232",
  "102,227,140",
  "123,194,255",
  "169,135,255",
  "246,180,75",
  "80,220,208",
];

export const TECHNOLOGY_AREAS = [
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

export const ECOSYSTEM_MARKS = [
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

export const ECOSYSTEM_LOOP = [...ECOSYSTEM_MARKS, ...ECOSYSTEM_MARKS];

export const INITIATIVES = [
  ["Internet safety", "Safer digital decisions."],
  ["Consumer protection", "Less fraud and identity harm."],
  ["Digital literacy", "Clearer trust surfaces."],
  ["Future interfaces", "New ways to coordinate."],
];

export const ORGANIZATION_PILLARS = [
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

export const PRINCIPLES = [
  ["Build for trust", "Digital systems should be safer, more verifiable, and more private by default."],
  ["Research before scale", "Important technology should be shaped by clear questions, tests, and constraints."],
  ["Products as surfaces", "Products are how deeper infrastructure reaches people, teams, and institutions."],
  ["Avoid empty claims", "Ambition should be visible without presenting future research as finished proof."],
];

export const RESEARCH_TRACKS = [
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

export const TECHNOLOGY_CAPABILITIES = [
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

export const INSIGHTS = [
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

export const CAREER_PATHS = [
  ["Research collaborators", "Applied researchers, domain specialists, technical writers, and systems thinkers."],
  ["Engineering talent", "Frontend, backend, security, AI, infrastructure, and product engineers."],
  ["Design and product", "Interface designers, product strategists, experience researchers, and operators."],
  ["Internships and early talent", "People who can learn quickly, document clearly, and help build serious systems."],
  ["Institutional operations", "Partnerships, communications, finance, legal, and program coordination."],
];

export const PRESS_FACTS = [
  ["Organization", "Emilo Labs"],
  ["Type", "Independent technology institution and parent organization"],
  ["Focus", "Digital trust, applied AI, security, information infrastructure, products, and future-facing research"],
  ["Official contact", CONTACT_EMAIL],
];

export const CONTACT_CHANNELS = [
  ["Partnerships", "Institutional collaboration, product partnerships, research relationships, and ecosystem work.", "Partnership inquiry"],
  ["Careers", "Open applications, internships, future roles, and talent network introductions.", "Talent inquiry"],
  ["Press", "Media questions, company boilerplate, interview requests, and official statements.", "Press inquiry"],
  ["Products", "Product questions, access requests, active systems, and upcoming portfolio areas.", "Product inquiry"],
  ["Research", "Research collaboration, technical writing, field notes, and exploratory programs.", "Research inquiry"],
  ["General", "Use this for anything that does not fit the other channels.", "General inquiry"],
];

export function useInView(threshold = 0.18) {
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

export function useReducedMotion() {
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

export function normalizePath(pathname) {
  const path = (pathname || "/").replace(/\/+$/, "") || "/";
  return PAGE_META[path] ? path : "/";
}

export function useRoute() {
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

export function usePageMeta(path) {
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

export function AppLink({ href, currentPath, onNavigate, className = "", children, ...props }) {
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

export function contactHref(subject) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function LiveNetworkScene() {
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

export function AmbientLayer() {
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

export function EmiloLogo({ className = "", compact = false }) {
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

export function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <strong>{children}</strong>
    </div>
  );
}

export function Reveal({ id, className = "", children }) {
  const [ref, inView] = useInView(0.16);
  return (
    <section id={id} ref={ref} className={`section reveal ${inView ? "is-visible" : ""} ${className}`}>
      {children}
    </section>
  );
}

export function Navbar({ currentPath, onNavigate }) {
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

export function Hero({ currentPath, onNavigate }) {
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

export function InstitutionPreview() {
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

export function Origin() {
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

export function InstitutionMap() {
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

export function Research() {
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

export function Products() {
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

export function Technology() {
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

export function CredibilityBand() {
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

export function PageHero({ label, title, summary, children }) {
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

export function PillarCards({ items = ORGANIZATION_PILLARS, limit }) {
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

export function HomeOverview({ currentPath, onNavigate }) {
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

export function HomePillars({ currentPath, onNavigate }) {
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

export function InsightsPreview({ currentPath, onNavigate, featuredOnly = true }) {
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

export function TalentMediaBand({ currentPath, onNavigate }) {
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

export function PrincipleGrid() {
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

export function ResearchTrackGrid() {
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

export function TechnologyCapabilityGrid() {
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

export function ProductOperatingModel() {
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

export function InsightGrid({ items = INSIGHTS }) {
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

export function CareersGrid() {
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

export function PressResources() {
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

export function ContactChannelGrid() {
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

) {
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



) {
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













export function Contact() {
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

export function Initiatives() {
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

export function Footer({ currentPath, onNavigate }) {
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




