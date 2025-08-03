"use client";

import type { StoryItemViewModel } from "@app/types/limeroad";
import { dayjs } from "@app/core/utils";
import { Icon } from "@app/ui/components/icon";
import {
  StoryCloseButton,
  StoryHeader as StoryHeaderUI,
  StoryTimeStamp,
  StoryUserAvatar,
  StoryUserInfo,
  StoryUserName
} from "@app/ui/components/story-highlights";
import { View } from "@app/ui/elements/view";
import { XIcon } from "@app/ui/icons/x-icon";

import { StoryProgress } from "./story-progress";

export interface StoryHeaderProps {
  stories: StoryItemViewModel[];
  currentIndex: number;
  progress: number;
  onClose: () => void;
}

export function StoryHeader({ stories, currentIndex, progress, onClose }: StoryHeaderProps) {
  const story = stories[currentIndex];

  if (!story) {
    return null;
  }

  const { user_avatar, user_name, timestamp } = story;

  const timeAgo = dayjs(timestamp).fromNow(true);

  return (
    <StoryHeaderUI className="gap-2">
      <StoryProgress stories={stories} currentIndex={currentIndex} progress={progress} />
      <View className="flex-row items-center justify-between">
        <StoryUserInfo>
          <StoryUserAvatar src={user_avatar} alt={user_name} />
          <View className="flex-row items-baseline gap-2">
            <StoryUserName>{user_name}</StoryUserName>
            <StoryTimeStamp>{timeAgo}</StoryTimeStamp>
          </View>
        </StoryUserInfo>
        <StoryCloseButton onPress={onClose}>
          <Icon as={XIcon} size="2xs" className="text-typography-800" />
        </StoryCloseButton>
      </View>
    </StoryHeaderUI>
  );
}
