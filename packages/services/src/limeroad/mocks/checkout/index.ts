import type { CheckoutDataDto } from "@app/types/limeroad";

import { addressSelectorData } from "../address-selector";
import { divider } from "../common/divider";
import { couponsSection } from "../coupons-section";
import { creditsSection } from "../credits-section";
import { orderSummary } from "../order-summary";
import { checkoutBagItems } from "./bag-items";
import { paymentsSectionDto } from "./payments-section";

export const checkout: CheckoutDataDto = {
  items: [
    {
      type: "address_selector",
      payload: addressSelectorData
    },
    {
      type: "spacing",
      payload: {
        value: 10,
        orientation: "vertical"
      }
    },
    {
      type: "bag_items",
      payload: checkoutBagItems
    },
    {
      type: "divider",
      payload: divider
    },
    {
      type: "coupons_section",
      payload: couponsSection
    },
    {
      type: "divider",
      payload: divider
    },
    {
      type: "credits_section",
      payload: creditsSection
    },
    {
      type: "divider",
      payload: divider
    },
    {
      type: "payment_section",
      payload: paymentsSectionDto
    },
    {
      type: "divider",
      payload: divider
    },
    {
      type: "summary",
      payload: orderSummary
    },
    {
      type: "checkout_action",
      payload: {}
    }
  ],
  meta: {
    id: "checkout"
  }
};
