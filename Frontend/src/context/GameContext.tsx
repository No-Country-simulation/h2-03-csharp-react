import { ReactNode, createContext, useState } from "react";

export interface GameData {
  date: string;
  stageAPI: {
    name: string;
    isActive: boolean;
    leagueAPI: {
      leagueId: number;
      name: string;
      logoUrl: string | null;
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

interface GameProviderProps {
  children: ReactNode;
}

interface GameContextProps {
  game: GameData | undefined;
  setGameData: (game: GameData) => void;
}

const GameContext = createContext<GameContextProps>({
  game: undefined,
  setGameData: () => null,
});

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [game, setGame] = useState<GameData | undefined>();

  const setGameData = (game: GameData) => {
    setGame(game);
  };

  return (
    <GameContext.Provider value={{ game, setGameData }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
