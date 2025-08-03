import type { CommonAssetPayloadMap, CommonAssetType } from "../../assets";
import type { Asset, PageData } from "../../models";

export type CommonAssetViewModel = Asset<CommonAssetType, CommonAssetPayloadMap, "view_model">;

export type CommonDataViewModel = PageData<CommonAssetViewModel>;

export * from "./divider";
export * from "./fabs";
export * from "./promonote";
export * from "./spacing";
