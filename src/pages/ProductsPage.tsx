import { PageHero, ProductOperatingModel, Products } from "../site-shared";

function ProductsPage() {
  return (
    <>
      <PageHero
        label="PRODUCTS"
        title="Systems built for people, organizations, and connected digital environments."
        summary="The portfolio is presented in two states: Active and Coming Soon. That distinction keeps current products separate from systems still being prepared."
      />
      <ProductOperatingModel />
      <Products />
    </>
  );
}

export default ProductsPage;
