import { createContext, useContext } from "react";

import type { CheckoutAssetType } from "@app/types/limeroad";

import type { ScrollToSection, SectionRefs } from "../../utils/scroll-to-section";

export interface ICheckoutContext {
  sectionRefs: SectionRefs<CheckoutAssetType>;
  scrollToSection: ScrollToSection<CheckoutAssetType>;
  finalAmount: number;
}

export const CheckoutContext = createContext<ICheckoutContext | undefined>(undefined);

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckoutContext must be used within a CheckoutContextProvider");
  }

  return context;
};
