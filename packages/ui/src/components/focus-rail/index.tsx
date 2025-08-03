"use client";

import type { ReactNode } from "react";
import type { NativeScrollEvent, NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import { View } from "../../elements/view";
import {
  focusCardActiveStyle,
  focusCardTransitionStyle,
  focusRailContainerStyle,
  focusRailScrollContainerStyle
} from "./styles";

const SCOPE = "FOCUS_RAIL";

const FocusRailRoot = withStyleContext(View, SCOPE);

interface FocusRailProps {
  children: ReactNode;
  onFocusChange?: (index: number) => void;
}

function FocusRailCard({ 
  children, 
  isActive, 
  onPress 
}: { 
  children: ReactNode; 
  isActive: boolean;
  onPress: () => void;
}) {
  const cardStyle: StyleProp<ViewStyle> = {
    ...focusCardTransitionStyle,
    ...(isActive ? focusCardActiveStyle : {}),
    zIndex: isActive ? 1 : 0
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={cardStyle}>{children}</View>
    </TouchableOpacity>
  );
}

export function FocusRail({ children, onFocusChange, ...props }: FocusRailProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollViewRef = useRef<ScrollView>(null);
  const isScrollingRef = useRef(false);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    if (scrollViewRef.current && scrollViewWidth > 0) {
      const itemWidth = scrollViewWidth / 3;
      const scrollPosition = index * itemWidth - itemWidth;

      isScrollingRef.current = true;
      scrollViewRef.current.scrollTo({
        x: Math.max(0, scrollPosition),
        animated: true
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 300);
    }
  }, [scrollViewWidth]);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollingRef.current) return;
    
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const scrollPosition = contentOffset.x;
    const containerWidth = layoutMeasurement.width;
    const itemWidth = containerWidth / 3;
    const centerPosition = scrollPosition + containerWidth / 2;
    const newActiveIndex = Math.floor(centerPosition / itemWidth);
    
    if (newActiveIndex !== activeIndex && newActiveIndex >= 0) {
      setActiveIndex(newActiveIndex);
      onFocusChange?.(newActiveIndex);
    }
  }, [activeIndex, onFocusChange]);

  const handleCardPress = useCallback((index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      onFocusChange?.(index);
      scrollToIndex(index);
    }
  }, [activeIndex, onFocusChange, scrollToIndex]);

  return (
    <FocusRailRoot {...props} className={focusRailContainerStyle({})}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className={focusRailScrollContainerStyle({})}
        onLayout={event => setScrollViewWidth(event.nativeEvent.layout.width)}
      >
        {React.Children.toArray(children).map((child, index) => (
          <FocusRailCard 
            key={index}
            isActive={index === activeIndex}
            onPress={() => handleCardPress(index)}
          >
            {child}
          </FocusRailCard>
        ))}
      </ScrollView>
    </FocusRailRoot>
  );
}