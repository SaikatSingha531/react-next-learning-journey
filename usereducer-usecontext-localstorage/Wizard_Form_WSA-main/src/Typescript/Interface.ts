

export interface AddressState {
  city: string;
  state: string;
  pin: string;
}

export interface AddressFormData {
  city: string;
  state: string;
  pin: string;
}

export type AddressAction =
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_STATE"; payload: string }
  | { type: "SET_PIN"; payload: string };

export interface AddressContextType {
  addressState: AddressState;
  handleAddressDispatch: (data: AddressFormData) => void;
}



export interface PersonalState {
  firstName: string;
  lastname: string;
  phone: string;
  email: string;
}

export interface PersonalFormData {
  fName: string;
  lName: string;
  phone: string;
  email: string;
}

export type PersonalAction =
  | { type: "SET_FIRST_NAME"; payload: string }
  | { type: "SET_LAST_NAME"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

export interface PersonalContextType {
  personalState: PersonalState;
  handleAddPerosnalDetails: (data: PersonalFormData) => void;
}

/* ================= PROVIDER PROPS ================= */

export interface ProviderProps {
  children: React.ReactNode;
}
