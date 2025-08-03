"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Image } from "../../elements/image";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  storyCircleImageStyle,
  storyCircleLabelStyle,
  storyCircleStyle,
  storyRingStyle,
  storyThumbnailStyle
} from "./styles";

const SCOPE = "STORY_CIRCLE";

type IContext = IStyleContext<typeof storyCircleStyle>;

const StoryCircleRoot = withStyleContext<IContext, typeof Pressable>(Pressable, SCOPE);

export type IStoryCircleProps = ComponentPropsWithVariants<
  typeof StoryCircleRoot,
  typeof storyCircleStyle
>;

export function StoryCircle({ className, size = "md", children, ...props }: IStoryCircleProps) {
  return (
    <StoryCircleRoot
      {...props}
      className={storyCircleStyle({ size, class: className })}
      context={{ size }}
    >
      {children}
    </StoryCircleRoot>
  );
}

type IStoryCircleRingProps = ComponentPropsWithVariants<typeof View, typeof storyRingStyle>;

export function StoryCircleRing({
  className,
  status = "watched",
  children,
  ...props
}: IStoryCircleRingProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={storyRingStyle({
        status,
        parentVariants: {
          size
        },
        class: className
      })}
    >
      <View className={storyThumbnailStyle({ parentVariants: { size } })}>{children}</View>
    </View>
  );
}

type IStoryCircleImageProps = ComponentPropsWithVariants<
  typeof Image,
  typeof storyCircleImageStyle
>;

export function StoryCircleImage({ className, ...props }: IStoryCircleImageProps) {
  return <Image {...props} className={storyCircleImageStyle({ class: className })} />;
}

type IStoryCircleLabelProps = ComponentPropsWithVariants<typeof Text, typeof storyCircleLabelStyle>;

export function StoryCircleLabel({ className, children, ...props }: IStoryCircleLabelProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={storyCircleLabelStyle({ parentVariants: { size }, class: className })}
    >
      {children}
    </Text>
  );
}
