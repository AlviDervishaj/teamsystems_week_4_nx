import { lazy } from "react";

export const Home = lazy(() => import("./Home").then(mod => ({ default: mod.Home })));
export const App = lazy(() => import("./App").then(mod => ({ default: mod.App })));
