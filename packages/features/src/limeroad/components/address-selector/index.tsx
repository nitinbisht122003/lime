"use client";

import type { ComponentProps, FC } from "react";
import { useCallback, useState } from "react";

import type { AddressSelectorViewModel, AddressViewModel } from "@app/types/limeroad";
import { useUpdateDefaultAddress } from "@app/services/limeroad/mutations/address";
import { Button, ButtonText } from "@app/ui/components/button";
import { Icon } from "@app/ui/components/icon";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { LocationPinIcon } from "@app/ui/icons/location-pin-icon";
import { cn } from "@app/ui/utils/cn";

import { useGlobalContext } from "../../hooks/global";
import { AddressSelectorBottomSheet } from "./address-selector-bottomsheet";

type AddressSelectorProps = ComponentProps<typeof View> & {
  addressData: AddressSelectorViewModel;
};

export const AddressSelector: FC<AddressSelectorProps> = ({ addressData, className, ...props }) => {
  // data
  const { addresses, defaultAddress, sticky } = addressData;

  // hooks
  const { setIsLoading } = useGlobalContext();

  const { mutate: updateDefaultAddress } = useUpdateDefaultAddress();

  const [selectedAddress, setSelectedAddress] = useState(defaultAddress);
  const [openChooseAddress, setOpenChooseAddress] = useState(false);

  // actions
  const onChangePress = useCallback(() => {
    setOpenChooseAddress(true);
  }, []);

  const handleSelectAddress = useCallback(
    (address: AddressViewModel) => {
      const { serviceability, id } = address;

      const notServiceable = serviceability.status_code === 0;

      if (notServiceable) {
        console.error("Selected address is not serviceable");
        return;
      }

      setIsLoading(true);

      updateDefaultAddress(
        { addressId: id },
        {
          onSuccess: () => {
            setSelectedAddress(address);
            setOpenChooseAddress(false);
          },
          onError: (error) => {
            console.error("Failed to update default address:", error);
          },
          onSettled: () => {
            setIsLoading(false);
          }
        }
      );
    },
    [setIsLoading, updateDefaultAddress]
  );

  // derived
  const { first_name, last_name, mobile, address_line_1, address_line_2, city, state, pincode } =
    selectedAddress ?? {};

  const name = `${first_name} ${last_name}`.trim();

  const addressParts = [address_line_1, address_line_2, city, state, pincode].filter(
    (part) => part && part.trim() !== ""
  );

  const title = selectedAddress
    ? `Delivering to: ${[name, mobile].filter(Boolean).join(", ")}`
    : "Choose a default address";

  const subtitle = selectedAddress ? addressParts.join(", ") : "";

  if (addresses.length === 0) {
    return null;
  }

  return (
    <View
      {...props}
      className={cn(
        "border-lr-green-50 bg-lr-green-200 flex-row items-center justify-between border px-4 py-3",
        sticky && "sticky top-0 z-30",
        className
      )}
    >
      <View className="flex-1 flex-row items-center gap-2">
        <Icon as={LocationPinIcon} size="sm" />
        <View className="max-w-60 flex-1 flex-col gap-1">
          <Text className="text-lr-grey-900 text-xs font-medium" isTruncated>
            {title}
          </Text>
          <Text className="text-lr-grey-700 text-2xs" isTruncated>
            {subtitle}
          </Text>
        </View>
      </View>
      <Button variant="link" size="sm" onPress={onChangePress}>
        <ButtonText className="text-lr-green-600">Change</ButtonText>
      </Button>
      <AddressSelectorBottomSheet
        open={openChooseAddress}
        onOpenChange={setOpenChooseAddress}
        addresses={addresses}
        defaultAddressId={defaultAddress?.id}
        onSelectAddress={handleSelectAddress}
      />
    </View>
  );
};
