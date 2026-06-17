import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CONTACT_EMAIL = "emilolabs@gmail.com";

const NAV_LINKS = [
  { label: "Origin", href: "#origin" },
  { label: "Institution", href: "#institution" },
  { label: "Research", href: "#research" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

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

const PRODUCT_TIERS = [
  {
    title: "Active Products",
    products: [
      ["ShadeFast", "Beta", "Anonymous communities."],
      ["HDIP", "Limited Access", "Digital identity passport."],
      ["VerifyFlow", "Limited Access", "Verification workflow system."],
      ["Achievo", "Beta", "Verifiable achievement records."],
      ["Reach", "Limited Access", "Encrypted communication."],
    ],
  },
  {
    title: "Research & Infrastructure",
    products: [
      ["ZKShade", "Research", "Recovery without exposure."],
      ["ZKShade Starknet", "Research", "Anonymous recovery."],
      ["LabGuard", "Limited Access", "Device security."],
      ["Ransomware DSS", "Research", "Ransomware defense."],
      ["AI Finance Tracker", "Research", "Finance intelligence."],
    ],
  },
  {
    title: "Coming Soon",
    products: [
      ["UTB", "Coming Soon", "AI research system."],
      ["SCOS Pro", "Coming Soon", "Chief of staff layer."],
      ["HSG Pro", "Coming Soon", "Deception detection."],
      ["SPFS Pro", "Coming Soon", "Finance operating system."],
      ["HYEX", "Coming Soon", "Value exchange."],
      ["ASL Pro", "Coming Soon", "Security automation."],
    ],
  },
];

const TECHNOLOGY_AREAS = [
  ["Identity Systems", "Credentials, verification, recovery."],
  ["Privacy Infrastructure", "Anonymous continuity, private communication."],
  ["Security Engineering", "Device trust, threat decisions."],
  ["Intelligent Systems", "Research automation, guarded agents."],
  ["Financial Technology", "Escrow, lending, settlement."],
  ["Digital Experiences", "Interfaces for complex systems."],
];

const ECOSYSTEM_MARKS = [
  { name: "Starknet", mark: "SN" },
  { name: "Aleo", mark: "A" },
  { name: "Shardeum", mark: "S" },
  { name: "Base", mark: "B" },
  { name: "IOTA", mark: "I" },
  { name: "Trust Wallet", mark: "T" },
  { name: "Supabase", mark: "SB" },
  { name: "WireGuard", mark: "WG" },
  { name: "Cairo", mark: "C" },
  { name: "Leo", mark: "L" },
  { name: "Rust", mark: "R" },
  { name: "Go", mark: "GO" },
];

const ECOSYSTEM_LOOP = [...ECOSYSTEM_MARKS, ...ECOSYSTEM_MARKS];

const INITIATIVES = [
  ["Internet safety", "Safer digital decisions."],
  ["Consumer protection", "Less fraud and identity harm."],
  ["Digital literacy", "Clearer trust surfaces."],
  ["Future interfaces", "New ways to coordinate."],
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

function LiveNetworkScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 720;
    const columns = reduced ? (mobile ? 6 : 9) : (mobile ? 7 : 12);
    const rows = reduced ? (mobile ? 5 : 7) : (mobile ? 6 : 8);
    const orbitCount = reduced ? 12 : mobile ? 16 : 28;
    const gridCount = columns * rows;
    const nodeCount = gridCount + orbitCount;
    const depth = mobile ? 18 : 28;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 120);
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
    camera.position.set(0, 0, 30);

    const base = [];
    const positions = new Float32Array(nodeCount * 3);

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const nx = column / Math.max(columns - 1, 1) - 0.5;
        const ny = row / Math.max(rows - 1, 1) - 0.5;
        const x = nx * (mobile ? 27 : 38) + Math.sin(row * 0.9) * 0.5;
        const y = ny * (mobile ? 18 : 22) + Math.sin(column * 0.72) * 0.38;
        const z = Math.sin(column * 0.72 + row * 0.58) * depth * 0.2;
        const index = row * columns + column;
        base.push({ x, y, z, speed: 0.34 + ((row + column) % 5) * 0.08, drift: row * 0.9 + column * 0.47 });
        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;
      }
    }

    for (let i = 0; i < orbitCount; i += 1) {
      const angle = (i / orbitCount) * Math.PI * 2;
      const radiusX = mobile ? 10 : 15;
      const radiusY = mobile ? 6.5 : 9;
      const index = gridCount + i;
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      const z = Math.sin(angle * 2) * depth * 0.12;
      base.push({ x, y, z, speed: 0.48 + (i % 4) * 0.06, drift: angle });
      positions[index * 3] = x;
      positions[index * 3 + 1] = y;
      positions[index * 3 + 2] = z;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x79b7ff,
      size: mobile ? 0.06 : 0.045,
      transparent: true,
      opacity: reduced ? 0.45 : 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(points);

    const pairs = [];
    const gridIndex = (row, column) => row * columns + column;
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const current = gridIndex(row, column);
        if (column < columns - 1) pairs.push([current, gridIndex(row, column + 1)]);
        if (row < rows - 1) pairs.push([current, gridIndex(row + 1, column)]);
        if ((row + column) % 3 === 0 && row < rows - 1 && column < columns - 1) {
          pairs.push([current, gridIndex(row + 1, column + 1)]);
        }
      }
    }

    for (let i = 0; i < orbitCount; i += 1) {
      const current = gridCount + i;
      const next = gridCount + ((i + 1) % orbitCount);
      pairs.push([current, next]);
      if (i % 4 === 0) {
        const angle = (i / orbitCount) * Math.PI * 2;
        const row = Math.max(0, Math.min(rows - 1, Math.floor(rows / 2 + Math.sin(angle) * (rows / 3))));
        const column = Math.max(0, Math.min(columns - 1, Math.floor(columns / 2 + Math.cos(angle) * (columns / 3))));
        pairs.push([current, gridIndex(row, column)]);
      }
    }

    const linePositions = new Float32Array(pairs.length * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2f8cff,
      transparent: true,
      opacity: reduced ? 0.08 : 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const circuitGroup = new THREE.Group();
    const circuitMaterial = new THREE.LineBasicMaterial({
      color: 0x4b7be8,
      transparent: true,
      opacity: reduced ? 0.05 : 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    for (let i = 0; i < 16; i += 1) {
      const y = -14 + i * 1.85;
      const z = -18 - (i % 4) * 1.8;
      const pointsPath = [
        new THREE.Vector3(-32, y, z),
        new THREE.Vector3(-12, y + Math.sin(i) * 1.2, z + 2),
        new THREE.Vector3(8, y + Math.cos(i * 0.7) * 1.2, z + 1),
        new THREE.Vector3(32, y, z),
      ];
      const curve = new THREE.CatmullRomCurve3(pointsPath);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(80));
      const line = new THREE.Line(geometry, circuitMaterial);
      circuitGroup.add(line);
    }

    for (let i = 0; i < 8; i += 1) {
      const x = -24 + i * 7;
      const z = -22 - (i % 3) * 2;
      const pointsPath = [
        new THREE.Vector3(x, -15, z),
        new THREE.Vector3(x + Math.sin(i) * 1.5, -4, z + 1),
        new THREE.Vector3(x + Math.cos(i) * 1.5, 7, z + 1),
        new THREE.Vector3(x, 16, z),
      ];
      const curve = new THREE.CatmullRomCurve3(pointsPath);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(80));
      const line = new THREE.Line(geometry, circuitMaterial);
      circuitGroup.add(line);
    }
    scene.add(circuitGroup);

    const ringGroup = new THREE.Group();
    const ringMaterial = new THREE.LineBasicMaterial({
      color: 0x7bc2ff,
      transparent: true,
      opacity: reduced ? 0.06 : 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    [5.5, 8.5, 12].forEach((radius, index) => {
      const curve = new THREE.EllipseCurve(0, 0, radius * 1.5, radius, 0, Math.PI * 2, false, 0);
      const points2D = curve.getPoints(160);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        points2D.map(point => new THREE.Vector3(point.x, point.y, -5 - index * 2)),
      );
      const ring = new THREE.Line(geometry, ringMaterial);
      ring.rotation.x = 0.12 + index * 0.08;
      ringGroup.add(ring);
    });
    scene.add(ringGroup);

    const pulseMaterial = new THREE.MeshBasicMaterial({
      color: 0x9ddcff,
      transparent: true,
      opacity: reduced ? 0.35 : 0.85,
      blending: THREE.AdditiveBlending,
    });
    const pulseGeometry = new THREE.SphereGeometry(mobile ? 0.09 : 0.07, 10, 10);
    const pulses = Array.from({ length: reduced ? 5 : 13 }, (_, i) => {
      const mesh = new THREE.Mesh(pulseGeometry, pulseMaterial);
      mesh.userData = { pair: pairs[(i * 17) % pairs.length] || [0, 1], offset: Math.random() };
      scene.add(mesh);
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

      mouse.x += (targetMouse.x - mouse.x) * 0.045;
      mouse.y += (targetMouse.y - mouse.y) * 0.045;

      for (let i = 0; i < nodeCount; i += 1) {
        const item = base[i];
        const wave = reduced ? 0 : Math.sin(t * item.speed + item.drift) * 0.42;
        positions[i * 3] = item.x + wave * 0.7;
        positions[i * 3 + 1] = item.y + Math.cos(t * item.speed + item.drift) * 0.25;
        positions[i * 3 + 2] = item.z + wave;
      }
      nodeGeometry.attributes.position.needsUpdate = true;

      pairs.forEach(([a, b], index) => {
        const ai = a * 3;
        const bi = b * 3;
        const li = index * 6;
        linePositions[li] = positions[ai];
        linePositions[li + 1] = positions[ai + 1];
        linePositions[li + 2] = positions[ai + 2];
        linePositions[li + 3] = positions[bi];
        linePositions[li + 4] = positions[bi + 1];
        linePositions[li + 5] = positions[bi + 2];
      });
      lineGeometry.attributes.position.needsUpdate = true;

      pulses.forEach((pulse, index) => {
        const [a, b] = pulse.userData.pair;
        const progress = (t * (0.14 + index * 0.01) + pulse.userData.offset) % 1;
        const ai = a * 3;
        const bi = b * 3;
        pulse.position.set(
          THREE.MathUtils.lerp(positions[ai], positions[bi], progress),
          THREE.MathUtils.lerp(positions[ai + 1], positions[bi + 1], progress),
          THREE.MathUtils.lerp(positions[ai + 2], positions[bi + 2], progress),
        );
        pulse.scale.setScalar(0.7 + Math.sin(progress * Math.PI) * 1.5);
      });

      points.rotation.y = t * 0.025 + scroll * 0.55;
      points.rotation.x = -0.12 + mouse.y * 0.08;
      lines.rotation.copy(points.rotation);
      circuitGroup.rotation.y = -t * 0.014 + scroll * 0.35;
      circuitGroup.position.y = Math.sin(t * 0.22) * 0.5;
      ringGroup.rotation.z = t * 0.035;
      ringGroup.rotation.y = scroll * 0.45 + mouse.x * 0.1;
      camera.position.x = mouse.x * (mobile ? 1.2 : 2.2);
      camera.position.y = -mouse.y * (mobile ? 0.8 : 1.4) + scroll * 3;
      camera.position.z = 29 + scroll * 7;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
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
      circuitGroup.children.forEach(child => child.geometry.dispose());
      circuitMaterial.dispose();
      ringGroup.children.forEach(child => child.geometry.dispose());
      ringMaterial.dispose();
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
      <span />
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

function Navbar() {
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
        <a href="#home" className="brand" aria-label="Emilo Labs home">
          <EmiloLogo compact className="brand-mark" />
          <span>EMILO LABS</span>
        </a>

        <div className="desktop-nav">
          {NAV_LINKS.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
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
          <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => setMenuOpen(false)}>Email</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <EmiloLogo className="hero-logo" />
          <div className="hero-kicker">EMILO LABS</div>
          <h1>At the Core of a Connected Future.</h1>
          <p>
            Identity, privacy, security, intelligence, finance, and coordination infrastructure.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#origin">Explore the institution</a>
            <a className="secondary-button" href="#products">View products</a>
          </div>
        </div>

        <InstitutionPreview />
      </div>
    </header>
  );
}

function InstitutionPreview() {
  return (
    <div className="institution-preview light-panel">
      <div className="panel-topline">
        <span>CONNECTED SYSTEM</span>
        <span>live</span>
      </div>
      <div className="mini-flow">
        {INSTITUTION_FLOW.map((item, index) => (
          <div key={item.title} className="mini-step" style={{ "--delay": `${index * 90}ms` }}>
            <span>{item.signal}</span>
            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
      <div className="preview-core">
        <div className="core-ring" />
        <EmiloLogo compact className="preview-logo" />
      </div>
    </div>
  );
}

function Origin() {
  return (
    <Reveal id="origin" className="origin-section">
      <div className="container narrow">
        <SectionLabel>ORIGIN</SectionLabel>
        <h2>Why it exists.</h2>
        <p>
          Connected life depends on systems that can verify, protect, recover, transact, and communicate. Emilo Labs builds that connective layer.
        </p>
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
        <div className="split-heading">
          <h2>Institution first. Products second.</h2>
        </div>

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
      <div className="container">
        <SectionLabel>RESEARCH</SectionLabel>
        <div className="split-heading">
          <h2>Questions with consequences.</h2>
          <p>Identity. Privacy. Security. Intelligence. Finance. Internet systems.</p>
        </div>

        <div className="research-grid">
          {RESEARCH_AREAS.map(([title, text], index) => (
            <article key={title} className="research-card light-panel" style={{ "--delay": `${index * 70}ms` }}>
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

  const productCards = useMemo(() => tier.products.map(([name, status, summary]) => ({ name, status, summary })), [tier]);

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
        <div className="split-heading">
          <h2>Products with signal.</h2>
          <p>Active. Research. Coming soon.</p>
        </div>

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
                style={{ "--delay": `${index * 55}ms` }}
              >
                <span>{product.status}</span>
                <strong>{product.name}</strong>
                <p>{product.summary}</p>
              </button>
            ))}
          </div>

          <aside className="active-product">
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
        <div className="split-heading">
          <h2>Technical foundation.</h2>
          <p>Identity. Privacy. Security. Intelligence. Finance. Interfaces.</p>
        </div>

        <div className="technology-grid">
          {TECHNOLOGY_AREAS.map(([title, text], index) => (
            <article key={title} className="technology-card light-panel" style={{ "--delay": `${index * 60}ms` }}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
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
              <span>{item.mark}</span>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
        <div className="ecosystem-track" aria-hidden="true">
          {ECOSYSTEM_LOOP.map((item, index) => (
            <div className="ecosystem-logo" key={`copy-${item.name}-${index}`}>
              <span>{item.mark}</span>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Contact() {
  return (
    <Reveal id="contact" className="contact-section">
      <div className="container contact-inner">
        <SectionLabel>CONTACT</SectionLabel>
        <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
          {INITIATIVES.map(([title, text]) => (
            <article key={title} className="initiative-card light-panel">
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="brand" aria-label="Emilo Labs home">
          <EmiloLogo compact className="brand-mark" />
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

        .nav {
          position: fixed;
          inset: 0 0 auto;
          z-index: 20;
          padding: 18px 0;
          transition: padding 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .nav-scrolled {
          padding: 11px 0;
          background: rgba(5, 7, 12, 0.76);
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

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--text);
          text-decoration: none;
        }

        .brand-mark {
          width: 40px;
          height: 40px;
          object-fit: contain;
          opacity: 0.96;
          filter: brightness(1.38) saturate(1.2) drop-shadow(0 0 16px rgba(123,194,255,0.45));
        }

        .brand span {
          font-weight: 700;
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

        .desktop-nav .nav-cta {
          color: var(--text);
          background: rgba(75,123,232,0.26);
          border: 1px solid rgba(123,194,255,0.34);
          border-radius: var(--radius);
          padding: 9px 16px;
          box-shadow: 0 0 26px rgba(75,123,232,0.22);
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(12,20,34,0.82);
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
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 128px 0 94px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 54px;
        }

        .hero-logo {
          width: min(250px, 58vw);
          height: auto;
          margin-bottom: 28px;
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
          margin-bottom: 18px;
        }

        .section-label span,
        .hero-kicker::before {
          content: "";
          width: 26px;
          height: 1px;
          background: var(--blue-2);
          box-shadow: 0 0 12px rgba(123,194,255,0.72);
        }

        .hero-copy h1,
        .section h2 {
          color: var(--text);
          font-weight: 700;
          letter-spacing: 0;
        }

        .hero-copy h1 {
          max-width: 760px;
          margin: 18px 0 24px;
          font-size: 5rem;
          line-height: 0.96;
          text-wrap: balance;
          overflow-wrap: break-word;
        }

        .hero-copy p {
          max-width: 610px;
          color: var(--soft);
          font-size: 1.12rem;
          line-height: 1.68;
          margin-bottom: 32px;
          overflow-wrap: break-word;
          text-wrap: balance;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
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
          min-height: 590px;
          padding: 20px;
        }

        .panel-topline {
          justify-content: space-between;
          width: 100%;
          color: var(--muted);
        }

        .panel-topline span:first-child {
          color: var(--blue-2);
        }

        .mini-flow {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
          margin-top: 24px;
        }

        .mini-step {
          min-height: 126px;
          padding: 14px;
          border: 1px solid rgba(123,194,255,0.16);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.42);
          transform: translateY(0);
          animation: riseSignal 5s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .mini-step span {
          display: block;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 0.62rem;
          margin-bottom: 10px;
        }

        .mini-step strong {
          display: block;
          color: var(--text);
          font-size: 0.98rem;
          line-height: 1.2;
        }

        .preview-core {
          position: absolute;
          inset: auto 0 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 350px;
        }

        .core-ring {
          position: absolute;
          width: 290px;
          height: 290px;
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
          inset: 74px;
          border-color: rgba(169,135,255,0.18);
        }

        .preview-logo {
          width: 170px;
          opacity: 0.95;
          filter: brightness(1.42) saturate(1.2) drop-shadow(0 0 36px rgba(123,194,255,0.5));
          z-index: 2;
        }

        .section {
          padding: 108px 0;
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
          max-width: 720px;
          font-size: 3.45rem;
          line-height: 1.05;
          margin-bottom: 18px;
        }

        .origin-section p,
        .split-heading p,
        .contact-inner p {
          color: var(--soft);
          font-size: 1rem;
          line-height: 1.7;
        }

        .origin-section p {
          max-width: 760px;
          margin-bottom: 16px;
        }

        .split-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.62fr);
          gap: 42px;
          align-items: end;
          margin-bottom: 38px;
        }

        .split-heading h2 {
          margin-bottom: 0;
        }

        .relationship-map {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
          padding: 20px;
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
          min-height: 250px;
          padding: 22px 18px;
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
          margin-bottom: 56px;
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
          font-size: 0.9rem;
          line-height: 1.62;
        }

        .research-grid,
        .technology-grid,
        .initiative-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .research-card,
        .technology-card,
        .initiative-card {
          min-height: 190px;
          padding: 25px 22px;
          transform: translateY(0);
          animation: cardBreathe 6s ease-in-out infinite;
          animation-delay: var(--delay, 0ms);
        }

        .tier-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }

        .tier-tabs button {
          min-height: 42px;
          padding: 10px 15px;
          color: var(--soft);
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(8,12,20,0.64);
          cursor: pointer;
        }

        .tier-tabs button.is-active {
          color: var(--text);
          border-color: var(--line-strong);
          background: rgba(75,123,232,0.22);
          box-shadow: 0 0 26px rgba(75,123,232,0.18);
        }

        .product-stage {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 16px;
          padding: 16px;
          outline: none;
        }

        .product-rail {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(240px, 31%);
          gap: 12px;
          overflow-x: auto;
          padding: 2px 2px 16px;
          scroll-snap-type: x mandatory;
          scrollbar-color: rgba(123,194,255,0.5) rgba(255,255,255,0.05);
        }

        .product-card {
          min-height: 238px;
          padding: 20px 18px;
          text-align: left;
          color: var(--soft);
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.58);
          cursor: pointer;
          scroll-snap-align: start;
          transform: translateY(0);
          transition: border-color 180ms ease, transform 180ms ease, background 180ms ease;
        }

        .product-card.is-active,
        .product-card:hover {
          border-color: var(--line-strong);
          background: rgba(14,27,48,0.78);
          transform: translateY(-3px);
        }

        .product-card strong {
          display: block;
          color: var(--text);
          font-size: 1.32rem;
          line-height: 1.12;
          margin-bottom: 12px;
        }

        .active-product {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-height: 330px;
          padding: 26px 24px;
          border: 1px solid rgba(123,194,255,0.14);
          border-radius: var(--radius);
          background: rgba(5,7,12,0.6);
        }

        .active-product h3 {
          color: var(--text);
          font-size: 2.2rem;
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
          background: rgba(75,123,232,0.16);
          font-size: 0.82rem;
        }

        .product-controls {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
          padding-top: 24px;
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
          color: rgba(231,242,255,0.68);
          background:
            linear-gradient(145deg, rgba(123,194,255,0.1), rgba(5,7,12,0.2)),
            rgba(5,7,12,0.54);
          box-shadow: inset 0 0 22px rgba(75,123,232,0.1), 0 0 22px rgba(75,123,232,0.08);
          font-family: var(--mono);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .ecosystem-logo strong {
          color: rgba(207,226,255,0.54);
          font-size: 0.76rem;
          font-weight: 600;
        }

        .contact-inner {
          max-width: 760px;
          text-align: center;
        }

        .contact-inner .section-label {
          justify-content: center;
        }

        .contact-inner h2 {
          margin-left: auto;
          margin-right: auto;
        }

        .contact-email {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 14px 22px;
          color: var(--blue-2);
          border: 1px solid rgba(123,194,255,0.24);
          border-radius: var(--radius);
          background: rgba(8,12,20,0.58);
          box-shadow: 0 0 34px rgba(75,123,232,0.16);
          font-size: clamp(1rem, 3vw, 1.45rem);
          font-weight: 600;
          text-decoration: none;
        }

        .footer {
          padding: 38px 0;
          border-top: 1px solid rgba(123,194,255,0.12);
          background: rgba(5,7,12,0.72);
          backdrop-filter: blur(12px);
        }

        .footer-inner {
          flex-wrap: wrap;
        }

        .footer-inner > div {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
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

        @keyframes panelSweep {
          0%, 42% { transform: translateX(-120%); }
          64%, 100% { transform: translateX(120%); }
        }

        @keyframes riseSignal {
          0%, 100% { transform: translateY(0); border-color: rgba(123,194,255,0.14); }
          50% { transform: translateY(-5px); border-color: rgba(123,194,255,0.34); }
        }

        @keyframes ringTurn {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes cardBreathe {
          0%, 100% { border-color: rgba(123,194,255,0.14); }
          50% { border-color: rgba(123,194,255,0.28); }
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
            font-size: 4rem;
          }

          .institution-preview {
            min-height: 520px;
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

          .research-grid,
          .technology-grid,
          .initiative-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .mini-flow {
            grid-template-columns: 1fr 1fr;
          }

          .mini-step:last-child {
            grid-column: 1 / -1;
          }

          .product-stage {
            grid-template-columns: 1fr;
          }

          .product-rail {
            grid-auto-columns: minmax(250px, 46%);
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
            padding: 112px 0 70px;
          }

          .hero-copy h1,
          .section h2 {
            font-size: 2.22rem;
            line-height: 1.05;
          }

          .hero-copy p {
            font-size: 1rem;
          }

          .hero-logo {
            width: min(220px, 64vw);
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .section {
            padding: 78px 0;
          }

          .institution-preview {
            min-height: 460px;
          }

          .mini-flow,
          .research-grid,
          .technology-grid,
          .initiative-grid {
            grid-template-columns: 1fr;
          }

          .preview-core {
            height: 210px;
            bottom: 30px;
          }

          .core-ring {
            width: 210px;
            height: 210px;
          }

          .preview-logo {
            width: 124px;
          }

          .product-rail {
            grid-auto-columns: minmax(238px, 86%);
          }

          .active-product h3 {
            font-size: 1.9rem;
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
          .footer-inner > div {
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
      <Navbar />
      <Hero />
      <Origin />
      <InstitutionMap />
      <Research />
      <Products />
      <Technology />
      <CredibilityBand />
      <Initiatives />
      <Contact />
      <Footer />
    </div>
  );
}
