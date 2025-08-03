import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const ratingStyle = tva({
  base: "flex-row items-center",
  variants: {
    size: {
      sm: "h-[10px] gap-[3.25px]",
      md: "h-[12px] gap-1",
      lg: "h-[14px] gap-1.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const ratingValueStyle = tva({
  base: "font-hanken font-medium",
  parentVariants: {
    size: {
      sm: "text-[14px] leading-[17.33px] tracking-[0.54px] text-[#67921D]",
      md: "text-[16px] leading-[19px] tracking-[0.5px] text-[#67921D]",
      lg: "text-[18px] leading-[21px] tracking-[0.5px] text-[#67921D]"
    }
  }
});

export const ratingIconStyle = tva({
  base: "text-[#67921D]",
  parentVariants: {
    size: {
      sm: "h-[9.75px] w-[9.75px]",
      md: "h-[9.75px] w-[9.75px]",
      lg: "h-[14px] w-[14px]"
    }
  }
});
