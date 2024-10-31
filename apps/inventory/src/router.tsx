import { createBrowserRouter } from "react-router-dom";
import { Cart, Details, Home, Layout, NotFound } from "./lazy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/products/:id",
        element: <Details />
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />
  },
]);
