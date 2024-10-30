import { ReactNode } from "react";

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <span className="absolute top-0 right-0 flex content-center justify-center items-center rounded-full w-4 h-4 bg-blue-50 aspect-square text-sm text-blue-700 ring-1 ring-inset ring-blue-700/10">
      {children}
    </span>
  )
}
