"use client";

import { useEffect } from "react";
import { AccessibilityInfo } from "react-native";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { createToastHook } from "@gluestack-ui/toast";
import { AnimatePresence } from "@legendapp/motion";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { MotionView } from "../../elements/animated";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { toastDescriptionStyle, toastStyle, toastTitleStyle } from "./styles";

const SCOPE = "TOAST";

const useToast = createToastHook(MotionView, AnimatePresence);

type IContext = IStyleContext<typeof toastStyle>;

const Root = withStyleContext<IContext, typeof View>(View, SCOPE);

type IToastProps = ComponentPropsWithVariants<typeof Root, typeof toastStyle>;

const Toast = ({ className, variant = "solid", action = "muted", ...props }: IToastProps) => {
  return (
    <Root
      {...props}
      className={toastStyle({ variant, action, class: className })}
      context={{ variant, action }}
    />
  );
};

type IToastTitleProps = ComponentPropsWithVariants<typeof Text, typeof toastTitleStyle>;

const ToastTitle = ({ className, size = "md", children, ...props }: IToastTitleProps) => {
  const { variant: parentVariant, action: parentAction } = useStyleContext<IContext>(SCOPE);

  useEffect(() => {
    // Issue from react-native side
    // Hack for now, will fix this later
    AccessibilityInfo.announceForAccessibility(children as string);
  }, [children]);

  return (
    <Text
      {...props}
      aria-live="assertive"
      aria-atomic="true"
      role="alert"
      className={toastTitleStyle({
        size,
        class: className,
        parentVariants: {
          variant: parentVariant,
          action: parentAction
        }
      })}
    >
      {children}
    </Text>
  );
};

type IToastDescriptionProps = ComponentPropsWithVariants<typeof Text, typeof toastDescriptionStyle>;

const ToastDescription = ({ className, size = "md", ...props }: IToastDescriptionProps) => {
  const { variant: parentVariant } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={toastDescriptionStyle({
        size,
        class: className,
        parentVariants: {
          variant: parentVariant
        }
      })}
    />
  );
};

export { useToast, Toast, ToastTitle, ToastDescription };
