import { PageHero, PRODUCT_TIERS, AppLink, SectionLabel, type PageProps } from "../site-shared";

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function ProductsPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero label="PRODUCTS" title="The systems in the portfolio." summary="Current products and systems in development, separated by lifecycle. Each entry has a dedicated surface." />
      {PRODUCT_TIERS.map(tier => (
        <section key={tier.title} className="section products-section">
          <div className="container">
            <SectionLabel>{tier.title.toUpperCase()}</SectionLabel>
            <div className="split-heading">
              <h2>{tier.title === "Active" ? "Available now." : "Being built."}</h2>
              <p>{tier.products.length} systems in this lifecycle.</p>
            </div>
            <div className="track-grid">
              {tier.products.map(([name, , summary]) => (
                <AppLink key={name} href={"/products/" + slugify(name)} currentPath={currentPath} onNavigate={onNavigate} className="track-card light-panel">
                  <span>{tier.title}</span>
                  <strong>{name}</strong>
                  <p>{summary}</p>
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
