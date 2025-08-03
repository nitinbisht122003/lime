"use client";

import type { ReactNode } from "react";
import type { ViewProps } from "react-native";
import { useEffect } from "react";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import { useColorScheme } from "nativewind";

import type { ModeType } from "./types";
import { View } from "../../elements/view";
import { config } from "./config";

export function GluestackUIProvider({
  mode = "light",
  ...props
}: {
  mode?: ModeType;
  children?: ReactNode;
  style?: ViewProps["style"];
}) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(mode);
  }, [mode, setColorScheme]);

  const isSSR = typeof window === "undefined";

  return (
    <View
      style={[
        config[colorScheme ?? "light"],
        { flex: 1, height: "100%", width: "100%" },
        props.style
      ]}
    >
      <OverlayProvider isSSR={isSSR}>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
