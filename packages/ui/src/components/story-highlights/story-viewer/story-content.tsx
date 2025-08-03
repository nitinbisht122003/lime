"use client";

import type { ComponentPropsWithVariants } from "../../../types";
import { Image } from "../../../elements/image";
import { View } from "../../../elements/view";
import { storyContentStyle, storyImageStyle } from "./styles";

type IStoryContentProps = ComponentPropsWithVariants<typeof View, typeof storyContentStyle>;

export function StoryContent({ className, children, ...props }: IStoryContentProps) {
  return (
    <View {...props} className={storyContentStyle({ class: className })}>
      {children}
    </View>
  );
}

type IStoryContentImageProps = ComponentPropsWithVariants<typeof Image, typeof storyImageStyle>;

export function StoryContentImage({ className, size = "full", ...props }: IStoryContentImageProps) {
  return <Image {...props} size={size} className={storyImageStyle({ class: className })} />;
}
