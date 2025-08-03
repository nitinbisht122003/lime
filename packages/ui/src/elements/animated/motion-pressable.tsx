"use client";

import type { MotionComponentProps } from "@legendapp/motion";
import type { ComponentProps, ComponentType } from "react";
import type { ViewStyle } from "react-native";
import { createMotionAnimatedComponent } from "@legendapp/motion";
import { cssInterop } from "nativewind";

import { Pressable } from "../pressable";

type IMotionPressableProps = ComponentProps<typeof Pressable> &
  MotionComponentProps<typeof Pressable, ViewStyle, unknown, unknown, unknown>;

export const MotionPressable = createMotionAnimatedComponent(
  Pressable
) as ComponentType<IMotionPressableProps>;

cssInterop(MotionPressable, { className: "style" });
