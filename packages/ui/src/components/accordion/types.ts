interface AccordionContextProps {
  activeIndex: number | null;
  toggleItem: (index: number) => void;
  variant?: "filled" | "unfilled" | "borderless";
  size?: "sm" | "md" | "lg";
}

export type { AccordionContextProps };
