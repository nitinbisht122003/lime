"use client";

import { useEffect } from "react";

import type { ProductInfoViewModel } from "@app/types/limeroad";
import { View } from "@app/ui/elements/view";

import { useProductVipContext } from "../../hooks/product-vip";
import {
  ProductDescription,
  ProductImage,
  ProductInfo as ProductInfoUI,
  ProductPrice,
  ProductRating,
  ProductTitle,
  useProductPricing
} from "../product-info";

interface ProductInfoProps {
  productInfo: ProductInfoViewModel;
  truncated_title?: boolean;
  show_image?: boolean;
  className?: string;
}
export function ProductInfo({ productInfo, ...props }: ProductInfoProps) {
  const { setProductInfo } = useProductVipContext();

  useEffect(() => {
    setProductInfo(productInfo);
  }, [productInfo, setProductInfo]);

  const { currentVariant, discount } = useProductPricing(productInfo);

  const { className, show_image, truncated_title } = props;

  return (
    <ProductInfoUI {...props} className={className}>
      {show_image ? (
        <View>
          <ProductImage src={productInfo.image_url} alt={productInfo.name} />
        </View>
      ) : null}
      <ProductDescription>
        <ProductRating rating={productInfo.rating} lrTrusted={productInfo.lr_trusted} />
        <ProductTitle
          className={truncated_title ? "truncated" : ""}
          brand={productInfo.brand}
          name={productInfo.name}
        />
        <ProductPrice
          sellingPrice={currentVariant?.selling_price}
          mrp={currentVariant?.mrp}
          discount={discount}
        />
      </ProductDescription>
    </ProductInfoUI>
  );
}
