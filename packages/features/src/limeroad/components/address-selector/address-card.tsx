import type { ComponentProps } from "react";

import type { AddressViewModel } from "@app/types/limeroad";
import type { CustomIcon } from "@app/ui/types";
import { Badge, BadgeIcon, BadgeText } from "@app/ui/components/badge";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { HomeIconHOC } from "@app/ui/icons/home-icon";
import { cn } from "@app/ui/utils/cn";

type AddressCardProps = {
  address: AddressViewModel;
  variant?: "default" | "selected";
} & ComponentProps<typeof View>;

const badgeIcon: Record<AddressViewModel["type"], CustomIcon> = {
  home: HomeIconHOC(),
  office: HomeIconHOC(),
  other: HomeIconHOC()
};

export function AddressCard({
  className,
  address,
  variant = "default",
  ...props
}: AddressCardProps) {
  const { first_name, last_name, mobile, address_line_1, address_line_2, city, state, pincode } =
    address;

  const { status_message, status_code } = address.serviceability;

  const name = `${first_name} ${last_name}`;

  const isSelected = variant === "selected";

  return (
    <View
      {...props}
      className={cn(
        "w-full rounded-lg border p-4",
        isSelected ? "bg-lr-green-100 border-lr-green-600" : "border-lr-grey-200 bg-white",
        className
      )}
    >
      <Badge variant="outline" action="default" size="md" className="mb-5 gap-1">
        <BadgeIcon size="sm" as={badgeIcon[address.type]} className="text-lr-grey-800" />
        <BadgeText className="text-lr-grey-800 text-sm capitalize">{address.type}</BadgeText>
      </Badge>
      <Text className="text-lr-grey-800 mb-2 text-base font-medium">{name}</Text>
      <AddressText>{address_line_1}</AddressText>
      <AddressText>{address_line_2}</AddressText>
      <AddressText>{city + ", " + state + ", " + pincode}</AddressText>
      <AddressText className="mt-2">+91 {mobile}</AddressText>
      {isSelected && (
        <Text
          className={cn("mt-2.5 text-base font-medium", {
            "text-lr-green-600": status_code === 3,
            "text-lr-red-600": status_code === 0,
            "text-lr-grey-800": status_code === 1
          })}
        >
          {status_message}
        </Text>
      )}
    </View>
  );
}

const AddressText = ({ children, className }: ComponentProps<typeof Text>) => (
  <Text className={cn("text-lr-grey-500 text-sm capitalize leading-5", className)}>{children}</Text>
);
