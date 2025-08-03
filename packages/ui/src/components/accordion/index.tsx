"use client";

import type { ReactElement, ReactNode } from "react";
import { Children, cloneElement, isValidElement, useState } from "react";

import { Icon } from "@app/ui/components/icon";

import type { ComponentPropsWithVariants } from "../../types";
import { Pressable } from "../../elements/pressable";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import AnimatedHeight from "./animatedHeight";
import { AccordionContext, useAccordionContext } from "./context";
import {
  accordionContentStyle,
  accordionContentTextStyle,
  accordionHeaderStyle,
  accordionHeaderTextStyle,
  accordionIconStyle,
  accordionItemStyle,
  accordionStyle
} from "./styles";

// Remove the AccordionItemContext and useAccordionItemContext

interface AccordionChildProps {
  index?: number;
  isLast?: boolean;
}

// Accordion Wrapper
interface AccordionProps {
  children: ReactElement<AccordionChildProps> | ReactElement<AccordionChildProps>[];
  defaultIndex?: number | null;
  allowMultiple?: boolean;
  variant?: "filled" | "unfilled" | "borderless";
  size?: "sm" | "md" | "lg";
  className?: string;
}

function Accordion({
  children,
  defaultIndex = null,
  variant = "filled",
  size = "md",
  className = ""
}: AccordionProps) {
  // Only use internal state
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultIndex);

  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, toggleItem, variant, size }}>
      <View className={accordionStyle({ variant, size, className })}>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            const isLast = index === Children.count(children) - 1;
            return cloneElement(child, { index, isLast });
          }
          return child;
        })}
      </View>
    </AccordionContext.Provider>
  );
}

interface AccordionItemChildProps {
  index?: number;
  isActive?: boolean;
}
// Accordion Item
interface AccordionItemProps {
  children: ReactElement<AccordionItemChildProps> | ReactElement<AccordionItemChildProps>[];
  index?: number;
  isLast?: boolean;
  className?: string;
}

function AccordionItem({
  children,
  index = 0,
  isLast = false,
  className = ""
}: AccordionItemProps) {
  const { activeIndex } = useAccordionContext();
  const isActive = activeIndex === index;

  return (
    <View className={accordionItemStyle({ isLast, className })}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { index, isActive });
        }
        return child;
      })}
    </View>
  );
}

// Accordion Header
interface AccordionHeaderProps {
  children: ReactNode;
  index?: number;
  isActive?: boolean;
  showIcon?: boolean;
  className?: string;
  iconClassName?: string;
  variant?: "filled" | "unfilled" | "borderless";
}

function AccordionHeader({
  children,
  index = 0,
  isActive = false,
  className = ""
}: AccordionHeaderProps) {
  const { toggleItem } = useAccordionContext();

  return (
    <Pressable
      className={accordionHeaderStyle({ isActive, className })}
      onPress={() => toggleItem(index)}
      accessibilityRole="button"
      accessibilityState={{ expanded: isActive }}
    >
      {children}
    </Pressable>
  );
}

interface AccordionTitleTextProps {
  children: ReactNode;
  className?: string;
}

function AccordionTitleText({ children, className = "" }: AccordionTitleTextProps) {
  const { size } = useAccordionContext();
  return <Text className={accordionHeaderTextStyle({ size, className })}>{children}</Text>;
}

// Accordion Content
interface AccordionContentProps {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
  index?: number;
}

function AccordionContent({ children, isActive = false, className = "" }: AccordionContentProps) {
  const { size, variant } = useAccordionContext();

  return (
    <AnimatedHeight hide={!isActive} className={className}>
      <View className={accordionContentStyle({ size, variant, isActive, className })}>
        {children}
      </View>
    </AnimatedHeight>
  );
}

interface AccordionContentTextProps {
  children: ReactNode;
  className?: string;
}

function AccordionContentText({ children, className = "" }: AccordionContentTextProps) {
  const { size, variant } = useAccordionContext();
  return (
    <Text className={accordionContentTextStyle({ size, variant, className })}>{children}</Text>
  );
}

type IAccordionIconProps = ComponentPropsWithVariants<typeof Icon, typeof accordionIconStyle>;
function AccordionIcon({ className = "", ...props }: IAccordionIconProps) {
  const { size } = useAccordionContext();
  return (
    <Icon
      {...props}
      className={accordionIconStyle({ class: className, parentVariants: { size } })}
    />
  );
}

// Update the AccordionTrigger interface to accept isActive
interface AccordionTriggerProps {
  children: ReactNode | ((props: { isActive: boolean }) => ReactNode);
  className?: string;
  isActive?: boolean;
  index?: number;
}

// Modify the AccordionTrigger to use useAccordionContext directly
function AccordionTrigger({
  children,
  className = "",
  index
}: AccordionTriggerProps & { index?: number }) {
  // Get the active state directly from context to ensure it's always up-to-date
  const { activeIndex } = useAccordionContext();
  // Use the prop if provided, otherwise determine from context
  const isActive = index !== undefined ? activeIndex === index : false;

  return (
    <View className={`w-full flex-row items-center justify-between ${className}`}>
      {typeof children === "function" ? children({ isActive }) : children}
    </View>
  );
}

// Update exports - remove the context exports
export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
  AccordionContentText,
  AccordionTrigger,
  AccordionTitleText
};
