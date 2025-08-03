import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import type { DotStyle } from "react-native-reanimated-carousel/lib/typescript/components/Pagination/Basic/PaginationItem";

interface CarouselProps {
  defaultIndex?: number;
  loop?: boolean;
  autoPlayInterval?: number;
  children: ReactNode;

  //events
  onSnapToItem?: (index: number) => void;
  onProgressChange?: (progress: {
    index: number;
    progress: number; // 0 to 1
  }) => void;
}

export interface CarouselRenderItemInfo<ItemT> {
  item: ItemT;
  index: number;
}

export type CarouselRenderItem<ItemT> = (info: CarouselRenderItemInfo<ItemT>) => React.ReactElement;

interface CarouselSlidesProps<T> {
  data: T[];
  renderItem: CarouselRenderItem<T>;
  width?: number;
  height?: number;
  fullWidth?: boolean;
  aspectRatio?: number;
}

interface CarouselPaginationProps<T> {
  data: T[];
  renderItem?: (item: T, index: number, isActive: boolean) => ReactNode;
  dotStyle?: DotStyle;
  activeDotStyle?: DotStyle;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: (index: number) => void;
}

export type { CarouselProps, CarouselSlidesProps, CarouselPaginationProps };
