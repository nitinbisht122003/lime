"use client";

import type { ComponentProps } from "react";
import { LinearGradient as RNLinearGradient } from "react-native-linear-gradient";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { cssInterop } from "nativewind";

cssInterop(RNLinearGradient, {
  className: "style"
});

const linearGradientStyle = tva({
  base: ""
});

type LinearGradientProps = ComponentProps<typeof RNLinearGradient> & { className?: string };

export function LinearGradient({ className, ...props }: LinearGradientProps) {
  return (
    <RNLinearGradient {...props} className={linearGradientStyle({ class: className })} {...props} />
  );
}
