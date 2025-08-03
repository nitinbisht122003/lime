import type { CheckoutAssetViewModel } from "@app/types/limeroad";

import { AddressSelector } from "../address-selector";
import { CommonAssetRenderer, isCommonAsset } from "../common/common-asset-renderer";
import { CouponsSection } from "../coupons-section";
import { CreditsSection } from "../credits-section";
import { BagItems } from "./bag-items";
import { OrderSummary } from "./order-summary";
import { PaymentsSection } from "./payments-section";

export function CheckoutAssetRenderer(asset: CheckoutAssetViewModel) {
  if (isCommonAsset(asset)) {
    return <CommonAssetRenderer asset={asset} className="mx-2.5" />;
  }

  const { type, payload } = asset;

  switch (type) {
    case "address_selector":
      return <AddressSelector addressData={payload} />;

    case "bag_items":
      return <BagItems bag={payload} className="mx-2.5" />;

    case "coupons_section":
      return <CouponsSection data={payload} className="mx-2.5" />;

    case "credits_section":
      return <CreditsSection data={payload} className="mx-2.5" />;

    case "payment_section":
      return <PaymentsSection data={payload} className="mx-2.5" />;

    case "summary":
      return <OrderSummary summary={payload} className="mx-2.5" />;

    case "checkout_action":
      return null;

    case "trust_section":
      return null;

    default:
      return null;
  }
}
