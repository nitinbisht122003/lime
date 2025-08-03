"use client";

import type { LayoutChangeEvent } from "react-native";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import type { TickerAnimationProps, TickerProps } from "./types";
import { AnimatedView } from "../../elements/animated";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  tickerAnimationStyle,
  tickerContainerStyle,
  tickerItemsStyle,
  tickerSeparatorStyle,
  tickerTextStyle
} from "./styles";

const SCOPE = "Ticker";

type IContext = IStyleContext<typeof tickerContainerStyle> & {
  containerWidth: number;
};

const TickerRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type ITickerContainerProps = ComponentPropsWithVariants<
  typeof TickerRoot,
  typeof tickerContainerStyle
>;

export function TickerContainer({
  className,
  size = "sm",
  variant = "lime",
  children,
  ...props
}: ITickerContainerProps) {
  const [containerWidth, setContainerWidth] = useState(360); // Default width

  // Measure the container width
  const measureContainerWidth = useCallback(
    (width: number) => {
      if (width > 0 && width !== containerWidth) {
        setContainerWidth(width);
      }
    },
    [containerWidth]
  );

  return (
    <TickerRoot
      {...props}
      className={tickerContainerStyle({ class: className, size, variant })}
      context={{ size, variant, containerWidth }}
      onLayout={(event: LayoutChangeEvent) => measureContainerWidth(event.nativeEvent.layout.width)}
    >
      {children}
    </TickerRoot>
  );
}

/**
 * TickerText component to display text items
 */
type ITickerTextProps = ComponentPropsWithVariants<typeof Text, typeof tickerTextStyle>;

export function TickerText({ className, children, ...props }: ITickerTextProps) {
  const { size = "sm" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text {...props} className={tickerTextStyle({ class: className, parentVariants: { size } })}>
      {children}
    </Text>
  );
}

/**
 * TickerSeparator component to display separators between items
 */
type ITickerSeparatorProps = ComponentPropsWithVariants<typeof Text, typeof tickerSeparatorStyle>;

export function TickerSeparator({ children, className, ...props }: ITickerSeparatorProps) {
  return (
    <Text {...props} className={tickerSeparatorStyle({ class: className })}>
      {children}
    </Text>
  );
}

/**
 * TickerItems component to manage the repetition of items
 */
type ITickerItemsProps = ComponentPropsWithVariants<typeof View, typeof tickerItemsStyle> & {
  approximateWidth?: number;
  repeat?: number;
};

export function TickerItems({
  className,
  children,
  repeat,
  approximateWidth = 360
}: ITickerItemsProps) {
  const { containerWidth } = useStyleContext<IContext>(SCOPE);

  const repeatCount = useMemo(() => {
    if (repeat) return repeat;

    return getRepeatCount(approximateWidth, containerWidth);
  }, [repeat, approximateWidth, containerWidth]);

  // Create an array of repeated children for smoother looping
  const repeatedChildren = useMemo(() => {
    return Array(repeatCount)
      .fill(null)
      .map((_, index) => (
        <View key={index} className={tickerItemsStyle({})}>
          {children}
        </View>
      ));
  }, [children, repeatCount]);

  return <View className={tickerItemsStyle({ class: className })}>{repeatedChildren}</View>;
}

/**
 * TickerAnimation component to handle the scrolling animation using Animated.View
 */
export function TickerAnimation({ children, speed, direction, repeat = 2 }: TickerAnimationProps) {
  const { containerWidth } = useStyleContext<IContext>(SCOPE);

  const [contentWidth, setContentWidth] = useState(0);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = useRef<Animated.CompositeAnimation | null>(null);

  // Measure dimensions of content
  const measureContentWidth = useCallback(
    (width: number) => {
      if (width > 0 && width !== contentWidth) {
        setContentWidth(width);
      }
    },
    [contentWidth]
  );

  // Calculate animation duration based on content width and speed
  const calculateDuration = useCallback(
    (distance: number) => {
      if (speed === 0) return 0;

      // Time = Distance / Speed (in milliseconds)
      return (distance / speed) * 1000;
    },
    [speed]
  );

  // Calculate start and end positions based on direction
  const startPos = direction === "left" ? 0 : -contentWidth;
  let endPos = 0;

  // Adjust end position
  if (contentWidth > containerWidth) {
    const offset = contentWidth / repeat;
    endPos = direction === "left" ? -contentWidth + offset : contentWidth - offset;
  } else {
    endPos = direction === "left" ? -contentWidth + containerWidth : contentWidth;
  }

  const duration = calculateDuration(contentWidth);

  // Start animation when both widths are measured
  useEffect(() => {
    if (contentWidth <= 0 || duration === 0) return;

    // Reset animation
    animatedValue.setValue(startPos);

    // Define animation
    animation.current = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: endPos,
          duration,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ])
    );

    // Start animation
    animation.current.start();

    return () => {
      if (animation.current) {
        animation.current.stop();
      }
    };
  }, [animatedValue, contentWidth, duration, endPos, startPos]);

  return (
    <AnimatedView
      className={tickerAnimationStyle({})}
      style={{ transform: [{ translateX: animatedValue }] }}
    >
      <View
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          measureContentWidth(width);
        }}
      >
        {children}
      </View>
    </AnimatedView>
  );
}

/**
 * Main Ticker component
 */
export function Ticker({
  texts,
  separator = "•",
  speed = 200,
  direction = "left",
  repeat,
  renderItem,
  renderSeparator,
  ...props
}: ITickerContainerProps & TickerProps) {
  // Create ticker items from the texts array
  const tickerItems = useSeparatedItems(texts, separator, renderItem, renderSeparator);

  return (
    <TickerContainer {...props}>
      <TickerAnimation speed={speed} direction={direction} repeat={repeat}>
        <TickerItems repeat={repeat} approximateWidth={getTextsWidth(texts)}>
          {tickerItems}
        </TickerItems>
      </TickerAnimation>
    </TickerContainer>
  );
}

// helpers
export function useSeparatedItems(
  texts: string[],
  separator: string,
  renderItem?: (item: string, index: number) => React.ReactNode,
  renderSeparator?: () => React.ReactNode
) {
  const separatedItems = useMemo(() => {
    return texts.map((text, index) => (
      <Fragment key={text}>
        {index > 0 &&
          (renderSeparator ? renderSeparator() : <TickerSeparator>{separator}</TickerSeparator>)}
        {renderItem ? renderItem(text, index) : <TickerText>{text}</TickerText>}
      </Fragment>
    ));
  }, [texts, separator, renderItem, renderSeparator]);

  return separatedItems;
}

function getTextsWidth(texts: string[]) {
  const totalLength = texts.reduce((acc, text) => acc + text.length, 0);
  const separatorLength = texts.length - 1;
  const totalContentLength = totalLength * 6 + separatorLength * 16; // 6px per character and 16px for separator

  return totalContentLength;
}

function getRepeatCount(approximateWidth: number, containerWidth: number) {
  const repeatCount = Math.ceil(containerWidth / approximateWidth);
  // Ensure at least 2 repetitions
  return Math.max(1, repeatCount) + 1;
}
