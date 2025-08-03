import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const gridContainerStyle = tva({
  base: "flex-1",
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col"
    }
  },
  defaultVariants: {
    direction: "horizontal"
  }
});

export const gridItemStyle = tva({
  base: "flex-1"
});

export const gridImageContainerStyle = tva({
  base: "relative flex-1 overflow-hidden",
  variants: {
    rounded: {
      true: "rounded-lg"
    }
  }
});

export const gridImageStyle = tva({
  base: ""
});

export const gridTextStyle = tva({
  base: "absolute bottom-0 left-0 right-0 bg-black/40 p-2 text-sm text-white"
});
