import { ReactNode } from "react";

export interface CountBetsProviderProps {
  children: ReactNode;
}

export interface CountBetsContextProps {
  handleSetCountsBets: (total: number, future: number) => void;
  countBets: number;
  countFutureBets: number;
  fullBets: boolean;
  handleSetFullBets: (set: boolean) => void;
}
