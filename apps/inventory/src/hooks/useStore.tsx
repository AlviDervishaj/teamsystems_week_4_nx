import { useCallback, useEffect, useMemo, useState } from "react"
import { ProductType, CartProductType, CartProducts } from "../types";

// Fake Api
const PRODUCTS_URL = "https://fakestoreapi.com/products";

export const useStore = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  const isProductInCart: (product: ProductType) => boolean = useCallback(
    (product: ProductType) => cartProducts.findIndex((prod) => prod.productId === product.id) === -1
    , [cartProducts]);

  const retrieveProducts: () => Promise<null> = useCallback(async () => {
    setError("");
    setIsLoading(true);
    fetch(PRODUCTS_URL, {
      cache: "force-cache",
    }).then((body) => body.json()).then((responseData: ProductType[]) => {
      setProducts(responseData);
    }).catch(e => setError(e.toString())).finally(() => setIsLoading(false));
    return null;
  }, []);

  const getCartProducts: CartProducts[] = useMemo(() => {
    console.log("Get Cart Products");
    return products.map((product) => {
      const cartProduct = cartProducts.find(cartProduct => cartProduct.productId === product.id);
      if (!cartProduct) return null;
      return { ...product, quantity: cartProduct.quantity }
    }).filter((a) => !!a);
  }, [products.length, cartProducts.length]);

  const getProductById = useCallback((id: number) => {
    return products.find(predicate => predicate.id === id);
  }, [products]);


  const addToCart: (product: ProductType, quantity: number) => void = useCallback((product: ProductType, quantity: number) => {
    // Update Or Set new Product in cart
    setCartProducts(prev => {
      // if quantity is 0 remove it
      if (quantity === 0 || !quantity) {
        return prev.filter((predicate) => predicate.productId !== product.id);
      }
      const _prevCartProductIndex: number = prev.findIndex(prod => prod.productId === product.id);
      if ( _prevCartProductIndex !== -1) {
        return prev.map((predicate) => predicate.productId === product.id ? { productId: predicate.productId, quantity, price: predicate.price } : predicate);
      }
      return [...prev, { productId: product.id, quantity: quantity, price: product.price }];
    });
  }, []);

  const removeFromCart: (product: CartProductType) => void = useCallback((product: CartProductType) => {
    setCartProducts(prev => prev.filter(predicate => predicate.productId !== product.productId));
  }, []);

  const cartProductsItems: number = useMemo(() => cartProducts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity, 0),
    [cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)]);

  const cartProductsTotalPrice: number = useMemo(() => cartProducts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price, 0),
    [cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)]);

  useEffect(() => {
    retrieveProducts();
  }, [retrieveProducts])

  useEffect(() => {
    const _localCart = JSON.parse(localStorage.getItem("cartProducts") as string) as CartProductType[] | null;
    if (!_localCart) {
      setCartProducts([]);
      return;
    }
    setCartProducts(_localCart);
    return;
  }, [])

  useEffect(() => {
    const saveToStorage = () => {
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    };
    window.addEventListener("beforeunload", saveToStorage);
    return () => {
      window.removeEventListener("beforeunload", saveToStorage);
    }
  }, [products, cartProducts]);


  return {
    products,
    cart: cartProducts,
    getCartProducts,
    getProductById,
    retrieveProducts,
    cartProductsTotalPrice,
    isLoading,
    error,
    cartProductsItems,
    addToCart,
    removeFromCart,
    isProductInCart
  };
}
