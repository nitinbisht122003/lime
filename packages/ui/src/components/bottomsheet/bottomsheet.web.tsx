"use client";

import { useState } from "react";
import { Drawer } from "vaul";

import type { IBottomSheetContext } from "./context";
import type {
  BottomSheetBackdropProps,
  BottomSheetCloseProps,
  BottomSheetContentProps,
  BottomSheetDescriptionProps,
  BottomSheetDragIndicatorProps,
  BottomSheetHeaderProps,
  BottomSheetPortalProps,
  BottomSheetProps,
  BottomSheetTitleProps,
  BottomSheetTriggerProps
} from "./types";
import { View } from "../../elements/view";
import { BottomSheetContext, useBottomSheet } from "./context";
import {
  backdropStyle,
  closeStyle,
  contentStyle,
  descriptionStyle,
  dragIndicatorStyle,
  headerStyle,
  titleStyle
} from "./styles";

/**
 * Main BottomSheet component that provides context
 */
export function BottomSheet({
  defaultOpen = false,
  open,
  onOpenChange,
  dismissable,
  snapPoints,
  defaultSnapIndex = 0,
  onSnapChange,
  BackdropComponent = BottomSheetBackdrop,
  HandleComponent,
  children
}: BottomSheetProps) {
  const contextValue: IBottomSheetContext = {
    BackdropComponent,
    HandleComponent
  };

  // vaul snap points
  const vaulSnapPoints = snapPoints?.map((point) => {
    if (typeof point === "number") {
      return `${point}px`;
    }

    const ratio = parseInt(point) / 100;

    return ratio;
  });

  // State to manage the active snap
  const defaultSnap = vaulSnapPoints ? vaulSnapPoints[defaultSnapIndex] : null;
  const [currentSnap, setCurrentSnap] = useState(defaultSnap);

  // handlers
  const handleSnapChange = (snap: number | string | null) => {
    setCurrentSnap(snap);

    let snapIndex = -1;

    if (snap && vaulSnapPoints) {
      snapIndex = vaulSnapPoints.indexOf(snap);
    }

    onSnapChange?.(snapIndex);
  };

  return (
    <BottomSheetContext.Provider value={contextValue}>
      <Drawer.Root
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        dismissible={dismissable}
        snapPoints={vaulSnapPoints}
        activeSnapPoint={currentSnap}
        setActiveSnapPoint={handleSnapChange}
      >
        {children}
      </Drawer.Root>
    </BottomSheetContext.Provider>
  );
}

/**
 * BottomSheet trigger component
 */
export function BottomSheetTrigger({ asChild, children }: BottomSheetTriggerProps) {
  return <Drawer.Trigger asChild={asChild}>{children}</Drawer.Trigger>;
}

/**
 * BottomSheet portal component (container for the sheet)
 */
export function BottomSheetPortal({ container, children }: BottomSheetPortalProps) {
  return <Drawer.Portal container={container}>{children}</Drawer.Portal>;
}

const Backdrop = () => {
  const { BackdropComponent } = useBottomSheet();

  if (BackdropComponent) {
    return <BackdropComponent />;
  }

  return null;
};

const Handle = () => {
  const { HandleComponent } = useBottomSheet();

  if (HandleComponent) {
    return <HandleComponent />;
  }

  return null;
};

/**
 * BottomSheet content component
 */

export function BottomSheetContent({
  className,
  scrollable = false,
  children
}: BottomSheetContentProps) {
  return (
    <View className="z-[9999]">
      <Backdrop />
      <Drawer.Content className={contentStyle({ class: className })}>
        <View className={scrollable ? "overflow-y-auto" : ""}>
          <Handle />
          {children}
        </View>
      </Drawer.Content>
    </View>
  );
}

/**
 * BottomSheet backdrop component
 */
export function BottomSheetBackdrop({ className, children }: BottomSheetBackdropProps) {
  return (
    <Drawer.Overlay className={backdropStyle({ class: className })}>{children}</Drawer.Overlay>
  );
}

/**
 * BottomSheet handle component
 */
export function BottomSheetDragIndicator({ className, children }: BottomSheetDragIndicatorProps) {
  return (
    <Drawer.Handle className={dragIndicatorStyle({ class: className })}>{children}</Drawer.Handle>
  );
}

/**
 * BottomSheet title component
 */
export function BottomSheetTitle({ className, children }: BottomSheetTitleProps) {
  return <Drawer.Title className={titleStyle({ class: className })}>{children}</Drawer.Title>;
}

/**
 * BottomSheet description component
 */
export function BottomSheetDescription({ className, children }: BottomSheetDescriptionProps) {
  return (
    <Drawer.Description className={descriptionStyle({ class: className })}>
      {children}
    </Drawer.Description>
  );
}

/**
 * BottomSheet close component
 */
export function BottomSheetClose({ className, children }: BottomSheetCloseProps) {
  return <Drawer.Close className={closeStyle({ class: className })}>{children}</Drawer.Close>;
}

/**
 * BottomSheet header component
 */
export function BottomSheetHeader({ className, children }: BottomSheetHeaderProps) {
  return <View className={headerStyle({ class: className })}>{children}</View>;
}
