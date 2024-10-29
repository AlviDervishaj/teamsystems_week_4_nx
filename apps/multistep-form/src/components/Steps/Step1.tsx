import { FormEvent, useState } from "react"
import { Input } from "../../../ui/Input";
import { FormWrapper } from "../FormWrapper";
import { useFormContext } from "../../store/FormContext/useFormContext";

export const Step1 = () => {
  const [error, setError] = useState<string>("");
  const { updateUser, user, proceedToNextStep } = useFormContext();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const formData = {
      firstName: form.get("First Name"),
      lastName: form.get("Last Name"),
    };
    if (!formData.firstName || !formData.lastName) {
      setError("Please fill in the form correctly !");
      return;
    }
    updateUser({ firstName: formData.firstName as string, lastName: formData.lastName as string })
    proceedToNextStep();
  }
  return (
    <FormWrapper formSubmit={handleSubmit}>
      <Input defaultValue={user.firstName} title="First Name" placeholder="First Name" />
      <Input defaultValue={user.lastName} title="Last Name" placeholder="Last Name" />
      {error && <p className="text-xl text-center text-red-500 mb-3">{error}</p>}
    </FormWrapper>
  )
}

