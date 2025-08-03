import type { ComponentProps } from "react";
import { Dimensions } from "react-native";

import type { CreditViewModel } from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Icon } from "@app/ui/components/icon";
import { Image } from "@app/ui/elements/image";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { CheckIcon } from "@app/ui/icons/check-icon";
import { XIcon } from "@app/ui/icons/x-icon";
import { cn } from "@app/ui/utils/cn";

import { CONFETTI, CONFETTI_POP } from "../../images/urls";

export interface CreditsInfoSheetProps extends ComponentProps<typeof BottomSheet> {
  title: string;
  total: number;
  applicableCredits: CreditViewModel[];
  nonApplicableCredits: CreditViewModel[];
}

export function CreditsInfoSheet({
  title,
  total,
  applicableCredits,
  nonApplicableCredits,
  ...props
}: CreditsInfoSheetProps) {
  const { height } = Dimensions.get("screen");

  return (
    <BottomSheet {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          {/* Header */}
          <BottomSheetHeader>
            <BottomSheetTitle>{title}</BottomSheetTitle>
            <BottomSheetClose>
              <Icon as={XIcon} size="2xs" />
            </BottomSheetClose>
          </BottomSheetHeader>
          {/* Scrollable Content */}
          <View
            className="flex-1 overflow-scroll bg-white pb-5"
            style={{ maxHeight: height * 0.6 }}
          >
            {/* Total Credits */}
            <View className="bg-lr-green-50 items-center gap-1.5 py-4">
              <View className="flex-row items-center gap-2">
                <ConfettiImage />
                <Text className="text-lr-grey-700 text-sm">Total LR Credits</Text>
                <ConfettiImage className="-rotate-90" />
              </View>
              <View className="flex-row items-center gap-14">
                <ConfettiPopImage />
                <Text className="text-lr-green-500 text-xl font-bold">₹{total}</Text>
                <ConfettiPopImage className="-rotate-90" />
              </View>
            </View>
            {/* Applicable Credits */}
            {applicableCredits.length > 0 && (
              <View className="mt-4 gap-4 px-4">
                <Text className="text-base font-medium">Applicable Credits</Text>
                <View className="gap-4">
                  {applicableCredits.map((credit, idx) => (
                    <CreditItem key={idx} credit={credit} applicable />
                  ))}
                </View>
              </View>
            )}
            {/* Non Applicable Credits */}
            {nonApplicableCredits.length > 0 && (
              <View className="border-lr-grey-300 mt-4 gap-4 border-t border-dashed px-4 pt-4">
                <Text className="text-base font-medium">Non Applicable Credits</Text>
                <View className="gap-4">
                  {nonApplicableCredits.map((credit, idx) => (
                    <CreditItem key={idx} credit={credit} />
                  ))}
                </View>
              </View>
            )}
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
}

type CreditItemProps = ComponentProps<typeof View> & {
  credit: CreditViewModel;
  applicable?: boolean;
};

const CreditItem = ({ credit, applicable = false, className, ...props }: CreditItemProps) => {
  const { type, formattedExpiryDate, applicable_percentage, amount } = credit;

  return (
    <View className={cn("flex-row items-center justify-between", className)} {...props}>
      <View className="flex-row items-center gap-2">
        <Icon
          as={CheckIcon}
          className={cn(applicable ? "text-lr-green-600" : "text-lr-grey-400")}
          size="sm"
        />
        <View className="gap-1">
          <Text
            className={cn(
              "text-sm capitalize",
              applicable ? "text-lr-grey-950" : "text-lr-grey-400"
            )}
          >
            {type}
          </Text>
          <Text className={cn("text-xs", applicable ? "text-lr-grey-600" : "text-lr-grey-400")}>
            Expires on:{" "}
            <Text
              className={cn("font-medium", applicable ? "text-lr-grey-800" : "text-lr-grey-400")}
            >
              {formattedExpiryDate}
            </Text>
          </Text>
          {applicable_percentage && applicable_percentage < 100 && (
            <Text className={cn("text-xs", applicable ? "text-lr-grey-700" : "text-lr-grey-400")}>
              Only {applicable_percentage}% of cart value can be applied
            </Text>
          )}
        </View>
      </View>
      <Text className={cn(applicable ? "text-lr-green-700" : "text-lr-grey-400")}>₹{amount}</Text>
    </View>
  );
};

type ConfettiImageProps = Partial<ComponentProps<typeof Image>>;

const ConfettiImage = ({
  src = CONFETTI,
  size = "3xs",
  alt = "confetti",
  ...props
}: ConfettiImageProps) => {
  return <Image src={src} size={size} alt={alt} {...props} />;
};

type ConfettiPopImageProps = Partial<ComponentProps<typeof Image>>;

const ConfettiPopImage = ({
  src = CONFETTI_POP,
  size = "2xs",
  alt = "confetti-pop",
  ...props
}: ConfettiPopImageProps) => {
  return <Image src={src} size={size} alt={alt} {...props} />;
};
