"use client";

import type { ComponentProps } from "react";
import { useCallback, useMemo, useState } from "react";

import type { PaymentOptionViewModel, UpiPaymentMethodViewModel } from "@app/types/limeroad";
import { PaymentMode } from "@app/types/limeroad";

import { usePaymentsSectionContext } from "../../../../hooks/checkout/payments-section";
import { MultipleOptionsPaymentMethod } from "./multiple-options-payment-method";
import { AddNewUpiId } from "./vpa-payment-method";

type UpiPaymentMethodProps = ComponentProps<typeof MultipleOptionsPaymentMethod> & {
  method: UpiPaymentMethodViewModel;
};

type UpiPaymentOption = PaymentOptionViewModel<PaymentMode.UPI>;

type IntentPaymentOption = PaymentOptionViewModel<PaymentMode.INTENT>;

type VpaPaymentOption = PaymentOptionViewModel<PaymentMode.VPA>;

export const UpiPaymentMethod = ({ method, ...props }: UpiPaymentMethodProps) => {
  // hooks
  const { setSelectedPaymentMethod } = usePaymentsSectionContext();
  const [upiIds, setUpiIds] = useState<string[]>([]);

  // actions
  const handleAddUpiId = useCallback(
    (upiId: string) => {
      setUpiIds((prev) => [...prev, upiId]);
      setSelectedPaymentMethod({ type: PaymentMode.UPI, mode: PaymentMode.VPA, option: upiId });
    },
    [setSelectedPaymentMethod]
  );

  // derived
  const { modifiedMethod, showAddNewUpiIdOption } = useMemo(
    () => getModifiedData(method, upiIds),
    [method, upiIds]
  );

  const optionsPanelChildren = useMemo(() => {
    if (showAddNewUpiIdOption) {
      return <AddNewUpiId className="mt-5" onAdd={handleAddUpiId} />;
    }
    return null;
  }, [showAddNewUpiIdOption, handleAddUpiId]);

  return (
    <MultipleOptionsPaymentMethod
      method={modifiedMethod}
      optionsPanelChildren={optionsPanelChildren}
      {...props}
    />
  );
};

const getModifiedData = (method: UpiPaymentMethodViewModel, upiIds: string[]) => {
  const { options } = method;

  const upiModeOptions = options.filter(
    (option): option is UpiPaymentOption => option.mode === PaymentMode.UPI
  );

  const vpaModeOptions = options.filter(
    (option): option is VpaPaymentOption => option.mode === PaymentMode.VPA
  );

  const vpaOption = vpaModeOptions[0];

  const intentModeOptions = options.filter(
    (option): option is IntentPaymentOption => option.mode === PaymentMode.INTENT
  );

  const upiIdOptions = vpaOption
    ? upiIds.map<VpaPaymentOption>((upiId) => ({
        ...vpaOption,
        id: upiId,
        name: upiId,
        value: upiId
      }))
    : [];

  const radioGroupOptions = [...upiModeOptions, ...intentModeOptions, ...upiIdOptions];

  const modifiedMethod = {
    ...method,
    options: radioGroupOptions
  };

  const showAddNewUpiIdOption = vpaOption !== undefined;

  return {
    modifiedMethod,
    showAddNewUpiIdOption
  };
};
