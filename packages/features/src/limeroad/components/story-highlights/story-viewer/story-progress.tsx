"use client";

import type { StoryItemViewModel } from "@app/types/limeroad";
import {
  StoryProgressBar,
  StoryProgressContainer,
  StoryProgressIndicator
} from "@app/ui/components/story-highlights";

export interface StoryProgressProps {
  stories: StoryItemViewModel[];
  currentIndex: number;
  progress: number;
}

export function StoryProgress({ stories, currentIndex, progress }: StoryProgressProps) {
  return (
    <StoryProgressContainer>
      {stories.map((_, index) => {
        const status =
          index < currentIndex ? "completed" : index === currentIndex ? "current" : "upcoming";

        return (
          <StoryProgressBar key={index} status={status} value={progress}>
            {index === currentIndex && <StoryProgressIndicator />}
          </StoryProgressBar>
        );
      })}
    </StoryProgressContainer>
  );
}
