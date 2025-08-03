import type { CheckoutAssetPayloadMap, CheckoutAssetType } from "../../assets";
import type { Asset, PageData, PageResponse } from "../../models";

export type CheckoutAssetDto = Asset<CheckoutAssetType, CheckoutAssetPayloadMap, "dto">;

export type CheckoutResponseDto = PageResponse<CheckoutAssetDto>;

export type CheckoutDataDto = PageData<CheckoutAssetDto>;

export interface CheckoutQueryDto {
  client_txn_id: string;
}

export * from "./bag-items";

export * from "./payments-section";
