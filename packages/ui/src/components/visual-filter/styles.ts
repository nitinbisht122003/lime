import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const visualFilterGroupStyle = tva({
  base: "flex w-full flex-row flex-nowrap items-start justify-start overflow-scroll",
  variants: {
    spacing: {
      sm: "gap-2 px-2",
      md: "gap-2.5 px-2.5",
      lg: "gap-3 px-3"
    }
  },
  defaultVariants: {
    spacing: "md"
  }
});

export const visualFilterStyle = tva({
  base: "gap-1",
  variants: {
    size: {
      sm: "w-14",
      md: "w-16"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const visualFilterImageStyle = tva({
  base: "w-full rounded-md object-top",
  parentVariants: {
    size: {
      sm: "aspect-square",
      md: "aspect-[64/74]"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type VisualFilterImageSize = NonNullable<VariantProps<typeof visualFilterImageStyle>["size"]>;

export const visualFilterImageSizes: Record<
  VisualFilterImageSize,
  { width: number; height: number }
> = {
  sm: {
    width: 56,
    height: 56
  },
  md: {
    width: 64,
    height: 74
  }
};

export const visualFilterContentStyle = tva({
  base: "relative items-center justify-center",
  parentVariants: {
    size: {
      sm: "",
      md: ""
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const visualFilterTextStyle = tva({
  base: "text-typography-700 text-center font-medium capitalize",
  variants: {
    size: {
      sm: "text-2xs",
      md: "text-xs"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const visualFilterActiveIndicatorStyle = tva({
  base: "h-[3px] rounded-full bg-lime-500",
  variants: {
    size: {
      sm: "w-12",
      md: "w-14"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
