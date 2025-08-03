import type { SimilarRailDto } from "@app/types/limeroad";

export const similarRail: SimilarRailDto = {
  pagination: {
    url: "/similar-products",
    assetType: "product_rail",
    ttl: 300 // 5 minutes cache
  }
};
