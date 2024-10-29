import { createContext } from "react";
import { FormContextType } from "../../types";

export const FormContext = createContext<FormContextType>({
  user: {
    id: "", gender: "", age: "", lastName: "", firstName: "", companyCode: "",
  },
  maxSteps: 3,
  step: 0,
  updateUser: () => null,
  proceedToNextStep: () => null,
  signUp: () => false,
  logOut: () => null,
  goToStep: () => null,
  goBack: () => null,
});

