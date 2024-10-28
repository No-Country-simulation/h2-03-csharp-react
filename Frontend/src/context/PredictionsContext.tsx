import { ReactNode, createContext, useState } from "react";
import { useGameContext } from "../hooks/useGameContext";
import { createBet } from "../services/predictions";

interface PredictionsProviderProps {
  children: ReactNode;
}

interface PredictionsContextProps {
  predictions: createBet | null | undefined;
  winner: string | null;
  handleCreateBet: () => void;
  setPredictionWinner: (winner: string) => void;
  handlePredictionReset: () => void;
  predictionType: string | null;
  handlePredictionType: (type: string) => void;
  openModals: number | boolean;
  handleOpenModals: (value: number) => void;
  handleCloseModals: () => void;
}

const PredictionsContext = createContext<PredictionsContextProps>({
  predictions: null,
  winner: null,
  handleCreateBet: () => null,
  setPredictionWinner: () => null,
  handlePredictionReset: () => null,
  predictionType: null,
  handlePredictionType: () => null,
  openModals: false,
  handleOpenModals: () => null,
  handleCloseModals: () => null,
});

const PredictionsProvider: React.FC<PredictionsProviderProps> = ({
  children,
}) => {
  const [predictions, setPredictions] = useState<createBet | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [predictionType, setPredictionType] = useState<string | null>(null);
  const [openModals, setOpenModals] = useState<number | boolean>(false);

  const { game } = useGameContext();

  const handleCreateBet = () => {
    if (game && winner) {
      const matchBet = {
        matchPublicKey: game?.entityPublicKey,
        winnerPrediction: winner,
      };
      setPredictions({
        listMatch: [matchBet],
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
