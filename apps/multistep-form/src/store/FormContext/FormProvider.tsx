import { ReactNode, useCallback, useEffect, useState } from "react"
import { InformationType } from "../../types";
import { FormContext } from "./FormContext";
import { v7 } from "uuid";

const maxSteps = 3;

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<number>(0);
  const [user, setUser] = useState<InformationType>({
    id: "",
    age: "",
    lastName: "",
    firstName: "",
    gender: "",
    companyCode: "",
  });

  const logOut = useCallback(() => null, []);

  const signUp = useCallback(({ firstName, gender, age, lastName, companyCode }: Omit<InformationType, "id">) => {
    const _id: string = v7();
    setUser({ firstName, gender, age, lastName, companyCode, id: _id });
    return true;
  }, []);

  const proceedToNextStep = useCallback(() => {
    setStep(prev => prev + 1);
  }, []);

  const updateUser = useCallback((props: Partial<InformationType>) => {
    setUser(prev => ({ ...prev, ...props }))
  }, []);

  const goToStep = useCallback((_step: number) => {
    if (_step > maxSteps || _step < 0) return;
    setStep(_step);
  }, [])

  const goBack = useCallback(() => {
    setStep(_step => _step - 1 < 0 ? 0 : _step - 1);
  }, [])

  useEffect(() => {
    const _formData = localStorage.getItem("formData");
    if (!_formData) return;
    const { user: _user, step: _step } = JSON.parse(_formData);
    setUser(_user);
    setStep(_step);
  }, []);


  useEffect(() => {
    function saveToStorage() {
      localStorage.setItem("formData", JSON.stringify({ user, step }));
      return;
    };
    window.addEventListener("beforeunload", saveToStorage);
    return () => {
      window.removeEventListener("beforeunload", saveToStorage);
    }
  }, [user, step]);

  return (
    <FormContext.Provider value={{
      user,
      logOut,
      signUp,
      proceedToNextStep,
      step,
      maxSteps,
      goToStep,
      updateUser,
      goBack,
    }}
    >
      {children}
    </FormContext.Provider>
  )
}

