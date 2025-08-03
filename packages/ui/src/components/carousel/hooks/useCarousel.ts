"use client";

import type { ICarouselInstance } from "react-native-reanimated-carousel";
import { useRef } from "react";

import { useRNCarouselContext } from "../context";

export function useCarousel() {
  const ref = useRef<ICarouselInstance>(null);
  const { progress } = useRNCarouselContext();

  const goToSlide = (index: number) => {
    ref.current?.scrollTo({
      index,
      animated: true
    });
  };

  const goToNextSlide = () => {
    ref.current?.scrollTo({
      count: 1,
      animated: true
    });
  };

  const goToPreviousSlide = () => {
    ref.current?.scrollTo({
      count: -1,
      animated: true
    });
  };

  return {
    ref,
    currentIndex: progress.value,
    goToSlide,
    goToNextSlide,
    goToPreviousSlide
  };
}
