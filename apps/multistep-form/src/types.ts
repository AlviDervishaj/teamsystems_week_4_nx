export type InformationType = {
  firstName: string,
  lastName: string,
  gender: string,
  age: string,
  companyCode: string,
  id: string,
};

export type FormContextType = {
  maxSteps: number
  step: number,
  user: InformationType,
  logOut: () => void,
  signUp: (props: Omit<InformationType, "id">) => boolean,
  proceedToNextStep: () => void;
  goToStep: (step: number) => void,
  updateUser: (properties: Partial<InformationType>) => void,
  goBack: () => void,
};


