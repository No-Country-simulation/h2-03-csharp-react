import { Stack, Typography } from "@mui/material";

interface MatchData {
  league: string;
  score: number;
  result: string;
  date: string;
  state: string;
  team1: { name: string; shield: string };
  team2: { name: string; shield: string };
  rates: { team1: number; draw: number; team2: number };
}

interface MatchesMatchBadgeProps {
  matchData: MatchData;
}

const MatchesMatchBadge: React.FC<MatchesMatchBadgeProps> = ({ matchData }) => {
  //const date = new Date().toLocaleTimeString();

  return (
    <Stack
      sx={{
        height: 150,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "center",
          gap: 5,
          alignItems: "flex-end",
        }}
      >
        <img src={matchData.team1.shield} width={55} height={55} />
        <Typography variant="h6" fontWeight="bold">
          {matchData.result}
        </Typography>
        <img src={matchData.team2.shield} width={55} height={55} />
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "center",
          gap: 5,
          alignItems: "flex-end",
          mt: 1,
        }}
      >
        <Typography variant="caption">{matchData.team1.name}</Typography>
        <Typography variant="caption">49:00</Typography>
        <Typography variant="caption">{matchData.team2.name}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "center",
          gap: 2,
          alignItems: "flex-end",
          mt: 1,
        }}
      >
        <Stack
          sx={{
            bgcolor: "white",
            width: 70,
            height: 25,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            border: "1px solid grey"
          }}
        >
          <Typography variant="caption">{matchData.rates.team1}</Typography>
        </Stack>
        <Stack
          sx={{
            bgcolor: "white",
            width: 70,
            height: 25,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            border: "1px solid grey"
          }}
        >
          <Typography variant="caption">{matchData.rates.draw}</Typography>
        </Stack>
        <Stack
          sx={{
            bgcolor: "white",
            width: 70,
            height: 25,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            border: "1px solid grey"
          }}
        >
          <Typography variant="caption">{matchData.rates.team2}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MatchesMatchBadge;
