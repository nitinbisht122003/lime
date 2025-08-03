"use client";

import { useCallback, useRef, useState } from "react";
import GorhomBottomSheet, {
  BottomSheetHandle,
  BottomSheetScrollView,
  BottomSheetView,
  BottomSheetBackdrop as GorhomBottomSheetBackdrop
} from "@gorhom/bottom-sheet";

import type {
  BottomSheetBackdropProps,
  BottomSheetCloseProps,
  BottomSheetContentProps,
  BottomSheetDragIndicatorProps,
  BottomSheetHeaderProps,
  BottomSheetPortalProps,
  BottomSheetProps,
  BottomSheetTitleProps,
  BottomSheetTriggerProps
} from "./types";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { BottomSheetContext } from "./context";
import { descriptionStyle, headerStyle, titleStyle } from "./styles";

/**----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * Main BottomSheet component that provides context
 */
export function BottomSheet({
  defaultOpen = false,
  open: _open,
  onOpenChange,
  dismissable: _dismissable = true,
  snapPoints,
  defaultSnapIndex = 0,
  onSnapChange,
  BackdropComponent,
  HandleComponent,
  children
}: BottomSheetProps) {
  const bottomSheetRef = useRef<GorhomBottomSheet>(null);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Open/close handlers
  const handleOpenChange = useCallback(
    (isSheetOpen: boolean) => {
      setIsOpen(isSheetOpen);
      onOpenChange?.(isSheetOpen);
    },
    [onOpenChange]
  );

  // Methods to control the sheet
  const openSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
    handleOpenChange(true);
  }, [handleOpenChange]);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    handleOpenChange(false);
  }, [handleOpenChange]);

  const contextValue = {
    isOpen,
    openSheet,
    closeSheet,
    BackdropComponent,
    HandleComponent
  };

  return (
    <BottomSheetContext.Provider value={contextValue}>
      <GorhomBottomSheet
        ref={bottomSheetRef}
        index={defaultSnapIndex}
        snapPoints={snapPoints}
        onClose={() => handleOpenChange(false)}
        onChange={onSnapChange}
        backdropComponent={GorhomBottomSheetBackdrop}
        handleComponent={BottomSheetHandle}
      >
        {children}
      </GorhomBottomSheet>
    </BottomSheetContext.Provider>
  );
}

/**
 * BottomSheet trigger component
 */
export function BottomSheetTrigger({ asChild: _, children }: BottomSheetTriggerProps) {
  // const { openSheet } = useBottomSheet();

  const handlePress = () => {
    // openSheet();
  };

  return <Pressable onPress={handlePress}>{children}</Pressable>;
}

/**
 * BottomSheet portal component
 */
export function BottomSheetPortal({ children }: BottomSheetPortalProps) {
  return <>{children}</>;
}

/**
 * BottomSheet content component
 */
export function BottomSheetContent({ scrollable = false, children }: BottomSheetContentProps) {
  const Component = scrollable ? BottomSheetScrollView : BottomSheetView;
  return <Component>{children}</Component>;
}

/**
 * BottomSheet backdrop component
 */
export const BottomSheetBackdrop = (_: BottomSheetBackdropProps) => {
  return null;
};

/**
 * BottomSheet drag indicator component
 */
export const BottomSheetDragIndicator = (_: BottomSheetDragIndicatorProps) => {
  return null;
};

/**
 * BottomSheet title component
 */
export function BottomSheetTitle({ className, children }: BottomSheetTitleProps) {
  return <Text className={titleStyle({ class: className })}>{children}</Text>;
}

/**
 * BottomSheet description component
 */
export function BottomSheetDescription({ className, children }: BottomSheetTitleProps) {
  return <Text className={descriptionStyle({ class: className })}>{children}</Text>;
}

/**
 * BottomSheet close component
 */
export function BottomSheetClose({ children }: BottomSheetCloseProps) {
  // const { closeSheet } = useBottomSheet();

  const handlePress = () => {
    // closeSheet();
  };

  return <Pressable onPress={handlePress}>{children}</Pressable>;
}

/**
 * BottomSheet header component
 */
export function BottomSheetHeader({ className, children }: BottomSheetHeaderProps) {
  return <View className={headerStyle({ class: className })}>{children}</View>;
}

export * from "./types";
