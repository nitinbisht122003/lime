import { isServer } from "@tanstack/react-query";

import type { LrCreditDataDto } from "@app/types/limeroad";

import { lrCreditInfo } from "./lr-credit";
import { lrCreditSummary } from "./lr-credit-summary";

let count = isServer ? -1000 : 0;

export const lrCredit: LrCreditDataDto = {
  items: [
    {
      type: "lr_credit_info",
      payload: lrCreditInfo
    },
    {
      type: "lr_credit_summary",
      payload: lrCreditSummary
    },
    {
      type: "pagination",
      payload: {
        url: `https://www.limeroad.com?/lr_credit_summary/count=${count++}`,
        assetType: "lr_credit_summary",
        ttl: 300
      }
    }
  ],
  meta: {
    id: "lr-credit"
  }
};
