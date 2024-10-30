import { ProductType } from "../../types"

export const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className="group relative max-w-md">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={product.title}
          src={product.image}
          className="object-contain object-center h-full w-full aspect-square"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
      </div>
      <p className="pt-4 text-xl font-medium text-gray-900">
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price)}
      </p>
    </div>
  )
}

