import { ReactNode, createContext, useEffect, useState } from "react";
import { predictionsAll } from "../utils/predictions";
import { useGameContext } from "../hooks/useGameContext";

export interface Prediction {
  id: number;
  type: string;
  bet: string;
  result: string;
  points: number;
  game: number;
}

interface PredictionsProviderProps {
  children: ReactNode;
}

interface PredictionsContextProps {
  predictions: Prediction[] | [];
}

const PredictionsContext = createContext<PredictionsContextProps>({
  predictions: [],
});

const PredictionsProvider: React.FC<PredictionsProviderProps> = ({
  children,
}) => {
  const [predictions, setPredictions] = useState<Prediction[] | []>([]);
  const { game } = useGameContext();

  useEffect(() => {
    const predictionsData = predictionsAll.filter(
      (prediction) => prediction.game === Number(game?.entityPublicKey)
    );
    setPredictions(predictionsData);
  }, [game]);

  return (
    <PredictionsContext.Provider value={{ predictions }}>
      {children}
    </PredictionsContext.Provider>
  );
};

export { PredictionsContext, PredictionsProvider };
