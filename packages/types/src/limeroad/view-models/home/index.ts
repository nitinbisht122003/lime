import type { HomeAssetPayloadMap, HomeAssetType } from "../../assets";
import type { Asset, PageData } from "../../models";

export type HomeAssetViewModel = Asset<HomeAssetType, HomeAssetPayloadMap, "view_model">;

export type HomeDataViewModel = PageData<HomeAssetViewModel>;

export * from "./story-highlights";
