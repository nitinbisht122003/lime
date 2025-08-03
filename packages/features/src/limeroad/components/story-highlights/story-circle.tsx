"use client";

import type { StoryGroupViewModel } from "@app/types/limeroad";
import type { IStoryCircleProps } from "@app/ui/components/story-highlights";
import {
  StoryCircleImage,
  StoryCircleLabel,
  StoryCircleRing,
  StoryCircle as StoryCircleUI
} from "@app/ui/components/story-highlights";

export type StoryCircleProps = {
  storyGroup: StoryGroupViewModel;
  showLabel?: boolean;
  onPress: (storyGroup: StoryGroupViewModel) => void;
} & Omit<IStoryCircleProps, "onPress">;

export function StoryCircle({
  storyGroup,
  size = "md",
  showLabel = true,
  onPress
}: StoryCircleProps) {
  const { label, thumbnail, seen } = storyGroup;

  const handlePress = () => {
    onPress(storyGroup);
  };

  return (
    <StoryCircleUI size={size} onPress={handlePress}>
      <StoryCircleRing status={seen ? "watched" : "unwatched"}>
        <StoryCircleImage src={thumbnail} alt={label} />
      </StoryCircleRing>
      {showLabel && <StoryCircleLabel>{label}</StoryCircleLabel>}
    </StoryCircleUI>
  );
}
