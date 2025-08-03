"use client";

import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Button, ButtonText } from "@app/ui/components/button";
import { Icon } from "@app/ui/components/icon";
import { Input, InputField } from "@app/ui/components/input";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { PlusSquareIcon } from "@app/ui/icons/plus-square-icon";
import { XIcon } from "@app/ui/icons/x-icon";
import { cn } from "@app/ui/utils/cn";

import { PaymentMethodDescription, PaymentMethodName } from "./common";

type AddNewUpiIdProps = ComponentProps<typeof View> & {
  onAdd: (upiId: string) => void;
};

export const AddNewUpiId = ({ onAdd, ...props }: AddNewUpiIdProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleAdd = useCallback(
    (upiId: string) => {
      setIsSheetOpen(false);
      onAdd(upiId);
    },
    [onAdd]
  );

  return (
    <View {...props}>
      <AddNewUpiIdButton onPress={() => setIsSheetOpen(true)} />
      <AddNewUpiIdSheet open={isSheetOpen} onOpenChange={setIsSheetOpen} onAdd={handleAdd} />
    </View>
  );
};

type AddNewUpiIdButtonProps = ComponentProps<typeof Pressable>;

export const AddNewUpiIdButton = ({ className, ...props }: AddNewUpiIdButtonProps) => {
  return (
    <Pressable className={cn("flex-row gap-2", className)} {...props}>
      <Icon as={PlusSquareIcon} size="sm" className="text-lr-grey-950" />
      <View className="flex-1 gap-1">
        <PaymentMethodName>Add New UPI ID</PaymentMethodName>
        <PaymentMethodDescription>You need to have a registered UPI ID</PaymentMethodDescription>
      </View>
    </Pressable>
  );
};

type AddNewUpiIdSheetProps = ComponentProps<typeof BottomSheet> & {
  onAdd: (upiId: string) => void;
};

export const AddNewUpiIdSheet = ({ onAdd, ...props }: AddNewUpiIdSheetProps) => {
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAdd = () => {
    if (!isValidUpid(upiId)) {
      setError("Please enter a valid UPI ID");
      return;
    }

    setError(null);

    onAdd(upiId);
  };

  return (
    <BottomSheet {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          <BottomSheetHeader>
            <BottomSheetTitle>Add New UPI ID</BottomSheetTitle>
            <BottomSheetClose>
              <Icon as={XIcon} size="2xs" />
            </BottomSheetClose>
          </BottomSheetHeader>
          <View className="gap-4 px-4 py-6">
            <Input size="md">
              <InputField
                value={upiId}
                onChangeText={setUpiId}
                placeholder="Enter UPI ID, e.g. 98********@ybl"
              />
            </Input>
            {error && <Text className="text-error-500">{error}</Text>}
            <Button action="primary" size="lg" onPress={handleAdd}>
              <ButtonText>Add</ButtonText>
            </Button>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
};

const isValidUpid = (upiId: string) => {
  return upiId.length > 0 && upiId.includes("@");
};
