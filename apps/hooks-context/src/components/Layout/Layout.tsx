import { lazy, Suspense } from "react"
import { Outlet } from "react-router"
import { Loading } from "../Loading/Loading"

const Navigation = lazy(() => import("../Navigation/Navigation").then(mod => ({ default: mod.Navigation })))

export const Layout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Navigation />
      <Outlet />
    </Suspense>
  )
}
