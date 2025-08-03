import { useMutation } from "@tanstack/react-query";

import { couponService } from "../apis/coupon";

export const useApplyCoupon = () => {
  return useMutation({
    mutationFn: ({ couponCode }: { couponCode: string }) => couponService.applyCoupon(couponCode)
  });
};

export const useRemoveCoupon = () => {
  return useMutation({
    mutationFn: ({ couponCode }: { couponCode: string }) => couponService.removeCoupon(couponCode)
  });
};
