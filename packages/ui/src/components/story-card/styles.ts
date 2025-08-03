import { tva } from "@gluestack-ui/nativewind-utils";

import type { ImageSizeMap } from "../../types";

export const storyCardStyle = tva({
  base: "border border-black bg-white p-2",
  variants: {
    size: {
      sm: "min-w-72 rounded-md",
      md: "min-w-80 rounded-lg",
      lg: "min-w-96 rounded-xl"
    }
  }
});

export const storyCardUserInfoStyle = tva({
  base: "flex-row items-center gap-2"
});

export const storyCardUserAvatarStyle = tva({
  base: "rounded-full",
  parentVariants: {
    size: {
      sm: "h-6 w-6",
      md: "h-7 w-7",
      lg: "h-8 w-8"
    }
  }
});

export const storyCardUserImageSize: ImageSizeMap<"sm" | "md" | "lg"> = {
  sm: "2xs",
  md: "xs",
  lg: "md"
};

export const storyCardUserNameStyle = tva({
  base: "text-typography-900 font-medium",
  parentVariants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  }
});

export const storyCardUserFollowersStyle = tva({
  base: "text-typography-500 font-medium",
  parentVariants: {
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm"
    }
  }
});

export const storyCardImageContainerStyle = tva({
  base: "relative w-full overflow-hidden",
  parentVariants: {
    size: {
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl"
    }
  }
});

export const storyCardProductCountStyle = tva({
  base: "absolute h-1/2 w-1/2 p-2.5 text-white",
  variants: {
    direction: {
      "bottom-right":
        "bottom-0 right-0 items-end justify-end bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)_40%,transparent_60%)]"
    }
  },
  defaultVariants: {
    direction: "bottom-right"
  }
});

export const storyCardContentStyle = tva({
  base: "px-2"
});

export const storyCardTitleStyle = tva({
  base: "text-typography-900 font-bold",
  parentVariants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl"
    }
  }
});

export const storyCardActionsStyle = tva({
  base: "flex-row items-center gap-0.5"
});

export const storyCardActionButtonStyle = tva({
  base: "items-center justify-center",
  parentVariants: {
    size: {
      sm: "h-10 w-10",
      md: "h-11 w-11",
      lg: "h-12 w-12"
    }
  }
});

export const storyCardActionIconStyle = tva({
  base: "text-black",
  parentVariants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  }
});

export const storyCardDescriptionStyle = tva({
  base: "text-typography-900",
  parentVariants: {
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm"
    }
  }
});
