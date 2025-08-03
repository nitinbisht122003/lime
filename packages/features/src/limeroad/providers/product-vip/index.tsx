"use client";

import type { ScrollView, View } from "react-native";
import { useRef, useState } from "react";

import type { ProductInfoViewModel, SizeSelectorViewModel, SizeUnit } from "@app/types/limeroad";

import { ProductVipContext } from "../../hooks/product-vip";

export function ProductVipProvider({ children }: { children: React.ReactNode }) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [sizeSelector, setSizeSelector] = useState<SizeSelectorViewModel | undefined>(undefined);
  const [unit, setUnit] = useState<SizeUnit>("in");
  const [productInfo, setProductInfo] = useState<ProductInfoViewModel | undefined>(undefined);
  const similarRailRef = useRef<View>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <ProductVipContext.Provider
      value={{
        selectedSize,
        similarRailRef,
        setSelectedSize,
        sizeSelector,
        setSizeSelector,
        unit,
        setUnit,
        productInfo,
        setProductInfo,
        scrollViewRef
      }}
    >
      {children}
    </ProductVipContext.Provider>
  );
}
