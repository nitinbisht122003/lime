import type { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";

import type { CouponViewModel } from "@app/types/limeroad";
import { Text } from "@app/ui/elements/text";

import { AppliedCouponCard } from "./applied-coupon-card";
import { EmptyCouponCard } from "./empty-coupon-card";

export enum CouponState {
  Empty = "empty",
  Applied = "applied",
  NotApplied = "not_applied",
  NonLoggedIn = "non_logged_in"
}

interface CouponStateRendererProps {
  state: CouponState;
  coupon?: CouponViewModel;
  setShowAllCoupons?: Dispatch<SetStateAction<boolean>>;
}

export function CouponStateRenderer({
  state,
  coupon,
  setShowAllCoupons
}: CouponStateRendererProps) {
  // actions
  const handleEmptyCouponPress = useCallback(() => {
    setShowAllCoupons?.(true);
  }, [setShowAllCoupons]);

  const hanldeLoginPress = useCallback(() => {
    // Handle login action here
    console.log("Login action triggered");
  }, []);

  switch (state) {
    case CouponState.Empty:
      return <EmptyCouponCard title="Apply Coupon" onPress={handleEmptyCouponPress} />;

    case CouponState.Applied:
      if (!coupon) return null;

      return <AppliedCouponCard coupon={coupon} />;

    case CouponState.NonLoggedIn:
      return <EmptyCouponCard title="Login to Apply Coupon" onPress={hanldeLoginPress} />;

    case CouponState.NotApplied:
      return <Text className="text-gray-600">not applied state</Text>;

    default:
      return null;
  }
}
