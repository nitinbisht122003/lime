"use client";

import type { ComponentProps } from "react";
import { useCallback, useMemo, useState } from "react";

import type { CouponViewModel } from "@app/types/limeroad";
import { useApplyCoupon, useRemoveCoupon } from "@app/services/limeroad/mutations/coupon";
import { Button, ButtonText } from "@app/ui/components/button";
import { Input, InputField } from "@app/ui/components/input";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

import { useGlobalContext } from "../../hooks/global";
import { ApplicableCouponCard } from "./applicable-coupon-card";
import { NonApplicableCouponCard } from "./non-applicable-coupon-card";

export interface ApplyCouponProps {
  couponCode: string;
  success: boolean;
}

export interface RemoveCouponProps {
  couponCode: string;
  success: boolean;
}

export type AllCouponsProps = ComponentProps<typeof View> & {
  coupons: CouponViewModel[];
  onApplyCoupon?: ({ couponCode, success }: ApplyCouponProps) => void;
  onRemoveCoupon?: ({ couponCode, success }: RemoveCouponProps) => void;
};

export function AllCoupons({
  coupons,
  className,
  onApplyCoupon,
  onRemoveCoupon,
  ...props
}: AllCouponsProps) {
  // hooks
  const { setIsLoading } = useGlobalContext();

  const { mutate: applyCoupon } = useApplyCoupon();
  const { mutate: removeCoupon } = useRemoveCoupon();

  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState<string | null>(null);

  const applicableCoupons = useMemo(() => coupons.filter((coupon) => coupon.applicable), [coupons]);

  const nonApplicableCoupons = useMemo(
    () => coupons.filter((coupon) => !coupon.applicable),
    [coupons]
  );

  // actions
  const handleCouponTextChange = useCallback(
    (text: string) => {
      setCouponCode(text.toUpperCase());

      if (couponError) {
        setCouponError(null); // Clear error when user starts typing
      }
    },
    [couponError]
  );

  const handleApplyTextCoupon = useCallback(() => {
    if (!couponCode.trim()) {
      setCouponError("Coupon code cannot be empty");
      return;
    }

    setIsLoading(true);

    applyCoupon(
      { couponCode },
      {
        onSuccess: ({ success, message }) => {
          if (success) {
            console.log("Coupon applied successfully:", message);
            onApplyCoupon?.({ couponCode, success: true });
          } else {
            console.error("Failed to apply coupon:", message);
            onApplyCoupon?.({ couponCode, success: false });
            setCouponError(message ?? "Failed to apply coupon");
          }
        },
        onError: (error) => {
          console.error("Error applying coupon:", error);
          onApplyCoupon?.({ couponCode, success: false });
        },
        onSettled: () => {
          setIsLoading(false);
        }
      }
    );
  }, [couponCode, applyCoupon, onApplyCoupon, setIsLoading]);

  const handleRemoveCoupon = useCallback(
    (couponCode: string) => {
      setIsLoading(true);

      removeCoupon(
        { couponCode },
        {
          onSuccess: ({ success, message }) => {
            if (success) {
              console.log("Coupon removed successfully:", message);
              onRemoveCoupon?.({ couponCode, success: false });
            } else {
              console.error("Failed to remove coupon:", message);
              onRemoveCoupon?.({ couponCode, success: false });
            }
          },
          onError: (error) => {
            console.error("Error removing coupon:", error);
          },
          onSettled: () => {
            setIsLoading(false);
          }
        }
      );
    },
    [removeCoupon, onRemoveCoupon, setIsLoading]
  );

  const handleApplyCoupon = useCallback(
    (couponCode: string) => {
      setIsLoading(true);

      applyCoupon(
        { couponCode },
        {
          onSuccess: ({ success, message }) => {
            if (success) {
              console.log("Coupon applied successfully:", message);
              onApplyCoupon?.({ couponCode, success: true });
            } else {
              console.error("Failed to apply coupon:", message);
              onApplyCoupon?.({ couponCode, success: false });
            }
          },
          onError: (error) => {
            console.error("Error applying coupon:", error);
            onApplyCoupon?.({ couponCode, success: false });
          },
          onSettled: () => {
            setIsLoading(false);
          }
        }
      );
    },
    [applyCoupon, onApplyCoupon, setIsLoading]
  );

  const handleToggleCoupon = useCallback(
    (couponCode: string, apply: boolean) => {
      if (apply) {
        handleApplyCoupon(couponCode);
      } else {
        handleRemoveCoupon(couponCode);
      }
    },
    [handleApplyCoupon, handleRemoveCoupon]
  );

  return (
    <View className={cn("gap-5", className)} {...props}>
      {/* Enter coupon code */}
      <View className="gap-1">
        <View className="flex-row items-center gap-2">
          <Input variant="outline" size="md" className="flex-1" isInvalid={!!couponError}>
            <InputField
              id="coupon-code"
              value={couponCode}
              onChangeText={handleCouponTextChange}
              placeholder="Enter coupon code"
            />
          </Input>
          <Button onPress={handleApplyTextCoupon}>
            <ButtonText>Apply</ButtonText>
          </Button>
        </View>
        {couponError && <Text className="text-sm text-red-500">{couponError}</Text>}
      </View>
      {/* Applicable coupons */}
      <View className="gap-3">
        <Text className="text-lg font-semibold">Choose from these coupons</Text>
        <View className="gap-3">
          {applicableCoupons.map((coupon) => (
            <ApplicableCouponCard
              key={coupon.id}
              coupon={coupon}
              onToggleCoupon={handleToggleCoupon}
            />
          ))}
        </View>
      </View>

      {/* Non-applicable coupons */}
      <View className="gap-3">
        <Text className="text-lg font-semibold">or Shop more to make these yours</Text>
        <View className="gap-3">
          {nonApplicableCoupons.map((coupon) => (
            <NonApplicableCouponCard key={coupon.id} coupon={coupon} />
          ))}
        </View>
      </View>
    </View>
  );
}
