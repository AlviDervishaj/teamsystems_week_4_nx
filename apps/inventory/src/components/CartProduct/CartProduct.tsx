import { useProducts } from "../../hooks/useProducts";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { CartProducts } from "../../types";

export const CartProduct = ({ product }: { product: CartProducts }) => {
  const { removeFromCart } = useProducts();
  return (
    <div className="w-[30rem] max-w-[30rem] h-[31rem] rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href={`/products/${product.id}`}>
          <img className="mx-auto h-full" src={product.image} alt={product.title} />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-lg font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            Quantity:  {product.quantity}
          </span>

        </div>

        <a href={`/products/${product.id}`} className="text-lg font-semibold w-full block truncate leading-tight text-gray-900 hover:underline dark:text-white">
          {product.title}
        </a>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </p>

          <button
            onClick={() => removeFromCart({ quantity: product.quantity, productId: product.id })}
            className="flex items-center content-center justify-evenly gap-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4  focus:ring-red-300 dark:bg-red-600/70  dark:hover:bg-red-700 dark:focus:ring-red-800">
            <XCircleIcon width={24} />
            Remove from cart
          </button>
        </div>

      </div>
    </div>

  )
}

