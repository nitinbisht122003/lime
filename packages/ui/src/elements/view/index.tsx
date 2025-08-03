"use client";

import { View as RNView } from "react-native";

import type { ComponentPropsWithVariants } from "../../types";
import { viewStyle } from "./styles";

export type IViewProps = ComponentPropsWithVariants<typeof RNView, typeof viewStyle>;

export type ViewRef = IViewProps["ref"];

const View = ({ className, ...props }: IViewProps) => {
  return (
    <RNView
      {...props}
      className={viewStyle({
        class: className
      })}
    />
  );
};

View.displayName = "View";

export { View };
