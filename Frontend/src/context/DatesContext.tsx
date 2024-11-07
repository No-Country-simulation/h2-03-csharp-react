import { createContext, useEffect, useState } from "react";
import { DatesProviderProps, DatesContextProps } from "../types/DatesTypes";
import datesMatchesTabs from "../utils/matches-tab-dates";
import datesMatchesForPredictions from "../utils/predictions-tab-dates";
import datesMatchesResults from "../utils/matches-results-dates";
import datesPredictions from "../utils/predictions-tab-dates";

const DatesContext = createContext<DatesContextProps | null>(null);

const DatesProvider: React.FC<DatesProviderProps> = ({ children }) => {
  const [dateMatchesValues, setDateMatchesValues] = useState<string[]>(
    datesMatchesTabs.generateDates()
  );
  const [dateMatchValue, setDateMatchValue] = useState<string>(
    dateMatchesValues[3]
  );
  const [datesMatchesForPredictionsValues, setDateMatchesForPredictionsValues] =
    useState<string[]>(datesMatchesForPredictions.generateDates());
  const [datesMatchesResultsValues, setDateMatchesResultsValues] = useState<
    string[]
  >(datesMatchesResults.generateDates());
  const [datePredictionsValues, setDatePredictionsValues] = useState<string[]>(
    datesPredictions.generateDates()
  );
  const [datePredictionValue, setDatePredictionValue] = useState<string>(
    datePredictionsValues[0]
  );

  useEffect(() => {
    setDateMatchesValues(datesMatchesTabs.generateDates());
    setDateMatchesForPredictionsValues(
      datesMatchesForPredictions.generateDates()
    );
    setDateMatchesResultsValues(datesMatchesResults.generateDates());
    setDatePredictionsValues(datesPredictions.generateDates())
  }, []);

  const handleChangeMatchDate = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setDateMatchValue(newValue);
    event.preventDefault();
  };

  const handleChangePredictionDate = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setDatePredictionValue(newValue);
    event.preventDefault();
  };


  return (
    <DatesContext.Provider
      value={{
        dateMatchesValues,
        dateMatchValue,
        datesMatchesForPredictionsValues,
        datesMatchesResultsValues,
        datePredictionValue,
        datePredictionsValues,
        handleChangeMatchDate,
        handleChangePredictionDate,
      }}
    >
      {children}
    </DatesContext.Provider>
  );
};

export { DatesContext, DatesProvider };
