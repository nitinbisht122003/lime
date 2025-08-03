import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const storyViewerStyle = tva({
  base: "border-none bg-transparent p-0"
});

export const storyProgressContainerStyle = tva({
  base: "w-full flex-row gap-1"
});

export const storyProgressBarStyle = tva({
  base: "w-auto flex-1",
  variants: {
    status: {
      completed: "bg-white",
      current: "bg-gray-900/40",
      upcoming: "bg-gray-900/40"
    }
  },
  defaultVariants: {
    status: "upcoming"
  }
});

export const storyProgressIndicatorStyle = tva({
  base: "bg-white"
});

export const storyHeaderStyle = tva({
  base: "absolute left-0 right-0 top-0 z-10 p-3"
});

export const storyUserInfoStyle = tva({
  base: "flex-row items-center gap-2"
});

export const storyUserAvatarStyle = tva({
  base: "rounded-full"
});

export const storyUserNameStyle = tva({
  base: "text-typography-800 text-sm font-bold"
});

export const storyTimestampStyle = tva({
  base: "text-typography-800 text-xs"
});

export const storyCloseButtonStyle = tva({
  base: "text-typography-800 h-5 w-5 items-center justify-center rounded-full"
});

export const storyContentStyle = tva({
  base: "flex-1 items-center justify-center bg-black"
});

export const storyImageStyle = tva({
  base: "h-full w-full"
});

export const storyControlsStyle = tva({
  base: "absolute bottom-0 left-0 right-0 top-0 flex-row"
});

export const storyTouchAreaStyle = tva({
  base: "z-10 flex-1"
});

export const storyFooterStyle = tva({
  base: "absolute bottom-0 left-0 right-0 z-10 p-3"
});
