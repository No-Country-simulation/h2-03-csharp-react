import { createContext, useEffect, useState } from "react";
import {
  CountBetsContextProps,
  CountBetsProviderProps,
} from "../types/CountBetsTypes";
import { useDatesContext } from "../hooks/useDatesContext";
import { usePredictionsContext } from "../hooks/usePredictionsContext";
import dates from "../utils/predictions-tab-dates";

const CountBetsContext = createContext<CountBetsContextProps | null>(null);

const CountBetsProvider: React.FC<CountBetsProviderProps> = ({ children }) => {
  const [countBets, setCountBets] = useState<number>(0);
  const [countFutureBets, setCountFutureBets] = useState<number>(0);
  const [fullBets, setFullBets] = useState<boolean>(false)

  const { datePredictionValue, dateMatchValue } = useDatesContext();
  const { predictions, listMatch } = usePredictionsContext();

  useEffect(() => {
    const betsOfDay = predictions?.find(
      (betList) =>
        dates.formatPredictionsDate(betList.dateFirstBetOfDay) ===
        datePredictionValue || dates.formatPredictionsDate(betList.dateFirstBetOfDay) === dateMatchValue
    );
    const count = betsOfDay?.countBets;
    const countFuture = betsOfDay?.countFutureBets;

    if (count && countFuture) {
      setCountBets(count);
      setCountFutureBets(countFuture);
    }


  }, [datePredictionValue, predictions, listMatch, dateMatchValue]);

  const handleSetCountsBets = (total: number, future: number) => {
    setCountBets(total);
    setCountFutureBets(future);
  };

  const handleSetFullBets = (set: boolean)=>{
    setFullBets(set)
  }

  return (
    <CountBetsContext.Provider
      value={{
        handleSetCountsBets,
        countBets,
        countFutureBets,
        fullBets,
        handleSetFullBets,
      }}
    >
      {children}
    </CountBetsContext.Provider>
  );
};

export { CountBetsContext, CountBetsProvider };
