import type { CommonAssetPayloadMap, CommonAssetType } from "../../assets";
import type { Asset, PageData, PageResponse } from "../../models";

export type CommonAssetDto = Asset<CommonAssetType, CommonAssetPayloadMap, "dto">;

export type CommonResponseDto = PageResponse<CommonAssetDto>;

export type CommonDataDto = PageData<CommonAssetDto>;

export * from "./divider";
export * from "./spacing";
export * from "./promonote";
export * from "./fabs";
