import { tva } from "@app/ui/utils/tva";

// Common layout patterns
const flexRow = "flex flex-row items-center";

export const productInfoStyle = tva({
  base: "flex w-full flex-row gap-4",
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-5"
    },
    variant: {
      default: ""
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
});

export const productDescriptionStyle = tva({
  base: "flex shrink flex-col",
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default"
  }
});

// Rating & Trusted Section Styles
export const ratingTrustedContainerStyle = tva({
  base: `${flexRow}`,
  variants: {
    size: {
      sm: "gap-1.5",
      md: "",
      lg: "gap-2.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const ratingTrustedStyle = tva({
  base: `${flexRow} gap-1`,
  variants: {
    size: {
      sm: "gap-0.5",
      md: "gap-1",
      lg: "gap-1.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const ratingContainerStyle = tva({
  base: "items-center gap-2",
  variants: {},
  defaultVariants: {}
});

export const trustedContainerStyle = tva({
  base: `${flexRow} items-center gap-2`,
  variants: {},
  defaultVariants: {}
});

export const trustedTextStyle = tva({
  base: "text-typography-600 font-normal italic",
  variants: {
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

// Title Section Styles
export const titleSectionStyle = tva({
  base: "flex shrink flex-row items-center justify-between leading-[130%]",
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const brandNameStyle = tva({
  base: "text-typography-950",
  variants: {
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

export const brandTextStyle = tva({
  base: "text-typography-600 whitespace-nowrap font-normal",
  variants: {
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

export const infoSeparatorStyle = tva({
  base: "bg-typography-300 mx-2 inline-block h-1 w-1 rounded-full"
});

export const shareButtonStyle = tva({
  base: "text-typography-900",
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// Pricing Section Styles
export const pricingSectionStyle = tva({
  base: "flex flex-col",
  variants: {
    size: {
      sm: "gap-2",
      md: "",
      lg: "gap-4"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const priceContainerStyle = tva({
  base: "flex flex-row flex-wrap items-center",
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const currentPriceStyle = tva({
  base: `${flexRow} text-typography-950 items-center gap-0.5 font-medium`,
  variants: {
    size: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const mrpStyle = tva({
  base: `relative ${flexRow} items-center gap-0.5`
});

export const mrpTextStyle = tva({
  base: "text-typography-600 text-nowrap font-normal",
  variants: {
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

export const mrpStrikeStyle = tva({
  base: "bg-typography-600 absolute left-0 h-[1px] w-full origin-bottom-left rotate-[-10deg]",
  variants: {
    size: {
      sm: "top-[12px]",
      md: "top-[14px]",
      lg: "top-[16px]"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const discountTextStyle = tva({
  base: "text-lr-green-600",
  variants: {
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

export const taxTextStyle = tva({
  base: "text-typography-500 leading-[130%]",
  variants: {
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const productImageStyle = tva({
  base: "w-16 rounded"
});
