import { createContext, useEffect, useState } from "react";
import { useMatchContext } from "../hooks/useMatchContext";
import {
  CreateBetList,
  Prediction,
  ListMatch,
  PredictionsContextProps,
  PredictionsProviderProps,
  PredictionMatch,
} from "../types/PredictionsTypes";
import bet from "../services/predictions";
import { useUserContext } from "../hooks/UserContext";
import { convertUtcToLocalDateTime } from "../utils/local-time";

const PredictionsContext = createContext<PredictionsContextProps | null>(null);

const PredictionsProvider: React.FC<PredictionsProviderProps> = ({
  children,
}) => {
  const [predictions, setPredictions] = useState<
    Prediction[] | null | undefined
  >(null);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [betList, setBetList] = useState<ListMatch[] | null>(null);
  const [listMatch, setListMatch] = useState<PredictionMatch[] | null>(null);

  const [bets, setBets] = useState<CreateBetList | null>(null);

  const [currentWinner, setCurrentWinner] = useState<string | null>(null);
  const [winners, setWinners] = useState<string[]>([]);
  const [predictionType, setPredictionType] = useState<string | null>(null);
  const [openModals, setOpenModals] = useState<number | boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const { match, matchesForCombined } = useMatchContext();
  const { state } = useUserContext();

  useEffect(() => {
    if (state.token) {
      bet.getAllMyPredictionsOfDay().then((res) => {
        const predictions = res?.data as Prediction[];
        setPredictions(predictions);
        const betList = predictions.flatMap((betOfDay) => betOfDay.betList);
        const listMatch = betList.flatMap((bet) => bet.listMatch);
        const adjustedListMatch = listMatch.map((bet: PredictionMatch) => {
          const { adjustedDate, adjustedTime } = convertUtcToLocalDateTime(
            bet.match.date,
            bet.match.time
          );
          return {
            match: {
              ...bet.match,
              adjustedDate,
              adjustedTime,
            },
            matchPublicKey: bet.matchPublicKey,
            winnerPrediction: bet.winnerPrediction,
            winPrediction: bet.winPrediction,
            ratioOfPrediction: bet.ratioOfPrediction,
            entityPublicKey: bet.entityPublicKey,
            pointsPrediction: bet.pointsPrediction,
          };
        });

        setBetList(betList);
        setListMatch(adjustedListMatch);
      });
    }
  }, [state]);

  const setPredictionDataByParam = (param: string) => {
    const predictionData = predictions?.find((bet) =>
      bet.betList.find((bet) =>
        bet.listMatch.find((match) => match.matchPublicKey === param)
      )
    );
    if (predictionData) {
      setPrediction(predictionData);
    } else {
      setPrediction(null);
    }
  };

  const handleOpenModals = (value: number) => {
    setOpenModals(value);
  };

  const handleCloseModals = () => {
    handlePredictionReset();
    setOpenModals(false);
  };

  const handlePredictionType = (type: string) => {
    setPredictionType(type);
  };

  const setPredictionWinner = (winner: string) => {
    setCurrentWinner(winner);

    if (match && matchesForCombined.length == 0) {
      setBets({
        listMatch: [
          {
            matchPublicKey: match.entityPublicKey,
            winnerPrediction: winner,
          },
        ],
      });
    } else if (match && matchesForCombined.length > 0) {
      const matches = matchesForCombined.map((match, index) => ({
        matchPublicKey: match.entityPublicKey,
        winnerPrediction: winners[index],
      }));
      matches.push({
        matchPublicKey: match.entityPublicKey,
        winnerPrediction: winner,
      });
      setBets({
        listMatch: matches,
      });
    }
  };

  const handlePredictionReset = () => {
    setCurrentWinner(null);
  };

  const addWinner = () => {
    if (currentWinner) {
      setWinners((prevWinners) => [...prevWinners, currentWinner]);
      handlePredictionReset();
    }
  };

  const handleCombinedReset = () => {
    setWinners([]);
  };

  const handleCreateBet = () => {
    if (bets) {
      setIsLoading(true);
      bet
        .createBet(bets)
        .then((res) => {
          if (res?.status == 200) setOpenModals(3);
        })
        .catch(() => setIsLoading(false))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <PredictionsContext.Provider
      value={{
        predictions,
        betList,
        listMatch,
        setPredictionDataByParam,
        prediction,
        bets,
        currentWinner,
        winners,
        handleCreateBet,
        setPredictionWinner,
        addWinner,
        handleCombinedReset,
        handlePredictionReset,
        predictionType,
        handlePredictionType,
        openModals,
        isLoading,
        handleOpenModals,
        handleCloseModals,
      }}
    >
      {children}
    </PredictionsContext.Provider>
  );
};

export { PredictionsContext, PredictionsProvider };
