import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const sliderStyle = tva({
  base: "items-center justify-center data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40",
  variants: {
    type: {
      primary: "",
      secondary: "",
      outline: "",
      ghost: "",
      link: ""
    },
    orientation: {
      horizontal: "w-full",
      vertical: "h-full"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    },
    isReversed: {
      true: "",
      false: ""
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-40",
      false: ""
    }
  }
});

export const sliderThumbStyle = tva({
  base: "shadow-hard-1 absolute rounded-full",
  variants: {
    type: {
      primary:
        "bg-primary-500 data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600 data-[disabled=true]:bg-primary-500",
      secondary:
        "bg-secondary-500 data-[focus=true]:bg-secondary-600 data-[active=true]:bg-secondary-600 data-[hover=true]:bg-secondary-600 data-[disabled=true]:bg-secondary-500",
      outline:
        "border-primary-500 data-[focus=true]:border-primary-600 data-[active=true]:border-primary-600 data-[hover=true]:border-primary-600 border-2 bg-transparent",
      ghost:
        "data-[focus=true]:bg-primary-100 data-[active=true]:bg-primary-100 data-[hover=true]:bg-primary-100 bg-transparent",
      link: "bg-transparent data-[active=true]:bg-transparent data-[focus=true]:bg-transparent data-[hover=true]:bg-transparent"
    }
  },
  parentVariants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  }
});

export const sliderTrackStyle = tva({
  base: "overflow-hidden rounded-lg",
  variants: {
    type: {
      primary: "bg-background-300",
      secondary: "bg-background-200",
      outline: "border-primary-500 border-2 bg-transparent",
      ghost: "bg-transparent",
      link: "bg-transparent"
    }
  },
  parentVariants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-full"
    },
    isReversed: {
      true: "",
      false: ""
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  parentCompoundVariants: [
    {
      orientation: "horizontal",
      size: "sm",
      class: "h-1 flex-row"
    },
    {
      orientation: "horizontal",
      size: "sm",
      isReversed: true,
      class: "h-1 flex-row-reverse"
    },
    {
      orientation: "horizontal",
      size: "md",
      class: "h-1 flex-row"
    },
    {
      orientation: "horizontal",
      size: "md",
      isReversed: true,
      class: "h-[5px] flex-row-reverse"
    },
    {
      orientation: "horizontal",
      size: "lg",
      class: "h-1.5 flex-row"
    },
    {
      orientation: "horizontal",
      size: "lg",
      isReversed: true,
      class: "h-1.5 flex-row-reverse"
    },
    {
      orientation: "vertical",
      size: "sm",
      class: "w-1 flex-col-reverse"
    },
    {
      orientation: "vertical",
      size: "sm",
      isReversed: true,
      class: "w-1 flex-col"
    },
    {
      orientation: "vertical",
      size: "md",
      class: "w-[5px] flex-col-reverse"
    },
    {
      orientation: "vertical",
      size: "md",
      isReversed: true,
      class: "w-[5px] flex-col"
    },
    {
      orientation: "vertical",
      size: "lg",
      class: "w-1.5 flex-col-reverse"
    },
    {
      orientation: "vertical",
      size: "lg",
      isReversed: true,
      class: "w-1.5 flex-col"
    }
  ]
});

export const sliderFilledTrackStyle = tva({
  base: "",
  variants: {
    type: {
      primary:
        "bg-primary-500 data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600",
      secondary:
        "bg-secondary-500 data-[focus=true]:bg-secondary-600 data-[active=true]:bg-secondary-600 data-[hover=true]:bg-secondary-600",
      outline:
        "bg-primary-500 data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600",
      ghost:
        "bg-primary-100 data-[focus=true]:bg-primary-200 data-[active=true]:bg-primary-200 data-[hover=true]:bg-primary-200",
      link: "bg-primary-500 data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600"
    }
  },
  parentVariants: {
    orientation: {
      horizontal: "h-full",
      vertical: "w-full"
    }
  }
});
