"use client";

import type { ComponentProps } from "react";
import { Overlay } from "@gluestack-ui/overlay";
import { cssInterop } from "nativewind";

cssInterop(Overlay, { className: "style" });

const Portal = ({ ...props }: ComponentProps<typeof Overlay>) => {
  return <Overlay {...props} />;
};

export { Portal };
