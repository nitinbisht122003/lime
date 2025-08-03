"use client";

import { createModal } from "@gluestack-ui/modal";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { AnimatePresence } from "@legendapp/motion";

import { MotionPressable, MotionView } from "@app/ui/elements/animated";
import { Pressable } from "@app/ui/elements/pressable";
import { ScrollView } from "@app/ui/elements/scroll-view";
import { View } from "@app/ui/elements/view";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import {
  modalBackdropStyle,
  modalBodyStyle,
  modalCloseButtonStyle,
  modalContentStyle,
  modalFooterStyle,
  modalHeaderStyle,
  modalStyle
} from "./styles";

const SCOPE = "MODAL";

type IContext = IStyleContext<typeof modalStyle>;

const ModalRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

const UIModal = createModal({
  Root: ModalRoot,
  Backdrop: MotionPressable,
  Content: MotionView,
  Body: ScrollView,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
  AnimatePresence: AnimatePresence
});

// Modal
type IModalProps = Omit<
  ComponentPropsWithVariants<typeof UIModal, typeof modalStyle>,
  "onClose"
> & {
  onClose?: () => void;
};

export function Modal({ className, size = "md", position = "center", ...props }: IModalProps) {
  return (
    <UIModal
      {...props}
      className={modalStyle({ size, position, class: className })}
      context={{ size, position }}
    />
  );
}

type IModalBackdropProps = ComponentPropsWithVariants<
  typeof UIModal.Backdrop,
  typeof modalBackdropStyle
>;

export function ModalBackdrop({ className, ...props }: IModalBackdropProps) {
  return (
    <UIModal.Backdrop
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 0.5
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 250,
        opacity: {
          type: "timing",
          duration: 250
        }
      }}
      {...props}
      className={modalBackdropStyle({
        class: className
      })}
    />
  );
}

type IModalContentProps = ComponentPropsWithVariants<
  typeof UIModal.Content,
  typeof modalContentStyle
>;

export function ModalContent({ className, ...props }: IModalContentProps) {
  const { size: parentSize = "md", position: parentPosition = "center" } =
    useStyleContext<IContext>(SCOPE);

  return (
    <UIModal.Content
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 250,
        opacity: {
          type: "timing",
          duration: 250
        }
      }}
      {...props}
      className={modalContentStyle({
        parentVariants: {
          size: parentSize,
          position: parentPosition
        },
        class: className
      })}
      pointerEvents="auto"
    />
  );
}

type IModalHeaderProps = ComponentPropsWithVariants<typeof UIModal.Header, typeof modalHeaderStyle>;

export function ModalHeader({ className, ...props }: IModalHeaderProps) {
  return (
    <UIModal.Header
      {...props}
      className={modalHeaderStyle({
        class: className
      })}
    />
  );
}

type IModalBodyProps = ComponentPropsWithVariants<typeof UIModal.Body, typeof modalBodyStyle>;

export function ModalBody({ className, ...props }: IModalBodyProps) {
  return (
    <UIModal.Body
      {...props}
      className={modalBodyStyle({
        class: className
      })}
    />
  );
}

type IModalFooterProps = ComponentPropsWithVariants<typeof UIModal.Footer, typeof modalFooterStyle>;

export function ModalFooter({ className, ...props }: IModalFooterProps) {
  return (
    <UIModal.Footer
      {...props}
      className={modalFooterStyle({
        class: className
      })}
    />
  );
}

type IModalCloseButtonProps = ComponentPropsWithVariants<
  typeof UIModal.CloseButton,
  typeof modalCloseButtonStyle
>;

export function ModalCloseButton({ className, ...props }: IModalCloseButtonProps) {
  return (
    <UIModal.CloseButton
      {...props}
      className={modalCloseButtonStyle({
        class: className
      })}
    />
  );
}
