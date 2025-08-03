import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

import { animatedHeightContainerStyle, animatedHeightContentStyle } from "./styles";

interface AnimatedHeightProps {
  hide: boolean;
  extraHeight?: number;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const AnimatedHeight = ({
  hide,
  extraHeight = 0,
  children,
  className = "",
  contentClassName = ""
}: AnimatedHeightProps) => {
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const opacityValue = useRef(new Animated.Value(hide ? 0 : 1)).current;
  const heightValue = useRef(new Animated.Value(hide ? 0 : 1)).current;

  // Keep track of the content to force remeasure when content changes
  const contentRef = useRef(children);
  // Flag to track first render measurement
  const [measured, setMeasured] = useState(false);

  // Remeasure when content changes
  useEffect(() => {
    if (contentRef.current !== children) {
      contentRef.current = children;
      // Reset measurement to force recalculation
      if (measured) {
        setMeasured(false);
      }
    }
  }, [children, measured]);

  // Handle height and opacity animations

  useEffect(() => {
    // Only animate if we have a valid measured height
    if (measuredHeight > 0) {
      Animated.timing(opacityValue, {
        toValue: hide ? 0 : 1,
        duration: 300, // Slightly longer duration for smoother transition
        useNativeDriver: false
      }).start();

      Animated.timing(heightValue, {
        toValue: hide ? 0 : 1,
        duration: 300,
        useNativeDriver: false
      }).start();
    }
  }, [hide, measuredHeight, heightValue, opacityValue]);

  // Calculate the actual height including any extra padding
  const totalHeight = measuredHeight + extraHeight;

  // Create the animated height style
  const animatedHeight = heightValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, totalHeight]
  });

  return (
    <Animated.View
      className={animatedHeightContainerStyle({ className })}
      style={{
        height: animatedHeight
      }}
    >
      <Animated.View
        className={animatedHeightContentStyle({ className: contentClassName })}
        style={{
          opacity: opacityValue
        }}
        onLayout={(e) => {
          const height = Math.round(e.nativeEvent.layout.height) + extraHeight;
          console.log(`Measured height: ${height}`);
          setMeasuredHeight(height);
        }}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default AnimatedHeight;
