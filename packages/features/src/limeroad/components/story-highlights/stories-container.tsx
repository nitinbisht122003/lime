"use client";

import type { ComponentProps } from "react";

import type { StoryGroupViewModel } from "@app/types/limeroad";
import { StoriesContainer as StoriesContainerUI } from "@app/ui/components/story-highlights";

import { StoryCircle } from "./story-circle";

export type StoriesContainerProps = {
  storyGroups: StoryGroupViewModel[];
  onStoryPress: (storyGroup: StoryGroupViewModel) => void;
  maxVisibleStories?: number;
} & ComponentProps<typeof StoriesContainerUI>;

export function StoriesContainer({
  storyGroups,
  onStoryPress,
  maxVisibleStories,
  className
}: StoriesContainerProps) {
  const visibleStories = maxVisibleStories ? storyGroups.slice(0, maxVisibleStories) : storyGroups;

  return (
    <StoriesContainerUI className={className}>
      {visibleStories.map((storyGroup) => (
        <StoryCircle key={storyGroup.id} storyGroup={storyGroup} onPress={onStoryPress} />
      ))}
    </StoriesContainerUI>
  );
}
