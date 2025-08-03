import type { ComponentProps } from "react";

import type { CouponViewModel } from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { CouponCard, CouponCardTitle } from "@app/ui/components/coupon-card";
import { Icon } from "@app/ui/components/icon";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { CheckIcon } from "@app/ui/icons/check-icon";
import { XIcon } from "@app/ui/icons/x-icon";

type CouponInfoSheetProps = ComponentProps<typeof BottomSheet> & {
  coupon: CouponViewModel;
  variant?: "primary" | "secondary";
};

export function CouponInfoSheet({ coupon, variant = "primary", ...props }: CouponInfoSheetProps) {
  const { code } = coupon;
  const { tnc } = coupon.coupon_info;

  return (
    <BottomSheet {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          {/* Header */}
          <BottomSheetHeader>
            <BottomSheetTitle>
              <CouponCard size="sm" className="py-2" variant={variant}>
                <CouponCardTitle>{code}</CouponCardTitle>
              </CouponCard>
            </BottomSheetTitle>
            <BottomSheetClose>
              <Icon as={XIcon} className="text-lr-grey-500" size="2xs" />
            </BottomSheetClose>
          </BottomSheetHeader>
          {/* tnc */}
          <View className="gap-2 px-4 py-6">
            {tnc.map((tnc) => (
              <View key={tnc} className="flex-row items-center gap-1.5">
                <Icon as={CheckIcon} className="text-lr-grey-800 shrink-0" size="2xs" />
                <Text className="text-lr-grey-700 text-sm">{tnc}</Text>
              </View>
            ))}
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
}
