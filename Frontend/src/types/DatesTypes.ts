import { ReactNode } from "react";

export interface DatesProviderProps {
  children: ReactNode;
}

export interface DatesContextProps {
  dateMatchesValues: string[];
  dateMatchValue: string;
  datesMatchesForPredictionsValues: string[];
  datesMatchesResultsValues: string[];
  datePredictionValue: string;
  datePredictionsValues: string[];
  handleChangeMatchDate: (
    event: React.SyntheticEvent,
    newValue: string
  ) => void;
  handleChangePredictionDate: (
    event: React.SyntheticEvent,
    newValue: string
  ) => void;
}
