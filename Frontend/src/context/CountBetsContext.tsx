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
  const [countFutureBetsByDay, setCountFutureBetsByDay] = useState<number>(0);

  const { datePredictionValue, dateMatchValue } = useDatesContext();
  const { predictions, listMatch } = usePredictionsContext();

  useEffect(() => {
    const betsOfDay = predictions?.find(
      (betList) =>
        dates.formatPredictionsDate(betList.dateFirstBetOfDay) ===
        datePredictionValue
    );
    const count = betsOfDay?.countBets;
    const countFuture = betsOfDay?.countFutureBets;

    const countFutureByDay = listMatch
      ?.filter((bet) => bet.match.adjustedDate == datePredictionValue)

    if (countFutureByDay) {
      setCountFutureBetsByDay(countFutureByDay.length);
    }

    if (count && countFuture) {
      setCountBets(count);
      setCountFutureBets(countFuture);
    }
  }, [datePredictionValue, predictions, listMatch, dateMatchValue]);

  const handleSetCountsBets = (total: number, future: number) => {
    setCountBets(total);
    setCountFutureBets(future);
  };

  return (
    <CountBetsContext.Provider
      value={{
        handleSetCountsBets,
        countBets,
        countFutureBets,
        countFutureBetsByDay,
      }}
    >
      {children}
    </CountBetsContext.Provider>
  );
};

export { CountBetsContext, CountBetsProvider };
