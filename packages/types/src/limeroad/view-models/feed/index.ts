import type { FeedAssetPayloadMap, FeedAssetType } from "../../assets";
import type { Asset, PageData } from "../../models";

export type FeedAssetViewModel = Asset<FeedAssetType, FeedAssetPayloadMap, "view_model">;

export type FeedDataViewModel = PageData<FeedAssetViewModel>;

export * from "./filtered-rails";
export * from "./blog";
export * from "./product-rail";
export * from "./story";
export * from "./ticker";
export * from "./visual-filter";
export * from "./product-carousel";
