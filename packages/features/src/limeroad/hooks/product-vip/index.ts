import type { Dispatch, RefObject, SetStateAction } from "react";
import type { ScrollView, View } from "react-native";
import { createContext, useContext } from "react";

import type { ProductInfoViewModel, SizeSelectorViewModel, SizeUnit } from "@app/types/limeroad";

interface ProductVipContextType {
  selectedSize: string | undefined;
  sizeSelector: SizeSelectorViewModel | undefined;
  unit: SizeUnit;
  productInfo: ProductInfoViewModel | undefined;
  setUnit: Dispatch<SetStateAction<SizeUnit>>;
  setSelectedSize: Dispatch<SetStateAction<string | undefined>>;
  setSizeSelector: Dispatch<SetStateAction<SizeSelectorViewModel | undefined>>;
  setProductInfo: Dispatch<SetStateAction<ProductInfoViewModel | undefined>>;
  similarRailRef: RefObject<View | null>;
  scrollViewRef: RefObject<ScrollView | null>;
}

export const ProductVipContext = createContext<ProductVipContextType | undefined>(undefined);

export const useProductVipContext = () => {
  const context = useContext(ProductVipContext);
  if (!context) {
    throw new Error("useProductVipContext must be used within a ProductVipProvider");
  }
  return context;
};
