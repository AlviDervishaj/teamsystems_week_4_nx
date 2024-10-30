import { Suspense } from "react";
import { Step1, Step2, Step3, DisplayUser, Steps, Loading } from "../lazy";
import { useFormContext } from "../store/FormContext/useFormContext";


const App = () => {
  const { step } = useFormContext();
  return (
    <div className="max-w-xl mx-auto">
      <Suspense fallback={<Loading />}>
        <Steps />
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && <Step3 />}
        {step === 3 && <DisplayUser />}
      </Suspense>
    </div>
  )
}

export default App;
