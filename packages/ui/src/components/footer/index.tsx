"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Image } from "../../elements/image";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { Icon } from "../icon";
import { footerNavIconStyle, footerNavItemStyle, footerNavTitleStyle, footerStyle } from "./styles";

// Define the component scope for context
const SCOPE = "FOOTER";

// FooterRoot component
type IContext = IStyleContext<typeof footerStyle>;

const FooterRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

// Footer component
type IFooterProps = ComponentPropsWithVariants<typeof FooterRoot, typeof footerStyle>;

export function Footer({
  className,
  size = "md",
  variant = "basic",
  children,
  ...props
}: IFooterProps) {
  return (
    <FooterRoot
      {...props}
      className={footerStyle({ size, variant, class: className })}
      context={{ size, variant }}
    >
      {children}
    </FooterRoot>
  );
}

// FooterNav component
type IFooterNavItemProps = ComponentPropsWithVariants<typeof View, typeof footerNavItemStyle>;

export function FooterNavItem({ className, children, ...props }: IFooterNavItemProps) {
  return (
    <View {...props} className={footerNavItemStyle({ class: className })}>
      {children}
    </View>
  );
}

// FooterNavIcon component
type IFooterNavIconProps = ComponentPropsWithVariants<typeof Icon, typeof footerNavIconStyle>;

export function FooterNavIcon({ className, ...props }: IFooterNavIconProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Icon
      {...props}
      className={footerNavIconStyle({ class: className, parentVariants: { size } })}
    />
  );
}

// FooterNavImage component
type IFooterNavImageProps = ComponentPropsWithVariants<typeof Image, typeof footerNavIconStyle>;

export function FooterNavImage({ className, ...props }: IFooterNavImageProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Image
      {...props}
      className={footerNavIconStyle({ class: className, parentVariants: { size } })}
    />
  );
}

type IFooterNavTitleProps = ComponentPropsWithVariants<typeof Text, typeof footerNavTitleStyle>;

export function FooterNavTitle({ className, children, ...props }: IFooterNavTitleProps) {
  return (
    <Text {...props} className={footerNavTitleStyle({ class: className })}>
      {children}
    </Text>
  );
}
