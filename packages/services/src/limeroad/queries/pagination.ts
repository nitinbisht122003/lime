import { queryOptions } from "@tanstack/react-query";

import type { Href } from "@app/types/common";
import { sleep } from "@app/core/utils";

import { getFeed } from "../mocks/feed";
import { colorFilterRail } from "../mocks/feed/filtered-rails";
// import { getLrApiClient } from "../client";
import { productRail } from "../mocks/feed/product-rail";

async function getFeedData() {
  await sleep(300);
  const response = getFeed();

  return response;
}

async function getProductRail() {
  const response = productRail;
  console.log("productRail from pagination", response);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 300);
  });
}

async function getFilteredRails() {
  const response = {
    items: [
      { type: "color_filter_rail", payload: colorFilterRail },
      { type: "divider", payload: { orientation: "horizontal" } },
      { type: "product_rail", payload: productRail }
    ]
  };
  console.log("filteredRails from pagination", response);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 300);
  });
}
export function paginationQueryOptions(url: Href) {
  return queryOptions({
    queryKey: ["pagination", url],
    queryFn: async () => {
      if (url.includes("filtered-rails")) {
        return await getFilteredRails();
      } else if (url.includes("similar-products")) {
        return await getProductRail();
      } else if (url.includes("feed")) {
        return await getFeedData();
      }
      // Default fallback
      return await getFeedData();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });
}
