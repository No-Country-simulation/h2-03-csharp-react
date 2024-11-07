import { useContext } from "react";
import { CountBetsContext } from "../context/CountBetsContext";
import { CountBetsContextProps } from "../types/CountBetsTypes";

export const useCountBetsContext = () => {
  return useContext(CountBetsContext) as CountBetsContextProps;
};