import type { ComponentType, ReactNode } from "react";

import type { ComponentPropsWithVariants } from "../../types";
import type {
  backdropStyle,
  closeStyle,
  contentStyle,
  descriptionStyle,
  dragIndicatorStyle,
  headerStyle,
  titleStyle
} from "./styles";

/**
 * The available snap points for the bottom sheet
 * Can be a percentage string or a number representing pixels
 */
export type SnapPoint = `${number}%` | number;

/**
 * Props for the BottomSheet context provider
 */
export interface BottomSheetProps {
  /**
   * The open state of the bottom sheet when it is initially rendered.
   * Use when you do not need to control its open state.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Whether the bottom sheet is open/visible
   * @default false
   */
  open?: boolean;

  /**
   * Callback when the bottom sheet is closed
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * When false dragging, clicking outside,
   * pressing esc, etc. will not close the drawer.
   * Use this in combination with the isOpen prop,
   * otherwise you won't be able to open/close the drawer.
   * @default true
   */
  dismissable?: boolean;

  /**
   * The snap points for the bottom sheet
   * For native, either percentages or numbers (for pixels) can be used
   * For web, converted to 0 - 1 or px values (e.g., 340px, 0.7, 1)
   */
  snapPoints?: SnapPoint[];

  /**
   * The default snap point index to show when the sheet is opened
   * @default 0
   */
  defaultSnapIndex?: number;

  /**
   * Callback when snapping to a new point
   */
  onSnapChange?: (index: number) => void;

  /**
   * Component to use as the backdrop
   */
  BackdropComponent?: ComponentType<BottomSheetBackdropProps> | null;

  /**
   * Component to use as the drag indicator/handle
   */
  HandleComponent?: ComponentType<BottomSheetDragIndicatorProps> | null;

  /**
   * Children components
   */
  children?: ReactNode;
}

/**
 * Props for the BottomSheetTrigger component
 */
export interface BottomSheetTriggerProps {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;

  /**
   * The content of the trigger
   */
  children?: ReactNode;
}

/**
 * Props for the BottomSheetPortal component
 */
export interface BottomSheetPortalProps {
  /**
   * Portal container to render the bottom sheet in
   * @default document.body
   * @platform web
   */
  container?: HTMLElement | null;

  /**
   * The content of the portal
   */
  children?: ReactNode;
}

/**
 * Props for the BottomSheetContent component
 */
export type BottomSheetContentProps = ComponentPropsWithVariants<
  ComponentType<{
    /**
     * Whether the content should be scrollable
     * @default false
     */
    scrollable?: boolean;

    /**
     * The content of the bottom sheet
     */
    children?: ReactNode;
  }>,
  typeof contentStyle
>;

/**
 * Props for the BottomSheetBackdrop component
 */
export type BottomSheetBackdropProps = ComponentPropsWithVariants<
  ComponentType<{
    /**
     * The content of the backdrop
     */
    children?: ReactNode;
  }>,
  typeof backdropStyle
>;

/**
 * Props for the BottomSheetDragIndicator component
 */
export type BottomSheetDragIndicatorProps = ComponentPropsWithVariants<
  ComponentType<{
    /**
     * The content of the drag indicator
     */
    children?: ReactNode;
  }>,
  typeof dragIndicatorStyle
>;

/**
 * Props for the BottomSheetTitle component
 */
export type BottomSheetTitleProps = ComponentPropsWithVariants<
  ComponentType<{
    /**
     * The content of the title
     */
    children?: ReactNode;
  }>,
  typeof titleStyle
>;

/**
 * Props for the BottomSheetDescription component
 */
export type BottomSheetDescriptionProps = ComponentPropsWithVariants<
  ComponentType<{
    /**
     * The content of the description
     */
    children?: ReactNode;
  }>,
  typeof descriptionStyle
>;

/**
 * Props for the BottomSheetClose component
 */
export type BottomSheetCloseProps = ComponentPropsWithVariants<
  ComponentType<{
    /**
     * The content of the close button
     */
    children?: ReactNode;
  }>,
  typeof closeStyle
>;

export type BottomSheetHeaderProps = ComponentPropsWithVariants<
  ComponentType<{
    /**
     * The content of the header
     */
    children?: ReactNode;
  }>,
  typeof headerStyle
>;
