import { lazy } from "react";

export const Home = lazy(() => import("./routes/Home").then(mod => ({ default: mod.Home })));
export const NotFound = lazy(() => import("./routes/NotFound").then(mod => ({ default: mod.NotFound })));
export const Layout = lazy(() => import("./components/Layout/Layout").then(mod => ({ default: mod.Layout })));
