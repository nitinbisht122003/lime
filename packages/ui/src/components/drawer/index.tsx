"use client";

import { Dimensions } from "react-native";
import { createModal as createDrawer } from "@gluestack-ui/modal";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { AnimatePresence } from "@legendapp/motion";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { MotionPressable, MotionView } from "../../elements/animated";
import { Pressable } from "../../elements/pressable";
import { ScrollView } from "../../elements/scroll-view";
import { View } from "../../elements/view";
import {
  drawerBackdropStyle,
  drawerBodyStyle,
  drawerCloseButtonStyle,
  drawerContentStyle,
  drawerFooterStyle,
  drawerHeaderStyle,
  drawerStyle,
  sizes
} from "./styles";

const SCOPE = "DRAWER";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

type IContext = IStyleContext<typeof drawerStyle>;

const DrawerRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

const UIDrawer = createDrawer({
  Root: DrawerRoot,
  Backdrop: MotionPressable,
  Content: MotionView,
  Body: ScrollView,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
  AnimatePresence: AnimatePresence
});

// Drawer
type IDrawerProps = ComponentPropsWithVariants<typeof UIDrawer, typeof drawerStyle>;

export function Drawer({ className, size = "sm", anchor = "left", ...props }: IDrawerProps) {
  return (
    <UIDrawer
      {...props}
      className={drawerStyle({ size, anchor, class: className })}
      context={{ size, anchor }}
    />
  );
}

// DrawerBackdrop
type IDrawerBackdropProps = ComponentPropsWithVariants<
  typeof UIDrawer.Backdrop,
  typeof drawerBackdropStyle
>;

export function DrawerBackdrop({ className, ...props }: IDrawerBackdropProps) {
  return (
    <UIDrawer.Backdrop
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
      className={drawerBackdropStyle({
        class: className
      })}
    />
  );
}

// DrawerContent
type IDrawerContentProps = ComponentPropsWithVariants<
  typeof UIDrawer.Content,
  typeof drawerContentStyle
>;

export function DrawerContent({ className, ...props }: IDrawerContentProps) {
  const { size: parentSize = "md", anchor: parentAnchor } = useStyleContext<IContext>(SCOPE);

  const drawerHeight = screenHeight * sizes[parentSize];
  const drawerWidth = screenWidth * sizes[parentSize];

  const isHorizontal = parentAnchor === "left" || parentAnchor === "right";

  const initialObj = isHorizontal
    ? { x: parentAnchor === "left" ? -drawerWidth : drawerWidth }
    : { y: parentAnchor === "top" ? -drawerHeight : drawerHeight };

  const animateObj = isHorizontal ? { x: 0 } : { y: 0 };

  const exitObj = isHorizontal
    ? { x: parentAnchor === "left" ? -drawerWidth : drawerWidth }
    : { y: parentAnchor === "top" ? -drawerHeight : drawerHeight };

  const customClass = isHorizontal
    ? `top-0 ${parentAnchor === "left" ? "left-0" : "right-0"}`
    : `left-0 ${parentAnchor === "top" ? "top-0" : "bottom-0"}`;

  return (
    <UIDrawer.Content
      initial={initialObj}
      animate={animateObj}
      exit={exitObj}
      transition={{
        type: "timing",
        duration: 300
      }}
      {...props}
      className={drawerContentStyle({
        parentVariants: {
          size: parentSize,
          anchor: parentAnchor
        },
        class: `${className} ${customClass}`
      })}
      pointerEvents="auto"
    />
  );
}

// DrawerHeader
type IDrawerHeaderProps = ComponentPropsWithVariants<
  typeof UIDrawer.Header,
  typeof drawerHeaderStyle
>;

export function DrawerHeader({ className, ...props }: IDrawerHeaderProps) {
  return (
    <UIDrawer.Header
      {...props}
      className={drawerHeaderStyle({
        class: className
      })}
    />
  );
}

// DrawerBody
type IDrawerBodyProps = ComponentPropsWithVariants<typeof UIDrawer.Body, typeof drawerBodyStyle>;

export function DrawerBody({ className, ...props }: IDrawerBodyProps) {
  return (
    <UIDrawer.Body
      {...props}
      className={drawerBodyStyle({
        class: className
      })}
    />
  );
}

// DrawerFooter
type IDrawerFooterProps = ComponentPropsWithVariants<
  typeof UIDrawer.Footer,
  typeof drawerFooterStyle
>;

export function DrawerFooter({ className, ...props }: IDrawerFooterProps) {
  return (
    <UIDrawer.Footer
      {...props}
      className={drawerFooterStyle({
        class: className
      })}
    />
  );
}

// DrawerCloseButton
type IDrawerCloseButtonProps = ComponentPropsWithVariants<
  typeof UIDrawer.CloseButton,
  typeof drawerCloseButtonStyle
>;

export function DrawerCloseButton({ className, ...props }: IDrawerCloseButtonProps) {
  return (
    <UIDrawer.CloseButton
      {...props}
      className={drawerCloseButtonStyle({
        class: className
      })}
    />
  );
}
