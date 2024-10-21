import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import GameDetailHeader from "../components/layout/GameDetail/GameDetailHeader";
import GameDetailTabs from "../components/layout/GameDetail/GameDetailTabs";
import GameDetailPredictions from "../components/layout/GameDetail/GameDetailPredictions";
import { useGameContext } from "../hooks/useGameContext";

const MatchDetailPage = () => {
  const { partidoId } = useParams();

  const { game, setGameData } = useGameContext();
  if (partidoId) {
    setGameData(partidoId);
  }

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

export default MatchDetailPage;
