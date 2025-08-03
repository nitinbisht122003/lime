import type { ComponentProps } from "react";

import type { PaymentMethodViewModel } from "@app/types/limeroad";
import { Divider } from "@app/ui/components/divider";
import { View } from "@app/ui/elements/view";

import { CardsPaymentMethod } from "./cards-payment-method";
import { CodPaymentMethod } from "./cod-payment-method";
import { NetBankingPaymentMethod } from "./netbanking-payment-method";
import { UpiPaymentMethod } from "./upi-payment-method";
import { WalletsPaymentMethod } from "./wallets-payment-method";

type PaymentMethodsProps = ComponentProps<typeof View> & {
  methods: PaymentMethodViewModel[];
};

export function PaymentMethods({ methods, ...props }: PaymentMethodsProps) {
  return (
    <View {...props}>
      {methods.map((method, index) => (
        <View key={method.type}>
          {index > 0 && <Divider orientation="horizontal" className="my-3" />}
          <PaymentMethod method={method} />
        </View>
      ))}
    </View>
  );
}

type PaymentMethodProps = ComponentProps<typeof View> & {
  method: PaymentMethodViewModel;
};

const PaymentMethod = ({ method, ...props }: PaymentMethodProps) => {
  switch (method.type) {
    case "cod":
      return <CodPaymentMethod method={method} {...props} />;
    case "upi":
      return <UpiPaymentMethod method={method} {...props} />;
    case "cards":
      return <CardsPaymentMethod method={method} {...props} />;
    case "netbanking":
      return <NetBankingPaymentMethod method={method} {...props} />;
    case "wallets":
      return <WalletsPaymentMethod method={method} {...props} />;
    default:
      return null;
  }
};
