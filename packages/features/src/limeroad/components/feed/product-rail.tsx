import type { ComponentProps } from "react";

import type { ProductRailViewModel } from "@app/types/limeroad";
import { ProductCard as ProductCardUI, ProductDescription } from "@app/ui/components/product-card";
import {
  ProductRailLink,
  ProductRailScrollContainer,
  ProductRailTitle,
  ProductRailTitleContainer,
  ProductRail as ProductRailUI
} from "@app/ui/components/product-rail";
import { Text } from "@app/ui/elements/text";

import { ProductImageSection, ProductPriceSection } from "./product-card";

type ProductRailProps = ComponentProps<typeof ProductRailUI> & {
  productRail: ProductRailViewModel;
};

export function ProductRail({ productRail, ...props }: ProductRailProps) {
  const { products, title, link } = productRail;

  if (products.length === 0) {
    return null;
  }

  return (
    <ProductRailUI {...props}>
      {title && (
        <ProductRailTitleContainer>
          <ProductRailTitle>{title}</ProductRailTitle>
          {link && (
            <ProductRailLink href={link.url}>
              <Text className="text-sm">{link.label}</Text>
            </ProductRailLink>
          )}
        </ProductRailTitleContainer>
      )}
      <ProductRailScrollContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductRailScrollContainer>
    </ProductRailUI>
  );
}

function ProductCard({ product }: { product: ProductRailViewModel["products"][number] }) {
  return (
    <ProductCardUI>
      <ProductImageSection
        imageUrl={product.image_url}
        altText={product.name}
        rating={product.rating}
      />
      <ProductDescription>
        <ProductPriceSection mrp={product.mrp} sellingPrice={product.selling_price} />
      </ProductDescription>
    </ProductCardUI>
  );
}
