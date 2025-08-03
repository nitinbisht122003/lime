import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

import type { PaymentMethodViewModel, PaymentMode } from "@app/types/limeroad";

export type PaymentMethodType = PaymentMethodViewModel["type"];

export interface PaymentMethod {
  type?: PaymentMethodType;
  mode?: PaymentMode;
  option?: string;
}

export interface PaymentsSectionContextType {
  selectedPaymentMethod: PaymentMethod;
  setSelectedPaymentMethod: Dispatch<SetStateAction<PaymentMethod>>;
}

export const PaymentsSectionContext = createContext<PaymentsSectionContextType | undefined>(
  undefined
);

export const usePaymentsSectionContext = () => {
  const context = useContext(PaymentsSectionContext);

  if (!context) {
    throw new Error("usePaymentsSectionContext must be used within a PaymentsSectionProvider");
  }

  return context;
};
