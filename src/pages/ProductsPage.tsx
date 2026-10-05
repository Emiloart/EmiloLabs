import { PageHero, PRODUCT_TIERS, AppLink, SectionLabel, slugify, type PageProps } from "../site-shared";

function ProductsPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero label="EMILO LABS" title="Products" />
      {PRODUCT_TIERS.map(tier => (
        <section key={tier.title} className="section products-section directory-section" id={slugify(tier.title)}>
          <div className="container">
            <SectionLabel>{tier.title.toUpperCase()}</SectionLabel>
            <div className="split-heading">
              <h2>{tier.title}</h2>
              <p>{tier.products.length} products</p>
            </div>
            <div className="product-directory">
              {tier.products.map(({ name, domain, summary }, index) => (
                <AppLink key={name} href={"/products/" + slugify(name)} currentPath={currentPath} onNavigate={onNavigate} className="product-entry">
                  <span className="entry-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span className="entry-name"><strong>{name}</strong><small>{domain}</small></span>
                  <span className="entry-summary">{summary}</span>
                  <span className="entry-arrow" aria-hidden="true">↗</span>
                </AppLink>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
export default ProductsPage;
