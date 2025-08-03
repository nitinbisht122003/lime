import { Animated, Easing, Platform } from "react-native";

import type { ComponentPropsWithVariants } from "../../types";
import { View } from "../../elements/view";
import { skeletonStyle, skeletonTextStyle } from "./styles";

type ISkeletonProps = ComponentPropsWithVariants<typeof View, typeof skeletonStyle> & {
  isLoaded?: boolean;
  startColor?: string;
};

export function Skeleton({
  className,
  variant,
  children,
  startColor = "bg-background-200",
  isLoaded = false,
  speed = 2,
  ...props
}: ISkeletonProps) {
  const pulseAnim = new Animated.Value(1);
  const customTimingFunction = Easing.bezier(0.4, 0, 0.6, 1);
  const fadeDuration = 0.6;
  const animationDuration = (fadeDuration * 10000) / speed; // Convert seconds to milliseconds

  const pulse = Animated.sequence([
    Animated.timing(pulseAnim, {
      toValue: 1, // Start with opacity 1
      duration: animationDuration / 2, // Third of the animation duration
      easing: customTimingFunction,
      useNativeDriver: Platform.OS !== "web"
    }),
    Animated.timing(pulseAnim, {
      toValue: 0.75,
      duration: animationDuration / 2, // Third of the animation duration
      easing: customTimingFunction,
      useNativeDriver: Platform.OS !== "web"
    }),
    Animated.timing(pulseAnim, {
      toValue: 1,
      duration: animationDuration / 2, // Third of the animation duration
      easing: customTimingFunction,
      useNativeDriver: Platform.OS !== "web"
    })
  ]);

  if (!isLoaded) {
    Animated.loop(pulse).start();
    return (
      <Animated.View
        {...props}
        style={{ opacity: pulseAnim }}
        className={`${startColor} ${skeletonStyle({
          variant,
          class: className
        })}`}
      />
    );
  } else {
    Animated.loop(pulse).stop();

    return children;
  }
}

type ISkeletonTextProps = ComponentPropsWithVariants<typeof View, typeof skeletonTextStyle> & {
  _lines?: number;
  isLoaded?: boolean;
  startColor?: string;
};

export function SkeletonText({
  className,
  _lines,
  isLoaded = false,
  startColor = "bg-background-200",
  gap = 2,
  children,
  ref,
  ...props
}: ISkeletonTextProps) {
  if (!isLoaded) {
    if (_lines) {
      return (
        <View
          className={`${skeletonTextStyle({
            gap
          })}`}
          ref={ref}
        >
          {Array.from({ length: _lines }).map((_, index) => (
            <Skeleton
              {...props}
              key={index}
              className={`${startColor} ${skeletonTextStyle({
                class: className
              })}`}
            />
          ))}
        </View>
      );
    } else {
      return (
        <Skeleton
          {...props}
          ref={ref}
          className={`${startColor} ${skeletonTextStyle({
            class: className
          })}`}
        />
      );
    }
  } else {
    return children;
  }
}
