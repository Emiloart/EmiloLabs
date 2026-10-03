import { PageHero, PRODUCT_TIERS, AppLink, SectionLabel, type PageProps } from "../site-shared";

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function ProductsPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero label="PRODUCTS" title="The systems in the portfolio." summary="Current products and systems in development, organized by lifecycle." />
      {PRODUCT_TIERS.map(tier => (
        <section key={tier.title} className="section products-section directory-section" id={tier.title === "Active" ? "active-products" : "coming-soon-products"}>
          <div className="container">
            <SectionLabel>{tier.title.toUpperCase()}</SectionLabel>
            <div className="split-heading">
              <h2>{tier.title === "Active" ? "Available now." : "Being built."}</h2>
              <p>{tier.products.length} products</p>
            </div>
            <div className="product-directory">
              {tier.products.map(([name, domain, summary], index) => (
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
