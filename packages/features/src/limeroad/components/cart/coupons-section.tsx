"use client";

import type { ComponentProps } from "react";
import { useCallback } from "react";

import { useInvalidateCartQueries } from "@app/services/limeroad/mutations/cart";

import type { ApplyCouponProps, RemoveCouponProps } from "../coupons-section/all-coupons";
import { CouponsSection as CommonCouponsSection } from "../coupons-section";

type CouponsSectionProps = Omit<
  ComponentProps<typeof CommonCouponsSection>,
  "onApplyCoupon" | "onRemoveCoupon"
>;

export const CouponsSection = ({ ...props }: CouponsSectionProps) => {
  // hooks
  const invalidateCartQueries = useInvalidateCartQueries();

  // actions
  const handleApplyCoupon = useCallback(
    ({ success }: ApplyCouponProps) => {
      if (success) invalidateCartQueries();
    },
    [invalidateCartQueries]
  );

  const handleRemoveCoupon = useCallback(
    ({ success }: RemoveCouponProps) => {
      if (success) invalidateCartQueries();
    },
    [invalidateCartQueries]
  );

  return (
    <CommonCouponsSection
      onApplyCoupon={handleApplyCoupon}
      onRemoveCoupon={handleRemoveCoupon}
      {...props}
    />
  );
};
