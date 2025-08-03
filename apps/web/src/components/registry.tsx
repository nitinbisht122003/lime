"use client";

import React, { useRef, useState } from "react";
// @ts-expect-error : AppRegistry is defined in react-native-web but its type is not defined
import { AppRegistry } from "react-native-web";
import { useServerInsertedHTML } from "next/navigation";
import { flush } from "@gluestack-ui/nativewind-utils/flush";
import { createStyleRegistry, StyleRegistry } from "styled-jsx";

export default function StyledJsxRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    AppRegistry.registerComponent("Main", () => "main");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const { getStyleElement } = AppRegistry.getApplication("Main");

    if (!isServerInserted.current) {
      isServerInserted.current = true;

      // adds react-native-web styles, nextjs jsx styles and gluestack css variables
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const styles = [getStyleElement(), jsxStyleRegistry.styles(), flush()];

      jsxStyleRegistry.flush();

      return <>{styles}</>;
    }
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
