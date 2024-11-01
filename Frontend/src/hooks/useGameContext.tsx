import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameContextProps } from "../types/GamesTypes";

export const useGameContext = () => {
  return useContext(GameContext) as GameContextProps;
};
