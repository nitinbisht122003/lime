import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const toastStyle = tva({
  base: "shadow-hard-5 border-outline-100 pointer-events-auto m-1 gap-1 rounded-md p-4",
  variants: {
    action: {
      error: "bg-error-800",
      warning: "bg-warning-700",
      success: "bg-success-700",
      info: "bg-info-700",
      muted: "bg-background-800"
    },

    variant: {
      solid: "",
      outline: "bg-background-0 border"
    }
  }
});

export const toastTitleStyle = tva({
  base: "text-typography-0 font-body tracking-md text-left font-medium",
  variants: {
    isTruncated: {
      true: ""
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
    size: {
      "2xs": "text-2xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl"
    }
  },
  parentVariants: {
    variant: {
      solid: "",
      outline: ""
    },
    action: {
      error: "",
      warning: "",
      success: "",
      info: "",
      muted: ""
    }
  },
  parentCompoundVariants: [
    {
      variant: "outline",
      action: "error",
      class: "text-error-800"
    },
    {
      variant: "outline",
      action: "warning",
      class: "text-warning-800"
    },
    {
      variant: "outline",
      action: "success",
      class: "text-success-800"
    },
    {
      variant: "outline",
      action: "info",
      class: "text-info-800"
    },
    {
      variant: "outline",
      action: "muted",
      class: "text-background-800"
    }
  ]
});

export const toastDescriptionStyle = tva({
  base: "font-body tracking-md text-left font-normal",
  variants: {
    isTruncated: {
      true: ""
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
    size: {
      "2xs": "text-2xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl"
    }
  },
  parentVariants: {
    variant: {
      solid: "text-typography-50",
      outline: "text-typography-900"
    }
  }
});
