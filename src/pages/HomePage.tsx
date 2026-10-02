import { AppLink, InsightsPreview, PRODUCT_TIERS, ResearchTrackGrid, SectionLabel, type PageProps } from "../site-shared";

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
            <p>Products are grouped by lifecycle so the portfolio can be understood without interpretation.</p>
          </div>
          <div className="product-grid">
            <article className="product-card light-panel">
              <span>ACTIVE</span><strong>{active.length} systems</strong>
              <p>{active.slice(0, 5).map(product => product[0]).join(" · ")}</p>
            </article>
            <article className="product-card light-panel">
              <span>COMING SOON</span><strong>{upcoming.length} systems</strong>
              <p>{upcoming.slice(0, 5).map(product => product[0]).join(" · ")}</p>
            </article>
          </div>
          <div className="home-actions">
            <AppLink href="/products" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">View all products</AppLink>
          </div>
        </div>
      </section>

      <ResearchTrackGrid />

      <InsightsPreview currentPath={currentPath} onNavigate={onNavigate} featuredOnly={true} />

      <section className="section">
        <div className="container">
          <div className="cta-band light-panel">
            <div><SectionLabel>ABOUT</SectionLabel><h2>One institution. Multiple systems.</h2><p>Research, infrastructure, products, and experiments are developed under one parent organization.</p></div>
            <AppLink href="/about" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">About Emilo Labs</AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;
