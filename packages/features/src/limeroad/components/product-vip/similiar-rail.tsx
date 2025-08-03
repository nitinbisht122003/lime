"use client";

import type { FC } from "react";

import type { FeedAssetViewModel, SimilarRailViewModel } from "@app/types/limeroad";
import { View } from "@app/ui/elements/view";

import { useProductVipContext } from "../../hooks/product-vip";
import { ProductRail } from "../feed/product-rail";
import { Pagination } from "../pagination";

type SimilarRailAssetViewModel = FeedAssetViewModel & {
  type: "product_rail";
  payload: SimilarRailViewModel;
};

interface SimilarRailAssetRendererProps {
  asset: SimilarRailAssetViewModel;
}

const SimilarRailAssetRenderer: FC<SimilarRailAssetRendererProps> = ({ asset }) => {
  return <ProductRail productRail={asset.payload} />;
};

interface SimilarRailProps {
  data: SimilarRailViewModel;
  className?: string;
}

export const SimilarRail: FC<SimilarRailProps> = ({ data, className }) => {
  const { similarRailRef } = useProductVipContext();

  return (
    <View className={className} ref={similarRailRef}>
      <Pagination<"product_rail">
        data={data.pagination}
        AssetRenderer={({ asset }) => (
          <SimilarRailAssetRenderer asset={asset as SimilarRailAssetViewModel} />
        )}
      />
    </View>
  );
};
