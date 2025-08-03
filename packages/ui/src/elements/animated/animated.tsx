"use client";

import { Animated, Easing } from "react-native";
import { cssInterop } from "nativewind";

export const AnimatedView = Animated.View;

export { Animated, Easing };

cssInterop(AnimatedView, { className: "style" });
