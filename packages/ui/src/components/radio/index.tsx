"use client";

import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { Platform } from "react-native";
import { UIIcon } from "@gluestack-ui/icon";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { createRadio } from "@gluestack-ui/radio";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  radioGroupStyle,
  radioIconStyle,
  radioIndicatorStyle,
  radioLabelStyle,
  radioStyle
} from "./styles";

const SCOPE = "Radio";

type IContext = IStyleContext<typeof radioStyle>;

const UIRadio = createRadio({
  Root: (Platform.OS === "web"
    ? withStyleContext<IContext, typeof View>(View, SCOPE)
    : withStyleContext<IContext, typeof Pressable>(Pressable, SCOPE)) as ReturnType<
    typeof withStyleContext<IContext, typeof Pressable>
  >,
  Group: View,
  Icon: UIIcon,
  Indicator: View,
  Label: Text
});

type IRadioProps = ComponentPropsWithVariants<typeof UIRadio, typeof radioStyle>;

export function Radio({ className, size = "md", ...props }: IRadioProps) {
  return (
    <UIRadio {...props} className={radioStyle({ class: className, size })} context={{ size }} />
  );
}

type IRadioGroupProps = ComponentPropsWithVariants<typeof UIRadio.Group, typeof radioGroupStyle>;

export function RadioGroup({ className, ...props }: IRadioGroupProps) {
  return <UIRadio.Group className={radioGroupStyle({ class: className })} {...props} />;
}

type IRadioIndicatorProps = ComponentPropsWithVariants<
  typeof UIRadio.Indicator,
  typeof radioIndicatorStyle
>;

export function RadioIndicator({ className, size, ...props }: IRadioIndicatorProps) {
  const { size: parentSize } = useStyleContext<IContext>(SCOPE);

  return (
    <UIRadio.Indicator
      className={radioIndicatorStyle({
        parentVariants: { size: parentSize },
        size,
        class: className
      })}
      {...props}
    />
  );
}

type IRadioLabelProps = ComponentPropsWithVariants<
  typeof UIRadio.Label,
  typeof radioIndicatorStyle
>;

export function RadioLabel({ className, ...props }: IRadioLabelProps) {
  const { size } = useStyleContext<IContext>(SCOPE);
  return (
    <UIRadio.Label
      className={radioLabelStyle({
        parentVariants: { size },
        class: className
      })}
      {...props}
    />
  );
}

type IRadioIconProps = ComponentPropsWithVariants<typeof UIRadio.Icon, typeof radioIconStyle> &
  VariantProps<typeof radioIconStyle> & {
    height?: number;
    width?: number;
  };

export function RadioIcon({ className, size, ...props }: IRadioIconProps) {
  const { size: parentSize } = useStyleContext<IContext>(SCOPE);

  if (typeof size === "number") {
    return <UIRadio.Icon {...props} className={radioIconStyle({ class: className })} size={size} />;
  } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
    return <UIRadio.Icon {...props} className={radioIconStyle({ class: className })} />;
  }

  return (
    <UIRadio.Icon
      {...props}
      className={radioIconStyle({
        parentVariants: {
          size: parentSize
        },
        size,
        class: className
      })}
    />
  );
}
