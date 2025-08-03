import type { CartAssetViewModel } from "@app/types/limeroad";

import { AddressSelector } from "../address-selector";
import { CommonAssetRenderer, isCommonAsset } from "../common/common-asset-renderer";
import { GoldPitch } from "../gold-pitch";
import { OrderSummary } from "../order-summary";
import { CartFooter } from "./cart-footer";
import { CartItem } from "./cart-item";
import { CouponsSection } from "./coupons-section";

export function CartAssetRenderer(asset: CartAssetViewModel) {
  if (isCommonAsset(asset)) {
    return <CommonAssetRenderer asset={asset} className="mx-2.5" />;
  }

  const { type, payload } = asset;

  switch (type) {
    case "address_selector":
      return <AddressSelector addressData={payload} />;

    case "cart_item":
      return <CartItem item={payload} className="mx-2.5" />;

    case "credits":
      return null;

    case "coupons_section":
      return <CouponsSection data={payload} className="mx-2.5" />;

    case "summary":
      return <OrderSummary summary={payload} className="mx-2.5" />;

    case "checkout_action":
      return <CartFooter checkoutAction={payload} />;

    case "gold_pitch":
      return <GoldPitch data={payload} className="mx-2.5" />;

    default:
      return null;
  }
}
