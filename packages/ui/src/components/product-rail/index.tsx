"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  productRailContainerStyle,
  productRailLinkStyle,
  productRailScrollContainerStyle,
  productRailTitleContainerStyle,
  productRailTitleStyle
} from "./styles";

const SCOPE = "PRODUCT_RAIL";

type IProductRailContext = IStyleContext<typeof productRailContainerStyle>;

const ProductRailRoot = withStyleContext<IProductRailContext, typeof View>(View, SCOPE);

type IProductRailProps = ComponentPropsWithVariants<
  typeof ProductRailRoot,
  typeof productRailContainerStyle
>;

export function ProductRail({
  className,
  spacing = "md",
  size = "md",
  children,
  ...props
}: IProductRailProps) {
  return (
    <ProductRailRoot
      {...props}
      className={productRailContainerStyle({ spacing, class: className })}
      context={{ spacing, size }}
    >
      {children}
    </ProductRailRoot>
  );
}

type IProductRailTitleContainerProps = ComponentPropsWithVariants<
  typeof View,
  typeof productRailTitleContainerStyle
>;

export function ProductRailTitleContainer({
  className,
  children,
  ...props
}: IProductRailTitleContainerProps) {
  const { spacing } = useStyleContext<IProductRailContext>(SCOPE);

  return (
    <View
      {...props}
      className={productRailTitleContainerStyle({
        class: className,
        parentVariants: { spacing }
      })}
    >
      {children}
    </View>
  );
}

type IProductRailTitleProps = ComponentPropsWithVariants<typeof Text, typeof productRailTitleStyle>;

export function ProductRailTitle({ className, children, ...props }: IProductRailTitleProps) {
  const { size } = useStyleContext<IProductRailContext>(SCOPE);

  return (
    <Text
      {...props}
      className={productRailTitleStyle({
        class: className,
        parentVariants: { size }
      })}
    >
      {children}
    </Text>
  );
}

type IProductRailLinkProps = ComponentPropsWithVariants<
  typeof View,
  typeof productRailLinkStyle
> & {
  href: string;
};

export function ProductRailLink({ className, children, ...props }: IProductRailLinkProps) {
  const { size } = useStyleContext<IProductRailContext>(SCOPE);
  return (
    <View
      {...props}
      className={productRailLinkStyle({
        class: className,
        parentVariants: { size }
      })}
    >
      {children}
    </View>
  );
}

type IProductRailScrollContainerProps = ComponentPropsWithVariants<
  typeof View,
  typeof productRailScrollContainerStyle
>;

export function ProductRailScrollContainer({
  className,
  children,
  ...props
}: IProductRailScrollContainerProps) {
  const { spacing } = useStyleContext<IProductRailContext>(SCOPE);

  return (
    <View
      {...props}
      className={productRailScrollContainerStyle({
        class: className,
        parentVariants: { spacing }
      })}
    >
      {children}
    </View>
  );
}
