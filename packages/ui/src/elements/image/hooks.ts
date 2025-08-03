import { useMemo, useState } from "react";

import type { ImageProps } from "./types";
import { getPlaceholderDataURL } from "./placeholders";
import { imageSizeMap, imageStyle } from "./styles";

export type UseImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export const useImage = ({
  src,
  fallbackSrc,
  width,
  height,
  size,
  borderRadius = "none",
  objectFit = "cover",
  placeholder,
  className
}: UseImageProps) => {
  // Calculate dimensions for Image

  const [finalSource, setFinalSource] = useState<string>((src || fallbackSrc) ?? "");

  const dimensions = useMemo(() => {
    return getDimensions(width, height, size);
  }, [width, height, size]);

  const numericDimensions = {
    width: getNumericDimension(dimensions.width),
    height: getNumericDimension(dimensions.height)
  };

  // Calculate the computed class from TVA
  const computedClass = imageStyle({
    size,
    borderRadius,
    objectFit,
    class: className
  });

  // Calculate the placeholder value for the Image
  const placeholderValue = useMemo(() => {
    if (placeholder) return placeholder;

    if (numericDimensions.width <= 50 && numericDimensions.height <= 50) return undefined;

    return getPlaceholderDataURL(src, numericDimensions.width, numericDimensions.height);
  }, [numericDimensions.height, numericDimensions.width, placeholder, src]);

  // Handle the case where we're using percentage dimensions
  const isPercentageSize =
    dimensions.width === "100%" || dimensions.height === "100%" || size === "full";

  return {
    dimensions,
    numericDimensions,
    computedClass,
    placeholderValue,
    finalSource,
    isPercentageSize,
    setFinalSource
  };
};

// Helper to provide a solid numeric value for NextImage
const getNumericDimension = (value: string | number | undefined) => {
  if (value === undefined) return 100;
  if (typeof value === "number") return value;
  if (value.endsWith("%")) return 200; // Default size for percentage
  return parseInt(value, 10) || 100;
};

// Helper to get the width and height for NextImage
const getDimensions = (
  width: ImageProps["width"],
  height: ImageProps["height"],
  size: ImageProps["size"] = "md"
) => {
  let widthVal = width;
  let heightVal = height;

  // Default sizes based on the size prop
  if (widthVal === undefined || heightVal === undefined) {
    const baseSize = imageSizeMap[size];

    widthVal ??= size === "full" ? "100%" : baseSize;

    heightVal ??= size === "full" ? "100%" : baseSize;
  }

  return { width: widthVal, height: heightVal };
};
