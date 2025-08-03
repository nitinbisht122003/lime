"use client";

import { useState } from "react";
import { Pressable } from "react-native";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Image } from "../../elements/image";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { HeartIconHOC } from "../../icons/heart-icon";
import { StarIcon } from "../../icons/star-icon";
import { Icon } from "../icon";
import {
  productCardStyle,
  productDescriptionStyle,
  productDiscountStyle,
  productImageContainerStyle,
  productImageStyle,
  productLikeButtonStyle,
  productLikeIconStyle,
  productMRPStyle,
  productPriceContainerStyle,
  productPriceStyle,
  productRatingChipStyle,
  productRatingIconStyle,
  productRatingTextStyle,
  productSiblingsStyle,
  productSiblingStyle,
  productTagStyle,
  productTitleStyle
} from "./styles";

// Define the component scope for context
const SCOPE = "PRODUCT_CARD";

// Type definitions
type IContext = IStyleContext<typeof productCardStyle>;

// Create root with style context
const ProductCardRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

// Component definitions
type IProductCardProps = ComponentPropsWithVariants<
  typeof ProductCardRoot,
  typeof productCardStyle
>;

export function ProductCard({
  className,
  size = "md",
  variant = "default",
  children,
  ...props
}: IProductCardProps) {
  return (
    <ProductCardRoot
      {...props}
      className={productCardStyle({ size, variant, class: className })}
      context={{ size, variant }}
    >
      {children}
    </ProductCardRoot>
  );
}

type IProductImageContainerProps = ComponentPropsWithVariants<
  typeof View,
  typeof productImageContainerStyle
>;

export function ProductImageContainer({
  className,
  children,
  ...props
}: IProductImageContainerProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={productImageContainerStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </View>
  );
}

type IProductImageProps = ComponentPropsWithVariants<typeof Image, typeof productImageStyle>;

export function ProductImage({
  className,
  size = "full",
  objectFit = "cover",
  borderRadius = "lg",
  ...props
}: IProductImageProps) {
  return (
    <Image
      {...props}
      size={size}
      objectFit={objectFit}
      borderRadius={borderRadius}
      className={productImageStyle({
        class: className
      })}
    />
  );
}

type IProductTagProps = ComponentPropsWithVariants<typeof Text, typeof productTagStyle>;

export function ProductTag({
  className,
  variant = "sale",
  position = "topLeft",
  children,
  ...props
}: IProductTagProps) {
  return (
    <Text
      {...props}
      className={productTagStyle({
        variant,
        position,
        class: className
      })}
    >
      {children}
    </Text>
  );
}

type IProductRatingProps = ComponentPropsWithVariants<
  typeof View,
  typeof productRatingChipStyle
> & {
  rating: number;
};

export function ProductRating({
  className,
  rating,
  variant = "high",
  position = "bottomLeft",
  ...props
}: IProductRatingProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={productRatingChipStyle({
        variant,
        position,
        class: className
      })}
    >
      <Text
        className={productRatingTextStyle({
          parentVariants: {
            size
          }
        })}
      >
        {rating}
      </Text>
      <StarIcon
        className={productRatingIconStyle({
          parentVariants: {
            size
          }
        })}
      />
    </View>
  );
}

type IProductDescriptionProps = ComponentPropsWithVariants<
  typeof View,
  typeof productDescriptionStyle
>;

export function ProductDescription({ className, children, ...props }: IProductDescriptionProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={productDescriptionStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </View>
  );
}

type IProductTitleProps = ComponentPropsWithVariants<typeof Text, typeof productTitleStyle>;

export function ProductTitle({ className, children, ...props }: IProductTitleProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={productTitleStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Text>
  );
}

type IProductLikeButtonProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof productLikeButtonStyle
> & {
  isLiked?: boolean;
};

export function ProductLikeButton({
  className,
  isLiked = false,
  onPress,
  ...props
}: IProductLikeButtonProps) {
  const { size } = useStyleContext<IContext>(SCOPE);
  const [liked, setLiked] = useState(isLiked);

  return (
    <Pressable
      {...props}
      className={productLikeButtonStyle({
        parentVariants: { size },
        class: className
      })}
      onPress={(e) => {
        setLiked(!liked);
        if (onPress) onPress(e);
      }}
    >
      <Icon
        as={HeartIconHOC({ fill: liked ? "currentColor" : "none" })}
        className={productLikeIconStyle({ parentVariants: { size, isLiked: liked } })}
      />
    </Pressable>
  );
}

type IProductPriceContainerProps = ComponentPropsWithVariants<
  typeof View,
  typeof productPriceContainerStyle
>;

export function ProductPriceContainer({
  className,
  children,
  ...props
}: IProductPriceContainerProps) {
  return (
    <View
      {...props}
      className={productPriceContainerStyle({
        class: className
      })}
    >
      {children}
    </View>
  );
}

type IProductPriceProps = ComponentPropsWithVariants<typeof Text, typeof productPriceStyle>;

export function ProductPrice({ className, children, ...props }: IProductPriceProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={productPriceStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Text>
  );
}

type IProductMRPProps = ComponentPropsWithVariants<typeof Text, typeof productMRPStyle>;

export function ProductMRP({ className, children, ...props }: IProductMRPProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={productMRPStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Text>
  );
}

type IProductDiscountProps = ComponentPropsWithVariants<typeof Text, typeof productDiscountStyle>;

export function ProductDiscount({ className, children, ...props }: IProductDiscountProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={productDiscountStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Text>
  );
}

type IProductSiblingsProps = ComponentPropsWithVariants<typeof View, typeof productSiblingsStyle>;

export function ProductSiblings({ className, children, ...props }: IProductSiblingsProps) {
  return (
    <View
      {...props}
      className={productSiblingsStyle({
        class: className
      })}
    >
      {children}
    </View>
  );
}

type IProductSiblingProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof productSiblingStyle
> & {
  color?: string;
  imageUrl?: string;
  isSelected?: boolean;
};

export function ProductSibling({
  className,
  color = "#e5e5e5",
  imageUrl,
  isSelected = false,
  ...props
}: IProductSiblingProps) {
  const { size } = useStyleContext<IContext>(SCOPE);
  return (
    <Pressable
      {...props}
      className={productSiblingStyle({
        isSelected,
        parentVariants: { size },
        class: className
      })}
    >
      {imageUrl ? (
        <Image src={imageUrl} alt="product-image" size="full" />
      ) : (
        <View style={{ backgroundColor: color }} className="h-full w-full" />
      )}
    </Pressable>
  );
}
