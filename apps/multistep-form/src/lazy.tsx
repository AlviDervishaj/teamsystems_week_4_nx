import { lazy } from "react";

export const Loading = lazy(() => import("./components/Loading").then(mod => ({ default: mod.Loading })))
export const Steps = lazy(() => import("./components/Steps/Steps").then(mod => ({ default: mod.Steps })))
export const Step1 = lazy(() => import("./components/Steps/Step1").then(mod => ({ default: mod.Step1 })))
export const Step2 = lazy(() => import("./components/Steps/Step2").then(mod => ({ default: mod.Step2 })))
export const Step3 = lazy(() => import("./components/Steps/Step3").then(mod => ({ default: mod.Step3 })))
export const DisplayUser = lazy(() => import("./components/DisplayUser").then(mod => ({ default: mod.DisplayUser })))
