import { Stack } from "@mui/material";
import GamesGameBadge from "./GamesGameBadge";
import GamesGameBadgeContainer from "./GamesGameBadgeContainer";

const GamesDetailTrending = () => {
  return (
    <Stack>
      {games &&
        games
          .sort((a, b) => b.score - a.score)
          .map((game, index) => (
            <GamesGameBadgeContainer key={index} league={game.league}>
              <GamesGameBadge gameData={game} />
            </GamesGameBadgeContainer>
          ))}
    </Stack>
  );
};

export default GamesDetailTrending;
