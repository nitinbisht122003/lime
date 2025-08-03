/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import type { ComponentProps } from "react";

import type { CheckoutActionViewModel } from "@app/types/limeroad";
import { Button, ButtonText } from "@app/ui/components/button";
import { Link } from "@app/ui/elements/link";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

import { useCartContext } from "../../hooks/cart";
import { ROUTES } from "../../utils/routes";

type CartFooterProps = ComponentProps<typeof View> & {
  checkoutAction: CheckoutActionViewModel;
};

export const CartFooter = ({ checkoutAction, ...props }: CartFooterProps) => {
  const { all_oss, total_amount, client_txn_id } = checkoutAction;

  const { selectedCount } = useCartContext();

  const onViewDetails = () => {
    console.log("view details");
  };

  return (
    <View className="sticky bottom-0 left-0 right-0 z-20" {...props}>
      {/* Selected Banner */}
      {all_oss ? (
        <Text className="text-lr-blue-700 bg-lr-blue-25 p-2 text-center text-xs font-semibold">
          All items are out of stock
        </Text>
      ) : false ? (
        <Text className="text-lr-blue-700 bg-lr-blue-50 p-2 text-center text-xs font-semibold">
          {selectedCount} {selectedCount === 1 ? "item" : "items"} in cart
        </Text>
      ) : false ? (
        <View className="bg-lr-blue-25 flex-row justify-center gap-1 p-2">
          <Text className="text-lr-blue-700 text-xs font-semibold">No items selected</Text>
          <Text className="text-lr-blue-700 text-xs">Select an item to proceed</Text>
        </View>
      ) : null}

      {/* Footer Buttons */}
      <View className="bg-white px-4 py-3">
        {all_oss ? (
          <Button variant="solid" action="secondary" size="lg" isDisabled>
            <ButtonText>Add items to proceed</ButtonText>
          </Button>
        ) : true ? (
          <View className="flex-row items-center gap-4">
            {/* Details */}
            <View className="">
              {/* Total Amount */}
              <Text className="text-lr-grey-950 text-lg font-semibold">₹{total_amount}</Text>
              {/* View Details */}
              <Button size="sm" variant="ghost" onPress={onViewDetails} className="h-4 p-0">
                <ButtonText className="text-lr-grey-500">View Details</ButtonText>
              </Button>
            </View>
            {/* Proceed Button */}
            <Link href={ROUTES.CHECKOUT(client_txn_id)} className="flex-1">
              <Button variant="solid" action="primary" size="lg" className="w-full">
                <ButtonText>Proceed</ButtonText>
              </Button>
            </Link>
          </View>
        ) : (
          <Button variant="solid" action="secondary" size="lg" isDisabled>
            <ButtonText>Select an item to Proceed</ButtonText>
          </Button>
        )}
      </View>
    </View>
  );
};
