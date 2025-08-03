"use client";

import type { FC } from "react";

import type { FeedAssetType, FeedAssetViewModel } from "@app/types/limeroad";

import { CommonAssetRenderer, isCommonAsset } from "../common/common-asset-renderer";
import { Pagination } from "../pagination";
import { BlogCard } from "./blog-card";
import { ColorFilterRail } from "./filtered-rails/color-filter-rail";
import { ProductGrid } from "./product-grid";
import { ProductRail } from "./product-rail";
import { StoryCard } from "./story-card";
import { Ticker } from "./ticker";

interface FeedAssetRendererProps {
  asset: FeedAssetViewModel;
  className?: string;
}

export const FeedAssetRenderer: FC<FeedAssetRendererProps> = ({
  asset,
  className
}: FeedAssetRendererProps) => {
  if (isCommonAsset(asset)) {
    return <CommonAssetRenderer asset={asset} className={className} />;
  }

  const { type, payload } = asset;

  switch (type) {
    case "blog":
      return <BlogCard blog={payload} />;

    case "product_grid":
      return <ProductGrid products={payload} />;

    case "product_rail":
      return <ProductRail productRail={payload} />;

    case "story":
      return <StoryCard story={payload} />;

    case "ticker":
      return <Ticker ticker={payload} />;

    case "color_filter_rail":
      return <ColorFilterRail colorFilterRail={payload} />;
    case "pagination":
      return (
        <Pagination<FeedAssetType>
          data={payload}
          AssetRenderer={({ asset }) => <FeedAssetRenderer asset={asset as FeedAssetViewModel} />}
        />
      );

    default:
      return null;
  }
};
