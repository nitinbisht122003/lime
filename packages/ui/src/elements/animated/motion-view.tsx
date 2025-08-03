"use client";

import type { MotionComponentProps } from "@legendapp/motion";
import type { ComponentProps, ComponentType } from "react";
import type { ViewStyle } from "react-native";
import { Motion } from "@legendapp/motion";
import { cssInterop } from "nativewind";

import type { View } from "../view";

type IMotionViewProps = ComponentProps<typeof View> &
  MotionComponentProps<typeof View, ViewStyle, unknown, unknown, unknown>;

export const MotionView = Motion.View as ComponentType<IMotionViewProps>;

cssInterop(MotionView, { className: "style" });
