import type { ComponentProps } from "react";
import { useState } from "react";

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
import { Link } from "@app/ui/elements/link";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { InfoIcon } from "@app/ui/icons/info-icon";

import { CouponInfoSheet } from "./coupon-info-sheet";

type NonApplicableCouponCardProps = ComponentProps<typeof CouponCard> & {
  coupon: CouponViewModel;
};

export function NonApplicableCouponCard({
  coupon,
  variant = "secondary",
  size = "md",
  ...props
}: NonApplicableCouponCardProps) {
  const { code } = coupon;
  const { discount_msg, condition_msg, shop_more_link } = coupon.coupon_info;

  const [showInfoSheet, setShowInfoSheet] = useState(false);

  return (
    <CouponCard variant={variant} size={size} {...props}>
      <CouponCardContent>
        <View className="gap-1">
          <Pressable className="flex-row items-center gap-1" onPress={() => setShowInfoSheet(true)}>
            <Text className="text-lr-grey-600 text-sm font-semibold uppercase">{code}</Text>
            <Icon as={InfoIcon} className="text-lr-grey-600 h-2.5 w-2.5" />
          </Pressable>
          <CouponCardTitle className="font-medium">{discount_msg}</CouponCardTitle>
          <CouponCardDescription>{condition_msg}</CouponCardDescription>
        </View>
      </CouponCardContent>
      {shop_more_link && (
        <Link href={shop_more_link}>
          <CouponCardButton>
            <CouponCardButtonText>shop more</CouponCardButtonText>
          </CouponCardButton>
        </Link>
      )}
      <CouponInfoSheet
        coupon={coupon}
        open={showInfoSheet}
        onOpenChange={setShowInfoSheet}
        variant="secondary"
      />
    </CouponCard>
  );
}
