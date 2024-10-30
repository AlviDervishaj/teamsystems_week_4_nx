import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";
import { Loading } from "../Loading/Loading";
import { Product } from "../Product/Product";
export const Products = () => {
  const { data, isLoading, retrieveData, error } = useStore();

  useEffect(() => {
    retrieveData();
  }, [retrieveData])

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error && <p>{error}</p>}
      <section className="flex flex-row items-center content-center justify-evenly flex-wrap gap-12 place-items-start relative w-11/12 mx-auto pt-12">
        {data && data.map(product => <Product key={product.id} product={product} />)}
      </section>
    </>
  )
}
