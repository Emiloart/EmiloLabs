import {
  CONTACT_EMAIL,
  INSTITUTION_FLOW,
  RESEARCH_AREAS,
  PRODUCT_TIERS,
  TECHNOLOGY_AREAS,
  ECOSYSTEM_MARKS,
  AppLink,
  Hero,
  Reveal,
  SectionLabel,
} from "../site-shared";

function HomePage({ currentPath, onNavigate }) {
  return (
    <>
      <Hero currentPath={currentPath} onNavigate={onNavigate} />

      <Reveal id="institution" className="overview-section">
        <div className="container">
          <SectionLabel>INSTITUTION</SectionLabel>
          <div className="split-heading">
            <h2>Research, infrastructure, and products under one institution.</h2>
            <p>
              Emilo Labs works across connected technology problems and turns questions into
              research, reusable infrastructure, and products that reach people and organizations.
            </p>
          </div>
          <div className="metric-grid">
            {INSTITUTION_FLOW.slice(0, 4).map(item => (
              <article key={item.title} className="metric-card light-panel">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
          <div className="home-actions">
            <AppLink href="/about" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
              About the institution
            </AppLink>
          </div>
        </div>
      </Reveal>

      <Reveal id="research" className="pillars-section">
        <div className="container">
          <SectionLabel>RESEARCH</SectionLabel>
          <div className="split-heading">
            <h2>Questions with consequences.</h2>
            <p>
              Identity, privacy, security, intelligence, finance, and internet systems form the
              current research surface.
            </p>
          </div>
          <div className="pillar-grid">
            {RESEARCH_AREAS.slice(0, 6).map(([title, description]) => (
              <article key={title} className="pillar-card light-panel">
                <strong>{title}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="home-actions">
            <AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="primary-button">
              View research
            </AppLink>
          </div>
        </div>
      </Reveal>

      <Reveal id="products" className="products-section">
        <div className="container">
          <SectionLabel>PRODUCTS</SectionLabel>
          <div className="split-heading">
            <h2>Products with signal.</h2>
            <p>Active systems and upcoming products, separated clearly from research work.</p>
          </div>
          <div className="product-grid">
            {PRODUCT_TIERS.map(tier => (
              <article key={tier.title} className="product-card light-panel">
                <span>{tier.title}</span>
                <strong>{tier.products.length} systems</strong>
                <p>{tier.products.slice(0, 3).map(product => product[0]).join(" · ")}</p>
              </article>
            ))}
          </div>
          <div className="home-actions">
            <AppLink href="/products" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
              View product portfolio
            </AppLink>
          </div>
        </div>
      </Reveal>

      <Reveal id="technology" className="technology-section">
        <div className="container">
          <SectionLabel>TECHNOLOGY</SectionLabel>
          <div className="split-heading">
            <h2>Technical foundations for connected systems.</h2>
            <p>
              Identity, privacy, security, intelligence, finance, and interfaces are supported by
              a broad engineering stack and ecosystem.
            </p>
          </div>
          <div className="technology-list">
            {TECHNOLOGY_AREAS.slice(0, 6).map(([title]) => (
              <span key={title} className="technology-chip light-panel">{title}</span>
            ))}
          </div>
          <div className="ecosystem-strip" aria-label="Technology ecosystem">
            {[...ECOSYSTEM_MARKS, ...ECOSYSTEM_MARKS].map((mark, index) => (
              <span key={`${mark.name}-${index}`}>{mark.name}</span>
            ))}
          </div>
          <div className="home-actions">
            <AppLink href="/technology" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">
              Explore technology
            </AppLink>
          </div>
        </div>
      </Reveal>

      <Reveal id="contact" className="cta-section">
        <div className="container">
          <div className="cta-band light-panel">
            <div>
              <SectionLabel>CONTACT</SectionLabel>
              <h2>Work with Emilo Labs.</h2>
              <p>For research, products, technology, or institutional communication.</p>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="primary-button">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default HomePage;
