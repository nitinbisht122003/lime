"use client";

import { useState } from "react";

import type { CartItemViewModel } from "@app/types/limeroad";

import { CartContext } from "../../hooks/cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<CartItemViewModel[]>([]);

  const selectedCount = selectedItems.length;

  return (
    <CartContext.Provider value={{ selectedItems, setSelectedItems, selectedCount }}>
      {children}
    </CartContext.Provider>
  );
};
