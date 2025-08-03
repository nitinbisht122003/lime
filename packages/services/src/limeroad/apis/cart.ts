import type { CartDataViewModel, CartResponseDto } from "@app/types/limeroad";

import { AbstractService } from "../models/abstract-service";
import { transformCartDataDtoToViewModel } from "../transforms/cart";

class CartServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CartServiceError";
  }
}

class CartService extends AbstractService {
  private static instance: CartService | null = null;

  private constructor() {
    super();
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): CartService {
    CartService.instance ??= new CartService();

    return CartService.instance;
  }

  async getCart(): Promise<CartDataViewModel> {
    const cartResponse = await this.getApiClient().get<CartResponseDto>("cart");

    return transformCartDataDtoToViewModel(cartResponse.data);
  }

  async removeCartItem(itemId: number, wishlist = false): Promise<void> {
    console.log("removeCartItem", itemId, wishlist);

    const data = {
      item_id: itemId,
      wishlist
    };

    await this.getApiClient().post("cart/remove_item", data);
  }

  async updateCartItemQty(itemId: number, qty: number): Promise<void> {
    if (qty <= 0) {
      throw new CartServiceError("Quantity must be greater than 0");
    }

    await this.updateCartItem(itemId, { qty });
  }

  async updateCartItemSize(itemId: number, variantId: string): Promise<void> {
    await this.updateCartItem(itemId, { variantId });
  }

  private async updateCartItem(
    itemId: number,
    data: Partial<{ qty: number; variantId: string }>
  ): Promise<void> {
    if (!data.qty && !data.variantId) {
      throw new CartServiceError("No data to update");
    }

    const body = {
      item_id: itemId,
      variant_id: data.variantId,
      qty: data.qty
    };

    await this.getApiClient().post("cart/update_item", body);
  }
}

export const cartService = CartService.getInstance();
