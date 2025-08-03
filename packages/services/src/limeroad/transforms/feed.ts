import type {
  FeedAssetDto,
  FeedAssetViewModel,
  FeedDataDto,
  FeedDataViewModel
} from "@app/types/limeroad";

import { transformColorFilterRailDtoToViewModel } from "./filtered-rails";

export const transformFeedDataDtoToViewModel = (data: FeedDataDto): FeedDataViewModel => {
  const { items, meta } = data;

  return {
    items: items.map(transformItemDtoToViewModel),
    meta
  };
};

const transformItemDtoToViewModel = (itemDto: FeedAssetDto): FeedAssetViewModel => {
  switch (itemDto.type) {
    case "color_filter_rail":
      return {
        ...itemDto,
        payload: transformColorFilterRailDtoToViewModel(itemDto.payload)
      };
    default:
      return itemDto; // Assuming other types are already in the correct format
  }
};
