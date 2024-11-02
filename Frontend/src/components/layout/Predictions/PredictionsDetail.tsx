import { Box, Paper, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
//import PredictionsDetailRecord from "./PredictionsDetailRecord";
import PredictionsDetailActive from "./PredictionsDetailActive";
import { useMatchContext } from "../../../hooks/useMatchContext";
import PredictionsGamesListModal from "../../modals/Predictions/PredictionsMatchesListModal";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import PredictionsByDayModal from "../../modals/Predictions/PredictionsByDayModal";
import PredictionsModal from "../../modals/Predictions/PredictionsModal";
import PredictionAddedModal from "../../modals/Predictions/PredictionAddedModal";
import ComingSoonModal from "../../modals/Predictions/ComingSoonModal";
import PredictionStopModal from "../../modals/Predictions/PredictionStopModal";

const PredictionsDetail = () => {
  const { handleOpenModals } = usePredictionsContext();

  const { match } = useMatchContext();

  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        borderRadius: 3,
        mt: -2,
        p: 2,
        mb: 15,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6" sx={{ color: "primary" }}>
          Activas
        </Typography>
        <MainButton onClick={() => handleOpenModals(0)}>
          Hacer predicción
        </MainButton>
      </Box>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1,
          px: "5%",
          color: "#8D8D8D",
          borderRadius: 3,
        }}
      >
        <Typography>Predicción</Typography>
        <Typography>Partido</Typography>
        <Typography>Puntos</Typography>
      </Paper>
      <PredictionsDetailActive />
      {/*dateValue === "Todos" && <PredictionsDetailRecord />*/}
      <PredictionsGamesListModal />
      <PredictionsByDayModal />
      {match && <PredictionsModal match={match} />}
      <PredictionAddedModal />
      <ComingSoonModal />
      <PredictionStopModal />
    </Box>
  );
};

export default PredictionsDetail;
