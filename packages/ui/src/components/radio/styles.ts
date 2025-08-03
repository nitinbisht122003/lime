import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const radioStyle = tva({
  base: "group/radio cursor-pointer flex-row items-center justify-start data-[disabled=true]:cursor-not-allowed",
  variants: {
    size: {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2"
    }
  }
});

export const radioGroupStyle = tva({
  base: "gap-2"
});

export const radioIconStyle = tva({
  base: "text-lr-green-400 fill-lr-green-400 items-center justify-center rounded-full",
  parentVariants: {
    size: {
      sm: "h-[9px] w-[9px]",
      md: "h-3 w-3",
      lg: "h-4 w-4"
    }
  }
});

export const radioIndicatorStyle = tva({
  base: "border-lr-green-300 data-[focus-visible=true]:outline-lr-green-500 data-[checked=true]:border-lr-green-400 data-[hover=true]:border-lr-green-500 data-[hover=true]:data-[checked=true]:border-lr-green-500 data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:border-lr-green-300 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-400 data-[active=true]:border-lr-green-400 data-[invalid=true]:border-error-700 data-[disabled=true]:data-[checked=true]:border-lr-green-300 data-[disabled=true]:data-[invalid=true]:border-error-400 items-center justify-center rounded-full border-2 bg-transparent data-[active=true]:bg-transparent data-[checked=true]:bg-transparent data-[disabled=true]:data-[checked=true]:bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:data-[checked=true]:bg-transparent data-[disabled=true]:opacity-40 data-[hover=true]:data-[disabled=true]:opacity-40 data-[focus-visible=true]:outline data-[focus-visible=true]:outline-1",
  parentVariants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  }
});

export const radioLabelStyle = tva({
  base: "text-lr-grey-600 data-[checked=true]:text-lr-grey-900 data-[hover=true]:text-lr-grey-900 data-[hover=true]:data-[disabled=true]:text-lr-grey-600 data-[hover=true]:data-[disabled=true]:data-[checked=true]:text-lr-grey-900 data-[active=true]:text-lr-grey-900 data-[active=true]:data-[checked=true]:text-lr-grey-900 select-none data-[disabled=true]:opacity-40",
  parentVariants: {
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
