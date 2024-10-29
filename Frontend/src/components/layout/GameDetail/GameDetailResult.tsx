import { Stack, Typography } from "@mui/material";
import { useGameContext } from "../../../hooks/useGameContext";
import dates from "../../../utils/predictions-tab-dates";

const GameDetailResult = () => {
  const { game } = useGameContext();

  return (
    game && (
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 3,
          pt: 3,
        }}
      >
        <Stack sx={{ gap: 1 }}>
          <img
            src={game.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
            width={100}
            height={100}
          />
          <Typography variant="caption" align="center" color="secondary.light">
            {game.teamsAPI.homeAPI.teamAPI.name}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" align="center">{dates.dateFormat(game.date)}</Typography>
          <Typography variant="h3">{game.time}</Typography>
        </Stack>
        <Stack sx={{ gap: 1 }}>
          <img
            src={game.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
            width={100}
            height={100}
          />
          <Typography variant="caption" align="center" color="secondary.light">
            {game.teamsAPI.awayAPI.teamAPI.name}
          </Typography>
        </Stack>
      </Stack>
    )
  );
};

export default GameDetailResult;
