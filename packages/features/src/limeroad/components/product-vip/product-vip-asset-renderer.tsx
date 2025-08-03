"use client";

import type { FC } from "react";

import type { ProductVipAssetType, ProductVipAssetViewModel } from "@app/types/limeroad";

import { CommonAssetRenderer, isCommonAsset } from "../common/common-asset-renderer";
import { Pagination } from "../pagination";
import { EddChecker } from "./edd-checker";
import { ProductDetails } from "./product-details";
import { ProductGallery } from "./product-gallery";
import { ProductInfo } from "./product-info";
import SiblingSelector from "./sibling-selector";
import { SimilarRail } from "./similiar-rail";
import { SizeSelector } from "./size-selector";
import { VipFooter } from "./vip_footer";

interface ProductVipAssetRendererProps {
  asset: ProductVipAssetViewModel;
}

export const ProductVipAssetRenderer: FC<ProductVipAssetRendererProps> = ({ asset }) => {
  const { type, payload } = asset;

  if (isCommonAsset(asset)) {
    console.log("going into common asset renderer", asset);
    return <CommonAssetRenderer asset={asset} />;
  }

  switch (type) {
    case "product_gallery":
      return <ProductGallery gallery={payload} />;

    case "product_info":
      return <ProductInfo productInfo={payload} className="px-2.5 pt-4" />;

    case "sibling_selector":
      return <SiblingSelector siblings={payload.siblings} className="px-2.5" />;

    case "size_selector":
      return <SizeSelector sizeSelector={payload} className="px-2.5 pt-4" />;

    case "edd_checker":
      return <EddChecker data={payload} className="px-2.5" />;

    case "vip_action":
      return <VipFooter vipActions={payload} className="sticky bottom-0 left-0 right-0 z-20" />;

    case "product_details":
      return <ProductDetails details={payload} className="px-2.5" />;

    case "similar_rail":
      return <SimilarRail data={payload} className="px-2.5" />;

    case "pagination":
      return (
        <Pagination<ProductVipAssetType>
          data={payload}
          AssetRenderer={({ asset }) => (
            <ProductVipAssetRenderer asset={asset as ProductVipAssetViewModel} />
          )}
        />
      );
    default:
      return null;
  }
};
