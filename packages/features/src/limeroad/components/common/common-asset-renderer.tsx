import type { CommonAssetViewModel } from "@app/types/limeroad";
import { isEmpty } from "@app/core/utils";
import { View } from "@app/ui/elements/view";

import { Feed } from "../feed";
import { Divider } from "./divider";
import { Fabs } from "./fabs";
import { Promonote } from "./promonote";
import { Spacing } from "./spacing";

export interface CommonAssetRendererProps {
  asset: CommonAssetViewModel;
  className?: string;
}

export function CommonAssetRenderer({ asset, className = "mx-2.5" }: CommonAssetRendererProps) {
  const { type, payload } = asset;

  if (isEmpty(payload)) return null; // Skip rendering if payload is empty

  switch (type) {
    case "divider":
      return (
        <View className={className}>
          <Divider divider={payload} />
        </View>
      );
    case "spacing":
      return (
        <View className={className}>
          <Spacing spacing={payload} />
        </View>
      );
    case "promonote":
      return <Promonote data={payload} className={className} />;
    case "fabs":
      return <Fabs className={className} />;
    case "feed":
      return <Feed feed={payload} className={className} />;
  }
}

export const isCommonAsset = (asset: {
  type: string;
  payload: unknown;
}): asset is CommonAssetViewModel => {
  const { type } = asset;

  return (
    type === "divider" ||
    type === "spacing" ||
    type === "promonote" ||
    type === "fabs" ||
    type === "feed"
  );
};
