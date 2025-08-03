import type { ComponentProps } from "react";
import { Fragment } from "react";

import type { FeedAssetViewModel, FeedDataViewModel } from "@app/types/limeroad";
import { isEmpty } from "@app/core/utils";
import { View } from "@app/ui/elements/view";

import { FeedAssetRenderer } from "./feed-asset-renderer";

interface FeedProps {
  feed: FeedDataViewModel;
  className?: string;
}

export function Feed({ feed, className }: FeedProps) {
  return (
    <>
      {feed.items.map((item, index) => {
        return (
          <Wrapper key={index} item={item} className={className}>
            <FeedAssetRenderer asset={item} />
          </Wrapper>
        );
      })}
    </>
  );
}

type WrapperProps = ComponentProps<typeof View> & { item: FeedAssetViewModel };

function Wrapper({ children, item, className = "mx-2.5" }: WrapperProps) {
  if (isEmpty(item.payload)) return null; // Skip empty items

  if (item.type === "pagination" || item.type === "ticker" || item.type === "feed") {
    return <Fragment>{children}</Fragment>; // No additional styling for these types
  }

  return <View className={className}>{children}</View>;
}
