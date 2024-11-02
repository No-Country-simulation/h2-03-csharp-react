import { createContext, useEffect, useState } from "react";
import matches from "../services/matches";
import dates from "../utils/predictions-tab-dates";
import {
  MatchContextProps,
  MatchForPredictionsData,
  MatchProviderProps,
  LeagueData,
} from "../types/MatchesTypes";
import { useUserContext } from "../hooks/UserContext";

const MatchContext = createContext<MatchContextProps | null>(null);

const MatchProvider: React.FC<MatchProviderProps> = ({ children }) => {
  const dateValues = dates.generateDates();

  const [leagues, setLeagues] = useState<LeagueData[]>([]);
  const [matchesForPredictions, setMatchesForPredictions] = useState<
    MatchForPredictionsData[]
  >([]);
  const [match, setMatch] = useState<MatchForPredictionsData | undefined>();
  const [dateValue, setDateValues] = useState<string>(dateValues[0]);

  const { state } = useUserContext();

  useEffect(() => {
    if (state.token) {
      matches.getLeagues().then((res) => setLeagues(res?.data));
      matches
        .getMatchesForPredictions()
        .then((res) => setMatchesForPredictions(res?.data.items));
    }
  }, [state]);

  const setMatchData = (game: MatchForPredictionsData) => {
    setMatch(game);
  };

  const setMatchDataByParam = (param: string) => {
    const matchData = matchesForPredictions.find(
      (match) => match.entityPublicKey === param
    );
    setMatch(matchData);
  };

  const handleChangeDate = (event: React.SyntheticEvent, newValue: string) => {
    setDateValues(newValue);
    event.preventDefault();
  };

  return (
    <MatchContext.Provider
      value={{
        leagues,
        matchesForPredictions,
        match,
        setMatchData,
        setMatchDataByParam,
        dateValue,
        handleChangeDate,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchProvider };
