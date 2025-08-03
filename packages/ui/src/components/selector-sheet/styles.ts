import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const selectorSheetStyle = tva({
  variants: {
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  }
});

export const selectorSheetTriggerStyle = tva({
  base: "w-full",
  parentVariants: {
    size: {
      sm: "h-6 max-w-sm",
      md: "h-8 max-w-md",
      lg: "h-10 max-w-lg"
    }
  }
});

export const selectorSheetValueStyle = tva({
  base: "border-lr-grey-300 text-lr-grey-800 flex-row items-center border",
  parentVariants: {
    size: {
      sm: "gap-1 rounded-md px-1 py-1 text-xs",
      md: "gap-2 rounded-lg px-1 py-2 text-sm",
      lg: "gap-3 rounded-xl px-2 py-2.5 text-base"
    }
  }
});

export const selectorSheetHeaderStyle = tva({
  base: "bg-lr-grey-50 border-lr-grey-100 text-lr-grey-800 flex-row items-center justify-between rounded-t-lg border-b p-4"
});

export const selectorSheetTitleStyle = tva({
  base: "font-medium",
  parentVariants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  }
});

export const selectorSheetBodyStyle = tva({
  base: "gap-5 px-4 pb-7 pt-5"
});

export const selectorSheetOptionsStyle = tva({
  base: "flex-row flex-wrap justify-start gap-2.5"
});

export const selectorSheetOptionStyle = tva({
  base: "data-[checked=true]:bg-lr-green-200 data-[checked=true]:border-lr-green-600"
});

export const selectorSheetOptionLabelStyle = tva({
  base: "text-lr-grey-800",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  }
});

export const selectorSheetConfirmButtonStyle = tva({
  base: "w-full"
});
