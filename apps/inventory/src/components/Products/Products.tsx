import { lazy } from "react";
import { useProducts } from "../../hooks/useProducts";
const Product = lazy(() => import("../Product/Product").then(mod => ({ default: mod.Product })));
export const Products = () => {
  const { products } = useProducts();
  return (
    <section className="flex flex-row items-center content-center justify-evenly flex-wrap gap-12 place-items-start relative w-11/12 mx-auto pt-12">
      {products && products.map(product => <Product key={product.id} product={product} />)}
    </section>
  )
}
