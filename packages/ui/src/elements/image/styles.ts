import { tva } from "@gluestack-ui/nativewind-utils/tva";

// Common image style definitions with TVA
export const imageStyle = tva({
  base: "overflow-hidden",
  variants: {
    size: {
      "3xs": "h-5 w-5",
      "2xs": "h-6 w-6",
      xs: "h-10 w-10",
      sm: "h-16 w-16",
      md: "h-20 w-20",
      lg: "h-24 w-24",
      xl: "h-32 w-32",
      "2xl": "h-64 w-64",
      "3xl": "h-80 w-80",
      full: "h-full w-full"
    },
    borderRadius: {
      none: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full"
    },
    objectFit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      "scale-down": "object-scale-down",
      none: "object-none"
    }
  },
  defaultVariants: {
    borderRadius: "none",
    objectFit: "cover"
  }
});
export type ImageSize = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";

export const imageSizeMap: Record<ImageSize, number> = {
  "3xs": 20,
  "2xs": 24,
  xs: 40,
  sm: 64,
  md: 80,
  lg: 96,
  xl: 128,
  "2xl": 256,
  "3xl": 320,
  full: 100 // Will be used with percentage
};
