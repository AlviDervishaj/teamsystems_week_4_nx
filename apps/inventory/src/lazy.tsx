import { lazy } from "react";

export const Home = lazy(() => import("./routes/Home").then(mod => ({ default: mod.Home })));
export const Details = lazy(() => import("./routes/Details").then(mod => ({ default: mod.Details })));
export const Cart = lazy(() => import("./routes/Cart").then(mod => ({ default: mod.Cart })));
export const NotFound = lazy(() => import("./routes/NotFound").then(mod => ({ default: mod.NotFound })));
export const Layout = lazy(() => import("./components/Layout/Layout").then(mod => ({ default: mod.Layout })));
