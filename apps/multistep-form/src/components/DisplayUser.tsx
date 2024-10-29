import { useFormContext } from "../store/FormContext/useFormContext";

export const DisplayUser = () => {
  const { user } = useFormContext();
  return (
    <div className="p-4 border-b-2 border-indigo-500/50">
      <p className="text-xl p-2">Full Name: {user.firstName} {user.lastName}</p>
      <p className="text-xl p-2">Age: {user.age}</p>
      <p className="text-xl p-2">Gender: {user.gender}</p>
      <p className="text-xl p-2">Company Code: {user.companyCode}</p>
    </div>
  )
}

