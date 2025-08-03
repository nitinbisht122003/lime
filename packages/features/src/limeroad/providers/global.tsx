"use client";

import { useState } from "react";

import { UIProvider } from "@app/ui/providers/ui-provider";

import { GlobalContext } from "../hooks/global";
import { QueryProvider } from "./query-provider";

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading, isUserLoggedIn, setIsUserLoggedIn }}>
      <QueryProvider>
        <UIProvider>{children}</UIProvider>
      </QueryProvider>
    </GlobalContext.Provider>
  );
};
