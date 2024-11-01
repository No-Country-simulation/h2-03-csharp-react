import { ReactNode } from "react";

export interface LeagueData {
  leagueId: number;
  name: string;
  logoUrl: string | null;
  country: {
    name: string | null;
    logoUrl: null;
  };
}

export interface GameData {
  date: string;
  time: string;
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
    };
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

export interface GameProviderProps {
  children: ReactNode;
}

export interface GameContextProps {
  leagues: LeagueData[] | undefined;
  games: GameData[] | undefined;
  game: GameData | undefined;
  setGameData: (game: GameData) => void;
  setGameDataByParam: (param: string) => void;
  dateValue: string | undefined;
  handleChangeDate: (event: React.SyntheticEvent, newValue: string) => void;
}
