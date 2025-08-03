"use client";

import { useQuery } from "@tanstack/react-query";

import { cartQueryOptions } from "@app/services/limeroad/queries/cart";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

import { CartAssetRenderer } from "../components/cart/cart-asset-renderer";
import { Header } from "../components/header";
import { LimeroadLoader } from "../components/loaders/limeroad-loader";
import { Screen } from "../components/screen";
import { CartProvider } from "../providers/cart";

export function CartScreen() {
  const { data: cart, isLoading } = useQuery(cartQueryOptions());

  return (
    <CartProvider>
      <Screen header={<Header back title="My Bag" navOptions={["wishlist"]} />}>
        {isLoading ? (
          <View className="flex-1 items-center justify-center">
            <LimeroadLoader />
          </View>
        ) : cart === undefined ? (
          <View className="flex-1 items-center justify-center">
            <Text>Something went wrong</Text>
          </View>
        ) : (
          cart.items.map((item, index) => <CartAssetRenderer key={index} {...item} />)
        )}
      </Screen>
    </CartProvider>
  );
}
