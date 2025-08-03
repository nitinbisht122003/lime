import type { ReactNode } from "react";

import {
  Accordion as AccordionBox,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger
} from "@app/ui/components/accordion";
import { AngleDownIcon } from "@app/ui/icons/angle-down-icon";
import { AngleUpIcon } from "@app/ui/icons/angle-up-icon";

// Define the type for an accordion item
export interface AccordionData {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

// Define variants and sizes
export type AccordionVariant = "filled" | "unfilled" | "borderless";
export type AccordionSize = "sm" | "md" | "lg";

export interface AccordionProps {
  data: AccordionData[];
  defaultIndex?: number | null;
  variant?: AccordionVariant;
  size?: AccordionSize;
  className?: string;
  showIcon?: boolean;
}

export const Accordion = ({
  data,
  defaultIndex = null,
  variant = "borderless",
  size = "md",
  className = ""
}: AccordionProps) => {
  return (
    <AccordionBox variant={variant} size={size} className={className} defaultIndex={defaultIndex}>
      {data.map((item, index) => {
        const isLast = index === data.length - 1;

        return (
          <AccordionItem key={item.id} isLast={isLast}>
            <AccordionHeader>
              <AccordionTrigger index={index}>
                {({ isActive }) => (
                  <>
                    <AccordionTitleText>{item.title}</AccordionTitleText>
                    {isActive ? (
                      <AccordionIcon as={AngleUpIcon} />
                    ) : (
                      <AccordionIcon as={AngleDownIcon} />
                    )}
                  </>
                )}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionBox>
  );
};
