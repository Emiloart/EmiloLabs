import { PageHero, ProductCarousel, PRODUCT_TIERS, slugify, type PageProps } from "../site-shared";

function ProductsPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero label="EMILO LABS" title="Products" />
      {PRODUCT_TIERS.map(tier => (
        <section key={tier.title} className="section products-section directory-section" id={slugify(tier.title)}>
          <div className="container">
            <ProductCarousel title={tier.title} products={tier.products} currentPath={currentPath} onNavigate={onNavigate} headingLevel={2} />
          </div>
        </section>
      ))}
    </>
  );
}
export default ProductsPage;
