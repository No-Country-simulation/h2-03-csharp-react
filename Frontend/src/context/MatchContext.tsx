import { createContext, useEffect, useState } from "react";
import matches from "../services/matches";
import {
  MatchContextProps,
  MatchForPredictionsData,
  MatchProviderProps,
  LeagueData,
} from "../types/MatchesTypes";
import { useUserContext } from "../hooks/UserContext";
import { useDatesContext } from "../hooks/useDatesContext";
import { convertUtcToLocalDateTime } from "../utils/local-time";
import { PredictionMatch } from "../types/PredictionsTypes";

const MatchContext = createContext<MatchContextProps | null>(null);

const MatchProvider: React.FC<MatchProviderProps> = ({ children }) => {
  const [leagues, setLeagues] = useState<LeagueData[]>([]);
  const [matchesForPredictions, setMatchesForPredictions] = useState<
    MatchForPredictionsData[]
  >([]);
  const [match, setMatch] = useState<MatchForPredictionsData | undefined>();

  const { state } = useUserContext();
  const { datesMatchesForPredictionsValues, datesMatchesResultsValues } =
    useDatesContext();

  useEffect(() => {
    const matchesData = async () => {
      try {
        const matchesPromise: Promise<MatchForPredictionsData[]>[] =
          datesMatchesForPredictionsValues.map((date) =>
            matches
              .getMatchesForPredictions(date)
              .then((res) => {
                if (res?.status == 404) {
                  console.warn(`Datos no encontrados para ${date}`);
                  return [];
                } else if (!res?.data) {
                  console.warn(`Error en la repuesta para ${date}`);
                  return [];
                }
                return res.data.items as Promise<MatchForPredictionsData[]>;
              })
              .catch(() => {
                return [];
              })
          );

        const matchesResultsPromise: Promise<MatchForPredictionsData[]>[] =
          datesMatchesResultsValues.map((date) =>
            matches
              .getMatchesResults(date)
              .then((res) => {
                if (res?.status == 404) {
                  console.warn(`Datos no encontrados para ${date}`);
                  return [];
                } else if (!res?.data) {
                  console.warn(`Error en la repuesta para ${date}`);
                  return [];
                }
                return res.data.items as Promise<MatchForPredictionsData[]>;
              })
              .catch(() => {
                return [];
              })
          );

        const [firstResult, seconsdResult] = await Promise.all([
          Promise.all(matchesPromise),
          Promise.all(matchesResultsPromise),
        ]);
        const combinedResults = [
          ...firstResult.flat(),
          ...seconsdResult.flat(),
        ];
        setMatchesForPredictions(
          combinedResults.map((match: MatchForPredictionsData) => {
            const { adjustedDate, adjustedTime } = convertUtcToLocalDateTime(
              match.date,
              match.time
            );
            return {
              ...match,
              adjustedDate,
              adjustedTime,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };

    if (state.token) {
      matches.getLeagues().then((res) => setLeagues(res?.data));
      matchesData();
    }
  }, [state, datesMatchesForPredictionsValues, datesMatchesResultsValues]);

  const setMatchData = (game: MatchForPredictionsData) => {
    setMatch(game);
  };

  const setMatchDataByParam = (
    param: string,
    predictions?: PredictionMatch[]
  ) => {
    const matchData = matchesForPredictions.find(
      (match) => match.entityPublicKey === param
    );
    const alterMatchData = predictions?.find(
      (match) => match.match.entityPublicKey === param
    );
    if (matchData) {
      setMatch(matchData);
    } else if (alterMatchData) {
      setMatch(alterMatchData.match);
    }
  };

  return (
    <MatchContext.Provider
      value={{
        leagues,
        matchesForPredictions,
        match,
        setMatchData,
        setMatchDataByParam,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchProvider };
