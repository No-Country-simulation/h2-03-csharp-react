import { useContext } from "react";
import { PredictionsContext } from "../context/PredictionsContext";

export const usePredictionsContext = () => {
  return useContext(PredictionsContext);
};
