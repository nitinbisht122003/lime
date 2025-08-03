"use client";

import { cn } from "@gluestack-ui/nativewind-utils/cn";
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import type { BottomSheetCloseProps, BottomSheetContentProps } from "../bottomsheet";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { badgeStyle } from "../badge";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetPortal,
  BottomSheetTitle
} from "../bottomsheet";
import { Button } from "../button";
import { Radio, RadioGroup } from "../radio";
import {
  selectorSheetBodyStyle,
  selectorSheetConfirmButtonStyle,
  selectorSheetHeaderStyle,
  selectorSheetOptionLabelStyle,
  selectorSheetOptionsStyle,
  selectorSheetOptionStyle,
  selectorSheetStyle,
  selectorSheetTitleStyle,
  selectorSheetTriggerStyle,
  selectorSheetValueStyle
} from "./styles";

const SCOPE = "SelectorSheet";

type IContext = IStyleContext<typeof selectorSheetStyle>;

const SelectorSheetRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type ISelectorSheetProps = ComponentPropsWithVariants<
  typeof SelectorSheetRoot,
  typeof selectorSheetStyle
>;

export const SelectorSheet = ({
  className,
  size = "md",
  children,
  ...props
}: ISelectorSheetProps) => (
  <SelectorSheetRoot
    {...props}
    className={selectorSheetStyle({ class: className, size })}
    context={{ size }}
  >
    {children}
  </SelectorSheetRoot>
);

export type ISelectorSheetTriggerProps = ComponentPropsWithVariants<
  typeof Pressable,
  typeof selectorSheetTriggerStyle
>;

export const SelectorSheetTrigger = ({
  size,
  className,
  children,
  ...props
}: ISelectorSheetTriggerProps) => {
  const { size: parentSize = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Pressable
      {...props}
      className={selectorSheetTriggerStyle({
        class: className,
        parentVariants: { size: parentSize },
        size
      })}
    >
      {children}
    </Pressable>
  );
};

type ISelectorSheetValueProps = ComponentPropsWithVariants<
  typeof View,
  typeof selectorSheetValueStyle
>;

export const SelectorSheetValue = ({
  size,
  className,
  children,
  ...props
}: ISelectorSheetValueProps) => {
  const { size: parentSize = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={selectorSheetValueStyle({
        class: className,
        parentVariants: { size: parentSize },
        size
      })}
    >
      {children}
    </View>
  );
};

type ISelectorBottomSheetProps = ComponentPropsWithVariants<
  typeof BottomSheet,
  typeof selectorSheetStyle
>;

export const SelectorBottomSheet = ({ children, ...props }: ISelectorBottomSheetProps) => (
  <BottomSheet {...props}>
    <BottomSheetPortal>{children}</BottomSheetPortal>
  </BottomSheet>
);

export const SelectorBottomSheetContent = (props: BottomSheetContentProps) => (
  <BottomSheetContent {...props} className="p-0" />
);

type ISelectorBottomSheetHeaderProps = ComponentPropsWithVariants<
  typeof View,
  typeof selectorSheetHeaderStyle
>;

export const SelectorBottomSheetHeader = ({
  className,
  children,
  ...props
}: ISelectorBottomSheetHeaderProps) => (
  <View {...props} className={selectorSheetHeaderStyle({ class: className })}>
    {children}
  </View>
);

type ISelectorBottomSheetTitleProps = ComponentPropsWithVariants<
  typeof Text,
  typeof selectorSheetTitleStyle
>;

export const SelectorBottomSheetTitle = ({
  className,
  children,
  ...props
}: ISelectorBottomSheetTitleProps) => {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <BottomSheetTitle
      {...props}
      className={selectorSheetTitleStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </BottomSheetTitle>
  );
};

export const SelectorBottomSheetClose = (props: BottomSheetCloseProps) => (
  <BottomSheetClose {...props} />
);

type ISelectorBottomSheetBodyProps = ComponentPropsWithVariants<
  typeof View,
  typeof selectorSheetBodyStyle
>;

export const SelectorBottomSheetBody = ({
  className,
  children,
  ...props
}: ISelectorBottomSheetBodyProps) => (
  <View {...props} className={selectorSheetBodyStyle({ class: className })}>
    {children}
  </View>
);

type ISelectorOptionsProps = ComponentPropsWithVariants<
  typeof RadioGroup,
  typeof selectorSheetOptionsStyle
>;

export const SelectorOptions = ({ className, children, ...props }: ISelectorOptionsProps) => (
  <RadioGroup {...props} className={selectorSheetOptionsStyle({ class: className })}>
    {children}
  </RadioGroup>
);

type ISelectorOptionProps = ComponentPropsWithVariants<
  typeof Radio,
  typeof selectorSheetOptionStyle
>;

export const SelectorOption = ({ className, children, ...props }: ISelectorOptionProps) => {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Radio
      {...props}
      size={size}
      className={cn(
        badgeStyle({ variant: "outline", action: "default", size, class: className }),
        selectorSheetOptionStyle({ class: className })
      )}
    >
      {children}
    </Radio>
  );
};

type ISelectorOptionLabelProps = ComponentPropsWithVariants<
  typeof Text,
  typeof selectorSheetOptionLabelStyle
>;

export const SelectorOptionLabel = ({
  className,
  children,
  ...props
}: ISelectorOptionLabelProps) => {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={selectorSheetOptionLabelStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </Text>
  );
};

type ISelectorConfirmationButtonProps = ComponentPropsWithVariants<
  typeof Button,
  typeof selectorSheetConfirmButtonStyle
>;

export const SelectorConfirmationButton = ({
  size = "lg",
  variant = "solid",
  action = "primary",
  className,
  ...props
}: ISelectorConfirmationButtonProps) => (
  <Button
    size={size}
    variant={variant}
    action={action}
    {...props}
    className={selectorSheetConfirmButtonStyle({ class: className })}
  />
);
