import type { CartAssetPayloadMap, CartAssetType } from "../../assets";
import type { Asset, PageData } from "../../models";

export * from "./cart-item";
export * from "./checkout-action";

export type CartAssetViewModel = Asset<CartAssetType, CartAssetPayloadMap, "view_model">;

export type CartDataViewModel = PageData<CartAssetViewModel>;
