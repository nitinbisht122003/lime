import type { LrCreditAssetPayloadMap, LrCreditAssetType } from "../../assets";
import type { Asset, PageData, PageResponse } from "../../models";

export type LrCreditAssetDto = Asset<LrCreditAssetType, LrCreditAssetPayloadMap, "dto">;

export type LrCreditResponseDto = PageResponse<LrCreditAssetDto>;

export type LrCreditDataDto = PageData<LrCreditAssetDto>;

export * from "./lr-credit";
