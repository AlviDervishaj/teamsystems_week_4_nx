import { useContext } from "react";
import { ProductContext } from "../store/ProductContext";

export const useProducts = () => useContext(ProductContext);
