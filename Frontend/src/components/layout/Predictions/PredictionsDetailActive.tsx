import { Box, Typography } from "@mui/material";
import PredictionsCard from "./PredictionsCard";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionsDetailActive = () => {
  const { predictions }= usePredictionsContext()

  const bets = predictions?.flatMap(betOfDay=>betOfDay.betList).flatMap(bet=>bet.listMatch)

  return (
    <Box>
      {bets?.length == 0 && (
        <Typography align="center" p={3}>
          -
        </Typography>
      )}
      {bets?.map((bet, index) => (
        <PredictionsCard
          key={index}
          bet={bet}
        />
      ))}
    </Box>
  );
};

export default PredictionsDetailActive;
