import { ReactNode, createContext, useEffect, useState } from "react";
import { useGameContext } from "../hooks/useGameContext";
import { createBet } from "../services/predictions";
import bet from "../services/predictions";

interface prediction {
  dateFirstBetOfDay: string;
  countBets: number;
  betList: [
    {
      listMatch: [
        {
          match: {
            date: string;
            time: string;
            stageAPI: {
              name: string;
              isActive: boolean;
              leagueAPI: string | null;
            };
            teamsAPI: {
              homeAPI: {
                teamAPI: {
                  name: string;
                  logoUrl: string;
                };
              };
              awayAPI: {
                teamAPI: {
                  name: string;
                  logoUrl: string;
                };
              };
            };
            winner: string;
            oddsAPI: {
              home: number;
              draw: number;
              away: number;
            };
            homeFtGoals: number;
            awayFtGoals: number;
            entityPublicKey: string;
          };
          matchPublicKey: string;
          winnerPrediction: string;
          winPrediction: null;
          ratioOfPrediction: number;
          entityPublicKey: string;
          pointsPrediction: number;
        }
      ];
      ratioOfPredictionCombined: number;
      pointsPredictionCombined: number;
      checkforWin: boolean;
      win: string;
    }
  ];
  entityPublicKey: string;
}

interface PredictionsProviderProps {
  children: ReactNode;
}

interface PredictionsContextProps {
  predictions: prediction[] | null | undefined;
  setPredictionDataByParam: (param: string) => void;
  prediction: prediction | null;
  bets: createBet | null | undefined;
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
  prediction: null,
  setPredictionDataByParam: () => null,
  bets: null,
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
  const [predictions, setPredictions] = useState<
    prediction[] | null | undefined
  >(null);
  const [prediction, setPrediction] = useState<prediction | null>(null);
  const [bets, setBets] = useState<createBet | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [predictionType, setPredictionType] = useState<string | null>(null);
  const [openModals, setOpenModals] = useState<number | boolean>(false);

  const { game } = useGameContext();

  useEffect(() => {
    bet.getAllMyPredictionsOfDay().then((res) => setPredictions(res?.data));
  }, []);

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
