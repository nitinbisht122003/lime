"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import { View } from "../../elements/view";
import { Text } from "../../elements/text";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import {
  productAngleFocusRailStyle,
  productAnglesGridContainerStyle,
  productAnglesRailStyle,
  productAnglesTitleStyle,
  productAngleStyle
} from "./styles";

const SCOPE = "ProductAngles";

type IContext = IStyleContext<typeof productAngleStyle>;

const ProductAnglesRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type IProductAnglesProps = ComponentPropsWithVariants<
  typeof ProductAnglesRoot,
  typeof productAngleStyle
>;

export function ProductAngles({ className, size = "md", children, ...props }: IProductAnglesProps) {
  return (
    <ProductAnglesRoot
      {...props}
      className={productAngleStyle({ class: className })}
      context={{ size }}
    >
      {children}
    </ProductAnglesRoot>
  );
}

type IProductAnglesTitleProps = ComponentPropsWithVariants<
  typeof Text,
  typeof productAnglesTitleStyle
>;

export function ProductAnglesTitle({
  className,
  children,
  ...props
}: IProductAnglesTitleProps) {
  return (
    <Text {...props} className={productAnglesTitleStyle({ class: className })}>
      {children}
    </Text>
  );
}

type IProductAnglesRailProps = ComponentPropsWithVariants<
  typeof View,
  typeof productAnglesRailStyle
>;

export function ProductAnglesRail({ className, children, ...props }: IProductAnglesRailProps) {
  return (
    <View {...props} className={productAnglesRailStyle({ class: className })}>
      {children}
    </View>
  );
}

type IProductAnglesGridContainerProps = ComponentPropsWithVariants<
  typeof View,
  typeof productAnglesGridContainerStyle
>;

export function ProductAnglesGridContainerContainer({
  className,
  children,
  ...props
}: IProductAnglesGridContainerProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={productAnglesGridContainerStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </View>
  );
}

type IProductAnglesFocusRailProps = ComponentPropsWithVariants<
  typeof View,
  typeof productAngleFocusRailStyle
>;

export function ProductAnglesFocusRail({
  className,
  children,
  ...props
}: IProductAnglesFocusRailProps) {
  return (
    <View
      {...props}
      className={productAngleFocusRailStyle({ class: className})}
    >
      {children}
    </View>
  );
}
