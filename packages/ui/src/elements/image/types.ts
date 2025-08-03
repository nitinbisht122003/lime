import type { VariantProps } from "@gluestack-ui/nativewind-utils";

import type { NextImageProps } from "../../types";
import type { imageStyle } from "./styles";

export type ImageSource =
  | string
  | {
      low: string;
      high: string;
    };

// Interface for our Image component
export interface ImageBaseProps {
  /** The url of the image */
  src: ImageSource;

  /** The alt text for the image */
  alt: string;

  /** The expected rendered width of the image */
  width?: number | "100%";

  /** The expected rendered height of the image */
  height?: number | "100%";

  /** The url of the fallback image */
  fallbackSrc?: string;

  /** The onLoad event handler */
  onLoad?: NextImageProps["onLoad"];

  /** The onError event handler */
  onError?: NextImageProps["onError"];

  /** The loading strategy for the image - web only */
  loading?: NextImageProps["loading"];

  /** The quality of the image (1-100) - web only */
  quality?: number;

  /** The placeholder for the image - web only */
  placeholder?: NextImageProps["placeholder"];

  /** The blur data URL for the image - web only */
  blurDataURL?: NextImageProps["blurDataURL"];
}

export type ImageProps = ImageBaseProps & VariantProps<typeof imageStyle>;
