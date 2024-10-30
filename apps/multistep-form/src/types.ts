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
  deleteUser: () => void,
};


export type StepsType = {
  step: number,
  title: string,
  to: string,
}

export type InputType = {
  title: string,
  placeholder: string,
  defaultValue?: string
}

