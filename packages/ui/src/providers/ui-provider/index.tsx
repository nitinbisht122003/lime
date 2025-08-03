"use client";

import { GluestackUIProvider } from "../gluestack-ui-provider";

export function UIProvider({ children }: { children: React.ReactNode }) {
  return <GluestackUIProvider mode="light">{children}</GluestackUIProvider>;
}
