"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Image } from "../../elements/image";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  visualFilterActiveIndicatorStyle,
  visualFilterContentStyle,
  visualFilterGroupStyle,
  visualFilterImageSizes,
  visualFilterImageStyle,
  visualFilterStyle,
  visualFilterTextStyle
} from "./styles";

const SCOPE = "VISUAL_FILTER";

type IContext = IStyleContext<typeof visualFilterStyle>;

const VisualFilterRoot = withStyleContext<IContext, typeof Pressable>(Pressable, SCOPE);

type IVisualFilterProps = ComponentPropsWithVariants<
  typeof VisualFilterRoot,
  typeof visualFilterStyle
>;

export function VisualFilter({ className, size = "md", children, ...props }: IVisualFilterProps) {
  return (
    <VisualFilterRoot
      {...props}
      className={visualFilterStyle({ size, class: className })}
      context={{ size }}
    >
      {children}
    </VisualFilterRoot>
  );
}

type IVisualFilterImageProps = ComponentPropsWithVariants<
  typeof Image,
  typeof visualFilterImageStyle
>;

export function VisualFilterImage({ className, src, ...props }: IVisualFilterImageProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);
  const { width, height } = visualFilterImageSizes[size];

  return (
    <Image
      {...props}
      src={src}
      width={width}
      height={height}
      className={visualFilterImageStyle({
        parentVariants: { size },
        class: className
      })}
    />
  );
}

type IVisualFilterContentProps = ComponentPropsWithVariants<
  typeof View,
  typeof visualFilterContentStyle
>;

export function VisualFilterContent({ className, children, ...props }: IVisualFilterContentProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={visualFilterContentStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </View>
  );
}

type IVisualFilterTextProps = ComponentPropsWithVariants<typeof Text, typeof visualFilterTextStyle>;

export function VisualFilterText({ className, children, ...props }: IVisualFilterTextProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={visualFilterTextStyle({
        size,
        class: className
      })}
    >
      {children}
    </Text>
  );
}

type IVisualFilterActiveIndicatorProps = ComponentPropsWithVariants<
  typeof View,
  typeof visualFilterActiveIndicatorStyle
>;
export function VisualFilterActiveIndicator({
  className,
  ...props
}: IVisualFilterActiveIndicatorProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={visualFilterActiveIndicatorStyle({
        parentVariants: { size },
        class: className
      })}
    />
  );
}

type IVisualFilterGroupProps = ComponentPropsWithVariants<
  typeof View,
  typeof visualFilterGroupStyle
>;

export function VisualFilterGroup({
  className,
  spacing = "md",
  children,
  ...props
}: IVisualFilterGroupProps) {
  return (
    <View
      {...props}
      className={visualFilterGroupStyle({
        spacing,
        class: className
      })}
    >
      {children}
    </View>
  );
}
