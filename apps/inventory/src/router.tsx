import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, NotFound } from "./lazy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />
  },
]);
