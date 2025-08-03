import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const storyContainerStyle = tva({
  base: "flex-row gap-3.5 overflow-x-scroll px-2.5 py-1"
});

export const storyCircleStyle = tva({
  base: "items-center justify-center gap-1",
  variants: {
    size: {
      sm: "w-12",
      md: "w-16",
      lg: "w-20"
    }
  }
});

export const storyRingStyle = tva({
  base: "items-center justify-center rounded-full",
  variants: {
    status: {
      unwatched: "bg-lime-500",
      watched: "bg-gray-300",
      active: "bg-pink-500"
    }
  },
  parentVariants: {
    size: {
      sm: "h-12 w-12",
      md: "h-16 w-16",
      lg: "h-20 w-20"
    }
  },
  defaultVariants: {
    status: "watched"
  }
});

export const storyThumbnailStyle = tva({
  base: "bg-background-0 overflow-hidden rounded-full p-[3px]",
  parentVariants: {
    size: {
      sm: "h-[44px] w-[44px]",
      md: "h-[60px] w-[60px]",
      lg: "h-[76px] w-[76px]"
    }
  }
});

export const storyCircleImageStyle = tva({
  base: "h-full w-full rounded-full"
});

export const storyCircleLabelStyle = tva({
  base: "text-typography-700 max-w-full truncate whitespace-nowrap text-center font-medium",
  parentVariants: {
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm"
    }
  }
});
