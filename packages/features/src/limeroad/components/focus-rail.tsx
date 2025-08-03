import type { ProductCardViewModel } from "@app/types/limeroad";
import {
  ProductCard as ProductCardUI,
  ProductDescription,
  ProductDiscount,
  ProductImage,
  ProductImageContainer,
  ProductMRP,
  ProductPrice,
  ProductPriceContainer,
  ProductRating
} from "@app/ui/components/product-card";

import { FocusRail as FocusRailUI } from "@app/ui/components/focus-rail";

interface FocusRailProps {
  products: ProductCardViewModel[];
}

export function RailProductCard({ product }: { product: ProductCardViewModel; style?: React.CSSProperties }) {
  const discountPercentage = Math.round(
    ((product.mrp - product.selling_price) / product.mrp) * 100
  );
  const discountText = `${discountPercentage}% off`;
  return (
    <ProductCardUI className="w-[33vw] max-w-[600px] min-w-30">
      <ProductImageContainer>
        <ProductImage className="aspect-8/11" src={product.image_url} alt={product.name} />
        <ProductRating rating={product.rating} />
      </ProductImageContainer>
      <ProductDescription>
        <ProductPriceContainer className="gap-[6px]">
          <ProductPrice className="text-xs">₹{product.selling_price}</ProductPrice>
          <ProductMRP className="text-xs">₹{product.mrp}</ProductMRP>
          <ProductDiscount>{discountText}</ProductDiscount>
        </ProductPriceContainer>
      </ProductDescription>
    </ProductCardUI>
  );
}

export function FocusRail({ products }: FocusRailProps) {
  return (
    <FocusRailUI>
      {products.map((product) => (
        <RailProductCard key={product.id} product={product} />
      ))}
    </FocusRailUI>
  );
}
