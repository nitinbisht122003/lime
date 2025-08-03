import { tva } from "@gluestack-ui/nativewind-utils";

export const modalStyle = tva({
  base: "group/modal h-full w-full items-center justify-center",
  variants: {
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      full: ""
    },
    position: {
      center: "items-center justify-center",
      bottom: "items-end justify-end"
    }
  },
  defaultVariants: {
    position: "center"
  }
});

export const modalBackdropStyle = tva({
  base: "bg-background-dark absolute bottom-0 left-0 right-0 top-0 cursor-default"
});

export const modalContentStyle = tva({
  base: "bg-background-0 border-outline-100 shadow-hard-2 overflow-hidden rounded-md border",
  parentVariants: {
    size: {
      xs: "w-[60%] max-w-[360px]",
      sm: "w-[70%] max-w-[420px]",
      md: "w-[80%] max-w-[510px]",
      lg: "w-[90%] max-w-[640px]",
      full: "w-full"
    },
    position: {
      center: "rounded-md",
      bottom: "w-full max-w-none rounded-t-2xl"
    }
  },
  defaultVariants: {
    position: "center"
  }
});

export const modalBodyStyle = tva({
  base: ""
});

export const modalCloseButtonStyle = tva({
  base: "group/modal-close-button data-[focus-visible=true]:bg-background-100 z-10 cursor-pointer rounded outline-0"
});

export const modalHeaderStyle = tva({
  base: "flex-row items-center justify-between"
});

export const modalFooterStyle = tva({
  base: "flex-row items-center justify-end gap-2"
});
