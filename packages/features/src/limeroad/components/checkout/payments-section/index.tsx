import type { ComponentProps } from "react";

import type { PaymentsSectionViewModel } from "@app/types/limeroad";
import { Image } from "@app/ui/elements/image";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

import { PaymentMethods } from "./payment-methods";

type PaymentsSectionProps = ComponentProps<typeof View> & {
  data: PaymentsSectionViewModel;
};

export function PaymentsSection({ data, className, ...props }: PaymentsSectionProps) {
  const { title, trust_msg, payment_methods } = data;

  return (
    <View className={cn("gap-4", className)} {...props}>
      {/* Title */}
      <View className="flex-row items-center justify-between">
        <Text className="text-lr-grey-950 text-base font-semibold">{title}</Text>
        <View className="flex-row items-center gap-1.5">
          <Image src={trust_msg.icon} width={16} height={16} alt="trust-icon" />
          <Text className="text-lr-grey-600 text-xs">{trust_msg.message}</Text>
        </View>
      </View>
      {/* Payment methods */}
      <PaymentMethods methods={payment_methods} />
    </View>
  );
}
