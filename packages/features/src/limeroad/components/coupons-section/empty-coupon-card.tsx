import type { ComponentProps } from "react";

import { Button } from "@app/ui/components/button";
import { Icon } from "@app/ui/components/icon";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { ChevronRightIcon } from "@app/ui/icons/chevron-right-icon";
import { CouponLabelIcon } from "@app/ui/icons/coupon-label-icon";
import { cn } from "@app/ui/utils/cn";

type EmptyCouponCardProps = ComponentProps<typeof Button> & {
  title: string;
};

export function EmptyCouponCard({ title, className, ...props }: EmptyCouponCardProps) {
  return (
    <Button
      variant="solid"
      size="lg"
      action="default"
      className={cn(
        "border-lr-grey-200 bg-lr-grey-50 justify-between gap-2.5 rounded-lg border px-2.5",
        className
      )}
      {...props}
    >
      <View className="flex-row items-center gap-2">
        <CouponLabelIcon className="text-lr-grey-700 h-5 w-5" />
        <Text className="text-lr-grey-700 text-sm font-bold">{title}</Text>
      </View>
      <Icon as={ChevronRightIcon} className="text-lr-grey-900" size="xl" />
    </Button>
  );
}
