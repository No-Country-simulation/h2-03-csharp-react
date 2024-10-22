import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import GameDetailHeader from "../components/layout/GameDetail/GameDetailHeader";
import GameDetailTabs from "../components/layout/GameDetail/GameDetailTabs";
import GameDetailPredictions from "../components/layout/GameDetail/GameDetailPredictions";
import { useGameContext } from "../hooks/useGameContext";
import { useEffect } from "react";

const GameDetailPage = () => {
  const { partidoId } = useParams();

  const { game, setGameData } = useGameContext();

  useEffect(() => {
    if (partidoId) {
      setGameData(partidoId);
    }
  }, [partidoId, setGameData]);

  return (
    game && (
      <Stack>
        <GameDetailHeader />
        <GameDetailTabs />
        <GameDetailPredictions />
      </Stack>
    )
  );
};

export default GameDetailPage;
