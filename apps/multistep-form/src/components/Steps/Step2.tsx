import { FormEvent, useState } from "react"
import { FormWrapper } from "../FormWrapper";
import { Input } from "../../../ui/Input";
import { useFormContext } from "../../store/FormContext/useFormContext";

export const Step2 = () => {
  const [error, setError] = useState<string>("");
  const { updateUser, user, proceedToNextStep } = useFormContext();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const formData = {
      age: form.get("Age"),
      gender: form.get("Gender"),
    };
    if (!formData.age || !formData.gender) {
      setError("Please fill in the form correctly !");
      return;
    }
    updateUser({ age: formData.age as string, gender: formData.gender as string })
    proceedToNextStep();
  }
  return (
    <FormWrapper formSubmit={handleSubmit}>
      <Input defaultValue={user.age} title="Age" placeholder="Age" />
      <Input defaultValue={user.gender} title="Gender" placeholder="Gender" />
      {error && <p className="text-xl text-center text-red-500 mb-3">{error}</p>}
    </FormWrapper>
  )
}

