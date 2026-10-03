import { PageHero, PRODUCT_TIERS, AppLink, SectionLabel, contactHref, slugify, type PageProps } from "../site-shared";
import NotFoundPage from "./NotFoundPage";

function ProductDetailPage({ currentPath, onNavigate }: PageProps) {
  const slug = currentPath.split("/").pop() || "";
  const match = PRODUCT_TIERS.flatMap(tier => tier.products.map(([name, domain, summary]) => ({ name, domain, summary, status: tier.title })))
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
              <a href={contactHref(`Product inquiry: ${match.name}`)} className="primary-button">Product inquiry</a>
            </div>
            <dl className="detail-facts">
              <div><dt>Status</dt><dd>{match.status}</dd></div>
              <div><dt>Area</dt><dd>{match.domain}</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductDetailPage;
