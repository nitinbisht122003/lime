import type { ProductVipAssetPayloadMap, ProductVipAssetType } from "../../assets";
import type { Asset, Page, PageData, PageResponse } from "../../models";

export interface ProductVipQueryDto {
  id: string; // Product identifier
  page?: Page; // Optional page context
}

export type ProductVipAssetDto = Asset<ProductVipAssetType, ProductVipAssetPayloadMap, "dto">;

export type ProductVipResponseDto = PageResponse<ProductVipAssetDto>;

export type ProductVipDto = PageData<ProductVipAssetDto>;

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
