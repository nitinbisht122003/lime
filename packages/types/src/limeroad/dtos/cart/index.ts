import type { CartAssetPayloadMap, CartAssetType } from "../../assets";
import type { Asset, PageData, PageResponse } from "../../models";

export type CartAssetDto = Asset<CartAssetType, CartAssetPayloadMap, "dto">;

export type CartResponseDto = PageResponse<CartAssetDto>;

export type CartDataDto = PageData<CartAssetDto>;

export * from "./cart-item";
export * from "./checkout-action";
