import type { ListingAssetPayloadMap, ListingAssetType } from "../../assets";
import type { Asset, PageData, PageResponse } from "../../models";

export type ListingAssetDto = Asset<ListingAssetType, ListingAssetPayloadMap, "dto">;

export type ListingResponseDto = PageResponse<ListingAssetDto>;

export type ListingDataDto = PageData<ListingAssetDto>;

export * from "./filter";
export * from "./flat-filters";
export * from "./inline-filters";
export * from "./price-slider";
export * from "./sort-and-filter";
export * from "./visual-filters";
