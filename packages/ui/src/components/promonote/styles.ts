import { tva } from "@gluestack-ui/nativewind-utils/tva";

import type { ImageSizeMap } from "../../types";

const GOLD = {
  gradient:
    "bg-[linear-gradient(102.08deg,#d0994d_-3.38%,#d49e4e_4.29%,#e3af54_11.97%,#fac95d_23.48%,#ffcf5f_25.4%,#fffacb_42.67%,#fff9b1_56.1%,#ffcd59_65.7%,#d0994d_90.64%,#f1dd94_111.75%,#fff9b1_121.34%,#fffacb_146.29%,#fffacb_152.05%,#ffcd59_165.48%,#d0994d_186.59%)]"
} as const;

export const promonoteStyle = tva({
  base: "flex-row items-center justify-between gap-2 border",
  variants: {
    type: {
      info: "border-lr-blue-300 bg-lr-blue-25",
      success: "border-lr-green-500 bg-lr-green-100",
      gold: "border-lr-gold-500 bg-lr-gold-300"
    },
    size: {
      sm: "rounded-sm p-1",
      md: "rounded-md p-2",
      lg: "rounded-lg p-3"
    }
  }
});

export const promonoteImageStyle = tva({
  parentVariants: {
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  }
});

export const imageSize: ImageSizeMap<"sm" | "md" | "lg"> = {
  sm: "2xs",
  md: "xs",
  lg: "sm"
};

export const promonoteIconStyle = tva({
  parentVariants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12"
    }
  }
});

export const promonoteButtonStyle = tva({
  base: "max-w-30 shrink-0 shadow-sm",
  parentVariants: {
    type: {
      info: "bg-lr-blue-400/50 border-lr-blue-300",
      success: "bg-lr-green-400 border-lr-green-500",
      gold: `${GOLD.gradient} border-lr-gold-500`
    },
    size: {
      sm: "h-8 rounded-sm px-2",
      md: "h-9 rounded-md px-3",
      lg: "h-10 rounded-lg px-4"
    }
  },
  variants: {
    variant: {
      solid: "",
      outline: "border bg-transparent"
    }
  }
});

export const promonoteButtonTextStyle = tva({
  base: "text-lr-grey-950 truncate whitespace-nowrap font-medium",
  parentVariants: {
    type: {
      info: "",
      success: "",
      gold: ""
    },
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm"
    }
  }
});

export const promonoteTitleStyle = tva({
  base: "text-lr-grey-950 font-semibold",
  parentVariants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  }
});

export const promonoteSubtitleStyle = tva({
  base: "text-lr-grey-950 mt-0.5",
  parentVariants: {
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm"
    }
  }
});
