import { Box, Typography } from "@mui/material";
import PredictionsCard from "./PredictionsCard";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionsDetailRecord = () => {
  const { listMatch } = usePredictionsContext();

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "primary", my: 2 }}>
        Pasadas
      </Typography>
      {listMatch &&
        listMatch
          .filter((bet) => bet.match.winner !== "tbd")
          .map((bet, index) => <PredictionsCard key={index} bet={bet} />)}
    </Box>
  );
};

export default PredictionsDetailRecord;
