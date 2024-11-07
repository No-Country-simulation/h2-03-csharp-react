import { ReactNode } from "react";

export interface MatchBet {
  matchPublicKey: string;
  winnerPrediction: string;
}

export interface CreateBetList {
  listMatch: MatchBet[];
}

export interface Prediction {
  dateFirstBetOfDay: string;
  countBets: number;
  countFutureBets: number;
  betList: ListMatch[];
  entityPublicKey: string;
}

export interface ListMatch {
  listMatch: PredictionMatch[];
  ratioOfPredictionCombined: number;
  pointsPredictionCombined: number;
  checkforWin: boolean;
  win: string;
}

export interface PredictionMatch {
  match: {
    date: string;
    time: string;
    adjustedDate?: string;
    adjustedTime?: string;
    stageAPI: {
      name: string;
      isActive: boolean;
      leagueAPI: {
        leagueId: number;
        name: string;
        logoUrl: string | null;
        country: {
          name: string;
          logoUrl: null;
        };
      } | null;
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

export interface PredictionsProviderProps {
  children: ReactNode;
}

export interface PredictionsContextProps {
  predictions: Prediction[] | null | undefined;
  betList: ListMatch[] | null;
  listMatch: PredictionMatch[] | null;
  setPredictionDataByParam: (param: string) => void;
  prediction: Prediction | null;
  bets: CreateBetList | null | undefined;
  winner: string | null;
  handleCreateBet: () => void;
  setPredictionWinner: (winner: string) => void;
  handlePredictionReset: () => void;
  predictionType: string | null;
  handlePredictionType: (type: string) => void;
  openModals: number | boolean;
  isLoading: boolean;
  handleOpenModals: (value: number) => void;
  handleCloseModals: () => void;
}
