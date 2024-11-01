import { ReactNode } from "react";

export interface matchBet {
  matchPublicKey: string;
  winnerPrediction: string;
}

export interface createBetList {
  listMatch: matchBet[];
}

export interface prediction {
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

export interface PredictionsProviderProps {
  children: ReactNode;
}

export interface PredictionsContextProps {
  predictions: prediction[] | null | undefined;
  setPredictionDataByParam: (param: string) => void;
  prediction: prediction | null;
  bets: createBetList | null | undefined;
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
