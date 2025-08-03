import type { ComponentProps } from "react";

import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

import { SCROLL_ROOT_ID } from "../utils/constants";
import { GlobalLoader } from "./loaders/global-loader";

type ScreenProps = ComponentProps<typeof View> & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  scrollRootId?: string;
};

export function Screen({
  children,
  className,
  header,
  footer,
  scrollRootId = SCROLL_ROOT_ID,
  ...props
}: ScreenProps) {
  return (
    <View className={cn("relative h-screen", className)} {...props}>
      {/* header */}
      {header}
      {/* scroll-root */}
      <View className="flex-1 overflow-scroll" id={scrollRootId}>
        {children}
      </View>
      {/* footer */}
      {footer}
      {/* global-loader */}
      <GlobalLoader />
    </View>
  );
}
