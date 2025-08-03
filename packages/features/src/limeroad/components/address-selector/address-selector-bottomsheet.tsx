"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import { Dimensions } from "react-native";

import type { AddressSelectorViewModel } from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Button, ButtonText } from "@app/ui/components/button";
import { Icon } from "@app/ui/components/icon";
import { Radio, RadioGroup } from "@app/ui/components/radio";
import { View } from "@app/ui/elements/view";
import { XIcon } from "@app/ui/icons/x-icon";

import { AddressCard } from "./address-card";

type Addresses = AddressSelectorViewModel["addresses"];

type Address = Addresses[number];

type AddressId = Address["id"];

type AddressSelectorBottomSheetProps = {
  addresses: Addresses;
  defaultAddressId?: AddressId;
  onSelectAddress: (address: Address) => void;
} & ComponentProps<typeof BottomSheet>;

export function AddressSelectorBottomSheet({
  open,
  onOpenChange,
  addresses,
  defaultAddressId,
  onSelectAddress,
  ...props
}: AddressSelectorBottomSheetProps) {
  const [selectedAddressId, setSelectedAddressId] = useState(defaultAddressId);

  const radioValue = selectedAddressId?.toString();

  const selectedAddress = addresses.find((address) => address.id === selectedAddressId);

  const { height } = Dimensions.get("screen");

  const handleAddressChange = (addressId: string) => {
    setSelectedAddressId(Number(addressId));
  };

  const handleConfirm = () => {
    if (!selectedAddress) {
      return;
    }

    onSelectAddress(selectedAddress);
  };

  const handleOpenChange = (open: boolean) => {
    setSelectedAddressId(defaultAddressId);
    onOpenChange?.(open);
  };

  return (
    <BottomSheet open={open} onOpenChange={handleOpenChange} {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          <AddressBottomSheetHeader />
          <View
            className="flex-1 overflow-scroll bg-white px-4 py-5"
            style={{ maxHeight: height * 0.6 }}
          >
            <RadioGroup value={radioValue} onChange={handleAddressChange} className="gap-5">
              {addresses.map((address) => {
                const isSelected = selectedAddressId === address.id;

                return (
                  <Radio key={address.id} value={address.id.toString()}>
                    <AddressCard address={address} variant={isSelected ? "selected" : "default"} />
                  </Radio>
                );
              })}
            </RadioGroup>
          </View>
          <View className="px-4 py-5">
            <Button variant="solid" size="lg" action="primary" onPress={handleConfirm}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
}

const AddressBottomSheetHeader = () => (
  <View className="bg-lr-grey-50 border-lr-grey-100 flex-row items-center justify-between rounded-t-lg border-b p-4">
    <BottomSheetTitle className="text-lr-grey-800">Select Delivery Address</BottomSheetTitle>
    <BottomSheetClose className="text-lr-grey-800">
      <Icon as={XIcon} size="2xs" />
    </BottomSheetClose>
  </View>
);
