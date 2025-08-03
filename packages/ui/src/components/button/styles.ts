import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const buttonStyle = tva({
  base: "group/button flex-row items-center justify-center gap-2 rounded data-[disabled=true]:opacity-40 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2",
  variants: {
    action: {
      primary:
        "bg-lr-green-400 data-[hover=true]:bg-lr-green-500 data-[active=true]:bg-lr-green-600 border-lr-green-300 data-[hover=true]:border-lr-green-400 data-[active=true]:border-lr-green-500 data-[focus-visible=true]:ring-indicator-info",
      secondary:
        "bg-lr-grey-200 border-lr-grey-200 data-[hover=true]:bg-lr-grey-300 data-[hover=true]:border-lr-grey-300 data-[active=true]:bg-lr-grey-400 data-[active=true]:border-lr-grey-400 data-[focus-visible=true]:ring-indicator-info",
      positive:
        "bg-success-500 border-success-300 data-[hover=true]:bg-success-600 data-[hover=true]:border-success-400 data-[active=true]:bg-success-700 data-[active=true]:border-success-500 data-[focus-visible=true]:ring-indicator-info",
      negative:
        "bg-error-500 border-error-300 data-[hover=true]:bg-error-600 data-[hover=true]:border-error-400 data-[active=true]:bg-error-700 data-[active=true]:border-error-500 data-[focus-visible=true]:ring-indicator-info",
      default: "data-[hover=true]:bg-background-50 bg-transparent data-[active=true]:bg-transparent"
    },
    size: {
      xs: "h-8 px-3.5",
      sm: "h-9 px-4",
      md: "h-10 px-5",
      lg: "h-11 rounded-lg px-6",
      xl: "h-12 px-7"
    },
    variant: {
      ghost: "bg-transparent px-0",
      link: "px-0",
      outline:
        "data-[hover=true]:bg-background-50 border bg-transparent data-[active=true]:bg-transparent",
      solid: ""
    }
  }
});

export const buttonTextStyle = tva({
  base: "text-typography-0 select-none font-medium",
  parentVariants: {
    action: {
      primary:
        "text-lr-green-950 data-[hover=true]:text-lr-green-950 data-[active=true]:text-lr-green-950",
      secondary:
        "text-lr-grey-500 data-[hover=true]:text-lr-grey-600 data-[active=true]:text-lr-grey-700",
      positive:
        "text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700",
      negative: "text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700",
      default: "text-lr-grey-800"
    },
    variant: {
      ghost: "",
      link: "underline",
      outline: "",
      solid: ""
    },
    size: {
      xs: "text-2xs",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg"
    }
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "secondary",
      class:
        "text-lr-grey-700 data-[hover=true]:text-lr-grey-700 data-[active=true]:text-lr-grey-700"
    },
    {
      variant: "solid",
      action: "positive",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "solid",
      action: "negative",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "outline",
      action: "primary",
      class:
        "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500"
    },
    {
      variant: "outline",
      action: "secondary",
      class:
        "text-lr-grey-500 data-[hover=true]:text-lr-grey-600 data-[active=true]:text-lr-grey-700"
    },
    {
      variant: "outline",
      action: "positive",
      class:
        "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500"
    },
    {
      variant: "outline",
      action: "negative",
      class:
        "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500"
    }
  ]
});

export const buttonIconStyle = tva({
  base: "fill-none",
  parentVariants: {
    variant: {
      ghost: "",
      link: "data-[active=true]:underline data-[hover=true]:underline",
      outline: "",
      solid:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    size: {
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-[18px] w-[18px]",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    },
    action: {
      primary:
        "text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700",
      secondary:
        "text-lr-grey-500 data-[hover=true]:text-lr-grey-600 data-[active=true]:text-lr-grey-700",
      positive:
        "text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700",

      negative: "text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700",
      default: ""
    }
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "solid",
      action: "secondary",
      class:
        "text-typography-800 data-[hover=true]:text-typography-800 data-[active=true]:text-typography-800"
    },
    {
      variant: "solid",
      action: "positive",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "solid",
      action: "negative",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    }
  ]
});

export const buttonGroupStyle = tva({
  base: "",
  variants: {
    space: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
      xl: "gap-5",
      "2xl": "gap-6",
      "3xl": "gap-7",
      "4xl": "gap-8"
    },
    isAttached: {
      true: "gap-0"
    },
    flexDirection: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse"
    }
  }
});
