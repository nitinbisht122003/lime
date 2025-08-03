"use client";

import { createCheckbox } from "@gluestack-ui/checkbox";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { UIIcon } from "../icon";
import {
  checkboxIconStyle,
  checkboxIndicatorStyle,
  checkboxLabelStyle,
  checkboxStyle
} from "./styles";

const SCOPE = "CHECKBOX";

type IContext = IStyleContext<typeof checkboxStyle>;

const Root = withStyleContext<IContext, typeof Pressable>(Pressable, SCOPE);

const UICheckbox = createCheckbox({
  Root: Root,
  Group: View,
  Icon: UIIcon,
  Label: Text,
  Indicator: View
});

type ICheckboxProps = ComponentPropsWithVariants<typeof UICheckbox, typeof checkboxStyle>;

export const Checkbox = ({ className, size = "md", ...props }: ICheckboxProps) => {
  return (
    <UICheckbox
      {...props}
      className={checkboxStyle({ class: className, size })}
      context={{ size }}
    />
  );
};

type ICheckboxIndicatorProps = ComponentPropsWithVariants<
  typeof UICheckbox.Indicator,
  typeof checkboxIndicatorStyle
>;

export const CheckboxIndicator = ({ className, ...props }: ICheckboxIndicatorProps) => {
  const { size: parentSize } = useStyleContext<IContext>(SCOPE);

  return (
    <UICheckbox.Indicator
      {...props}
      className={checkboxIndicatorStyle({
        parentVariants: { size: parentSize },
        class: className
      })}
    />
  );
};

type ICheckboxLabelProps = ComponentPropsWithVariants<
  typeof UICheckbox.Label,
  typeof checkboxLabelStyle
>;

export const CheckboxLabel = ({ className, ...props }: ICheckboxLabelProps) => {
  const { size: parentSize } = useStyleContext<IContext>(SCOPE);

  return (
    <UICheckbox.Label
      {...props}
      className={checkboxLabelStyle({
        parentVariants: { size: parentSize },
        class: className
      })}
    />
  );
};

type ICheckboxIconProps = ComponentPropsWithVariants<
  typeof UICheckbox.Icon,
  typeof checkboxIconStyle
>;

export const CheckboxIcon = ({ className, size, ...props }: ICheckboxIconProps) => {
  const { size: parentSize } = useStyleContext<IContext>(SCOPE);

  if (typeof size === "number") {
    return (
      <UICheckbox.Icon {...props} className={checkboxIconStyle({ class: className })} size={size} />
    );
  } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
    return <UICheckbox.Icon {...props} className={checkboxIconStyle({ class: className })} />;
  }

  return (
    <UICheckbox.Icon
      {...props}
      className={checkboxIconStyle({
        parentVariants: {
          size: parentSize
        },
        class: className,
        size
      })}
    />
  );
};

export const CheckboxGroup = UICheckbox.Group;
