import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const productRailContainerStyle = tva({
  base: "w-full",
  variants: {
    spacing: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    spacing: "md"
  }
});

export const productRailTitleContainerStyle = tva({
  base: "flex-row items-center justify-between",
  parentVariants: {
    spacing: {
      sm: "py-0.5",
      md: "py-1",
      lg: "py-2"
    }
  },
  defaultVariants: {
    spacing: "md"
  }
});

export const productRailTitleStyle = tva({
  base: "text-typography-800 font-medium",
  parentVariants: {
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

export const productRailLinkStyle = tva({
  base: "text-typography-600 font-medium underline",
  parentVariants: {
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

export const productRailScrollContainerStyle = tva({
  base: "flex flex-row flex-nowrap overflow-x-scroll scroll-smooth",
  parentVariants: {
    spacing: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3"
    }
  },
  defaultVariants: {
    spacing: "sm"
  }
});
