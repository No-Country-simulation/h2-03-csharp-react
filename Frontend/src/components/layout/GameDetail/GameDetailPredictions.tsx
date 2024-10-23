import { Paper, Stack, Typography } from "@mui/material";
import PredictionsSeeAllButton from "../../buttons/PredictionsSeeAllButton";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import GameDetailFinalResult from "./GameDetailPredictionsFinalResult";
import GameDetailPredictionsBadge from "./GameDetailPredictionsBadge";

const GameDetailPredictions = () => {
  const { predictions } = usePredictionsContext();

  return (
    <Stack sx={{ backgroundColor: "primary.light", mb: 50, pt: 4, px: 3 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
      >
        <Typography fontWeight="bold">Tus predicciones</Typography>
        <PredictionsSeeAllButton />
      </Stack>
      {!predictions ||
        (predictions.length == 0 && (
          <Paper elevation={4} sx={{ p: 2 }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack>
                <Typography variant="body2" fontWeight="bold">
                  No hiciste predicciones
                </Typography>
                <Typography variant="caption">Suerte la próxima</Typography>
              </Stack>
              <Typography variant="h6" sx={{ color: "secondary.main" }}>
                0 puntos
              </Typography>
            </Stack>
          </Paper>
        ))}
      {predictions && <GameDetailPredictionsBadge />}
      <Typography fontWeight="bold" sx={{ my: 3 }}>
        Pronóstico general
      </Typography>
      <GameDetailFinalResult />
    </Stack>
  );
};

export default GameDetailPredictions;
