import type { ComponentProps } from "react";

import type { SingleModePaymentMethodViewModel } from "@app/types/limeroad";
import { Pressable } from "@app/ui/elements/pressable";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

import { usePaymentsSectionContext } from "../../../../hooks/checkout/payments-section";
import {
  CheckCircle,
  PaymentMethodDescription,
  PaymentMethodIcon,
  PaymentMethodName
} from "./common";

type SingleModePaymentMethodProps = ComponentProps<typeof Pressable> & {
  method: SingleModePaymentMethodViewModel;
};

export const SingleModePaymentMethod = ({
  method,
  className,
  ...props
}: SingleModePaymentMethodProps) => {
  // data
  const { type, mode, name, description, icon } = method;

  // hooks
  const { selectedPaymentMethod, setSelectedPaymentMethod } = usePaymentsSectionContext();

  // actions
  const handlePress = () => {
    setSelectedPaymentMethod({ type, mode });
  };

  // derived
  const isSelected = selectedPaymentMethod.type === type;

  return (
    <Pressable
      className={cn("flex-row items-center justify-between px-3 py-2", className)}
      onPress={handlePress}
      {...props}
    >
      <View className="flex-row items-center gap-2">
        <PaymentMethodIcon icon={icon} />
        <View className="gap-1">
          <PaymentMethodName>{name}</PaymentMethodName>
          {description && <PaymentMethodDescription>{description}</PaymentMethodDescription>}
        </View>
      </View>
      <CheckCircle checked={isSelected} />
    </Pressable>
  );
};
