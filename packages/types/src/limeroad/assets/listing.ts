import type { PaginationDto } from "../dtos";
import type { PaginationViewModel } from "../view-models";
import type { CommonAssetPayloadMap, CommonAssetType } from "./common";

export type ListingAssetType =
  | CommonAssetType
  | "visual_filters"
  | "flat_filters"
  | "price_slider"
  | "sort_and_filter"
  | "inline_filters"
  | "pagination";

export interface ListingAssetPayloadMap extends CommonAssetPayloadMap {
  visual_filters: {
    dto: unknown;
    view_model: unknown;
  };
  flat_filters: {
    dto: unknown;
    view_model: unknown;
  };
  price_slider: {
    dto: unknown;
    view_model: unknown;
  };
  sort_and_filter: {
    dto: unknown;
    view_model: unknown;
  };
  inline_filters: {
    dto: unknown;
    view_model: unknown;
  };
  pagination: {
    dto: PaginationDto<ListingAssetType>;
    view_model: PaginationViewModel<ListingAssetType>;
  };
}
