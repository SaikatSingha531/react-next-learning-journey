import { createContext } from "react";
import type { AddressContextType } from "../../../Typescript/Interface";

export const AddressContext = createContext<AddressContextType>(
  {} as AddressContextType
);
