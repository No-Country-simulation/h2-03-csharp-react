import { ReactNode } from "react";
import { PredictionMatch } from "./PredictionsTypes";

export interface LeagueData {
  leagueId: number;
  name: string;
  logoUrl: string | null;
  country: {
    name: string | null;
    logoUrl: null;
  };
}

export interface MatchForPredictionsData {
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
        logoUrl: string | null;
      };
    };
    awayAPI: {
      teamAPI: {
        name: string;
        logoUrl: string | null;
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
}

export interface MatchProviderProps {
  children: ReactNode;
}

export interface MatchContextProps {
  leagues: LeagueData[] | undefined;
  matchesForPredictions: MatchForPredictionsData[] | undefined;
  match: MatchForPredictionsData | undefined;
  setMatchData: (match: MatchForPredictionsData) => void;
  setMatchDataByParam: (param: string, prediction?: PredictionMatch[]) => void;
}
