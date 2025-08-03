"use client";

import type { EmblaPluginType } from "embla-carousel";
import type { ReactNode } from "react";
import type { DotStyle } from "react-native-reanimated-carousel/lib/typescript/components/Pagination/Basic/PaginationItem";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import type { CarouselPaginationProps, CarouselProps, CarouselSlidesProps } from "./types";
import { Pressable } from "../../elements/pressable";
import { View } from "../../elements/view";
import { CarouselContext, useCarouselContext } from "./context.web";
import {
  carouselContainerStyle,
  carouselSlideStyle,
  carouselViewportStyle,
  defaultActiveDotStyle,
  defaultContainerStyle,
  defaultDotStyle
} from "./styles";

function Carousel({
  defaultIndex = 0,
  children,
  onSnapToItem,
  loop = false,
  autoPlayInterval = 0
}: CarouselProps) {
  const [progress, setProgress] = useState({ value: defaultIndex });

  // Setup Embla Carousel internally
  const plugins: EmblaPluginType[] = [
    ...(autoPlayInterval ? [Autoplay({ delay: autoPlayInterval })] : [])
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      startIndex: defaultIndex
    },
    plugins
  );

  // Update progress when slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setProgress({ value: index });
      onSnapToItem?.(index);
    };

    // Initial state
    onSelect();

    // Subscribe to events
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Cleanup
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.destroy();
    };
  }, [emblaApi, onSnapToItem]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const goToNextSlide = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const goToPreviousSlide = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const contextValue = {
    progress,
    emblaRef,
    goToSlide,
    goToNextSlide,
    goToPreviousSlide
  };

  return <CarouselContext.Provider value={contextValue}>{children}</CarouselContext.Provider>;
}

function CarouselSlides<T extends object>({
  data,
  renderItem,
  aspectRatio = 16 / 9
}: CarouselSlidesProps<T>) {
  const { emblaRef } = useCarouselContext();

  return (
    <div className={carouselViewportStyle({})} ref={emblaRef}>
      <div className={carouselContainerStyle({})}>
        {data.map((item, index) => (
          <div key={index} className={carouselSlideStyle({})} style={{ aspectRatio }}>
            {renderItem({ item, index })}
          </div>
        ))}
      </div>
    </div>
  );
}

function CarouselPagination<T extends object>({
  data,
  onPress,
  renderItem,
  dotStyle,
  activeDotStyle,
  containerStyle
}: CarouselPaginationProps<T>) {
  const { progress, goToSlide } = useCarouselContext();

  return (
    <View style={[defaultContainerStyle, containerStyle]}>
      {data.map((item, index) => (
        <PaginationItem
          key={index}
          onPress={onPress}
          goToSlide={goToSlide}
          index={index}
          style={
            renderItem
              ? {}
              : {
                  ...defaultDotStyle,
                  ...dotStyle,
                  ...(index === progress.value ? (activeDotStyle ?? defaultActiveDotStyle) : {})
                }
          }
        >
          {renderItem?.(item, index, index === progress.value)}
        </PaginationItem>
      ))}
    </View>
  );
}

interface PaginationItemProps {
  index: number;
  onPress?: (index: number) => void;
  goToSlide?: (index: number) => void;
  children?: ReactNode;
  style: DotStyle;
}

function PaginationItem({ onPress, goToSlide, index, children, style }: PaginationItemProps) {
  function handlePaginationPress() {
    onPress?.(index);
    goToSlide?.(index);
  }

  return (
    <Pressable onPress={handlePaginationPress} style={style}>
      {children}
    </Pressable>
  );
}

export { Carousel, CarouselSlides, CarouselPagination };
