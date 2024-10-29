import { RouterProvider as RProvider } from "react-router-dom"
import { router } from "./router"
import { Loading } from "./components/Loading/Loading"

export const RouterProvider = () => {
  return (
    <RProvider router={router} fallbackElement={<Loading />} />
  )
}
