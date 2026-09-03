import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ContextValue = {
  category: string;
  setCategory: (value: string) => void;
};

const PortfolioContext = createContext<ContextValue | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState("All");
  const value = useMemo(() => ({ category, setCategory }), [category]);
  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return context;
}
