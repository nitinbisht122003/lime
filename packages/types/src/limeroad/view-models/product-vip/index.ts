import type { ProductVipAssetPayloadMap, ProductVipAssetType } from "../../assets";
import type { Asset, PageData } from "../../models";

export type ProductVipAssetViewModel = Asset<
  ProductVipAssetType,
  ProductVipAssetPayloadMap,
  "view_model"
>;

export type ProductVipDataViewModel = PageData<ProductVipAssetViewModel>;

export * from "./edd-checker";
export * from "./customer-promises";
export * from "./product-details";
export * from "./product-info";
export * from "./size-guide";
export * from "./sibling-selector";
export * from "./product-gallery";
export * from "./vip-action";
export * from "./size-selector";
export * from "./similar-rail";
