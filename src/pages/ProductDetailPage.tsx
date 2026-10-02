import { PageHero, PRODUCT_TIERS, AppLink, type PageProps } from "../site-shared";

function ProductDetailPage({ currentPath, onNavigate }: PageProps) {
  const slug = currentPath.split("/").pop() || "";
  const match = PRODUCT_TIERS.flatMap(tier => tier.products.map(([name, domain, summary]) => ({ name, domain, summary, status: tier.title })))
    .find(product => product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug);

  if (!match) return <PageHero label="PRODUCT" title="Product not found." summary="The requested product does not exist in the current portfolio." />;

  return (
    <>
      <PageHero label={match.status.toUpperCase()} title={match.name} summary={match.summary} />
      <section className="section">
        <div className="container">
          <div className="split-panel light-panel">
            <div><span>{match.domain}</span><h2>{match.name}</h2><p>{match.summary}</p></div>
            <AppLink href="/products" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">Back to products</AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductDetailPage;
