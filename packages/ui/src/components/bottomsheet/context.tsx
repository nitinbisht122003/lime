import { createContext, useContext } from "react";

import type { BottomSheetProps } from "./types";

// Context for the bottom sheet
export interface IBottomSheetContext {
  BackdropComponent?: BottomSheetProps["BackdropComponent"];
  HandleComponent?: BottomSheetProps["HandleComponent"];
}

export const BottomSheetContext = createContext<IBottomSheetContext | null>(null);

export function useBottomSheet() {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheet must be used within a BottomSheet");
  }
  return context;
}
