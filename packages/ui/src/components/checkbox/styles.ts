import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const checkboxStyle = tva({
  base: "group/checkbox cursor-pointer flex-row items-center justify-start data-[disabled=true]:cursor-not-allowed",
  variants: {
    size: {
      lg: "gap-2",
      md: "gap-2",
      sm: "gap-1.5"
    }
  }
});

export const checkboxIndicatorStyle = tva({
  base: "border-lr-green-300 data-[focus-visible=true]:ring-lr-green-500 data-[checked=true]:bg-lr-green-400 data-[checked=true]:border-lr-green-400 data-[hover=true]:data-[checked=false]:border-lr-green-400 data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[checked=true]:bg-lr-green-500 data-[hover=true]:data-[checked=true]:border-lr-green-500 data-[hover=true]:data-[checked=true]:data-[disabled=true]:border-lr-green-400 data-[hover=true]:data-[checked=true]:data-[disabled=true]:bg-lr-green-400 data-[hover=true]:data-[checked=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:border-lr-green-200 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[active=true]:data-[checked=true]:bg-lr-green-600 data-[active=true]:data-[checked=true]:border-lr-green-600 data-[invalid=true]:border-error-700 items-center justify-center rounded bg-transparent data-[hover=true]:bg-transparent data-[disabled=true]:opacity-40 data-[hover=true]:data-[checked=true]:data-[disabled=true]:opacity-40 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-1",
  parentVariants: {
    size: {
      lg: "h-6 w-6 border-[3px]",
      md: "h-5 w-5 border-2",
      sm: "h-4 w-4 border-2"
    }
  }
});

export const checkboxLabelStyle = tva({
  base: "text-lr-grey-600 data-[checked=true]:text-lr-grey-950 data-[hover=true]:text-lr-grey-950 data-[hover=true]:data-[checked=true]:text-lr-grey-950 data-[hover=true]:data-[checked=true]:data-[disabled=true]:text-lr-grey-500 data-[hover=true]:data-[disabled=true]:text-lr-grey-400 data-[active=true]:text-lr-grey-950 data-[active=true]:data-[checked=true]:text-lr-grey-950 select-none data-[disabled=true]:opacity-40",
  parentVariants: {
    size: {
      lg: "text-base",
      md: "text-sm",
      sm: "text-xs"
    }
  }
});

export const checkboxIconStyle = tva({
  base: "text-lr-grey-50 fill-none",
  parentVariants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5"
    }
  }
});
