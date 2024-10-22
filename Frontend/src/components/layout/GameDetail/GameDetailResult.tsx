import { Stack, Typography } from "@mui/material";
import { useGameContext } from "../../../hooks/useGameContext";

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
          <img src={game.local.shield} width={100} height={100} />
          <Typography variant="caption" align="center" color="secondary.light">
            {game.local.name}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6">{game.state}</Typography>
          <Typography variant="h3">{game.result}</Typography>
        </Stack>
        <Stack sx={{ gap: 1 }}>
          <img src={game.visit.shield} width={100} height={100} />
          <Typography variant="caption" align="center" color="secondary.light">
            {game.visit.name}
          </Typography>
        </Stack>
      </Stack>
    )
  );
};

export default GameDetailResult;
