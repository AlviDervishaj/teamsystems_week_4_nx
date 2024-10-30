import { useFormContext } from "../store/FormContext/useFormContext";

export const DisplayUser = () => {
  const { user, deleteUser } = useFormContext();
  return (
    <div className="p-4 border-b-2 border-indigo-500/50">
      <p className="text-xl p-2">Full Name: {user.firstName} {user.lastName}</p>
      <p className="text-xl p-2">Age: {user.age}</p>
      <p className="text-xl p-2">Gender: {user.gender}</p>
      <p className="text-xl p-2">Company Code: {user.companyCode}</p>
      <button className="text-red-500 border-2 font-semibold tracking-wide border-red-600 rounded-md p-2 mt-3 hover:bg-red-500/40 hover:text-slate-200 transition-colors duration-300 ease-in-out" onClick={deleteUser}>Delete</button>
    </div>
  )
}

