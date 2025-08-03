import type { ComponentProps } from "react";

import type { CouponViewModel } from "@app/types/limeroad";
import {
  CouponCard,
  CouponCardButton,
  CouponCardButtonText,
  CouponCardContent,
  CouponCardDescription,
  CouponCardIcon,
  CouponCardTitle
} from "@app/ui/components/coupon-card";
import { View } from "@app/ui/elements/view";
import { CouponLabelIcon } from "@app/ui/icons/coupon-label-icon";

type AppliedCouponCardProps = ComponentProps<typeof CouponCard> & {
  coupon: CouponViewModel;
};

export function AppliedCouponCard({
  coupon,
  variant = "primary",
  size = "md",
  ...props
}: AppliedCouponCardProps) {
  const { title, description } = coupon.applied_info;

  return (
    <CouponCard variant={variant} size={size} {...props}>
      <CouponCardContent>
        <CouponCardIcon as={CouponLabelIcon} />
        <View className="gap-1">
          {title && <CouponCardTitle>{title}</CouponCardTitle>}
          {description && <CouponCardDescription>{description}</CouponCardDescription>}
        </View>
      </CouponCardContent>
      <CouponCardButton>
        <CouponCardButtonText>remove</CouponCardButtonText>
      </CouponCardButton>
    </CouponCard>
  );
}
