"use client";

import { useState } from "react";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Image } from "../../elements/image";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { HeartIconHOC } from "../../icons/heart-icon";
import { ShareIconHOC } from "../../icons/share-icon";
import { Icon } from "../icon";
import {
  storyCardActionButtonStyle,
  storyCardActionIconStyle,
  storyCardActionsStyle,
  storyCardContentStyle,
  storyCardDescriptionStyle,
  storyCardImageContainerStyle,
  storyCardProductCountStyle,
  storyCardStyle,
  storyCardTitleStyle,
  storyCardUserAvatarStyle,
  storyCardUserFollowersStyle,
  storyCardUserImageSize,
  storyCardUserInfoStyle,
  storyCardUserNameStyle
} from "./styles";

const SCOPE = "StoryCard";

type IContext = IStyleContext<typeof storyCardStyle>;

const StoryCardRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type IStoryCardProps = ComponentPropsWithVariants<typeof StoryCardRoot, typeof storyCardStyle>;

export function StoryCard({ className, size = "md", children, ...props }: IStoryCardProps) {
  return (
    <StoryCardRoot
      {...props}
      className={storyCardStyle({ class: className, size })}
      context={{ size }}
    >
      {children}
    </StoryCardRoot>
  );
}

type IStoryCardUserInfoProps = ComponentPropsWithVariants<
  typeof View,
  typeof storyCardUserInfoStyle
>;

export function StoryCardUserInfo({ className, children, ...props }: IStoryCardUserInfoProps) {
  return (
    <View {...props} className={storyCardUserInfoStyle({ class: className })}>
      {children}
    </View>
  );
}

type IStoryCardUserAvatarProps = ComponentPropsWithVariants<
  typeof Image,
  typeof storyCardUserAvatarStyle
>;

export function StoryCardUserAvatar({ className, ...props }: IStoryCardUserAvatarProps) {
  const { size = "sm" } = useStyleContext<IContext>(SCOPE);

  return (
    <Image
      {...props}
      size={storyCardUserImageSize[size]}
      className={storyCardUserAvatarStyle({ class: className, parentVariants: { size } })}
    />
  );
}

type IStoryCardUserNameProps = ComponentPropsWithVariants<
  typeof Text,
  typeof storyCardUserNameStyle
>;

export function StoryCardUserName({ className, children, ...props }: IStoryCardUserNameProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={storyCardUserNameStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </Text>
  );
}

type IStoryCardUserFollowersProps = ComponentPropsWithVariants<
  typeof Text,
  typeof storyCardUserFollowersStyle
>;

export function StoryCardUserFollowers({
  className,
  children,
  ...props
}: IStoryCardUserFollowersProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={storyCardUserFollowersStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </Text>
  );
}

type IStoryCardImageContainerProps = ComponentPropsWithVariants<
  typeof View,
  typeof storyCardImageContainerStyle
>;

export function StoryCardImageContainer({
  className,
  children,
  ...props
}: IStoryCardImageContainerProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={storyCardImageContainerStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </View>
  );
}

type IStoryCardProductCountProps = ComponentPropsWithVariants<
  typeof View,
  typeof storyCardProductCountStyle
>;

export function StoryCardProductCount({
  className,
  children,
  direction = "bottom-right",
  ...props
}: IStoryCardProductCountProps) {
  return (
    <View {...props} className={storyCardProductCountStyle({ class: className, direction })}>
      {children}
    </View>
  );
}

type IStoryCardContentProps = ComponentPropsWithVariants<typeof View, typeof storyCardContentStyle>;

export function StoryCardContent({ className, children, ...props }: IStoryCardContentProps) {
  return (
    <View {...props} className={storyCardContentStyle({ class: className })}>
      {children}
    </View>
  );
}

type IStoryCardTitleProps = ComponentPropsWithVariants<typeof Text, typeof storyCardTitleStyle>;

export function StoryCardTitle({ className, children, ...props }: IStoryCardTitleProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={storyCardTitleStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </Text>
  );
}

type IStoryCardActionsProps = ComponentPropsWithVariants<typeof View, typeof storyCardActionsStyle>;

export function StoryCardActions({ className, children, ...props }: IStoryCardActionsProps) {
  return (
    <View {...props} className={storyCardActionsStyle({ class: className })}>
      {children}
    </View>
  );
}

type IStoryCardLikeButtonProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof storyCardActionButtonStyle
> & {
  isLiked?: boolean;
};

export function StoryCardLikeButton({
  className,
  isLiked = false,
  onPress,
  ...props
}: IStoryCardLikeButtonProps) {
  const { size } = useStyleContext<IContext>(SCOPE);
  const [liked, setLiked] = useState(isLiked);

  return (
    <Pressable
      {...props}
      className={storyCardActionButtonStyle({
        parentVariants: { size },
        class: className
      })}
      onPress={(e) => {
        setLiked(!liked);
        if (onPress) onPress(e);
      }}
    >
      <Icon
        as={HeartIconHOC({ fill: liked ? "currentColor" : "none" })}
        className={storyCardActionIconStyle({ parentVariants: { size } })}
      />
    </Pressable>
  );
}

type IStoryCardShareButtonProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof storyCardActionButtonStyle
>;

export function StoryCardShareButton({ className, ...props }: IStoryCardShareButtonProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Pressable
      {...props}
      className={storyCardActionButtonStyle({
        parentVariants: { size },
        class: className
      })}
    >
      <Icon
        as={ShareIconHOC({ fill: "#696969" })}
        className={storyCardActionIconStyle({ parentVariants: { size } })}
      />
    </Pressable>
  );
}

type IStoryCardDescriptionProps = ComponentPropsWithVariants<
  typeof Text,
  typeof storyCardDescriptionStyle
>;

export function StoryCardDescription({
  className,
  children,
  ...props
}: IStoryCardDescriptionProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={storyCardDescriptionStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </Text>
  );
}
