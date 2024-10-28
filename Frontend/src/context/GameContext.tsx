import { ReactNode, createContext, useEffect, useState } from "react";
import predictions from "../services/games";
import dates from "../utils/predictions-tab-dates";

interface LeagueData {
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

interface GameProviderProps {
  children: ReactNode;
}

interface GameContextProps {
  leagues: LeagueData[] | undefined;
  games: GameData[] | undefined;
  game: GameData | undefined;
  setGameData: (game: GameData) => void;
  setGameDataByParam: (param: string) => void;
  dateValue: string | undefined;
  handleChangeDate: (event: React.SyntheticEvent, newValue: string) => void;
}

const GameContext = createContext<GameContextProps>({
  leagues: undefined,
  games: undefined,
  game: undefined,
  setGameData: () => null,
  setGameDataByParam: () => null,
  dateValue: undefined,
  handleChangeDate: () => null,
});

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const dateValues = dates.generateDates();

  const [leagues, setLeagues] = useState<LeagueData[]>([]);
  const [games, setGames] = useState<GameData[]>([]);
  const [game, setGame] = useState<GameData | undefined>();
  const [dateValue, setDateValues] = useState<string>(dateValues[0]);

  useEffect(() => {
    predictions.getLeagues().then((res) => setLeagues(res?.data));
    predictions.getGames().then((res) => setGames(res.data.items));
  }, []);

  const setGameData = (game: GameData) => {
    setGame(game);
  };

  const setGameDataByParam = (param: string) => {
    const gameData = games.find((game) => game.entityPublicKey === param);
    setGame(gameData);
  };

  const handleChangeDate = (event: React.SyntheticEvent, newValue: string) => {
    setDateValues(newValue);
    event.preventDefault();
  };

  return (
    <GameContext.Provider
      value={{
        leagues,
        games,
        game,
        setGameData,
        setGameDataByParam,
        dateValue,
        handleChangeDate,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
