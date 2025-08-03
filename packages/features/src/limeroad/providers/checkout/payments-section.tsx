import { useState } from "react";

import type {
  PaymentMethod,
  PaymentsSectionContextType
} from "../../hooks/checkout/payments-section";
import { PaymentsSectionContext } from "../../hooks/checkout/payments-section";

export const PaymentsSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>({});

  const context: PaymentsSectionContextType = {
    selectedPaymentMethod,
    setSelectedPaymentMethod
  };

  return (
    <PaymentsSectionContext.Provider value={context}>{children}</PaymentsSectionContext.Provider>
  );
};
