"use client";

import { useQuery } from "@tanstack/react-query";

import { lrCreditQueryOptions } from "@app/services/limeroad/queries/lr-credit";

import { Header } from "../components/header";
import { LrCreditAssetRenderer } from "../components/lr-credit/lr-credit-asset-renderer";
import { Screen } from "../components/screen";

export function LrCreditScreen() {
  const { data } = useQuery(lrCreditQueryOptions());

  return (
    <Screen
      header={
        <Header logo={false} back title="Credits" navOptions={["search", "wishlist", "cart"]} />
      }
    >
      {data?.items.map((item, index) => <LrCreditAssetRenderer key={index} {...item} />)}
    </Screen>
  );
}
