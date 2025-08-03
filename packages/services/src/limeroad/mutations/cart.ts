"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cartService } from "../apis/cart";
import { cartQueryOptions } from "../queries/cart";

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, wishlist }: { itemId: number; wishlist?: boolean }) =>
      cartService.removeCartItem(itemId, wishlist),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: cartQueryOptions().queryKey
      });
    }
  });
};

export const useUpdateCartItemQty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, qty }: { itemId: number; qty: number }) =>
      cartService.updateCartItemQty(itemId, qty),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: cartQueryOptions().queryKey
      });
    }
  });
};

export const useUpdateCartItemSize = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, variantId }: { itemId: number; variantId: string }) =>
      cartService.updateCartItemSize(itemId, variantId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: cartQueryOptions().queryKey
      });
    }
  });
};

export const useInvalidateCartQueries = () => {
  const queryClient = useQueryClient();

  return () => {
    void queryClient.invalidateQueries({
      queryKey: cartQueryOptions().queryKey
    });
  };
};
