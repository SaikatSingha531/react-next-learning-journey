// Hooks/Context/AddressDetails/AddressProvider.tsx
import React, { useReducer } from "react";
import { AddressContext } from "./CreateAddressContext";
import { addressReducer, aInitialState } from "../../Reducer/AddressReducer";
import { toast } from "sonner";
import type {
  ProviderProps,
  AddressFormData,
} from "../../../Typescript/Interface";

const AddressProvider: React.FC<ProviderProps> = ({ children }) => {
  const [addressState, dispatch] = useReducer(
    addressReducer,
    aInitialState
  );

  const handleAddressDispatch = (data: AddressFormData): void => {
    dispatch({ type: "SET_CITY", payload: data.city });
    dispatch({ type: "SET_STATE", payload: data.state });
    dispatch({ type: "SET_PIN", payload: data.pin });
    toast.info("Information Saved");
  };

  return (
    <AddressContext.Provider value={{ addressState, handleAddressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
