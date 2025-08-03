"use client";

import { useCarouselContext } from "../context.web";

export function useCarousel() {
  const { emblaRef, progress, goToSlide, goToNextSlide, goToPreviousSlide } = useCarouselContext();

  return {
    ref: emblaRef,
    currentIndex: progress.value,
    goToSlide,
    goToNextSlide,
    goToPreviousSlide
  };
}
