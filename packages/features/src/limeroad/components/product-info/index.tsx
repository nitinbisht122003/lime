"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "@app/ui/types";
import { Icon } from "@app/ui/components/icon";
import { Rating, ratingIconStyle } from "@app/ui/components/rating";
import { Image } from "@app/ui/elements/image";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { RupeeIcon } from "@app/ui/icons/rupee-icon";
import { ShareIcon } from "@app/ui/icons/share-icon";

import {
  brandNameStyle,
  brandTextStyle,
  currentPriceStyle,
  discountTextStyle,
  infoSeparatorStyle,
  mrpStrikeStyle,
  mrpStyle,
  mrpTextStyle,
  priceContainerStyle,
  pricingSectionStyle,
  productDescriptionStyle,
  productImageStyle,
  productInfoStyle,
  ratingTrustedContainerStyle,
  ratingTrustedStyle,
  shareButtonStyle,
  taxTextStyle,
  titleSectionStyle,
  trustedTextStyle
} from "./styles";

export { useProductPricing } from "./hooks";

// Define the component scope for context
const SCOPE = "PRODUCT_INFO";

// Type definitions
type IContext = IStyleContext<typeof productInfoStyle>;

// Create root with style context
const ProductInfoRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type IProductInfoProps = ComponentPropsWithVariants<
  typeof ProductInfoRoot,
  typeof productInfoStyle
>;

export function ProductInfo({
  className,
  size = "md",
  variant = "default",
  children,
  ...props
}: IProductInfoProps) {
  return (
    <ProductInfoRoot
      {...props}
      className={productInfoStyle({ size, variant, class: className })}
      context={{ size, variant }}
    >
      {children}
    </ProductInfoRoot>
  );
}

type IProductDescriptionProps = ComponentPropsWithVariants<
  typeof View,
  typeof productDescriptionStyle
>;

export function ProductDescription({ className, children }: IProductDescriptionProps) {
  const { size } = useStyleContext<IContext>(SCOPE);
  return <View className={productDescriptionStyle({ size, class: className })}>{children}</View>;
}

type IProductImageProps = ComponentPropsWithVariants<typeof Image, typeof productImageStyle>;

export function ProductImage({ src, alt = "product", className, ...props }: IProductImageProps) {
  return (
    <Image src={src} alt={alt} className={productImageStyle({ class: className })} {...props} />
  );
}

type IProductRatingProps = ComponentPropsWithVariants<typeof View, typeof ratingTrustedStyle> & {
  rating: number;
  lrTrusted?: boolean;
};

export function InfoSeparator({
  className,
  ...props
}: ComponentPropsWithVariants<typeof View, typeof infoSeparatorStyle>) {
  return <View className={infoSeparatorStyle({ class: className })} {...props} />;
}

export function ProductRating({ className, rating, lrTrusted, ...props }: IProductRatingProps) {
  const { size } = useStyleContext<IContext>(SCOPE);
  const hasRating = typeof rating === "number" && rating > 0;

  if (!hasRating && !lrTrusted) return null;

  return (
    <View className={ratingTrustedContainerStyle({ size, class: className })} {...props}>
      {hasRating && (
        <View className={ratingTrustedStyle({ size })}>
          <Rating rating={rating} size={size} iconClassName={ratingIconStyle({ size })} />
        </View>
      )}
      <InfoSeparator />
      {lrTrusted && (
        <View className={ratingTrustedStyle({ size })}>
          <img
            src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1740070500252.jpg"
            alt="LR Trusted"
            className="h-4 w-4"
          />
          <Text className={trustedTextStyle({ size })}>
            <Text className="pr-0.5">LR</Text>
            <Text>Trusted</Text>
          </Text>
        </View>
      )}
    </View>
  );
}

type IProductTitleProps = ComponentPropsWithVariants<typeof View, typeof titleSectionStyle> & {
  brand?: string;
  name: string;
};

export function ProductTitle({ className, brand, name, ...props }: IProductTitleProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View className="flex flex-row items-center justify-between">
      <View className={titleSectionStyle({ class: className })} {...props}>
        <Text className={brandNameStyle({})}>
          {brand && <Text className={brandTextStyle({})}>{brand}</Text>}
          <InfoSeparator />
          <Text>{name}</Text>
        </Text>
      </View>
      <View className="px-2.5 py-3">
        <Icon as={ShareIcon} size={size} className={shareButtonStyle({})} />
      </View>
    </View>
  );
}

type IProductPriceProps = ComponentPropsWithVariants<typeof View, typeof pricingSectionStyle> & {
  sellingPrice?: number;
  mrp?: number;
  discount?: number;
};

export function ProductPrice({
  className,
  sellingPrice,
  mrp,
  discount,
  ...props
}: IProductPriceProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View className={pricingSectionStyle({ class: className })} {...props}>
      <View className={priceContainerStyle({})}>
        <View className={currentPriceStyle({})}>
          <Icon as={RupeeIcon} size={size} className="text-typography-900 h-[18px] w-[12px]" />
          <Text>{sellingPrice}</Text>
        </View>

        {mrp !== undefined && mrp !== sellingPrice && (
          <View className={mrpStyle({})}>
            <Icon as={RupeeIcon} size={size} className="text-typography-600 h-[18px] w-[12px]" />
            <Text className={mrpTextStyle({})}>{mrp}</Text>
            <View className={mrpStrikeStyle({})} />
          </View>
        )}

        {discount && <Text className={discountTextStyle({})}>{discount}% Off</Text>}
      </View>

      <Text className={taxTextStyle({})}>M.R.P. Inclusive of all taxes</Text>
    </View>
  );
}

export function calcDiscountPercentage(mrp: number, sellingPrice: number) {
  return Math.round(((mrp - sellingPrice) / mrp) * 100);
}
