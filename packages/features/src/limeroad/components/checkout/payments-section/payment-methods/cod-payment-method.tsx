import type { ComponentProps } from "react";

import type { CodPaymentMethodViewModel } from "@app/types/limeroad";

import { SingleModePaymentMethod } from "./single-mode-payment-method";

type CodPaymentMethodProps = ComponentProps<typeof SingleModePaymentMethod> & {
  method: CodPaymentMethodViewModel;
};

export const CodPaymentMethod = ({ method, ...props }: CodPaymentMethodProps) => {
  return <SingleModePaymentMethod method={method} {...props} />;
};
