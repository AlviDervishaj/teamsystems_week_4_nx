import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";
import { ProductType } from "../types";
import { DetailProduct } from "../components/DetailProduct/DetailProduct";


export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useStore();
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  useEffect(() => {
    if (!id) return navigate("/");
    const _product = getProductById(parseInt(id));
    setProduct(_product);
  }, [getProductById, id, navigate]);
  return (
    <section className="flex flex-row items-center content-center justify-center pt-12 w-dvw">
      {product && <DetailProduct product={product} />}
    </section>
  )
}

