// Hooks/Context/ProductsProvider.tsx
import { useReducer } from "react";
import { ProductContext } from "./CreateProductContext";
import {
  productsInitialState,
  productsReducer,
} from "../Reducer/ProductsReducer";
import { toast } from "sonner";
import type {
  ProductPayload,
  CartItem,
} from "../../Typescript/Interface/Interface";

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );

  const handleDispatch = (data: ProductPayload): void => {
    productsDispatch({ type: "ADD_TO_CART", payload: data });
  };

  const handleIncrease = (item: CartItem): void => {
    productsDispatch({ type: "INCREASE_QTY", payload: item.id });
  };

  const handleDecrase = (item: CartItem): void => {
    productsDispatch({ type: "DECREASE_QTY", payload: item.id });
  };

  const handleRemove = (item: CartItem): void => {
    productsDispatch({ type: "REMOVE_FROM_CART", payload: item.id });
    toast.info("Item Remove Successfull");
  };

  const handleClear = (): void => {
    productsDispatch({ type: "CLEAR_CART" });
    toast.info("All Item Removed");
  };

  return (
    <ProductContext.Provider
      value={{
        productsState,
        handleDispatch,
        handleIncrease,
        handleDecrase,
        handleRemove,
        handleClear,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
