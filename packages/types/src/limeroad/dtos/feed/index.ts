import type { FeedAssetPayloadMap, FeedAssetType } from "../../assets";
import type { Asset, Page, PageData, PageResponse } from "../../models";

export interface FeedQueryDto {
  id: Page; // Page type or feed context (e.g., "home", "category", "user")
}

export type FeedAssetDto = Asset<FeedAssetType, FeedAssetPayloadMap, "dto">;

export type FeedResponseDto = PageResponse<FeedAssetDto>;

export type FeedDataDto = PageData<FeedAssetDto>;

export * from "./blog";
export * from "./filtered-rails";
export * from "./product-rail";
export * from "./story";
export * from "./ticker";
export * from "./visual-filter";
export * from "./product-carousel";
