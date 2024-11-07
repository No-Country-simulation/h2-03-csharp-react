import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import PredictionsDetailRecord from "./PredictionsDetailRecord";
import PredictionsDetailActive from "./PredictionsDetailActive";
import { useMatchContext } from "../../../hooks/useMatchContext";
import PredictionsGamesListModal from "../../modals/Predictions/PredictionsMatchesListModal";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import PredictionsByDayModal from "../../modals/Predictions/PredictionsByDayModal";
import PredictionsModal from "../../modals/Predictions/PredictionsModal";
import PredictionAddedModal from "../../modals/Predictions/PredictionAddedModal";
import ComingSoonModal from "../../modals/Predictions/ComingSoonModal";
import PredictionStopModal from "../../modals/Predictions/PredictionStopModal";
import { useDatesContext } from "../../../hooks/useDatesContext";
import PredictionLimitModal from "../../modals/Predictions/PredictionLimitModal";
import { useCountBetsContext } from "../../../hooks/useCountBetsContext";
import dates from "../../../utils/predictions-tab-dates";

const PredictionsDetail = () => {
  const [hasOpened, setHasOpened] = useState(false);
  const { handleOpenModals } = usePredictionsContext();

  const { match } = useMatchContext();
  const { datePredictionValue } = useDatesContext();
  const { countBets, countFutureBets, countFutureBetsByDay } =
    useCountBetsContext();

  useEffect(() => {
    const calcFutureBet = () => {
      const currentDate = new Date();
      const currentFormatedDate = dates.formatPredictionsDate(
        currentDate.toString()
      );
      if (
        countFutureBetsByDay == 2 &&
        datePredictionValue !== currentFormatedDate &&
        !hasOpened
      ) {
        handleOpenModals(6);
        setHasOpened(true);
      }
    };
    calcFutureBet();
    if (hasOpened) {
      const timer = setTimeout(() => {
        setHasOpened(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [
    countFutureBets,
    hasOpened,
    handleOpenModals,
    datePredictionValue,
    countFutureBetsByDay,
  ]);

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
        {datePredictionValue !== "Todos" && (
          <MainButton
            onClick={() => handleOpenModals(0)}
            disabled={countBets === 5 || countFutureBetsByDay === 2}
          >
            Hacer predicción
          </MainButton>
        )}
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
      {datePredictionValue === "Todos" && <PredictionsDetailRecord />}
      <PredictionsGamesListModal />
      <PredictionsByDayModal />
      {match && <PredictionsModal match={match} />}
      <PredictionAddedModal />
      <ComingSoonModal />
      <PredictionStopModal />
      <PredictionLimitModal />
    </Box>
  );
};

export default PredictionsDetail;
