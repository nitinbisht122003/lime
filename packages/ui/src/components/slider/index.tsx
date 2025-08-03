"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { createSlider } from "@gluestack-ui/slider";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Pressable } from "../../elements/pressable";
import { View } from "../../elements/view";
import { sliderFilledTrackStyle, sliderStyle, sliderThumbStyle, sliderTrackStyle } from "./styles";

const SCOPE = "SLIDER";

type IContext = IStyleContext<typeof sliderStyle>;

const Root = withStyleContext<IContext, typeof View>(View, SCOPE);

const UISlider = createSlider({
  Root: Root,
  Thumb: View,
  Track: Pressable,
  FilledTrack: View,
  ThumbInteraction: View
});

type ISliderProps = ComponentPropsWithVariants<typeof UISlider, typeof sliderStyle>;

export const Slider = ({
  className,
  type = "primary",
  size = "md",
  orientation = "horizontal",
  isReversed = false,
  isDisabled = false,
  ...props
}: ISliderProps) => {
  return (
    <UISlider
      isReversed={isReversed}
      orientation={orientation}
      isDisabled={isDisabled}
      {...props}
      className={sliderStyle({
        type,
        orientation,
        isReversed,
        isDisabled,
        class: className
      })}
      context={{ type, size, orientation, isReversed, isDisabled }}
    />
  );
};

type ISliderThumbProps = ComponentPropsWithVariants<typeof UISlider.Thumb, typeof sliderThumbStyle>;

export const SliderThumb = ({ className, type, size, ...props }: ISliderThumbProps) => {
  const { type: parentType, size: parentSize } = useStyleContext<IContext>(SCOPE);

  return (
    <UISlider.Thumb
      {...props}
      className={sliderThumbStyle({
        type: type ?? parentType,
        parentVariants: {
          size: parentSize
        },
        size,
        class: className
      })}
    />
  );
};

type ISliderTrackProps = ComponentPropsWithVariants<typeof UISlider.Track, typeof sliderTrackStyle>;

export const SliderTrack = ({ className, type, ...props }: ISliderTrackProps) => {
  const {
    orientation: parentOrientation,
    size: parentSize,
    isReversed,
    type: parentType
  } = useStyleContext<IContext>(SCOPE);

  return (
    <UISlider.Track
      {...props}
      className={sliderTrackStyle({
        type: type ?? parentType,
        parentVariants: {
          orientation: parentOrientation,
          size: parentSize,
          isReversed
        },
        class: className
      })}
    />
  );
};

type ISliderFilledTrackProps = ComponentPropsWithVariants<
  typeof UISlider.FilledTrack,
  typeof sliderFilledTrackStyle
>;

export const SliderFilledTrack = ({ className, type, ...props }: ISliderFilledTrackProps) => {
  const { orientation: parentOrientation, type: parentType } = useStyleContext<IContext>(SCOPE);

  return (
    <UISlider.FilledTrack
      {...props}
      className={sliderFilledTrackStyle({
        type: type ?? parentType,
        parentVariants: {
          orientation: parentOrientation
        },
        class: className
      })}
    />
  );
};
