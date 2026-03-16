import type {
  PersonalState,
  PersonalAction,
} from "../../Typescript/Interface";

export const pInitialState: PersonalState = {
  firstName: "",
  lastname: "",
  phone: "",
  email: "",
};

export const pReducer = (
  state: PersonalState,
  action: PersonalAction
): PersonalState => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastname: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
