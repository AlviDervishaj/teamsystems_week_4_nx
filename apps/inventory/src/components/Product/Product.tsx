import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { BanknotesIcon, ShoppingBagIcon, TruckIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { CartProductType, ProductType } from "../../types"
import { useProducts } from "../../hooks/useProducts"


export const Product = memo(({ product }: { product: ProductType }) => {
  const { addToCart, cart } = useProducts();
  const [quantity, setQuantity] = useState<number>(0);
  const [cartProductReference, setCartProductReference] = useState<CartProductType | undefined>(undefined);
  const stars: number[] = useMemo(() => {
    return Array.from({ length: Math.floor(product.rating.rate) }).fill(0) as number[];
  }, [product.rating.rate]);

  const addQuantity = useCallback(() => {
    addToCart(product, quantity + 1);
  }, [addToCart, product, quantity]);

  const removeQuantity = useCallback(() => {
    const _quantity = quantity - 1 <= 0 ? 0 : quantity - 1;
    addToCart(product, _quantity);
  }, [addToCart, product, quantity]);

  useEffect(() => {
    const _cartProduct = cart.find((prod) => prod.productId === product.id)
    setCartProductReference(_cartProduct)
  }, [cart.find((prod) => prod.productId === product.id), product.id]);

  useEffect(() => {
    console.log("use effect");
    if (cartProductReference) {
      setQuantity(cartProductReference.quantity);
      return;
    }
  }, [cartProductReference])
  return (
    <div className="w-[30rem] max-w-[30rem] h-[31rem] rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href={`/products/${product.id}`}>
          <img className="mx-auto h-full" src={product.image} alt={product.title} />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> Up to 35% off </span>

        </div>

        <a href={`/products/${product.id}`} className="text-lg font-semibold w-full block truncate leading-tight text-gray-900 hover:underline dark:text-white">
          {product.title}
        </a>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {stars.map((_, index) => <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
            )}
          </div>

          <p className="text-sm font-medium text-gray-900 dark:text-white">{product.rating.rate}</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({product.rating.count})</p>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2 text-gray-500 dark:text-gray-200">
            <TruckIcon width={24} />
            <p className="text-sm font-medium">Fast Delivery</p>
          </li>

          <li className="flex items-center gap-2 text-gray-500 dark:text-gray-200">
            <BanknotesIcon width={24} />
            <p className="text-sm font-medium">Best Price</p>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </p>
          <div className="space-x-4 flex items-center content-center justify-evenly">
            <p className="text-xl p-1 dark:text-slate-200 text-slate-800">{quantity}</p>
            <button className="border-2 border-primary-400 rounded-lg p-1 dark:text-slate-200 text-slate-800" onClick={addQuantity}>
              <PlusIcon width={24} />
            </button>
            <button
              className="border-2 border-primary-400 rounded-lg p-1 dark:text-slate-200 text-slate-800" onClick={removeQuantity}>
              <MinusIcon width={24} />
            </button>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="flex items-center content-center justify-evenly gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <ShoppingBagIcon width={24} />
            Add to cart
          </button>
        </div>

      </div>
    </div>
  )
}, (prev, next) => {
  return prev.product.title === next.product.title;
});
