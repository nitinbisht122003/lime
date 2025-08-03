import { tva } from "@gluestack-ui/nativewind-utils/tva";

/**
 * Styles for the ticker container
 */
export const tickerContainerStyle = tva({
  base: "flex-row items-center overflow-hidden",
  variants: {
    size: {
      sm: "h-6",
      md: "h-8",
      lg: "h-10",
      full: "h-full"
    },
    variant: {
      lime: "bg-[#AAD05F]",
      pink: "bg-[#F4A3B8]"
    },
    direction: {
      left: "",
      right: ""
    }
  },
  defaultVariants: {
    size: "sm",
    variant: "lime",
    direction: "left"
  }
});

/**
 * Styles for the ticker animation container
 */
export const tickerAnimationStyle = tva({
  base: "flex-row items-center overflow-hidden"
});

/**
 * Styles for the ticker items container
 */
export const tickerItemsStyle = tva({
  base: "flex-row items-center gap-2"
});

/**
 * Styles for the ticker text item
 */
export const tickerTextStyle = tva({
  base: "text-typography-700 whitespace-nowrap uppercase",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      full: "text-base"
    }
  }
});

/**
 * Styles for the ticker separator
 */
export const tickerSeparatorStyle = tva({
  base: "items-center text-base font-medium text-white"
});
