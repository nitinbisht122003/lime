"use client";

import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import type { CouponViewModel } from "@app/types/limeroad";
import {
  CouponCard,
  CouponCardButton,
  CouponCardButtonText,
  CouponCardContent,
  CouponCardDescription,
  CouponCardTitle
} from "@app/ui/components/coupon-card";
import { Icon } from "@app/ui/components/icon";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { InfoIcon } from "@app/ui/icons/info-icon";

import { CouponInfoSheet } from "./coupon-info-sheet";

type ApplicableCouponCardProps = ComponentProps<typeof CouponCard> & {
  coupon: CouponViewModel;
  onToggleCoupon?: (couponCode: string, apply: boolean) => void;
};

export function ApplicableCouponCard({
  coupon,
  variant = "primary",
  size = "md",
  onToggleCoupon,
  ...props
}: ApplicableCouponCardProps) {
  // data
  const { code, applied } = coupon;
  const { discount_msg, condition_msg } = coupon.coupon_info;

  // hooks
  const [showInfoSheet, setShowInfoSheet] = useState(false);

  // actions
  const handleToggleCoupon = useCallback(() => {
    onToggleCoupon?.(code, !applied);
  }, [code, applied, onToggleCoupon]);

  return (
    <CouponCard variant={variant} size={size} {...props}>
      <CouponCardContent>
        <View className="gap-1">
          <Pressable className="flex-row items-center gap-1" onPress={() => setShowInfoSheet(true)}>
            <Text className="text-lr-blue-800 text-sm font-semibold uppercase">{code}</Text>
            <Icon as={InfoIcon} className="text-lr-blue-800 h-2.5 w-2.5" />
          </Pressable>
          <CouponCardTitle>{discount_msg}</CouponCardTitle>
          <CouponCardDescription>{condition_msg}</CouponCardDescription>
        </View>
      </CouponCardContent>
      <CouponCardButton onPress={handleToggleCoupon} className="flex-row items-center gap-1">
        <CouponCardButtonText>{applied ? "remove" : "apply"}</CouponCardButtonText>
      </CouponCardButton>
      <CouponInfoSheet
        coupon={coupon}
        open={showInfoSheet}
        onOpenChange={setShowInfoSheet}
        variant="primary"
      />
    </CouponCard>
  );
}
