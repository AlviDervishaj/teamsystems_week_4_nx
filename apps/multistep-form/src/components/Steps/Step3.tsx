import { FormEvent, useState } from "react"
import { Input } from "../../../ui/Input";
import { FormWrapper } from "../FormWrapper";
import { useFormContext } from "../../store/FormContext/useFormContext";

export const Step3 = () => {
  const [error, setError] = useState<string>("");
  const { updateUser, user, proceedToNextStep } = useFormContext();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const formData = {
      companyCode: form.get("Company Code"),
    };
    if (!formData.companyCode) {
      setError("Please fill in the form correctly !");
      return;
    }
    updateUser({ companyCode: formData.companyCode as string })
    proceedToNextStep();
  }
  return (
    <FormWrapper formSubmit={handleSubmit}>
      <Input defaultValue={user.companyCode} title="Company Code" placeholder="Company Code" />
      {error && <p className="text-xl text-center text-red-500 mb-3">{error}</p>}
    </FormWrapper>
  )
}


