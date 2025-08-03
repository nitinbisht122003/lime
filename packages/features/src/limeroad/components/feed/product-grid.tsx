import type { ComponentProps } from "react";

import type { ProductCardViewModel } from "@app/types/limeroad";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

import ProductCard from "./product-card";

type ProductGridProps = {
  products: ProductCardViewModel[];
} & ComponentProps<typeof View>;

export function ProductGrid({ products, className }: ProductGridProps) {
  return (
    <View className={cn("flex-row flex-wrap gap-2", className)}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className="flex-1" />
      ))}
    </View>
  );
}
