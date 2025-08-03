import { tva } from "@gluestack-ui/nativewind-utils/tva";

// Define style variants with TVA
export const footerStyle = tva({
  base: "border-lr-grey-400 flex flex-row items-center justify-between rounded-t-lg border-t shadow-sm",
  variants: {
    variant: {
      basic: "bg-white",
      transparent: "bg-transparent",
      primary: "bg-primary-600 text-white",
      secondary: "bg-secondary-600 text-white"
    },
    size: {
      sm: "px-3 py-1",
      md: "px-4 py-2",
      lg: "px-5 py-2.5"
    }
  },
  defaultVariants: {
    variant: "basic",
    size: "md"
  }
});

export const footerNavItemStyle = tva({
  base: "items-center gap-1"
});

export const footerNavIconStyle = tva({
  base: "text-[#2C2C2C]",
  parentVariants: {
    size: {
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-7 w-7"
    }
  }
});

export const footerNavTitleStyle = tva({
  base: "text-center text-xs font-normal leading-[114%] text-[#2C2C2C]"
});
