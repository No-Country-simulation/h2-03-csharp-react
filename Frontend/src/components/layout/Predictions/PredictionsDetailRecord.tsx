import { Box, Typography } from "@mui/material";
import PredictionsCard from "./PredictionsCard";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionsDetailRecord = () => {
  const { predictions } = usePredictionsContext();

  const bets = predictions?.flatMap(betOfDay=>betOfDay.betList).flatMap(bet=>bet.listMatch)

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "primary", my: 2 }}>
        Pasadas
      </Typography>
      {bets?.map((bet, index) => (
        <PredictionsCard
          key={index}
          bet={bet}
        />
      ))}
    </Box>
  );
};

export default PredictionsDetailRecord;
