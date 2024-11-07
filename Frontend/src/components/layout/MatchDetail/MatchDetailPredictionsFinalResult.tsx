import { Paper, Stack, Typography } from "@mui/material";
import { useMatchContext } from "../../../hooks/useMatchContext";

interface BadgeContentProps {
  label: string | undefined;
  number: number | undefined;
}

const BadgeContent: React.FC<BadgeContentProps> = ({ label, number }) => {
  return (
    <Stack sx={{ alignItems: "center", gap: 2 }}>
      <Typography noWrap variant="caption" sx={{maxWidth: 100}}>
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

const MatchDetailFinalResult = () => {
  const { match } = useMatchContext();

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
          label={match?.teamsAPI.homeAPI.teamAPI.name}
          number={match?.oddsAPI.home}
        />
        <BadgeContent label="Empate" number={match?.oddsAPI.draw} />
        <BadgeContent
          label={match?.teamsAPI.awayAPI.teamAPI.name}
          number={match?.oddsAPI.away}
        />
      </Stack>
    </Paper>
  );
};

export default MatchDetailFinalResult;
