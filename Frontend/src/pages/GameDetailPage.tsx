import { Stack } from "@mui/material";
import GameDetailHeader from "../components/layout/GameDetail/GameDetailHeader";
import GameDetailTabs from "../components/layout/GameDetail/GameDetailTabs";
import GameDetailPredictions from "../components/layout/GameDetail/GameDetailPredictions";
import { useGameContext } from "../hooks/useGameContext";

const GameDetailPage = () => {

  const { game } = useGameContext();

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
