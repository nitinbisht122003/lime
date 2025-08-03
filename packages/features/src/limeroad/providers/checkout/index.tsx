import { useCallback, useRef } from "react";

import type { CheckoutAssetType } from "@app/types/limeroad";

import type { ICheckoutContext } from "../../hooks/checkout";
import type { ScrollToSection, SectionRefs } from "../../utils/scroll-to-section";
import { CheckoutContext } from "../../hooks/checkout";
import { scrollSectionIntoView } from "../../utils/scroll-to-section";
import { PaymentsSectionProvider } from "./payments-section";

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  const sectionRefs: SectionRefs<CheckoutAssetType> = useRef({});

  const scrollToSection = useCallback<ScrollToSection<CheckoutAssetType>>((section) => {
    scrollSectionIntoView(section, sectionRefs);
  }, []);

  const context: ICheckoutContext = {
    sectionRefs,
    scrollToSection,
    finalAmount: 1000
  };

  return (
    <CheckoutContext.Provider value={context}>
      <PaymentsSectionProvider>{children}</PaymentsSectionProvider>
    </CheckoutContext.Provider>
  );
};
