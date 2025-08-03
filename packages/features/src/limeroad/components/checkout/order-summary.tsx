"use client";

import type { ComponentPropsWithoutRef } from "react";

import { useCheckoutContext } from "../../hooks/checkout";
import { OrderSummary as OrderSummaryComponent } from "../order-summary";

type OrderSummaryProps = ComponentPropsWithoutRef<typeof OrderSummaryComponent>;

export const OrderSummary = (props: OrderSummaryProps) => {
  const { sectionRefs } = useCheckoutContext();

  return (
    <OrderSummaryComponent
      {...props}
      ref={(el) => {
        // eslint-disable-next-line react-compiler/react-compiler
        sectionRefs.current.summary = el;
      }}
    />
  );
};
