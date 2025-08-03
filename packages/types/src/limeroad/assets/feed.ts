import type {
  BlogDto,
  ColorFilterRailDto,
  PaginationDto,
  ProductCardDto,
  ProductRailDto,
  StoryDto,
  TickerDto
} from "../dtos";
import type {
  BlogViewModel,
  ColorFilterRailViewModel,
  PaginationViewModel,
  ProductCardViewModel,
  ProductRailViewModel,
  StoryViewModel,
  TickerViewModel
} from "../view-models";
import type { CommonAssetPayloadMap, CommonAssetType } from "./common";
export type FeedAssetType =
  | CommonAssetType
  | "carousel"
  | "product_grid"
  | "product_rail"
  | "product_carousel"
  | "blog"
  | "product_angles"
  | "ticker"
  | "story"
  | "filtered_grid"
  | "color_filter_rail"
  | "pagination";

export interface FeedAssetPayloadMap extends CommonAssetPayloadMap {
  carousel: {
    dto: unknown;
    view_model: unknown;
  };
  product_grid: {
    dto: ProductCardDto[];
    view_model: ProductCardViewModel[];
  };
  product_rail: {
    dto: ProductRailDto;
    view_model: ProductRailViewModel;
  };
  product_carousel: {
    dto: unknown;
    view_model: unknown;
  };
  blog: {
    dto: BlogDto;
    view_model: BlogViewModel;
  };
  product_angles: {
    dto: unknown;
    view_model: unknown;
  };
  ticker: {
    dto: TickerDto;
    view_model: TickerViewModel;
  };
  story: {
    dto: StoryDto;
    view_model: StoryViewModel;
  };
  filtered_grid: {
    dto: unknown;
    view_model: unknown;
  };
  color_filter_rail: {
    dto: ColorFilterRailDto;
    view_model: ColorFilterRailViewModel;
  };
  pagination: {
    dto: PaginationDto<FeedAssetType>;
    view_model: PaginationViewModel<FeedAssetType>;
  };
}
