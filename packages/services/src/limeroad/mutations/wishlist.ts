import { useMutation } from "@tanstack/react-query";

import { wishlistService } from "../apis/wishlist";

export const useAddProductToWishlist = () => {
  return useMutation({
    mutationFn: (productId: string) => wishlistService.addProductToWishlist(productId)
  });
};

export const useRemoveProductFromWishlist = () => {
  return useMutation({
    mutationFn: (productId: string) => wishlistService.removeProductFromWishlist(productId)
  });
};
