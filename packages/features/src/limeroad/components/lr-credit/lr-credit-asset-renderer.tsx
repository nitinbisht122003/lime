"use client";

import type { LrCreditAssetType, LrCreditAssetViewModel } from "@app/types/limeroad";

import { CommonAssetRenderer, isCommonAsset } from "../common/common-asset-renderer";
import { Pagination } from "../pagination";
import { LrCreditInfo } from "./lr-credit-info";
import { LrCreditSummary } from "./lr-credit-summary";

export function LrCreditAssetRenderer(asset: LrCreditAssetViewModel) {
  if (isCommonAsset(asset)) {
    return <CommonAssetRenderer asset={asset} className="mx-2.5" />;
  }

  const { type, payload } = asset;

  switch (type) {
    case "lr_credit_info":
      return <LrCreditInfo data={payload} />;

    case "lr_credit_summary":
      return <LrCreditSummary data={payload} />;

    case "pagination":
      return (
        <Pagination<LrCreditAssetType>
          data={payload}
          AssetRenderer={({ asset }) => {
            return LrCreditAssetRenderer(asset as LrCreditAssetViewModel);
          }}
        />
      );

    default:
      return null;
  }
}
