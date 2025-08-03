"use client";

import { useCallback, useState } from "react";

import type { StoryGroupViewModel, StoryHighlightsViewModel } from "@app/types/limeroad";

import { StoriesContainer } from "./stories-container";
import { StoryViewer } from "./story-viewer";

export interface StoryHighlightsProps {
  highlights: StoryHighlightsViewModel;
  className?: string;
}

export function StoryHighlights({ highlights, className }: StoryHighlightsProps) {
  const { story_groups: storyGroups } = highlights;

  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleStoryPress = useCallback(
    (storyGroup: StoryGroupViewModel) => {
      const groupIndex = storyGroups.findIndex((group) => group.id === storyGroup.id);

      if (groupIndex === -1) return; // Handle case where group is not found

      setSelectedGroupIndex(groupIndex);
      setIsViewerOpen(true);
    },
    [storyGroups]
  );

  const handleClose = useCallback(() => {
    setIsViewerOpen(false);
  }, []);

  return (
    <>
      <StoriesContainer
        storyGroups={storyGroups}
        onStoryPress={handleStoryPress}
        className={className}
      />
      {selectedGroupIndex !== null && (
        <StoryViewer
          isOpen={isViewerOpen}
          storyGroups={storyGroups}
          groupIndex={selectedGroupIndex}
          onClose={handleClose}
          onGroupChange={setSelectedGroupIndex}
          onComplete={handleClose}
        />
      )}
    </>
  );
}
