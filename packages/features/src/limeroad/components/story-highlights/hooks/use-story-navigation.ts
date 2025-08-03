import { useCallback } from "react";

import type { StoryGroupViewModel } from "@app/types/limeroad";

interface NavigationProps {
  storyGroups: StoryGroupViewModel[];
  groupIndex: number;
  storyIndex: number;
  onGroupChange?: (index: number) => void;
  onStoryChange?: (storyIndex: number, groupIndex: number) => void;
  onComplete?: (groupId: string) => void;
}

export function useStoryNavigation({
  storyGroups,
  groupIndex,
  storyIndex,
  onGroupChange,
  onStoryChange,
  onComplete
}: NavigationProps) {
  const currentGroup = storyGroups[groupIndex];
  const currentStory = currentGroup?.stories[storyIndex];

  const handleGroupOrStoryChange = useCallback(
    (groupIndex: number, storyIndex: number) => {
      const nextGroup = storyGroups[groupIndex];

      if (!nextGroup) return;

      if (nextGroup.id !== currentGroup?.id) {
        onGroupChange?.(groupIndex);
      }

      const nextStory = nextGroup.stories[storyIndex];

      if (!nextStory) return;

      if (nextStory.id !== currentStory?.id) {
        onStoryChange?.(storyIndex, groupIndex);
      }
    },
    [storyGroups, currentGroup?.id, currentStory?.id, onGroupChange, onStoryChange]
  );

  const goToNextStory = useCallback(() => {
    if (!currentGroup) return;

    if (storyIndex < currentGroup.stories.length - 1) {
      // Next story in current group
      handleGroupOrStoryChange(groupIndex, storyIndex + 1);
    } else if (groupIndex < storyGroups.length - 1) {
      // First story in next group
      handleGroupOrStoryChange(groupIndex + 1, 0);
    } else {
      // End of all stories
      onComplete?.(currentGroup.id);
    }
  }, [
    currentGroup,
    storyIndex,
    groupIndex,
    storyGroups.length,
    handleGroupOrStoryChange,
    onComplete
  ]);

  const goToPrevStory = useCallback(() => {
    if (storyIndex > 0) {
      // Previous story in current group
      handleGroupOrStoryChange(groupIndex, storyIndex - 1);
    } else if (groupIndex > 0) {
      // Last story in previous group
      const prevGroup = storyGroups[groupIndex - 1];
      if (prevGroup) {
        handleGroupOrStoryChange(groupIndex - 1, prevGroup.stories.length - 1);
      }
    }
  }, [storyIndex, groupIndex, handleGroupOrStoryChange, storyGroups]);

  return {
    currentGroup,
    currentStory,
    goToNextStory,
    goToPrevStory
  };
}
