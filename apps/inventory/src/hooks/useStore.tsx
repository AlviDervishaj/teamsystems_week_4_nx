import { useCallback, useState } from "react"
import { ProductType } from "../types";

const PRODUCTS_URL = "https://fakestoreapi.com/products";
const controller = new AbortController();
export const useStore = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const retrieveData = useCallback(async () => {
    setError("");
    setIsLoading(true);
    fetch(PRODUCTS_URL, {
      cache: "force-cache",
      signal: controller.signal,
    }).then((body) => body.json()).then((responseData: ProductType[]) => {
      console.log({ responseData });
      setData(responseData);
    }).catch(e => setError(e.toString())).finally(() => setIsLoading(false));
  }, []);

  return { data, retrieveData, isLoading, error };
}
