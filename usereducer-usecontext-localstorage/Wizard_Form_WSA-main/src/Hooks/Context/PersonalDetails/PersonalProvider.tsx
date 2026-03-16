import { useEffect, useReducer } from "react";
import { PersonalContext } from "./CreatePersonalContext";
import { pInitialState, pReducer } from "../../Reducer/PersonalReducer";
import { toast } from "sonner";
import type {
  ProviderProps,
  PersonalFormData,
} from "../../../Typescript/Interface";

const PersonalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [personalState, dispatch] = useReducer(pReducer, pInitialState);

  const handleAddPerosnalDetails = (data: PersonalFormData): void => {
    dispatch({ type: "SET_FIRST_NAME", payload: data.fName });
    dispatch({ type: "SET_LAST_NAME", payload: data.lName });
    dispatch({ type: "SET_PHONE", payload: data.phone });
    dispatch({ type: "SET_EMAIL", payload: data.email });
    toast.info("Information Saved");
  };

  useEffect(() => {
    localStorage.setItem("personalForm", JSON.stringify(personalState));
  }, [personalState]);

  return (
    <PersonalContext.Provider
      value={{ personalState, handleAddPerosnalDetails }}
    >
      {children}
    </PersonalContext.Provider>
  );
};

export default PersonalProvider;
