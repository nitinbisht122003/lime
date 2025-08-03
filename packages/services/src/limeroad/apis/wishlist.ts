import { sleep } from "@app/core/utils";

import { AbstractService } from "../models/abstract-service";

class WishlistService extends AbstractService {
  private static instance: WishlistService | null = null;

  private constructor() {
    super();
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): WishlistService {
    WishlistService.instance ??= new WishlistService();

    return WishlistService.instance;
  }

  async addProductToWishlist(productId: string): Promise<void> {
    console.log("addProductToWishlist", productId);

    await sleep(300);

    return;
  }

  async removeProductFromWishlist(productId: string): Promise<void> {
    console.log("removeProductFromWishlist", productId);

    await sleep(300);

    return;
  }
}

export const wishlistService = WishlistService.getInstance();
