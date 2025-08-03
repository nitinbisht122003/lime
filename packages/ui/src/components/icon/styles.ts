import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const iconStyle = tva({
  base: "pointer-events-none fill-none",
  variants: {
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-3 w-3",
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-[18px] w-[18px]",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  }
});
