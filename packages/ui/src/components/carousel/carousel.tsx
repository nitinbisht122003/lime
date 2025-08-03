"use client";

import { useCallback } from "react";
import { useSharedValue } from "react-native-reanimated";
import RNCarousel, { Pagination as RNPagination } from "react-native-reanimated-carousel";

import type { CarouselPaginationProps, CarouselProps, CarouselSlidesProps } from "./types";
import { RNCarouselContext, useRNCarouselContext } from "./context";
import { useCarouselDimensions } from "./hooks/useCarouselDimensions";
import { defaultActiveDotStyle, defaultContainerStyle, defaultDotStyle } from "./styles";

function Carousel({ defaultIndex, children, onSnapToItem }: CarouselProps) {
  const progress = useSharedValue<number>(defaultIndex ?? 0);

  const context = {
    progress: progress,
    onSnapToItem: onSnapToItem
  };

  return <RNCarouselContext.Provider value={context}>{children}</RNCarouselContext.Provider>;
}

function CarouselSlides<T extends object>({
  data,
  renderItem,
  width,
  fullWidth = false,
  height,
  aspectRatio = 16 / 9,
  ...props
}: CarouselSlidesProps<T>) {
  const { progress, onSnapToItem } = useRNCarouselContext();

  const { finalWidth, finalHeight } = useCarouselDimensions(width, fullWidth, height, aspectRatio);

  return (
    <RNCarousel
      data={data}
      width={finalWidth}
      height={finalHeight}
      renderItem={renderItem}
      onProgressChange={progress}
      onSnapToItem={onSnapToItem}
      {...props}
    />
  );
}

function CarouselPagination<T extends object>({
  data,
  onPress,
  activeDotStyle = defaultActiveDotStyle,
  dotStyle = defaultDotStyle,
  containerStyle = defaultContainerStyle,
  renderItem,
  ...props
}: CarouselPaginationProps<T>) {
  const { progress } = useRNCarouselContext();

  const rnRenderItem = useCallback(
    (item: T, index: number) => {
      return renderItem?.(item, index, index === progress.value);
    },
    [progress.value, renderItem]
  );

  return (
    <RNPagination.Basic
      progress={progress}
      data={data}
      onPress={onPress}
      dotStyle={dotStyle}
      activeDotStyle={activeDotStyle}
      containerStyle={containerStyle}
      renderItem={rnRenderItem}
      {...props}
    />
  );
}

export { Carousel, CarouselSlides, CarouselPagination };
