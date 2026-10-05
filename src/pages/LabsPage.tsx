import { LABS_EXPERIMENTS, LABS_PRODUCT_NAMES, PageHero, ProductCarousel, PRODUCT_TIERS, SectionLabel, type PageProps } from "../site-shared";

function LabsPage({ currentPath, onNavigate }: PageProps) {
  const inDevelopment = PRODUCT_TIERS.find(tier => tier.title === "Coming Soon")?.products
    .filter(product => LABS_PRODUCT_NAMES.includes(product.name)) ?? [];

  return (
    <>
      <PageHero label="EMILO LABS" title="Labs" />
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
          <ProductCarousel title="In development" products={inDevelopment} currentPath={currentPath} onNavigate={onNavigate} headingLevel={2} />
        </div>
      </section>
    </>
  );
}
export default LabsPage;
