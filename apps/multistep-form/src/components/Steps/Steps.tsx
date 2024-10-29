import clsx from "clsx";
import { useFormContext } from "../../store/FormContext/useFormContext";

type StepsType = {
  step: number,
  title: string,
  to: string,
}

const StepsTitles = [
  "Personal Info",
  "Education",
  "Skills",
  "Review",
] as const;


const allItems: StepsType[] = new Array(StepsTitles.length).fill(0).map((_, index) => {
  const title = StepsTitles[index];
  const _href = "/signup";
  return { title: title, to: _href, step: index };
});

export const Steps = () => {
  const { step, goToStep } = useFormContext();
  return (
    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      {allItems.map((item, index) => {
        return <button key={item.title}
          onClick={() => goToStep(index)}
          aria-current={step >= index ? "step" : "false"}
          className={
            clsx(
              step >= index && "text-blue-600 dark:text-blue-500 group",
              "flex items-center"
            )
          }>
          <span className="flex items-center group-aria-[current=step]:border-blue-600 justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-blue-500">
            {item.step + 1}
          </span>
          {item.title}
          {item.step !== allItems.length - 1 &&
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          }
        </button>
      })}
    </ol>
  )
}
