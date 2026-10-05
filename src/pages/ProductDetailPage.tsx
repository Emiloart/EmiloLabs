import { PageHero, ALL_PRODUCTS, AppLink, ProductThumbnail, SectionLabel, contactHref, slugify, type PageProps } from "../site-shared";
import NotFoundPage from "./NotFoundPage";

function ProductDetailPage({ currentPath, onNavigate }: PageProps) {
  const slug = currentPath.split("/").pop() || "";
  const match = ALL_PRODUCTS
    .find(product => slugify(product.name) === slug);

  if (!match) return <NotFoundPage currentPath={currentPath} onNavigate={onNavigate} />;

  return (
    <>
      <PageHero label={match.status.toUpperCase()} title={match.name} />
      <section className="section detail-section">
        <div className="container">
          <AppLink href="/products" currentPath={currentPath} onNavigate={onNavigate} className="back-link">← All products</AppLink>
          <div className="detail-layout">
            <div className="detail-overview">
              <SectionLabel>OVERVIEW</SectionLabel>
              <p>{match.summary}</p>
              <p className="product-description">{match.description}</p>
              <a href={contactHref(`Product inquiry: ${match.name}`)} className="primary-button">Product inquiry</a>
            </div>
            <aside className="product-record" aria-label="Product details">
              <ProductThumbnail product={match} />
              <dl className="detail-facts">
                <div><dt>Status</dt><dd>{match.status}</dd></div>
                <div><dt>Area</dt><dd>{match.domain}</dd></div>
                <div><dt>Development</dt><dd>{match.stage}</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductDetailPage;
