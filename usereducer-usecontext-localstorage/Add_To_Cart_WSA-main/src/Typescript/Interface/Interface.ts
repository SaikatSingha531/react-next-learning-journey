// export interface ProductPayload {
//   data: {
//   id: string;
//   }
// }
// // export interface CartPayload {
// //   item: {
// //   id: string;
// //   }
// // }


// export interface AddProduct {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   rating: number;
//   image: string;
// }



// // Cart item
// export interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// // State
// export interface ProductState {
//   cartItems: CartItem[];
// }

// // Context type
// export interface ProductContextType {
//   productsState: ProductState;
//   handleDispatch:AddProduct;
//   handleIncrease: (item: CartItem) => void;
//   handleDecrase: (item: CartItem) => void;
//   handleRemove: (item: CartItem) => void;
//   handleClear: () => void;
// }










// Typescript/Interface/Interface.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductsState {
  cartItems: CartItem[];
}

export type ProductPayload = Product;

export type ProductsAction =
  | { type: "ADD_TO_CART"; payload: ProductPayload }
  | { type: "INCREASE_QTY"; payload: number }
  | { type: "DECREASE_QTY"; payload: number }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "CLEAR_CART" };

export interface ProductContextType {
  productsState: ProductsState;
  handleDispatch: (data: ProductPayload) => void;
  handleIncrease: (item: CartItem) => void;
  handleDecrase: (item: CartItem) => void;
  handleRemove: (item: CartItem) => void;
  handleClear: () => void;
}
