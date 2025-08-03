"use client";

import { useCallback } from "react";
import NextImage from "next/image";

import type { ImageProps } from "./types";
import { useImage } from "./hooks";

/**
 * Image component for Web using Next.js Image
 */
function Image({
  src,
  fallbackSrc,
  width,
  height,
  size,
  borderRadius = "none",
  objectFit = "cover",
  placeholder,
  onLoad,
  onError,
  className,
  ...rest
}: ImageProps) {
  const {
    numericDimensions,
    computedClass,
    placeholderValue,
    finalSource,
    setFinalSource,
    isPercentageSize
  } = useImage({
    src: typeof src === "string" ? src : src.low,
    fallbackSrc,
    width,
    height,
    size,
    borderRadius,
    placeholder,
    className,
    ...rest
  });

  const handleLoad = useCallback<NonNullable<ImageProps["onLoad"]>>(
    (event) => {
      onLoad?.(event);

      if (typeof src === "string") return;

      setFinalSource(src.high);
    },
    [src, onLoad, setFinalSource]
  );

  const handleError = useCallback<NonNullable<ImageProps["onError"]>>(
    (event) => {
      onError?.(event);

      if (typeof src === "string") {
        setFinalSource(fallbackSrc ?? src);
        return;
      }

      setFinalSource((prevSrc) => {
        if (prevSrc === src.low) {
          return src.high;
        }

        return fallbackSrc ?? src.low;
      });
    },
    [src, fallbackSrc, onError, setFinalSource]
  );

  // For full/percentage size, we need to wrap the component
  if (isPercentageSize) {
    return (
      <NextImage
        src={finalSource}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={computedClass}
        style={{ objectFit }}
        placeholder={placeholderValue}
        onLoad={handleLoad}
        onError={handleError}
        {...rest}
      />
    );
  }

  // Standard usage with specific dimensions
  return (
    <NextImage
      src={finalSource}
      width={numericDimensions.width}
      height={numericDimensions.height}
      className={computedClass}
      style={{ objectFit }}
      placeholder={placeholderValue}
      onLoad={handleLoad}
      onError={handleError}
      {...rest}
    />
  );
}

Image.displayName = "Image";

export { Image };
export type { ImageSize } from "./styles";
