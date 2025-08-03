import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const dividerStyle = tva({
  base: "bg-lr-grey-200",
  variants: {
    orientation: {
      vertical: "mx-2 h-full w-px",
      horizontal: "my-2 h-px w-full"
    }
  }
});
