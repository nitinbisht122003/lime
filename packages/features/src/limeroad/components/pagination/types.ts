import type { FC } from "react";

import type { Asset, PaginationViewModel } from "@app/types/limeroad";

export interface PaginationProps<AssetType extends string> {
  /**
   * The pagination data with URL and asset type
   */
  data: PaginationViewModel<AssetType>;

  /**
   * The scroll root ID for root element (web only)
   * This is used to determine the root element for the Intersection Observer
   * @default null
   */
  scrollRootId?: string;

  /**
   * Threshold in pixels to start loading before the element is in view (web only)
   * @default 640
   */
  threshold?: number;

  /**
   * Callback when data is successfully loaded
   */
  onLoad?: (data: unknown) => void;

  /**
   * Callback when data loading fails
   */
  onError?: (error: Error) => void;

  /**
   * Asset renderer component
   */
  AssetRenderer: FC<{
    asset: Asset<AssetType, Record<AssetType, { dto: unknown; view_model: unknown }>, "view_model">;
  }>;
}
