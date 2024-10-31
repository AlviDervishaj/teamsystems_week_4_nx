import { createContext } from "react";
import { useStore } from "../hooks/useStore";



const initialValue: ReturnType<typeof useStore> = {
  retrieveProducts: async () => null,
  getProductById: () => undefined,
  isProductInCart: () => false,
  removeFromCart: () => null,
  addToCart: () => null,
  cartProductsItems: 0,
  cartProductsTotalPrice: 0,
  cart: [],
  products: [],
  error: "",
  isLoading: false,
  getCartProducts: [],
}

export const ProductContext = createContext<ReturnType<typeof useStore>>(initialValue);
