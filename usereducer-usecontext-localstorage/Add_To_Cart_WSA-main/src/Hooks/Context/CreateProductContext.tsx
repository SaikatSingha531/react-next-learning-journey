import { createContext } from "react";
import type { ProductContextType } from "../../Typescript/Interface/Interface";

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);
