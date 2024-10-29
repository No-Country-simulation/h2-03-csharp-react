import { Paper, Stack, Typography } from "@mui/material";
import { useGameContext } from "../../../hooks/useGameContext";

interface BadgeContentProps {
  label: string | undefined;
  number: number | undefined;
}

const BadgeContent: React.FC<BadgeContentProps> = ({ label, number }) => {
  return (
    <Stack sx={{ alignItems: "center", gap: 2 }}>
      <Typography noWrap variant="caption">
        {label}
      </Typography>
      <Paper
        elevation={0}
        sx={{ py: 0.5, px: 4, borderRadius: 2, border: "1px solid grey" }}
      >
        {number}
      </Paper>
    </Stack>
  );
};

const GameDetailFinalResult = () => {
  const { game } = useGameContext();

  return (
    <Paper elevation={4}>
      <Typography
        variant="body2"
        sx={{ height: 32, backgroundColor: "white", py: 1, px: 2 }}
      >
        Resultado final
      </Typography>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "secondary.light",
          justifyContent: "space-around",
          height: 100,
          gap: 1,
          p: 2,
        }}
      >
        <BadgeContent
          label={game?.teamsAPI.homeAPI.teamAPI.name}
          number={game?.oddsAPI.home}
        />
        <BadgeContent label="Empate" number={game?.oddsAPI.draw} />
        <BadgeContent
          label={game?.teamsAPI.awayAPI.teamAPI.name}
          number={game?.oddsAPI.away}
        />
      </Stack>
    </Paper>
  );
};

export default GameDetailFinalResult;
