import { queryOptions } from "@tanstack/react-query";

import { cartService } from "../apis/cart";

export function cartQueryOptions() {
  return queryOptions({
    queryKey: ["cart"],
    queryFn: async () => {
      const cartData = await cartService.getCart();

      return cartData;
    }
  });
}
