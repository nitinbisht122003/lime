interface BaseActionDto {
  type: "wishlist" | "add_to_cart" | "buy_now";
}

export interface WishlistActionDto extends BaseActionDto {
  type: "wishlist";
  text: string;
  is_wishlisted: boolean;
}

export interface AddToCartActionDto extends BaseActionDto {
  type: "add_to_cart";
  text: string;
}

export interface BuyNowActionDto extends BaseActionDto {
  type: "buy_now";
  text: string;
}

type VipActionDto = WishlistActionDto | AddToCartActionDto | BuyNowActionDto;

export interface VipActionsDto {
  actions: VipActionDto[];
}
