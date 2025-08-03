"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { createProgress } from "@gluestack-ui/progress";
import { cssInterop } from "nativewind";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { View } from "../../elements/view";
import { progressFilledTrackStyle, progressStyle } from "./styles";

const SCOPE = "PROGRESS";

type IContext = IStyleContext<typeof progressStyle>;

const ProgressRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

export const UIProgress = createProgress({
  Root: ProgressRoot,
  FilledTrack: View
});

cssInterop(UIProgress, { className: "style" });
cssInterop(UIProgress.FilledTrack, { className: "style" });

type IProgressProps = ComponentPropsWithVariants<typeof UIProgress, typeof progressStyle>;

export function Progress({
  className,
  size = "md",
  orientation = "horizontal",
  ...props
}: IProgressProps) {
  return (
    <UIProgress
      {...props}
      className={progressStyle({ size, orientation, class: className })}
      context={{ size, orientation }}
      orientation={orientation}
    />
  );
}

type IProgressFilledTrackProps = ComponentPropsWithVariants<
  typeof UIProgress.FilledTrack,
  typeof progressFilledTrackStyle
>;

export function ProgressFilledTrack({ className, ...props }: IProgressFilledTrackProps) {
  const { size: parentSize, orientation: parentOrientation } = useStyleContext<IContext>(SCOPE);

  return (
    <UIProgress.FilledTrack
      className={progressFilledTrackStyle({
        parentVariants: {
          size: parentSize,
          orientation: parentOrientation
        },
        class: className
      })}
      {...props}
    />
  );
}
