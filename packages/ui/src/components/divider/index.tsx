"use client";

import { Platform } from "react-native";

import type { ComponentPropsWithVariants } from "../../types";
import { View } from "../../elements/view";
import { dividerStyle } from "./styles";

type IDividerProps = ComponentPropsWithVariants<typeof View, typeof dividerStyle>;

export const Divider = ({ className, orientation = "horizontal", ...props }: IDividerProps) => {
  return (
    <View
      {...props}
      aria-orientation={orientation}
      role={Platform.OS === "web" ? "separator" : undefined}
      className={dividerStyle({
        orientation,
        class: className
      })}
    />
  );
};
