"use client";

import type { ProductVipDataViewModel } from "@app/types/limeroad";
import { ScrollView } from "@app/ui/elements/scroll-view";

import { useProductVipContext } from "../../hooks/product-vip";
import { ProductVipAssetRenderer } from "./product-vip-asset-renderer";

interface ProductVipProps {
  productVip: ProductVipDataViewModel;
  className?: string;
}

export function ProductVip({ productVip, className }: ProductVipProps) {
  const { scrollViewRef } = useProductVipContext();

  return (
    <ScrollView ref={scrollViewRef} className={className}>
      {productVip.items.map((item, index) => (
        <ProductVipAssetRenderer key={index} asset={item} />
      ))}
    </ScrollView>
  );
}
