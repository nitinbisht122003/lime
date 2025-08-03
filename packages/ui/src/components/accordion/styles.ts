import { tva } from "@gluestack-ui/nativewind-utils/tva";

// Main Accordion container styles
const accordionStyle = tva({
  base: "w-full",
  variants: {
    variant: {
      filled: "bg-gray-100",
      unfilled: "border border-gray-200",
      borderless: "border-0"
    },
    size: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3"
    }
  },
  defaultVariants: {
    variant: "filled",
    size: "md"
  }
});

// Accordion Item styles
const accordionItemStyle = tva({
  base: "w-full overflow-hidden",
  variants: {
    isLast: {
      true: "border-b-0",
      false: ""
    }
  },
  parentVariants: {
    variant: {
      filled: "",
      unfilled: "",
      borderless: "border-0 border-b-0"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    isLast: false
  }
});

// Accordion Header styles
const accordionHeaderStyle = tva({
  base: "flex cursor-pointer flex-row items-center justify-between",
  variants: {
    isActive: {
      true: "font-medium",
      false: ""
    }
  },
  parentVariants: {
    variant: {
      filled: "",
      unfilled: "",
      borderless: "border-b-0"
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-3",
      lg: "px-5 py-4"
    }
  },
  defaultVariants: {
    isActive: false
  }
});

// Accordion Header Text styles
const accordionHeaderTextStyle = tva({
  base: "font-medium",
  parentVariants: {
    variant: {
      filled: "",
      unfilled: ""
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  }
});

// Accordion Icon styles
const accordionIconStyle = tva({
  base: "text-gray-700",
  parentVariants: {
    variant: {
      filled: "",
      unfilled: ""
    },
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  }
});

// Accordion Content styles
const accordionContentStyle = tva({
  base: "overflow-hidden",
  variants: {
    isActive: {
      true: "",
      false: ""
    }
  },
  parentVariants: {
    variant: {
      filled: "bg-gray-50 px-4",
      unfilled: "border-t border-gray-200",
      borderless: "border-0"
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-3",
      lg: "px-5 py-4"
    }
  },
  defaultVariants: {
    isActive: false
  }
});

// Accordion Content Text styles
const accordionContentTextStyle = tva({
  base: "text-gray-600",
  parentVariants: {
    variant: {
      filled: "",
      unfilled: "",
      borderless: ""
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  }
});

// AnimatedHeight styles
const animatedHeightContainerStyle = tva({
  base: "overflow-hidden"
});

const animatedHeightContentStyle = tva({
  base: "absolute inset-0 bottom-auto"
});

export {
  accordionStyle,
  accordionItemStyle,
  accordionHeaderStyle,
  accordionHeaderTextStyle,
  accordionContentStyle,
  accordionContentTextStyle,
  accordionIconStyle,
  animatedHeightContainerStyle,
  animatedHeightContentStyle
};
