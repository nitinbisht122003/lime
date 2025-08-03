import type { CheckoutAssetPayloadMap, CheckoutAssetType } from "../../assets";
import type { Asset, PageData } from "../../models";

export type CheckoutAssetViewModel = Asset<
  CheckoutAssetType,
  CheckoutAssetPayloadMap,
  "view_model"
>;

export type CheckoutDataViewModel = PageData<CheckoutAssetViewModel>;

export * from "./bag-items";

export * from "./payments-section";
