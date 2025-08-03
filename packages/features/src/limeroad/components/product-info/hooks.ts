import { useMemo } from "react";

import type { ProductInfoDto } from "@app/types/limeroad";

export function useProductPricing(data: ProductInfoDto) {
  return useMemo(() => {
    const { variant_price_map, base_variant_id } = data;
    const currentVariant =
      variant_price_map[base_variant_id] ?? Object.values(variant_price_map)[0];

    if (!currentVariant) {
      return {
        currentVariant: undefined,
        discount: 0,
        showDiscount: false
      } as const;
    }

    const { mrp, selling_price } = currentVariant;
    const discount = Math.round(((mrp - selling_price) / mrp) * 100);
    const showDiscount = discount > 0;

    return {
      currentVariant,
      discount,
      showDiscount
    } as const;
  }, [data]);
}

export function useProductRating(data: ProductInfoDto) {
  return useMemo(() => {
    const hasRating = typeof data.rating === "number" && data.rating > 0;
    return { hasRating } as const;
  }, [data.rating]);
}
