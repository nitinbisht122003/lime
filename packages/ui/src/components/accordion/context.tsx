import { createContext, useContext } from "react";

import type { AccordionContextProps } from "./types";

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordionContext must be used within an AccordionProvider");
  }
  return context;
}

export { AccordionContext, useAccordionContext };
