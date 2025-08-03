"use client";

import {
  StoryControls as StoryControlsUI,
  StoryTouchArea
} from "@app/ui/components/story-highlights";

export interface StoryControlsProps {
  onLeftPress?: () => void;
  onRightPress?: () => void;
  onLongPress?: () => void;
  onPressOut?: () => void;
  onLeftSwipe?: () => void;
  onRightSwipe?: () => void;
}

export function StoryControls({
  onLeftPress,
  onRightPress,
  onLongPress,
  onPressOut
}: StoryControlsProps) {
  const handleLeftPress = () => {
    onLeftPress?.();
  };

  const handleRightPress = () => {
    onRightPress?.();
  };

  const handleLongPress = () => {
    onLongPress?.();
  };

  const handlePressOut = () => {
    onPressOut?.();
  };

  return (
    <StoryControlsUI>
      <StoryTouchArea
        onPress={handleLeftPress}
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
      />
      <StoryTouchArea
        onPress={handleRightPress}
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
      />
    </StoryControlsUI>
  );
}
