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
  betList: ListMatch[];
  entityPublicKey: string;
}

export interface ListMatch {
  listMatch: Match[];
  ratioOfPredictionCombined: number;
  pointsPredictionCombined: number;
  checkforWin: boolean;
  win: string;
}

export interface Match {
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

export interface PredictionsProviderProps {
  children: ReactNode;
}

export interface PredictionsContextProps {
  predictions: Prediction[] | null | undefined;
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
  handleOpenModals: (value: number) => void;
  handleCloseModals: () => void;
}
