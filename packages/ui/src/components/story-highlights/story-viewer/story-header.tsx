import type { ComponentPropsWithVariants } from "../../../types";
import { Image } from "../../../elements/image";
import { Pressable } from "../../../elements/pressable";
import { Text } from "../../../elements/text";
import { View } from "../../../elements/view";
import {
  storyCloseButtonStyle,
  storyHeaderStyle,
  storyTimestampStyle,
  storyUserAvatarStyle,
  storyUserInfoStyle,
  storyUserNameStyle
} from "./styles";

type IStoryHeaderProps = ComponentPropsWithVariants<typeof View, typeof storyHeaderStyle>;

export function StoryHeader({ className, children, ...props }: IStoryHeaderProps) {
  return (
    <View {...props} className={storyHeaderStyle({ class: className })}>
      {children}
    </View>
  );
}

type IStoryUserInfoProps = ComponentPropsWithVariants<typeof View, typeof storyUserInfoStyle>;

export function StoryUserInfo({ className, children, ...props }: IStoryUserInfoProps) {
  return (
    <View {...props} className={storyUserInfoStyle({ class: className })}>
      {children}
    </View>
  );
}

type IStoryUserAvatarProps = ComponentPropsWithVariants<typeof Image, typeof storyUserAvatarStyle>;

export function StoryUserAvatar({ className, size = "xs", ...props }: IStoryUserAvatarProps) {
  return <Image {...props} size={size} className={storyUserAvatarStyle({ class: className })} />;
}

type IStoryUserNameProps = ComponentPropsWithVariants<typeof Text, typeof storyUserNameStyle>;

export function StoryUserName({ className, children, ...props }: IStoryUserNameProps) {
  return (
    <Text {...props} className={storyUserNameStyle({ class: className })}>
      {children}
    </Text>
  );
}

type IStoryTimeStampProps = ComponentPropsWithVariants<typeof Text, typeof storyTimestampStyle>;

export function StoryTimeStamp({ className, children, ...props }: IStoryTimeStampProps) {
  return (
    <Text {...props} className={storyTimestampStyle({ class: className })}>
      {children}
    </Text>
  );
}

type IStoryCloseButtonProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof storyCloseButtonStyle
>;

export function StoryCloseButton({ className, children, ...props }: IStoryCloseButtonProps) {
  return (
    <Pressable {...props} className={storyCloseButtonStyle({ class: className })}>
      {children}
    </Pressable>
  );
}
