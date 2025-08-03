"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  headerBackStyle,
  headerLogoStyle,
  headerNavIconStyle,
  headerNavStyle,
  headerStyle,
  headerTitleStyle
} from "./styles";

// Define the component scope for context
const SCOPE = "HEADER";

type IContext = IStyleContext<typeof headerStyle>;

// Create components with style context
const HeaderRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

// Header component
type IHeaderProps = ComponentPropsWithVariants<typeof HeaderRoot, typeof headerStyle>;

export function Header({
  className,
  size = "sm",
  position = "static",
  variant = "basic",
  children,
  ...props
}: IHeaderProps) {
  return (
    <HeaderRoot
      {...props}
      className={headerStyle({ size, position, variant, class: className })}
      context={{ size, position, variant }}
    >
      {children}
    </HeaderRoot>
  );
}

// HeaderTitle component
type IHeaderTitleProps = ComponentPropsWithVariants<typeof Text, typeof headerTitleStyle>;

export function HeaderTitle({ className, children, ...props }: IHeaderTitleProps) {
  return (
    <Text {...props} className={headerTitleStyle({ class: className })}>
      {children}
    </Text>
  );
}

// HeaderLogo component
type IHeaderLogoProps = ComponentPropsWithVariants<typeof View, typeof headerLogoStyle>;

export function HeaderLogo({ className, children, ...props }: IHeaderLogoProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={headerLogoStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </View>
  );
}

// HeaderBack component
type IHeaderBackProps = ComponentPropsWithVariants<typeof Pressable, typeof headerBackStyle>;

export function HeaderBack({ className, children, ...props }: IHeaderBackProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Pressable
      {...props}
      className={headerBackStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Pressable>
  );
}

// HeaderNav component
type IHeaderNavProps = ComponentPropsWithVariants<typeof View, typeof headerNavStyle>;

export function HeaderNav({ className, spacing = "sm", children, ...props }: IHeaderNavProps) {
  return (
    <View
      {...props}
      className={headerNavStyle({
        spacing,
        class: className
      })}
    >
      {children}
    </View>
  );
}

// HeaderNavIcon component
export type IHeaderNavIconProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof headerNavIconStyle
>;

export function HeaderNavIcon({ className, children, ...props }: IHeaderNavIconProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Pressable
      {...props}
      className={headerNavIconStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Pressable>
  );
}
