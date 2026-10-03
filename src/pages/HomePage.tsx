import { AppLink, InsightsPreview, PRODUCT_TIERS, SectionLabel, type PageProps } from "../site-shared";

function HomePage({ currentPath, onNavigate }: PageProps) {
  const active = PRODUCT_TIERS.find(tier => tier.title === "Active")?.products ?? [];
  const upcoming = PRODUCT_TIERS.find(tier => tier.title === "Coming Soon")?.products ?? [];

  return (
    <>
      <header className="hero-section">
        <div className="container">
          <div className="hero-frame">
            <div className="hero-copy">
              <div className="hero-kicker">EMILO LABS</div>
              <h1>Humanity first. Technology second.</h1>
              <p>A technology institution researching and building systems for identity, privacy, security, intelligence, finance, and digital coordination.</p>
              <div className="hero-actions">
                <AppLink href="/products" currentPath={currentPath} onNavigate={onNavigate} className="primary-button">Explore products</AppLink>
                <AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">Read research</AppLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section products-section">
        <div className="container">
          <SectionLabel>PRODUCTS</SectionLabel>
          <div className="split-heading">
            <h2>What exists.</h2>
            <AppLink href="/products" currentPath={currentPath} onNavigate={onNavigate} className="section-link">Full portfolio <span aria-hidden="true">↗</span></AppLink>
          </div>
          <div className="portfolio-preview">
            {[
              { label: "ACTIVE", products: active },
              { label: "COMING SOON", products: upcoming },
            ].map(group => (
              <div className="portfolio-preview-group" key={group.label}>
                <div className="preview-heading"><span>{group.label}</span><strong>{group.products.length} systems</strong></div>
                <ul>
                  {group.products.slice(0, 3).map(([name, domain]) => (
                    <li key={name}><strong>{name}</strong><span>{domain}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <InsightsPreview currentPath={currentPath} onNavigate={onNavigate} featuredOnly={true} />

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div><SectionLabel>ABOUT</SectionLabel><h2>One institution. Multiple systems.</h2><p>Research, infrastructure, products, and experiments are developed under one parent organization.</p></div>
            <AppLink href="/about" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">About Emilo Labs</AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;
