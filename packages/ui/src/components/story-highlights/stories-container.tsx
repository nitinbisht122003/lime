"use client";

import type { ComponentPropsWithVariants } from "../../types";
import { View } from "../../elements/view";
import { storyContainerStyle } from "./styles";

type IStoriesContainerProps = ComponentPropsWithVariants<typeof View, typeof storyContainerStyle>;

export function StoriesContainer({ className, children, ...props }: IStoriesContainerProps) {
  return (
    <View {...props} className={storyContainerStyle({ class: className })}>
      {children}
    </View>
  );
}
