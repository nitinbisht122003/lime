import type { ScrollIntoViewProps } from "./types";

export const scrollIntoView = ({ element, animated = true }: ScrollIntoViewProps) => {
  if (element === null || element === undefined) return;

  if (!(element instanceof Element)) return;

  const scrollOptions: ScrollIntoViewOptions = {
    behavior: animated ? "smooth" : "instant"
  };

  element.scrollIntoView(scrollOptions);
};
