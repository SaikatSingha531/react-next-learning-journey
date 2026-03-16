// Hooks/Reducer/AddressReducer.ts
import type {
  AddressState,
  AddressAction,
} from "../../Typescript/Interface";

export const aInitialState: AddressState = {
  city: "",
  state: "",
  pin: "",
};

export const addressReducer = (
  state: AddressState,
  action: AddressAction
): AddressState => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_STATE":
      return { ...state, state: action.payload };
    case "SET_PIN":
      return { ...state, pin: action.payload };
    default:
      return state;
  }
};
