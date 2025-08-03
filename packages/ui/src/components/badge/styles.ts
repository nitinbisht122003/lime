import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const badgeStyle = tva({
  base: "flex-row items-center self-start rounded-lg data-[disabled=true]:opacity-50",
  variants: {
    action: {
      default: "border-lr-grey-300 bg-lr-grey-50 border",
      error: "bg-background-error border-error-300",
      warning: "bg-background-warning border-warning-300",
      success: "bg-lr-green-100 border-lr-green-300",
      info: "bg-background-info border-info-300",
      muted: "bg-background-muted border-background-300"
    },
    variant: {
      solid: "",
      outline: "border"
    },
    size: {
      sm: "px-2 py-1",
      md: "px-3 py-2",
      lg: "px-4 py-3"
    },
    active: {
      true: ""
    }
  },
  compoundVariants: [
    {
      action: "default",
      variant: "outline",
      active: true,
      class: "border-lr-grey-500 bg-lr-grey-100"
    }
  ]
});

export const badgeTextStyle = tva({
  base: "text-lr-grey-800",

  parentVariants: {
    action: {
      default: "text-lr-grey-800",
      error: "text-error-600",
      warning: "text-warning-600",
      success: "text-lr-green-600",
      info: "text-info-600",
      muted: "text-background-800"
    },
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm"
    }
  },
  variants: {
    isTruncated: {
      true: "web:truncate"
    },
    bold: {
      true: "font-bold"
    },
    underline: {
      true: "underline"
    },
    strikeThrough: {
      true: "line-through"
    },
    sub: {
      true: "text-xs"
    },
    italic: {
      true: "italic"
    },
    highlight: {
      true: "bg-yellow-500"
    }
  }
});

export const badgeIconStyle = tva({
  base: "fill-none",
  parentVariants: {
    action: {
      error: "text-error-600",
      warning: "text-warning-600",
      success: "text-success-600",
      info: "text-info-600",
      muted: "text-background-800"
    },
    size: {
      sm: "h-3 w-3",
      md: "h-3.5 w-3.5",
      lg: "h-4 w-4"
    }
  }
});

export const badgeRailStyle = tva({
  base: "flex-row items-center gap-2 overflow-scroll",
  variants: {
    spacing: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3"
    }
  }
});
