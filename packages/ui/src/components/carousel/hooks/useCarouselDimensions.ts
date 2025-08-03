"use client";

import { useWindowDimensions } from "react-native";

interface UseCarouselDimensionsResult {
  finalWidth: number;
  finalHeight: number;
}

export function useCarouselDimensions(
  width: number | undefined,
  fullWidth: boolean,
  height: number | undefined,
  aspectRatio: number
): UseCarouselDimensionsResult {
  const window = useWindowDimensions();

  const finalWidth = fullWidth ? window.width : (width ?? window.width);
  const finalHeight = height ?? finalWidth / aspectRatio;

  return {
    finalWidth,
    finalHeight
  };
}
