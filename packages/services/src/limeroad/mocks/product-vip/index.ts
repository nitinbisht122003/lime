import type { ProductVipDto } from "@app/types/limeroad";

import { siblings } from "../siblings";
import { SizeSelector } from "../size-selector";
import { EddChecker } from "./edd-checker";
import { productDetails } from "./product-details";
import { productGallery } from "./product-gallery";
import { productInfo } from "./product-info";
import { similarRail } from "./similar-rail";
import { VipAction } from "./vip-action";

export const getProductVip = (): ProductVipDto => {
  return {
    items: [
      { type: "product_gallery", payload: productGallery },
      { type: "product_info", payload: productInfo },
      { type: "divider", payload: { orientation: "horizontal", margin: { top: 16, bottom: 16 } } },
      { type: "sibling_selector", payload: { siblings } },
      { type: "size_selector", payload: SizeSelector },
      { type: "divider", payload: { orientation: "horizontal", margin: { top: 16, bottom: 16 } } },
      { type: "edd_checker", payload: EddChecker },
      { type: "divider", payload: { orientation: "horizontal", margin: { top: 16, bottom: 16 } } },
      { type: "product_details", payload: productDetails },
      { type: "divider", payload: { orientation: "horizontal", margin: { top: 16, bottom: 16 } } },
      { type: "vip_action", payload: VipAction },
      { type: "divider", payload: { orientation: "horizontal", margin: { top: 16, bottom: 16 } } },
      { type: "similar_rail", payload: similarRail },
      { type: "divider", payload: { orientation: "horizontal", margin: { top: 16, bottom: 16 } } },
      {
        type: "pagination",
        payload: { url: `filtered-rails`, assetType: "feed", ttl: 30000 }
      }
    ],
    meta: {
      id: "product-vip"
    }
  };
};
