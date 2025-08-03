"use client";

import { Portal } from "@app/ui/components/portal";
import { View } from "@app/ui/elements/view";

import { useGlobalContext } from "../../hooks/global";
import { LimeroadLoader } from "./limeroad-loader";

export const GlobalLoader = () => {
  const { isLoading } = useGlobalContext();

  return (
    <Portal isOpen={isLoading}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <LimeroadLoader />
      </View>
    </Portal>
  );
};
