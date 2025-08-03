import type { LrCreditAssetPayloadMap, LrCreditAssetType } from "../../assets";
import type { Asset, PageData } from "../../models";

export * from "./lr-credit";

export type LrCreditAssetViewModel = Asset<
  LrCreditAssetType,
  LrCreditAssetPayloadMap,
  "view_model"
>;

export type LrCreditDataViewModel = PageData<LrCreditAssetViewModel>;
