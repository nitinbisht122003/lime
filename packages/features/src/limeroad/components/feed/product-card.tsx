import type { ComponentProps } from "react";

import type { ProductCardViewModel, ProductViewModel } from "@app/types/limeroad";
import {
  ProductCard as ProductCardUI,
  ProductDescription,
  ProductDiscount,
  ProductImage,
  ProductImageContainer,
  ProductLikeButton,
  ProductMRP,
  ProductPrice,
  ProductPriceContainer,
  ProductRating,
  ProductSibling,
  ProductSiblings,
  ProductTag,
  ProductTitle
} from "@app/ui/components/product-card";
import { View } from "@app/ui/elements/view";

type ProductCardProps = ComponentProps<typeof ProductCardUI> & {
  product: ProductCardViewModel;
};

export default function ProductCard({ product, ...props }: ProductCardProps) {
  const { image_url, name, rating } = product;

  return (
    <ProductCardUI {...props}>
      <ProductImageSection imageUrl={image_url} altText={name} rating={rating} />
      <ProductDescriptionSection product={product} />
    </ProductCardUI>
  );
}

type ProductDescription = Pick<ProductViewModel, "name" | "mrp" | "selling_price" | "siblings">;

interface ProductDescriptionProps {
  product: ProductDescription;
}

export function ProductDescriptionSection({ product }: ProductDescriptionProps) {
  const { name, mrp, selling_price, siblings } = product;

  const showSiblings = siblings && siblings.length > 0;

  return (
    <ProductDescription>
      <View className="flex-row items-start gap-2">
        <ProductTitle className="flex-1">{name}</ProductTitle>
        <ProductLikeButton />
      </View>
      <ProductPriceSection mrp={mrp} sellingPrice={selling_price} />
      {showSiblings && (
        <ProductSiblings>
          {siblings.map((sibling) => (
            <ProductSibling key={sibling.id} color={sibling.color} imageUrl={sibling.image_url} />
          ))}
        </ProductSiblings>
      )}
    </ProductDescription>
  );
}

export function ProductImageSection({
  imageUrl,
  altText,
  rating
}: {
  imageUrl: string;
  altText: string;
  rating: number;
}) {
  return (
    <ProductImageContainer>
      <ProductImage src={imageUrl} alt={altText} />
      <ProductTag>Lowest Price</ProductTag>
      <ProductRating rating={rating} />
    </ProductImageContainer>
  );
}

export function ProductPriceSection({ mrp, sellingPrice }: { mrp: number; sellingPrice: number }) {
  const discountPercentage = calcDiscountPercentage(mrp, sellingPrice);

  const discountText = `${discountPercentage}% off`;

  return (
    <ProductPriceContainer>
      <ProductPrice>₹{sellingPrice}</ProductPrice>
      <ProductMRP>₹{mrp}</ProductMRP>
      <ProductDiscount>{discountText}</ProductDiscount>
    </ProductPriceContainer>
  );
}

export function calcDiscountPercentage(mrp: number, sellingPrice: number) {
  return Math.round(((mrp - sellingPrice) / mrp) * 100);
}
