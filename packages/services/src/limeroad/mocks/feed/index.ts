import { isServer } from "@tanstack/react-query";

import type { FeedDataDto } from "@app/types/limeroad";

import { productCard } from "../product-card";
import { blog } from "./blog";
import { colorFilterRail } from "./filtered-rails";
import { productRail } from "./product-rail";
import { story } from "./stories";
import { ticker } from "./ticker";

let count = isServer ? -1000 : 0;

export const getFeed = (): FeedDataDto => {
  return {
    items: [
      { type: "carousel", payload: [] },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      { type: "ticker", payload: ticker },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      { type: "color_filter_rail", payload: colorFilterRail },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      { type: "product_rail", payload: productRail },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      { type: "product_grid", payload: [productCard, productCard] },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      { type: "story", payload: story },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      { type: "blog", payload: blog },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      { type: "product_angles", payload: [] },
      { type: "spacing", payload: { orientation: "vertical", value: 24 } },
      {
        type: "pagination",
        payload: { url: `https://www.limeroad.com?count=${count++}`, assetType: "feed", ttl: 30000 }
      }
    ],
    meta: {
      id: "home"
    }
  };
};
