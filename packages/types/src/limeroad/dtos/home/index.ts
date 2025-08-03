import type { HomeAssetPayloadMap, HomeAssetType } from "../../assets";
import type { Asset, PageData, PageResponse } from "../../models";

export type HomeAssetDto = Asset<HomeAssetType, HomeAssetPayloadMap, "dto">;

export type HomeResponseDto = PageResponse<HomeAssetDto>;

export type HomeDataDto = PageData<HomeAssetDto>;

export * from "./story-highlights";
