import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const focusRailContainerStyle = tva({
  base: "w-full",
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const focusRailScrollContainerStyle = tva({
  base: "flex-row overflow-x-scroll scroll-smooth pb-8 object-cover",
  parentVariants: {
    spacing: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-3"
    }
  },
  defaultVariants: {
    spacing: "sm"
  }
});

export const focusCardTransitionStyle = {
  transform: [{ scale: 0.84 }],
  borderRadius: 8,
} as const;

export const focusCardActiveStyle = {
  transform: [{ scale: 1.05 }, { translateY: 8 }],
  zIndex: 1,
  borderRadius: 8,
} as const;

