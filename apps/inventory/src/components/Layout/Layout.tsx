import { Outlet } from "react-router"
import { Navigation } from "../Navigation/Navigation"
import { Suspense } from "react"
import { Loading } from "../Loading/Loading"

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  )
}
