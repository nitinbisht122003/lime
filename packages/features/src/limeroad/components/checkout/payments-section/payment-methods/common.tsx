import type { ComponentProps } from "react";

import { Icon } from "@app/ui/components/icon";
import { Image } from "@app/ui/elements/image";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { CheckIcon } from "@app/ui/icons/check-icon";
import { cn } from "@app/ui/utils/cn";

type PaymentMethodIconProps = ComponentProps<typeof View> & {
  icon: string;
};

export const PaymentMethodIcon = ({ icon, className, ...props }: PaymentMethodIconProps) => {
  return (
    <View
      className={cn(
        "border-lr-grey-200 h-8 w-8 items-center justify-center rounded-full border p-1",
        className
      )}
      {...props}
    >
      <Image src={icon} width={16} height={16} alt="payment-method-icon" />
    </View>
  );
};

export const PaymentMethodName = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Text>) => {
  return (
    <Text className={cn("text-lr-grey-950 text-sm font-medium", className)} {...props}>
      {children}
    </Text>
  );
};

export const PaymentMethodDescription = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Text>) => {
  return (
    <Text className={cn("text-lr-grey-600 text-sm", className)} {...props}>
      {children}
    </Text>
  );
};

type CheckCircleProps = ComponentProps<typeof View> & {
  checked: boolean;
};

export const CheckCircle = ({ checked, ...props }: CheckCircleProps) => {
  return (
    <View
      className={cn(
        "border-lr-green-400 h-4 w-4 items-center justify-center rounded-full border",
        checked && "bg-lr-green-400"
      )}
      {...props}
    >
      <Icon
        as={CheckIcon}
        size="sm"
        className={cn("text-lr-grey-50", checked ? "opacity-100" : "opacity-0")}
      />
    </View>
  );
};
