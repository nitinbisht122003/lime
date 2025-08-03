import type { StyleProp, ViewStyle } from "react-native";
import type { DotStyle } from "react-native-reanimated-carousel/lib/typescript/components/Pagination/Basic/PaginationItem";
import { tva } from "@gluestack-ui/nativewind-utils/tva";

// Native styles
const defaultDotStyle: DotStyle = {
  backgroundColor: "#000000",
  opacity: 0.2,
  borderRadius: 12,
  width: 10,
  height: 4
};

const defaultActiveDotStyle: DotStyle = {
  backgroundColor: "#99cc33",
  opacity: 1,
  width: 16
};

const defaultContainerStyle: StyleProp<ViewStyle> = {
  gap: 5,
  marginTop: 10,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};

// Web styles using TVA
export const carouselViewportStyle = tva({
  base: "w-full overflow-hidden"
});

export const carouselContainerStyle = tva({
  base: "flex flex-row"
});

export const carouselSlideStyle = tva({
  base: "min-w-0 shrink-0 grow-0 basis-full"
});

export const paginationContainerStyle = tva({
  base: "mt-4 flex flex-row justify-center gap-2"
});

export const paginationDotStyle = tva({
  base: "h-2 w-2 rounded-full bg-gray-200",
  variants: {
    active: {
      true: "bg-green-500",
      false: "bg-gray-200"
    }
  },
  defaultVariants: {
    active: false
  }
});

export { defaultDotStyle, defaultActiveDotStyle, defaultContainerStyle };
