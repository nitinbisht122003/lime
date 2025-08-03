import { tva } from "@gluestack-ui/nativewind-utils";

export const couponCardStyle = tva({
  base: "flex-row items-center justify-between rounded-lg border border-dashed",
  variants: {
    size: {
      sm: "gap-2 p-2.5",
      md: "gap-2.5 p-3",
      lg: "gap-3 p-3.5"
    },
    variant: {
      primary: "border-lr-blue-600 bg-lr-blue-25",
      secondary: "border-lr-grey-600 bg-lr-grey-25"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});

export const couponCardContentStyle = tva({
  base: "flex-row items-center",
  parentVariants: {
    size: {
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3"
    }
  }
});

export const couponCardIconStyle = tva({
  parentVariants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    },
    variant: {
      primary: "text-lr-blue-600",
      secondary: "text-lr-grey-600"
    }
  }
});

export const couponCardTitleStyle = tva({
  base: "font-bold",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    },
    variant: {
      primary: "text-lr-blue-600",
      secondary: "text-lr-grey-600"
    }
  }
});

export const couponCardDescriptionStyle = tva({
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm"
    },
    variant: {
      primary: "text-lr-grey-600",
      secondary: "text-lr-grey-600"
    }
  }
});

export const couponCardButtonStyle = tva({
  parentVariants: {
    size: {
      sm: "px-2",
      md: "px-2.5",
      lg: "px-3"
    }
  }
});

export const couponCardButtonTextStyle = tva({
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm"
    },
    variant: {
      primary: "text-lr-blue-800",
      secondary: "text-lr-grey-800"
    }
  }
});
