"use client";

import { productGridData } from "@app/services/limeroad/mocks/product-angles";
import { View } from "@app/ui/elements/view";

import { ProductAngles } from "../components/product-angles";

export const DevScreen = () => {
  return (
    <View className="min-h-screen items-center justify-center p-4 py-20">
      <View className="w-full max-w-3xl">
        <ProductAngles sections={productGridData} />
      </View>
    </View>
  );
};
