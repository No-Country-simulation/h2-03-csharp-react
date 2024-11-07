import { Box, Typography } from "@mui/material";
import PredictionsCard from "./PredictionsCard";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { useDatesContext } from "../../../hooks/useDatesContext";

const PredictionsDetailActive = () => {
  const { listMatch } = usePredictionsContext();
  const { datePredictionValue } = useDatesContext();

  const betsOfDay = listMatch?.filter(
    (betList) => betList.match.adjustedDate == datePredictionValue
  );

  return (
    <Box>
      {datePredictionValue != "Todos" && betsOfDay?.length == 0 && (
        <Typography align="center" p={3}>
          No hay predicciones activas
        </Typography>
      )}
      {datePredictionValue == "Todos" &&
        listMatch &&
        listMatch
          .filter((bet) => bet.match.winner == "tbd")
          .map((bet, index) => <PredictionsCard key={index} bet={bet} />)}
      {betsOfDay &&
        betsOfDay
          .filter((bet) => bet.match.winner == "tbd")
          .map((bet, index) => <PredictionsCard key={index} bet={bet} />)}
    </Box>
  );
};

export default PredictionsDetailActive;
