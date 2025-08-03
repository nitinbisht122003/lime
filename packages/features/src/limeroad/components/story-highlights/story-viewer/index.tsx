"use client";

import { useCallback, useState } from "react";

import type { StoryGroupViewModel } from "@app/types/limeroad";
import {
  StoryContent,
  StoryContentImage,
  StoryFooter,
  StoryViewer as StoryViewerUI
} from "@app/ui/components/story-highlights";

import { useStoryNavigation } from "../hooks/use-story-navigation";
import { useStoryTimer } from "../hooks/use-story-timer";
import { StoryControls } from "./story-controls";
import { StoryHeader } from "./story-header";

export interface StoryViewerProps {
  isOpen: boolean;
  storyGroups: StoryGroupViewModel[];
  groupIndex: number;
  onClose?: () => void;
  onGroupChange?: (index: number) => void;
  onStoryChange?: (storyIndex: number, groupIndex: number) => void;
  onComplete?: (groupId: string) => void;
}

export function StoryViewer({
  isOpen,
  storyGroups,
  groupIndex,
  onClose,
  onGroupChange,
  onStoryChange,
  onComplete
}: StoryViewerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const resetState = useCallback(() => {
    setCurrentStoryIndex(0);
    setIsPaused(false);
  }, []);

  const handleStoryChange = useCallback(
    (storyIndex: number, groupIndex: number) => {
      setCurrentStoryIndex(storyIndex);
      onStoryChange?.(storyIndex, groupIndex);
    },
    [onStoryChange]
  );

  const handleComplete = useCallback(
    (groupId: string) => {
      resetState();
      onComplete?.(groupId);
    },
    [onComplete, resetState]
  );

  const handleClose = useCallback(() => {
    resetState();
    onClose?.();
  }, [onClose, resetState]);

  const { currentGroup, currentStory, goToNextStory, goToPrevStory } = useStoryNavigation({
    storyGroups,
    groupIndex,
    storyIndex: currentStoryIndex,
    onGroupChange,
    onStoryChange: handleStoryChange,
    onComplete: handleComplete
  });

  const { progress } = useStoryTimer({
    isOpen,
    isPaused,
    story: currentStory,
    onComplete: goToNextStory
  });

  if (!currentStory || !currentGroup) {
    return null;
  }

  return (
    <StoryViewerUI isOpen={isOpen} onClose={handleClose}>
      <StoryHeader
        stories={currentGroup.stories}
        currentIndex={currentStoryIndex}
        progress={progress}
        onClose={handleClose}
      />

      <StoryContent>
        <StoryContentImage src={currentStory.media.url} alt={currentStory.id} />
      </StoryContent>

      <StoryControls
        onLeftPress={goToPrevStory}
        onRightPress={goToNextStory}
        onLongPress={() => setIsPaused(true)}
        onPressOut={() => setIsPaused(false)}
      />

      <StoryFooter />
    </StoryViewerUI>
  );
}
