"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { setFlushStyles } from "@gluestack-ui/nativewind-utils/flush";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";

import type { ModeType } from "./types";
import { config } from "./config";
import { applyModeClass } from "./script";

const variableStyleTagId = "nativewind-style";

const createStyle = (styleTagId: string) => {
  const style = document.createElement("style");
  style.id = styleTagId;
  style.appendChild(document.createTextNode(""));
  return style;
};

export const useSafeLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function GluestackUIProvider({
  mode = "light",
  ...props
}: {
  mode?: ModeType;
  children?: ReactNode;
}) {
  // create theme css variables style string
  let cssVariablesWithMode = ``;

  Object.keys(config).forEach((configKey) => {
    cssVariablesWithMode += configKey === "dark" ? `\n .dark {\n ` : `\n:root {\n`;

    const cssVariables = Object.keys(config[configKey as keyof typeof config]).reduce(
      (acc: string, curr: string) => {
        acc += `${curr}:${config[configKey as keyof typeof config][curr]}; `;
        return acc;
      },
      ""
    );

    cssVariablesWithMode += `${cssVariables} \n}`;
  });

  // set css variables to flush
  setFlushStyles(cssVariablesWithMode);

  // change mode class on mode change
  useSafeLayoutEffect(() => {
    applyModeClass(mode);
  }, [mode]);

  // for system mode, add event listener
  // to change class on system mode change
  const handleMediaQuery = useCallback((e: MediaQueryListEvent) => {
    applyModeClass(e.matches ? "dark" : "light");
  }, []);

  useSafeLayoutEffect(() => {
    if (mode !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    media.addEventListener("change", handleMediaQuery);

    return () => media.removeEventListener("change", handleMediaQuery);
  }, [handleMediaQuery]);

  // add css variables style to document head
  // if not already added from server
  useSafeLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const documentElement = document.documentElement;
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (documentElement) {
        const head = documentElement.querySelector("head");
        let style = head?.querySelector(`[id='${variableStyleTagId}']`);

        if (!style) {
          style = createStyle(variableStyleTagId);
          style.innerHTML = cssVariablesWithMode;
          if (head) head.appendChild(style);
        }
      }
    }
  }, []);

  return (
    <OverlayProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </OverlayProvider>
  );
}
