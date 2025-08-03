import type { VipActionsDto } from "@app/types/limeroad";

export const VipAction: VipActionsDto = {
  actions: [
    {
      type: "wishlist",
      text: "Add to Wishlist",
      is_wishlisted: false
    },
    {
      type: "add_to_cart",
      text: "Add to Cart"
    },
    {
      type: "buy_now",
      text: "Buy Now"
    }
  ]
};
