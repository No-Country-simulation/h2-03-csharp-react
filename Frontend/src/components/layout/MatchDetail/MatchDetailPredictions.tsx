import { Paper, Stack, Typography } from "@mui/material";
import PredictionsSeeAllButton from "../../buttons/PredictionsSeeAllButton";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import MatchDetailFinalResult from "./MatchDetailPredictionsFinalResult";
import MatchDetailPredictionsBadge from "./MatchDetailPredictionsBadge";
import MainButton from "../../buttons/MainButton";
import PredictionsByDayModal from "../../modals/Predictions/PredictionsByDayModal";
import PredictionsModal from "../../modals/Predictions/PredictionsModal";
import { useMatchContext } from "../../../hooks/useMatchContext";
import PredictionAddedModal from "../../modals/Predictions/PredictionAddedModal";
import ComingSoonModal from "../../modals/Predictions/ComingSoonModal";

const MatchDetailPredictions = () => {
  const { prediction, handleOpenModals } = usePredictionsContext();

  const { match } = useMatchContext();

  return (
    <Stack sx={{ backgroundColor: "primary.light", mb: 50, pt: 4, px: 3 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
      >
        <Typography fontWeight="bold">Tus predicciones</Typography>
        <PredictionsSeeAllButton />
      </Stack>
      {!prediction && (
        <>
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
          <Stack sx={{ justifyContent: "center", alignItems: "center", mt: 3 }}>
            <MainButton onClick={() => handleOpenModals(1)}>
              Hacer predicción
            </MainButton>
          </Stack>
        </>
      )}
      {prediction && <MatchDetailPredictionsBadge />}
      <Typography fontWeight="bold" sx={{ my: 3 }}>
        Pronóstico general
      </Typography>
      <MatchDetailFinalResult />
      <PredictionsByDayModal />
      {match && <PredictionsModal match={match} />}
      <PredictionAddedModal />
      <ComingSoonModal />
    </Stack>
  );
};

export default MatchDetailPredictions;
