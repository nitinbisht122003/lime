"use client";

import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

import type { CartItemViewModel } from "@app/types/limeroad";

export interface CartContextType {
  selectedItems: CartItemViewModel[];
  setSelectedItems: Dispatch<SetStateAction<CartItemViewModel[]>>;
  selectedCount: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
