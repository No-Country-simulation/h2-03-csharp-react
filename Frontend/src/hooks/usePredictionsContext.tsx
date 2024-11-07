import { useContext } from "react";
import { PredictionsContext } from "../context/PredictionsContext";
import { PredictionsContextProps } from "../types/PredictionsTypes";

export const usePredictionsContext = () => {
  return useContext(PredictionsContext) as PredictionsContextProps;
};
