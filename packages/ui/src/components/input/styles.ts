import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const inputStyle = tva({
  base: "border-background-300 data-[hover=true]:border-lr-green-400 data-[focus=true]:border-lr-green-400 data-[focus=true]:hover:border-lr-green-400 data-[disabled=true]:hover:border-background-300 flex-row content-center items-center overflow-hidden data-[disabled=true]:opacity-40",

  variants: {
    size: {
      xl: "h-12",
      lg: "h-11",
      md: "h-10",
      sm: "h-9"
    },

    variant: {
      underlined:
        "data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:border-primary-700 rounded-none border-b data-[invalid=true]:border-b-2",

      outline:
        "data-[invalid=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[focus=true]:border-lr-green-400 data-[focus=true]:ring-lr-grey-600 data-[invalid=true]:ring-indicator-error data-[invalid=true]:data-[disabled=true]:hover:ring-indicator-error rounded-md border data-[focus=true]:ring-0 data-[invalid=true]:ring-0 data-[focus=true]:ring-inset data-[invalid=true]:ring-inset data-[invalid=true]:data-[disabled=true]:hover:ring-0 data-[invalid=true]:data-[focus=true]:hover:ring-0 data-[invalid=true]:data-[disabled=true]:hover:ring-inset data-[invalid=true]:data-[focus=true]:hover:ring-inset",

      rounded:
        "data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:border-primary-700 data-[focus=true]:ring-indicator-primary data-[invalid=true]:ring-indicator-error data-[invalid=true]:data-[focus=true]:hover:ring-indicator-error data-[invalid=true]:data-[disabled=true]:hover:ring-indicator-error rounded-full border data-[focus=true]:ring-1 data-[invalid=true]:ring-1 data-[focus=true]:ring-inset data-[invalid=true]:ring-inset data-[invalid=true]:data-[disabled=true]:hover:ring-1 data-[invalid=true]:data-[focus=true]:hover:ring-1 data-[invalid=true]:data-[disabled=true]:hover:ring-inset data-[invalid=true]:data-[focus=true]:hover:ring-inset"
    }
  }
});

export const inputIconStyle = tva({
  base: "text-typography-400 items-center justify-center fill-none",
  parentVariants: {
    size: {
      "2xs": "h-3 w-3",
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-[18px] w-[18px]",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  }
});

export const inputSlotStyle = tva({
  base: "items-center justify-center disabled:cursor-not-allowed"
});

export const inputFieldStyle = tva({
  base: "text-typography-900 placeholder:text-typography-500 ios:leading-[0px] h-full flex-1 cursor-text px-3 py-0 data-[disabled=true]:cursor-not-allowed",

  parentVariants: {
    variant: {
      underlined: "px-0 outline-none outline-0",
      outline: "outline-none outline-0",
      rounded: "px-4 outline-none outline-0"
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
  }
});
