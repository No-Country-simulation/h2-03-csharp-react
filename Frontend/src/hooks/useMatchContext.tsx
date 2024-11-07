import { useContext } from "react";
import { MatchContext } from "../context/MatchContext";
import { MatchContextProps } from "../types/MatchesTypes";

export const useMatchContext = () => {
  return useContext(MatchContext) as MatchContextProps;
};
