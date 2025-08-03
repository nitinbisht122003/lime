import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const drawerStyle = tva({
  base: "pointer-events-none relative h-full w-full",
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
      full: ""
    },
    anchor: {
      left: "items-start",
      right: "items-end",
      top: "justify-start",
      bottom: "justify-end"
    }
  }
});

export const drawerBackdropStyle = tva({
  base: "bg-background-dark web:cursor-default absolute bottom-0 left-0 right-0 top-0"
});

export const sizes = {
  sm: 0.25,
  md: 0.5,
  lg: 0.75,
  full: 1
} as const;

export const drawerContentStyle = tva({
  base: "bg-background-0 border-outline-100 absolute overflow-scroll p-6",
  parentVariants: {
    size: {
      sm: "w-1/4",
      md: "w-1/2",
      lg: "w-3/4",
      full: "w-full"
    },
    anchor: {
      left: "h-full border-r",
      right: "h-full border-l",
      top: "w-full border-b",
      bottom: "w-full border-t"
    }
  },
  parentCompoundVariants: [
    {
      anchor: "top",
      size: "sm",
      class: "h-1/4"
    },
    {
      anchor: "top",
      size: "md",
      class: "h-1/2"
    },
    {
      anchor: "top",
      size: "lg",
      class: "h-3/4"
    },
    {
      anchor: "top",
      size: "full",
      class: "h-full"
    },
    {
      anchor: "bottom",
      size: "sm",
      class: "h-1/4"
    },
    {
      anchor: "bottom",
      size: "md",
      class: "h-1/2"
    },
    {
      anchor: "bottom",
      size: "lg",
      class: "h-3/4"
    },
    {
      anchor: "bottom",
      size: "full",
      class: "h-full"
    }
  ]
});

export const drawerCloseButtonStyle = tva({
  base: "data-[focus-visible=true]:web:bg-background-100 web:outline-0 z-10 cursor-pointer rounded"
});

export const drawerHeaderStyle = tva({
  base: "flex-row items-center justify-between"
});

export const drawerBodyStyle = tva({
  base: "mb-6 mt-4 shrink-0"
});

export const drawerFooterStyle = tva({
  base: "flex-row items-center justify-end"
});
