"use client";

import { createInput } from "@gluestack-ui/input";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Pressable } from "../../elements/pressable";
import { TextInput } from "../../elements/text-input";
import { View } from "../../elements/view";
import { UIIcon } from "../icon";
import { inputFieldStyle, inputIconStyle, inputSlotStyle, inputStyle } from "./styles";

const SCOPE = "INPUT";

type IContext = IStyleContext<typeof inputStyle>;

const InputRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

const UIInput = createInput({
  Root: InputRoot,
  Icon: UIIcon,
  Slot: Pressable,
  Input: TextInput
});

type IInputProps = ComponentPropsWithVariants<typeof UIInput, typeof inputStyle>;

export const Input = ({ className, variant = "outline", size = "md", ...props }: IInputProps) => {
  return (
    <UIInput
      {...props}
      className={inputStyle({ variant, size, class: className })}
      context={{ variant, size }}
    />
  );
};

type IInputIconProps = ComponentPropsWithVariants<typeof UIInput.Icon, typeof inputIconStyle>;

export const InputIcon = ({ className, size, ...props }: IInputIconProps) => {
  const { size: parentSize } = useStyleContext<IContext>(SCOPE);

  if (typeof size === "number") {
    return <UIInput.Icon {...props} className={inputIconStyle({ class: className })} size={size} />;
  } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
    return <UIInput.Icon {...props} className={inputIconStyle({ class: className })} />;
  }

  return (
    <UIInput.Icon
      {...props}
      className={inputIconStyle({
        parentVariants: {
          size: parentSize
        },
        class: className
      })}
    />
  );
};

type IInputSlotProps = ComponentPropsWithVariants<typeof UIInput.Slot, typeof inputSlotStyle>;

export const InputSlot = ({ className, ...props }: IInputSlotProps) => {
  return (
    <UIInput.Slot
      {...props}
      className={inputSlotStyle({
        class: className
      })}
    />
  );
};

type IInputFieldProps = ComponentPropsWithVariants<typeof UIInput.Input, typeof inputFieldStyle>;

export const InputField = ({ className, ...props }: IInputFieldProps) => {
  const { variant: parentVariant, size: parentSize } = useStyleContext<IContext>(SCOPE);

  return (
    <UIInput.Input
      {...props}
      className={inputFieldStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize
        },
        class: className
      })}
    />
  );
};
