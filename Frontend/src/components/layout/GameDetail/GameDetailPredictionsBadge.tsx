import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
//import { MdOutlineCancel } from "react-icons/md";
//import { FaCheck } from "react-icons/fa6";
import { useGameContext } from "../../../hooks/useGameContext";
import PredictionsCardStatus from "../Predictions/PredictionsCardStatus";

const GameDetailPredictionsBadge = () => {
  const { prediction } = usePredictionsContext();
  const { game } = useGameContext();

  const matchData = prediction?.betList
    .flatMap((bet) => bet.listMatch)
    .find((match) => match.matchPublicKey === game?.entityPublicKey);

  return (
    matchData && (
      <Paper
        key={matchData.entityPublicKey}
        elevation={5}
        sx={{ maxHeight: 100, mb: 1, px: 2, borderRadius: 2 }}
      >
        <Stack direction="row" sx={{ height: 68 }}>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack>
              <Typography variant="caption">
                {"Resultado final:"}
                {/*prediction.type == "gol" && "Gol:"*/}
              </Typography>
              <Typography variant="h6">
                {matchData.winnerPrediction === "home" &&
                  matchData.match.teamsAPI.homeAPI.teamAPI.name}
                {matchData.winnerPrediction === "draw" && "Empate"}
                {matchData.winnerPrediction === "away" &&
                  matchData.match.teamsAPI.awayAPI.teamAPI.name}
              </Typography>
            </Stack>
            <Typography
              variant="subtitle1"
              sx={{
                color: "primary.main",
                ...(matchData.winPrediction == "Win" && {
                  color: "secondary.main",
                }),
                ...(matchData.winPrediction == "Lose" && {
                  textDecoration: "line-through",
                  color: "primary.dark",
                }),
                ...(matchData.winPrediction == null && {
                  color: "primary.main",
                }),
              }}
            >
              {matchData.pointsPrediction} puntos
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Box sx={{ height: 32 }}>
          <PredictionsCardStatus
            status={matchData.winPrediction}
            points={matchData.pointsPrediction}
          />
        </Box>
      </Paper>
    )
  );
};

export default GameDetailPredictionsBadge;
