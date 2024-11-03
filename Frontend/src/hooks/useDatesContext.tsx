import { useContext } from "react";
import { DatesContext } from "../context/DatesContext";
import { DatesContextProps } from "../types/DatesTypes";

export const useDatesContext = () => {
  return useContext(DatesContext) as DatesContextProps;
};