"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { Icon } from "../icon";
import { badgeRailStyle, badgeStyle, badgeTextStyle } from "./styles";

const SCOPE = "BADGE";

type IContext = IStyleContext<typeof badgeStyle>;

const BadgeRoot = withStyleContext<IContext, typeof Pressable>(Pressable, SCOPE);

export type IBadgeProps = ComponentPropsWithVariants<typeof BadgeRoot, typeof badgeStyle>;

export function Badge({
  children,
  action = "default",
  variant = "outline",
  size = "md",
  active = false,
  className,
  ...props
}: IBadgeProps) {
  return (
    <BadgeRoot
      {...props}
      className={badgeStyle({ action, variant, size, active, class: className })}
      context={{
        action,
        variant,
        size
      }}
    >
      {children}
    </BadgeRoot>
  );
}

export type IBadgeTextProps = ComponentPropsWithVariants<typeof Text, typeof badgeTextStyle>;

export const BadgeText = ({ children, className, ...props }: IBadgeTextProps) => {
  const { size: parentSize, action: parentAction } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={badgeTextStyle({
        parentVariants: {
          size: parentSize,
          action: parentAction
        },

        class: className
      })}
    >
      {children}
    </Text>
  );
};

export const BadgeIcon = Icon;

export type IBadgeRailProps = ComponentPropsWithVariants<typeof View, typeof badgeRailStyle>;

export function BadgeRail({ spacing = "md", children, className, ...props }: IBadgeRailProps) {
  return (
    <View {...props} className={badgeRailStyle({ spacing, class: className })}>
      {children}
    </View>
  );
}

export * from "./styles";
