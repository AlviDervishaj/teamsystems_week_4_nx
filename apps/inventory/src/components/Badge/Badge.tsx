import { ReactNode } from "react";

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <span className="absolute top-1 right-0 flex content-center justify-center items-center rounded-full w-5 h-5 dark:text-blue-700 text-black bg-blue-50 aspect-square text-sm ring-1 ring-inset ring-blue-700/10">
      {children}
    </span>
  )
}
