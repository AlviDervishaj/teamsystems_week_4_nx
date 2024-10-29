import { createBrowserRouter } from "react-router-dom";
import { Home, App } from "./routes/lazy";
import { Layout } from "./components/Layout/Layout";
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
      {
        path: "/app",
        element: <App />
      }
    ],
  }
]);
