"use client";

import type { ComponentProps } from "react";

import type { CustomerPromisesViewModel } from "@app/types/limeroad";
import type { CustomIcon } from "@app/ui/types";
import { Icon } from "@app/ui/components/icon";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { ExchangeIcon } from "@app/ui/icons/exchange-icon";
import { ParcelIcon } from "@app/ui/icons/parcel-icon";
import { RupeeCircleIcon } from "@app/ui/icons/rupee-circle-icon";
import { cn } from "@app/ui/utils/cn";

type PromisesProps = {
  data: CustomerPromisesViewModel;
  className?: string;
} & ComponentProps<typeof View>;

export function CustomerPromises({ data, className, ...props }: PromisesProps) {
  return (
    <View
      className={cn(
        "border-lr-grey-200 flex w-full flex-row items-center justify-around rounded-md border bg-white px-0 py-1",
        className
      )}
      {...props}
    >
      {data.promises.map((promise, index) => (
        <View key={index} className="relative flex flex-1 items-center justify-center gap-2 py-1">
          <PromiseTile icon={promise.icon} description={promise.description} />
          {index !== data.promises.length - 1 && (
            <View className="absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 border border-[#EAECF0]"></View>
          )}
        </View>
      ))}
    </View>
  );
}

interface PromiseTileProps {
  icon: string;
  description: string;
}

const PromiseIcon = (icon: string): CustomIcon => {
  switch (icon) {
    case "parcel":
      return ParcelIcon;
    case "rupee":
      return RupeeCircleIcon;
    case "exchange":
      return ExchangeIcon();
    default:
      return ParcelIcon;
  }
};

const PromiseTile = ({ icon, description }: PromiseTileProps) => {
  return (
    // <View className="items-center justify-center py-2 px-0 w-full">
    <>
      <Icon as={PromiseIcon(icon)} className="shrink-0" fill="" width={24} height={24} />
      <Text className="text-lr-grey-600 mt-1 overflow-hidden whitespace-normal break-words text-center text-xs font-medium">
        {description}
      </Text>
    </>
    // </View>
  );
};
