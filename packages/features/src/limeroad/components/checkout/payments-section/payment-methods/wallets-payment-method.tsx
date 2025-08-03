import type { ComponentProps } from "react";

import type { WalletsPaymentMethodViewModel } from "@app/types/limeroad";

import { MultipleOptionsPaymentMethod } from "./multiple-options-payment-method";

type WalletsPaymentMethodProps = ComponentProps<typeof MultipleOptionsPaymentMethod> & {
  method: WalletsPaymentMethodViewModel;
};

export const WalletsPaymentMethod = ({ method, ...props }: WalletsPaymentMethodProps) => {
  return <MultipleOptionsPaymentMethod method={method} {...props} />;
};
