import { AppLink, LABS_EXPERIMENTS, LABS_PRODUCT_NAMES, PageHero, PRODUCT_TIERS, SectionLabel, slugify, type PageProps } from "../site-shared";

function LabsPage({ currentPath, onNavigate }: PageProps) {
  const inDevelopment = PRODUCT_TIERS.find(tier => tier.title === "Coming Soon")?.products
    .filter(([name]) => LABS_PRODUCT_NAMES.includes(name)) ?? [];

  return (
    <>
      <PageHero label="LABS" title="Experimental work." summary="Experiments and development work that can become products, infrastructure, or remain research." />
      <section className="section labs-section">
        <div className="container">
          <SectionLabel>EXPERIMENT</SectionLabel>
          {LABS_EXPERIMENTS.map(([name, summary]) => (
            <article className="lab-feature" key={name}>
              <h2>{name}</h2>
              <p>{summary}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section labs-development-section">
        <div className="container">
          <SectionLabel>PRODUCT DEVELOPMENT</SectionLabel>
          <div className="split-heading">
            <h2>Also in the portfolio.</h2>
            <p>These systems are listed as Coming Soon while development continues.</p>
          </div>
          <div className="product-directory">
            {inDevelopment.map(([name, domain, summary], index) => (
              <AppLink key={name} href={`/products/${slugify(name)}`} currentPath={currentPath} onNavigate={onNavigate} className="product-entry">
                <span className="entry-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className="entry-name"><strong>{name}</strong><small>{domain}</small></span>
                <span className="entry-summary">{summary}</span>
                <span className="entry-arrow" aria-hidden="true">↗</span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default LabsPage;
