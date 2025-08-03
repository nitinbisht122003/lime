import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const progressStyle = tva({
  base: "bg-background-300 w-full rounded-full",
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-full"
    },
    size: {
      "2xs": "h-0.5",
      xs: "h-1",
      sm: "h-2",
      md: "h-3",
      lg: "h-4",
      xl: "h-5",
      "2xl": "h-6"
    }
  },
  compoundVariants: [
    {
      orientation: "vertical",
      size: "2xs",
      class: "h-full w-0.5 justify-end"
    },
    {
      orientation: "vertical",
      size: "xs",
      class: "h-full w-1 justify-end"
    },
    {
      orientation: "vertical",
      size: "sm",
      class: "h-full w-2 justify-end"
    },
    {
      orientation: "vertical",
      size: "md",
      class: "h-full w-3 justify-end"
    },
    {
      orientation: "vertical",
      size: "lg",
      class: "h-full w-4 justify-end"
    },

    {
      orientation: "vertical",
      size: "xl",
      class: "h-full w-5 justify-end"
    },
    {
      orientation: "vertical",
      size: "2xl",
      class: "h-full w-6 justify-end"
    }
  ]
});

export const progressFilledTrackStyle = tva({
  base: "bg-primary-500 rounded-full",
  parentVariants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-full"
    },
    size: {
      "2xs": "h-0.5",
      xs: "h-1",
      sm: "h-2",
      md: "h-3",
      lg: "h-4",
      xl: "h-5",
      "2xl": "h-6"
    }
  },
  parentCompoundVariants: [
    {
      orientation: "vertical",
      size: "2xs",
      class: "h-full w-0.5"
    },
    {
      orientation: "vertical",
      size: "xs",
      class: "h-full w-1"
    },
    {
      orientation: "vertical",
      size: "sm",
      class: "h-full w-2"
    },
    {
      orientation: "vertical",
      size: "md",
      class: "h-full w-3"
    },
    {
      orientation: "vertical",
      size: "lg",
      class: "h-full w-4"
    },

    {
      orientation: "vertical",
      size: "xl",
      class: "h-full w-5"
    },
    {
      orientation: "vertical",
      size: "2xl",
      class: "h-full w-6"
    }
  ]
});
