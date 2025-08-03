import type { CartDataDto } from "@app/types/limeroad";

import { addressSelectorData } from "../address-selector";
import { divider } from "../common/divider";
import { promonoteMocks } from "../common/promonote";
import { couponsSection } from "../coupons-section";
import { goldPitch } from "../gold-pitch";
import { orderSummary } from "../order-summary";
import { cartItem } from "./cart-item";

export const cart: CartDataDto = {
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
      type: "promonote",
      payload: promonoteMocks
    },
    {
      type: "spacing",
      payload: {
        value: 10,
        orientation: "vertical"
      }
    },
    {
      type: "cart_item",
      payload: cartItem
    },
    {
      type: "divider",
      payload: divider
    },
    {
      type: "cart_item",
      payload: cartItem
    },
    {
      type: "divider",
      payload: divider
    },
    {
      type: "cart_item",
      payload: cartItem
    },
    {
      type: "divider",
      payload: divider
    },
    {
      type: "gold_pitch",
      payload: goldPitch
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
      type: "summary",
      payload: orderSummary
    },
    {
      type: "checkout_action",
      payload: {
        total_amount: 982,
        client_txn_id: "https://www.limeroad.com/checkout",
        all_oss: false
      }
    },
    {
      type: "fabs",
      payload: {
        fabs: [
          {
            type: "call_to_help"
          }
        ]
      }
    }
  ],
  meta: {
    id: "cart"
  }
};
