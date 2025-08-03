import type { EmblaCarouselType } from "embla-carousel";
import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

export interface CarouselContextType {
  progress: { value: number };
  setProgress?: Dispatch<SetStateAction<{ value: number }>>;
  // Web-specific properties
  emblaRef?: (node: HTMLElement | null) => void;
  emblaApi?: EmblaCarouselType;
  goToSlide?: (index: number) => void;
  goToNextSlide?: () => void;
  goToPreviousSlide?: () => void;
}

export const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export function useCarouselContext() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarouselContext must be used in a Carousel");
  }

  return context;
}
