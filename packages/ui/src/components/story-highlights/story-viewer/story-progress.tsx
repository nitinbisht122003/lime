import type { ComponentPropsWithVariants } from "../../../types";
import { Progress, ProgressFilledTrack } from "../../../components/progress";
import { View } from "../../../elements/view";
import {
  storyProgressBarStyle,
  storyProgressContainerStyle,
  storyProgressIndicatorStyle
} from "./styles";

type IStoryProgressContainerProps = ComponentPropsWithVariants<
  typeof View,
  typeof storyProgressContainerStyle
>;

export function StoryProgressContainer({
  className,
  children,
  ...props
}: IStoryProgressContainerProps) {
  return (
    <View {...props} className={storyProgressContainerStyle({ class: className })}>
      {children}
    </View>
  );
}

type IStoryProgressBarProps = ComponentPropsWithVariants<
  typeof Progress,
  typeof storyProgressBarStyle
>;

export function StoryProgressBar({
  className,
  children,
  size = "2xs",
  orientation = "horizontal",
  status = "upcoming",
  ...props
}: IStoryProgressBarProps) {
  return (
    <Progress
      {...props}
      size={size}
      orientation={orientation}
      className={storyProgressBarStyle({ status, class: className })}
    >
      {children}
    </Progress>
  );
}

type IStoryProgressIndicatorProps = ComponentPropsWithVariants<
  typeof ProgressFilledTrack,
  typeof storyProgressIndicatorStyle
>;

export function StoryProgressIndicator({
  className,
  children,
  ...props
}: IStoryProgressIndicatorProps) {
  return (
    <ProgressFilledTrack {...props} className={storyProgressIndicatorStyle({ class: className })}>
      {children}
    </ProgressFilledTrack>
  );
}
