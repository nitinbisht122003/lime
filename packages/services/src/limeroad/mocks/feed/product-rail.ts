import type { ProductRailDto } from "@app/types/limeroad";

import { productCards } from "../product-card";

export const productRail: ProductRailDto = {
  products: productCards,
  title: "Top Picks for You",
  link: {
    label: "See All",
    url: "/products"
  }
};
