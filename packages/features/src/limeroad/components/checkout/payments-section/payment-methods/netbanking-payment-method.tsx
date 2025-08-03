import type { ComponentProps } from "react";

import type { NetBankingPaymentMethodViewModel } from "@app/types/limeroad";

import { MultipleOptionsPaymentMethod } from "./multiple-options-payment-method";

type NetBankingPaymentMethodProps = ComponentProps<typeof MultipleOptionsPaymentMethod> & {
  method: NetBankingPaymentMethodViewModel;
};

export const NetBankingPaymentMethod = ({ method, ...props }: NetBankingPaymentMethodProps) => {
  return <MultipleOptionsPaymentMethod method={method} {...props} />;
};
