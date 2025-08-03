import type { HomeAssetViewModel } from "@app/types/limeroad";

import { CommonAssetRenderer, isCommonAsset } from "../common/common-asset-renderer";
import { StoryHighlights } from "../story-highlights";

interface HomeAssetRendererProps {
  asset: HomeAssetViewModel;
  className?: string;
}

export function HomeAssetRenderer({ asset, className = "mx-2.5" }: HomeAssetRendererProps) {
  if (isCommonAsset(asset)) {
    return <CommonAssetRenderer asset={asset} className={className} />;
  }

  return <StoryHighlights highlights={asset.payload} className={className} />;
}
