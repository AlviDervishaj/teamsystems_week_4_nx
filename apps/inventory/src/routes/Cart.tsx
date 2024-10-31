import { CartProduct } from "../components/CartProduct/CartProduct";
import { useProducts } from "../hooks/useProducts";

export const Cart = () => {
  const { cartProductsItems, getCartProducts, cartProductsTotalPrice } = useProducts();
  return (
    <div className="pt-4">
      <h1 className="text-2xl text-center text-slate-800 dark:text-slate-200" > {cartProductsItems} Products</h1 >
      <h1 className="text-2xl text-center text-slate-800 dark:text-slate-200" >Total Price:
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(cartProductsTotalPrice)}
      </h1>
      <section className={`w-10/12 h-fit p-2 mx-auto flex flex-row items-center content-center justify-start gap-12 flex-wrap`}>
        {getCartProducts.map(product => <CartProduct key={product.id} product={product} />)}
      </section>
    </div>
  )
}

