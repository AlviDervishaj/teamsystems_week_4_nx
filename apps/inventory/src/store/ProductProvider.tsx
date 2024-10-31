import { ReactNode } from "react";
import { ProductContext } from "./ProductContext";
import { useStore } from "../hooks/useStore";
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const allStore = useStore();
  return (
    <ProductContext.Provider value={allStore}>
      {children}
    </ProductContext.Provider >
  )
}
