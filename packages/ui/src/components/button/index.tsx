"use client";

import type { ElementType } from "react";
import { createButton } from "@gluestack-ui/button";
import { UIIcon } from "@gluestack-ui/icon";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { ActivityIndicator } from "../../elements/activity-indicator";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { buttonGroupStyle, buttonIconStyle, buttonStyle, buttonTextStyle } from "./styles";

const SCOPE = "BUTTON";

type IContext = IStyleContext<typeof buttonStyle>;

const Root = withStyleContext<IContext, typeof Pressable>(Pressable, SCOPE);

const UIButton = createButton({
  Root: Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: UIIcon
});

type IButtonProps = ComponentPropsWithVariants<typeof UIButton, typeof buttonStyle>;

export const Button = ({
  className,
  variant = "solid",
  size = "md",
  action = "default",
  ...props
}: IButtonProps) => {
  return (
    <UIButton
      {...props}
      className={buttonStyle({ variant, size, action, class: className })}
      context={{ variant, size, action }}
    />
  );
};

type IButtonTextProps = ComponentPropsWithVariants<typeof UIButton.Text, typeof buttonTextStyle>;

export const ButtonText = ({ className, ...props }: IButtonTextProps) => {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction
  } = useStyleContext<IContext>(SCOPE);

  return (
    <UIButton.Text
      {...props}
      className={buttonTextStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
          action: parentAction
        },
        class: className
      })}
    />
  );
};

export const ButtonSpinner = UIButton.Spinner;

type IButtonIcon = ComponentPropsWithVariants<typeof UIButton.Icon, typeof buttonIconStyle> & {
  as?: ElementType;
  height?: number;
  width?: number;
};

export const ButtonIcon = ({ className, size, ...props }: IButtonIcon) => {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction
  } = useStyleContext<IContext>(SCOPE);

  if (typeof size === "number") {
    return (
      <UIButton.Icon {...props} className={buttonIconStyle({ class: className })} size={size} />
    );
  } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
    return <UIButton.Icon {...props} className={buttonIconStyle({ class: className })} />;
  }

  return (
    <UIButton.Icon
      {...props}
      className={buttonIconStyle({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
          action: parentAction
        },
        size,
        class: className
      })}
    />
  );
};

type IButtonGroupProps = ComponentPropsWithVariants<typeof UIButton.Group, typeof buttonGroupStyle>;

export const ButtonGroup = ({
  className,
  space = "md",
  isAttached = false,
  flexDirection = "column",
  ...props
}: IButtonGroupProps) => {
  return (
    <UIButton.Group
      className={buttonGroupStyle({
        class: className,
        space,
        isAttached,
        flexDirection
      })}
      {...props}
    />
  );
};
