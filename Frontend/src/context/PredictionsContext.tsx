import { createContext, useEffect, useState } from "react";
import { useGameContext } from "../hooks/useGameContext";
import {
  createBetList,
  prediction,
  PredictionsContextProps,
  PredictionsProviderProps,
} from "../types/PredictionsTypes";
import bet from "../services/predictions";
import { useUserContext } from "../hooks/UserContext";

const PredictionsContext = createContext<PredictionsContextProps | null>(null);

const PredictionsProvider: React.FC<PredictionsProviderProps> = ({
  children,
}) => {
  const [predictions, setPredictions] = useState<
    prediction[] | null | undefined
  >(null);
  const [prediction, setPrediction] = useState<prediction | null>(null);
  const [bets, setBets] = useState<createBetList | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [predictionType, setPredictionType] = useState<string | null>(null);
  const [openModals, setOpenModals] = useState<number | boolean>(false);

  const { game } = useGameContext();
  const { state } = useUserContext();

  useEffect(() => {
    if (state.token) {
      bet.getAllMyPredictionsOfDay().then((res) => setPredictions(res?.data));
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

  const handleCreateBet = async () => {
    if (game && winner) {
      const matchBet = {
        matchPublicKey: game?.entityPublicKey,
        winnerPrediction: winner,
      };
      setBets({
        listMatch: [matchBet],
      });
    }
    if (bets) {
      bet.createBet(bets).then((res) => {
        if (res?.status == 200) setOpenModals(3);
      });
    }
  };

  const setPredictionWinner = (winner: string) => {
    setWinner(winner);
  };

  const handlePredictionReset = () => {
    setWinner(null);
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

  return (
    <PredictionsContext.Provider
      value={{
        predictions,
        setPredictionDataByParam,
        prediction,
        bets,
        winner,
        handleCreateBet,
        setPredictionWinner,
        handlePredictionReset,
        predictionType,
        handlePredictionType,
        openModals,
        handleOpenModals,
        handleCloseModals,
      }}
    >
      {children}
    </PredictionsContext.Provider>
  );
};

export { PredictionsContext, PredictionsProvider };
