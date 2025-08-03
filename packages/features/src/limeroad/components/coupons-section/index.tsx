import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import type { CouponsSectionViewModel } from "@app/types/limeroad";
import { Button, ButtonText } from "@app/ui/components/button";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

import type { ApplyCouponProps, RemoveCouponProps } from "./all-coupons";
import { useGlobalContext } from "../../hooks/global";
import { AllCouponsDrawer } from "./all-coupons-drawer";
import { CouponState, CouponStateRenderer } from "./coupon-state-renderer";

type CouponsSectionProps = ComponentProps<typeof View> & {
  data: CouponsSectionViewModel;
  onApplyCoupon?: (props: ApplyCouponProps) => void;
  onRemoveCoupon?: (props: RemoveCouponProps) => void;
};

export function CouponsSection({
  data,
  onApplyCoupon,
  onRemoveCoupon,
  className
}: CouponsSectionProps) {
  // data
  const { title, appliedCoupon, coupons } = data;

  // hooks
  const { isUserLoggedIn } = useGlobalContext();
  const [showAllCoupons, setShowAllCoupons] = useState(false);

  // actions
  const handleApplyCoupon = useCallback(
    ({ couponCode, success }: ApplyCouponProps) => {
      onApplyCoupon?.({ couponCode, success });

      if (success) {
        setShowAllCoupons(false);
      }
    },
    [onApplyCoupon]
  );

  const handleRemoveCoupon = useCallback(
    ({ couponCode, success }: RemoveCouponProps) => {
      onRemoveCoupon?.({ couponCode, success });

      if (success) {
        setShowAllCoupons(false);
      }
    },
    [onRemoveCoupon]
  );

  // derived
  let state: CouponState = CouponState.NonLoggedIn;

  if (isUserLoggedIn) {
    state = appliedCoupon ? CouponState.Applied : CouponState.Empty;
  }

  const showViewAll = [CouponState.Applied, CouponState.NotApplied].includes(state);

  return (
    <View className={cn("flex flex-col gap-4", className)}>
      {/* header */}
      <View className="flex flex-row items-center justify-between">
        <Text className="text-lr-grey-950 text-base font-semibold capitalize">{title}</Text>
        {showViewAll && (
          <Button
            variant="link"
            size="md"
            action="default"
            className="h-6 px-2"
            onPress={() => setShowAllCoupons(true)}
          >
            <ButtonText>view all</ButtonText>
          </Button>
        )}
      </View>
      {/* coupon state */}
      <CouponStateRenderer
        state={state}
        coupon={appliedCoupon}
        setShowAllCoupons={setShowAllCoupons}
      />
      {/* all coupons drawer */}
      <AllCouponsDrawer
        isOpen={showAllCoupons}
        onClose={() => setShowAllCoupons(false)}
        coupons={coupons}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
      />
    </View>
  );
}
