import { FormEventHandler, ReactNode } from "react";
import { useFormContext } from "../store/FormContext/useFormContext";

export const FormWrapper = ({ children, formSubmit }: { children: ReactNode, formSubmit: FormEventHandler<HTMLFormElement> | undefined }) => {
  const { step, maxSteps, goBack } = useFormContext();
  return (
    <form onSubmit={formSubmit} className="max-w-lg mx-auto bg-slate-100 p-4 mt-20 rounded-md space-y-4 text-slate-800">
      {children}
      <section className="space-x-3">
        <button
          disabled={step <= 0}
          onClick={goBack}
          className="text-white disabled:bg-blue-700/40 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Prev Step
        </button>
        <button
          disabled={step === maxSteps}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Next Step
        </button>
      </section>
    </form>
  )
}

