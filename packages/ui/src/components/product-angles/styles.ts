import { tva } from "@gluestack-ui/nativewind-utils";

export const productAngleStyle = tva({
  base: "w-full",
  variants: {
    size: {
      sm: "",
      md: "", 
      lg: ""
    }
  }
});

export const productAnglesTitleStyle = tva({
  base: "flex-row items-center justify-between px-4 py-2",
  variants: {
    size: {
      sm: "text-sm font-medium",
      md: "text-base font-semibold",
      lg: "text-lg font-bold"
    }
  }
});

export const productAnglesGridContainerStyle = tva({
  base: "relative w-full overflow-hidden transition-all duration-300 ease-in-out [&_img]:object-cover [&_img]:object-top [&_img]:rounded-lg [&_*]:rounded-lg mb-4",
  parentVariants: {
    size: {
      sm: "rounded-md h-[200px] [&_img]:rounded-md [&_*]:rounded-md",
      md: "rounded-lg h-[300px] [&_img]:rounded-lg [&_*]:rounded-lg", 
      lg: "rounded-xl h-[400px] [&_img]:rounded-xl [&_*]:rounded-xl"
    }
  }
});

export const productAnglesRailStyle = tva({
  base: "flex flex-col gap-3"
});

export const productAngleFocusRailStyle = tva({
  base: "w-full"
});