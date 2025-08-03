import type { SharedValue } from "react-native-reanimated";
import { createContext, useContext } from "react";

export interface RNCarouselContext {
  progress: SharedValue<number>;
  onSnapToItem?: (index: number) => void;
}

export const RNCarouselContext = createContext<RNCarouselContext | undefined>(undefined);

export function useRNCarouselContext() {
  const context = useContext(RNCarouselContext);
  if (!context) {
    throw new Error("useCarouselContext must be used in a Carousel");
  }

  return context;
}
