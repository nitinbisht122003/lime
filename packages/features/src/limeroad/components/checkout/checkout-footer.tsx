"use client";

import { useCallback } from "react";

import { Button, ButtonIcon, ButtonText } from "@app/ui/components/button";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { ChevronRightIcon } from "@app/ui/icons/chevron-right-icon";

import { useCheckoutContext } from "../../hooks/checkout";
import { usePaymentsSectionContext } from "../../hooks/checkout/payments-section";

export function CheckoutFooter() {
  const { scrollToSection, finalAmount } = useCheckoutContext();
  const { selectedPaymentMethod } = usePaymentsSectionContext();

  const handleConfirmOrder = useCallback(() => {
    if (!selectedPaymentMethod.type) {
      scrollToSection("payment_section");
    }
  }, [scrollToSection, selectedPaymentMethod.type]);

  return (
    <View className="flex-row items-center justify-between gap-2 px-3 py-2 shadow">
      <View>
        <Text className="text-lr-grey-950 text-base font-bold">₹{finalAmount}</Text>
        <Button
          size="md"
          action="secondary"
          variant="ghost"
          className="h-5 gap-0"
          onPress={() => scrollToSection("summary")}
        >
          <ButtonText>Summary</ButtonText>
          <ButtonIcon as={ChevronRightIcon} />
        </Button>
      </View>
      <Button
        size="lg"
        action="primary"
        variant="solid"
        className="flex-1"
        onPress={handleConfirmOrder}
      >
        <ButtonText>Confirm Order</ButtonText>
      </Button>
    </View>
  );
}
