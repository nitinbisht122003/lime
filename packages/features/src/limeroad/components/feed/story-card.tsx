"use client";

import type { ComponentProps } from "react";

import type { StoryViewModel } from "@app/types/limeroad";
import { GridLayout } from "@app/ui/components/grid-layout";
import { Icon } from "@app/ui/components/icon";
import {
  StoryCardActions,
  StoryCardContent,
  StoryCardDescription,
  StoryCardImageContainer,
  StoryCardLikeButton,
  StoryCardProductCount,
  StoryCardShareButton,
  StoryCardTitle,
  StoryCard as StoryCardUI,
  StoryCardUserAvatar,
  StoryCardUserFollowers,
  StoryCardUserInfo,
  StoryCardUserName
} from "@app/ui/components/story-card";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { ImageStackIcon } from "@app/ui/icons/image-stack-icon";

type StoryCardProps = {
  story: StoryViewModel;
} & ComponentProps<typeof StoryCardUI>;

export function StoryCard({ story, className }: StoryCardProps) {
  const { user, grid_data, description, title, products_count = 0 } = story;

  return (
    <StoryCardUI className={className}>
      <StoryCardUserInfo className="mb-2">
        <StoryCardUserAvatar src={user.avatar} alt={`${user.name}'s profile picture`} />
        <View>
          <StoryCardUserName>{user.name}</StoryCardUserName>
          <StoryCardUserFollowers>
            {user.followers.toLocaleString()} followers
          </StoryCardUserFollowers>
        </View>
      </StoryCardUserInfo>

      <StoryCardImageContainer>
        <GridLayout data={grid_data} />
        <StoryCardProductCount>
          <View className="flex-row items-center gap-2">
            <Icon as={ImageStackIcon} className="h-5 w-5" />
            <Text>{products_count}</Text>
          </View>
        </StoryCardProductCount>
      </StoryCardImageContainer>

      <StoryCardContent>
        <View className="flex-row items-center justify-between">
          <StoryCardTitle>{title}</StoryCardTitle>
          <StoryCardActions>
            <StoryCardLikeButton />
            <StoryCardShareButton />
          </StoryCardActions>
        </View>
        <StoryCardDescription>{description}</StoryCardDescription>
      </StoryCardContent>
    </StoryCardUI>
  );
}
