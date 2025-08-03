import { tva } from "@gluestack-ui/nativewind-utils/tva";

// Define style variants with TVA
export const productCardStyle = tva({
  base: "gap-2",
  variants: {
    size: {
      sm: "min-w-32",
      md: "min-w-40",
      lg: "min-w-56",
      xl: "min-w-full"
    },
    variant: {
      default: "",
      outlined: "border-2",
      elevated: "shadow-md"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default"
  }
});

export const productImageContainerStyle = tva({
  base: "relative",
  parentVariants: {
    size: {
      sm: "aspect-square",
      md: "aspect-[35/48]",
      lg: "aspect-[35/48]",
      xl: "aspect-[35/48]"
    }
  }
});

export const productImageStyle = tva({});

export const productTagStyle = tva({
  base: "text-primary-900 rounded px-3 py-1 text-xs font-medium",
  variants: {
    variant: {
      sale: "bg-[linear-gradient(92.5deg,_#C5E28D_-6.84%,_#7FB70D_153.77%)]"
    },
    position: {
      topLeft: "absolute left-0 top-2 rounded-l-none"
    }
  },
  defaultVariants: {
    variant: "sale",
    position: "topLeft"
  }
});

export const productRatingChipStyle = tva({
  base: "flex-row items-center gap-1 rounded-lg px-2 py-1",
  variants: {
    variant: {
      high: "bg-[#F9FBE9]"
    },
    position: {
      bottomLeft: "absolute bottom-2 left-2"
    }
  },
  defaultVariants: {
    variant: "high",
    position: "bottomLeft"
  }
});

export const productRatingTextStyle = tva({
  base: "text-typography-900 font-medium",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-sm"
    }
  }
});

export const productRatingIconStyle = tva({
  base: "text-lr-green-500",
  parentVariants: {
    size: {
      sm: "w-2",
      md: "w-3",
      lg: "w-3",
      xl: "w-3"
    }
  }
});

export const productDescriptionStyle = tva({
  base: "px-1",
  parentVariants: {
    size: {
      sm: "gap-1",
      md: "gap-1",
      lg: "gap-1",
      xl: "gap-1"
    }
  }
});

export const productTitleStyle = tva({
  base: "text-typography-600 overflow-hidden text-ellipsis whitespace-nowrap font-medium",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
      xl: "text-sm"
    }
  }
});

export const productLikeButtonStyle = tva({
  base: "items-center",
  parentVariants: {
    size: {
      sm: "h-4 w-6",
      md: "h-5 w-9",
      lg: "h-5 w-9",
      xl: "h-5 w-9"
    }
  }
});

export const productLikeIconStyle = tva({
  base: "text-typography-500",
  variants: {
    isLiked: {
      true: "text-typography-700 fill-typography-700"
    }
  },
  parentVariants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-5 w-5"
    }
  },
  defaultVariants: {
    isLiked: false
  }
});

export const productPriceContainerStyle = tva({
  base: "flex-row items-baseline gap-2 whitespace-nowrap"
});

export const productPriceStyle = tva({
  base: "text-typography-900 font-medium",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-sm"
    }
  }
});

export const productMRPStyle = tva({
  base: "text-typography-500 line-through",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-xs",
      xl: "text-xs"
    }
  }
});

export const productDiscountStyle = tva({
  base: "text-lr-green-600 whitespace-nowrap font-medium",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-xs",
      xl: "text-xs"
    }
  }
});

export const productSiblingsStyle = tva({
  base: "flex-row gap-2"
});

export const productSiblingStyle = tva({
  base: "border-1 border-primary-200 relative overflow-hidden rounded-full",
  variants: {
    isSelected: {
      true: "border-gray-800"
    }
  },
  parentVariants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-5 w-5"
    }
  },
  defaultVariants: {
    isSelected: false
  }
});
