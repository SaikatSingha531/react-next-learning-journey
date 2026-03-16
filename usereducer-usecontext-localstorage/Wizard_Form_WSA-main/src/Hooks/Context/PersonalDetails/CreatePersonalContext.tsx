// Hooks/Context/PersonalDetails/CreatePersonalContext.ts
import { createContext } from "react";
import type { PersonalContextType } from "../../../Typescript/Interface";

export const PersonalContext = createContext<PersonalContextType>(
  {} as PersonalContextType
);
