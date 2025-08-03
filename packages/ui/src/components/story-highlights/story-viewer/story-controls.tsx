import type { ComponentPropsWithVariants } from "../../../types";
import { Pressable } from "../../../elements/pressable";
import { View } from "../../../elements/view";
import { storyControlsStyle, storyTouchAreaStyle } from "./styles";

type IStoryControlsProps = ComponentPropsWithVariants<typeof View, typeof storyControlsStyle>;

export function StoryControls({ className, ...props }: IStoryControlsProps) {
  return <View {...props} className={storyControlsStyle({ class: className })} />;
}

type IStoryTouchAreaProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof storyTouchAreaStyle
>;

export function StoryTouchArea({ className, ...props }: IStoryTouchAreaProps) {
  return <Pressable {...props} className={storyTouchAreaStyle({ class: className })} />;
}
