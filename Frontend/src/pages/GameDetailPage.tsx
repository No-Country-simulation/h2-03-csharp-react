import { useEffect } from "react";
import { Stack } from "@mui/material";
import GameDetailHeader from "../components/layout/GameDetail/GameDetailHeader";
import GameDetailTabs from "../components/layout/GameDetail/GameDetailTabs";
import GameDetailPredictions from "../components/layout/GameDetail/GameDetailPredictions";
import { useGameContext } from "../hooks/useGameContext";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { game, setGameDataByParam } = useGameContext();

  const { partidoId } = useParams();

  useEffect(() => {
    if (partidoId) {
      setGameDataByParam(partidoId);
    }
  }, [setGameDataByParam, partidoId]);

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
