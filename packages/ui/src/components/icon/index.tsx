"use client";

import type { IPrimitiveIcon } from "@gluestack-ui/icon";
import React from "react";
import { createIcon, PrimitiveIcon, Svg } from "@gluestack-ui/icon";
import { cssInterop } from "nativewind";

import type { ComponentPropsWithVariants } from "../../types";
import { iconStyle } from "./styles";

export const UIIcon = createIcon({
  Root: PrimitiveIcon
}) as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
    React.RefAttributes<React.ComponentRef<typeof Svg>>
>;

cssInterop(UIIcon, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: "classNameColor",
      stroke: true
    }
  }
});

type IIConProps = IPrimitiveIcon & ComponentPropsWithVariants<typeof UIIcon, typeof iconStyle>;

export const Icon = ({ size, className, ...props }: IIConProps) => {
  if (typeof size === "number") {
    return <UIIcon {...props} className={iconStyle({ class: className })} size={size} />;
  } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
    return <UIIcon {...props} className={iconStyle({ class: className })} />;
  }
  return <UIIcon {...props} className={iconStyle({ size, class: className })} />;
};

type ParameterTypes = Omit<Parameters<typeof createIcon>[0], "Root">;

const createIconUI = ({ ...props }: ParameterTypes) => {
  const UIIconCreateIcon = createIcon({
    Root: Svg,
    ...props
  }) as React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
      React.RefAttributes<React.ComponentRef<typeof Svg>>
  >;

  return function UIIcon({
    ...inComingProps
  }: ComponentPropsWithVariants<typeof UIIconCreateIcon, typeof iconStyle>) {
    return <UIIconCreateIcon {...inComingProps} />;
  };
};

export { createIconUI as createIcon };
