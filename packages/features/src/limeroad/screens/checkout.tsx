"use client";

import { useQuery } from "@tanstack/react-query";

import { checkoutQueryOptions } from "@app/services/limeroad/queries/checkout";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

import { CheckoutAssetRenderer } from "../components/checkout/checkout-asset-render";
import { CheckoutFooter } from "../components/checkout/checkout-footer";
import { Header } from "../components/header";
import { LimeroadLoader } from "../components/loaders/limeroad-loader";
import { Screen } from "../components/screen";
import { CheckoutProvider } from "../providers/checkout";

export function CheckoutScreen({ clientTxnId }: { clientTxnId: string }) {
  const { data: checkout, isLoading } = useQuery(checkoutQueryOptions({ clientTxnId }));

  return (
    <CheckoutProvider>
      <Screen header={<Header back title="Checkout" />} footer={<CheckoutFooter />}>
        {isLoading ? (
          <View className="flex-1 items-center justify-center">
            <LimeroadLoader />
          </View>
        ) : checkout === undefined ? (
          <View className="flex-1 items-center justify-center">
            <Text>Something went wrong</Text>
          </View>
        ) : (
          checkout.items.map((item, index) => <CheckoutAssetRenderer key={index} {...item} />)
        )}
      </Screen>
    </CheckoutProvider>
  );
}
