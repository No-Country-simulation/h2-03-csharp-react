import { Stack, Typography } from "@mui/material";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { useMatchContext } from "../../../hooks/useMatchContext";

const PredictionResult = () => {
  const { match } = useMatchContext();
  const { currentWinner, setPredictionWinner } = usePredictionsContext();

  return match && (
      <Stack
        sx={{
          maxWidth: 300,
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          mb: 3,
          pt: 2,
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack
            onClick={() => setPredictionWinner("home")}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: 150,
              height: 120,
              borderRadius: 3,
              backgroundColor:
                currentWinner == "home" ? "secondary.main" : "white",
              color: currentWinner == "home" ? "white" : "black",
              cursor: "pointer",
            }}
          >
            <img
              src={match.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
              width={48}
              height={48}
            />
            <Typography noWrap fontWeight="bold" sx={{ maxWidth: 100 }}>
              {match.teamsAPI.homeAPI.teamAPI.name}
            </Typography>
            <Typography variant="caption">
              {Math.ceil(match.oddsAPI.home * 10)}
            </Typography>
          </Stack>
          <Stack
            onClick={() => setPredictionWinner("away")}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: 150,
              height: 120,
              borderRadius: 3,
              backgroundColor:
                currentWinner == "away" ? "secondary.main" : "white",
              color: currentWinner == "away" ? "white" : "black",
              cursor: "pointer",
            }}
          >
            <img
              src={match.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
              width={48}
              height={48}
            />
            <Typography noWrap fontWeight="bold" sx={{ maxWidth: 100 }}>
              {match.teamsAPI.awayAPI.teamAPI.name}
            </Typography>
            <Typography variant="caption">
              {Math.ceil(match.oddsAPI.away * 10)}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          onClick={() => setPredictionWinner("draw")}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: 55,
            borderRadius: 3,
            backgroundColor:
              currentWinner == "draw" ? "secondary.main" : "white",
            color: currentWinner == "draw" ? "white" : "black",
            cursor: "pointer",
            p: 2,
            alignSelf: "stretch",
          }}
        >
          <Typography fontWeight="bold">Empate</Typography>
          <Typography>{Math.ceil(match.oddsAPI.draw * 10)}</Typography>
        </Stack>
      </Stack>
    )
};

export default PredictionResult;
