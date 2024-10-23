import { ReactNode, createContext, useState } from "react";
import { games } from "../utils/games";

export interface GameData {
  id: number;
  league: string;
  score: number;
  result: string;
  schedule: string;
  state: string;
  local: { name: string; shield: string };
  visit: { name: string; shield: string };
  localRatio: number;
  drawRatio: number;
  visitRatio: number;
}

interface GameProviderProps {
  children: ReactNode;
}

interface GameContextProps {
  game: GameData | undefined;
  setGameData: (gameId: string) => void;
}

const GameContext = createContext<GameContextProps>({
  game: undefined,
  setGameData: () => null,
});

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [game, setGame] = useState<GameData | undefined>();

  const setGameData = (gameId: string) => {
    const gameData = games.find((game) => game.id === Number(gameId));
    setGame(gameData);
  };

  return (
    <GameContext.Provider value={{ game, setGameData }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
