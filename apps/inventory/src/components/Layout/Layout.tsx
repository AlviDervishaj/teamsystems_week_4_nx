import { Outlet } from "react-router"
import { Navigation } from "../Navigation/Navigation"
import { Suspense } from "react"
import { Loading } from "../Loading/Loading"
import { ProductProvider } from "../../store/ProductProvider"

export const Layout = () => {
  return (
    <ProductProvider>
      <main className="dark:bg-slate-900 w-dvw min-h-dvh pb-12">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </ProductProvider >
  )
}
