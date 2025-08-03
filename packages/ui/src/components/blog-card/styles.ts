import { tva } from "@gluestack-ui/nativewind-utils/tva";

import type { ImageSizeMap } from "../../types";

export const blogCardStyle = tva({
  base: "w-full",
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const blogCardTitleStyle = tva({
  base: "text-typography-600 absolute left-1/2 top-1/2 max-w-72 -translate-x-1/2 -translate-y-1/2 -rotate-90 truncate whitespace-nowrap pt-2.5 font-bold",
  parentVariants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  }
});

export const blogCardImageStyle = tva({
  base: "h-auto w-[90%] object-top",
  variants: {
    aspect: {
      sqaure: "aspect-square",
      rectangle: "aspect-[4/3]"
    }
  },
  parentVariants: {
    size: {
      sm: "rounded-bl-2xl",
      md: "rounded-bl-3xl",
      lg: "rounded-bl-4xl"
    }
  },
  defaultVariants: {
    aspect: "sqaure"
  }
});

export const imageSize: ImageSizeMap<"sm" | "md" | "lg"> = {
  sm: "2xl",
  md: "3xl",
  lg: "full"
};

export const blogCardContentStyle = tva({
  base: "ml-[10%] mt-4 flex flex-col gap-4"
});

export const blogCardDescriptionStyle = tva({
  base: "text-typography-600 hyphens-auto break-words pl-1",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const blogCardLinkStyle = tva({
  base: "cursor-pointer pl-1",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
