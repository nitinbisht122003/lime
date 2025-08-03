"use client";

import type { ComponentPropsWithVariants } from "../../../types";
import { View } from "../../../elements/view";
import { storyFooterStyle } from "./styles";

type IStoryFooterProps = ComponentPropsWithVariants<typeof View, typeof storyFooterStyle>;

export function StoryFooter({ className, children, ...props }: IStoryFooterProps) {
  return (
    <View {...props} className={storyFooterStyle({ class: className })}>
      {children}
    </View>
  );
}
