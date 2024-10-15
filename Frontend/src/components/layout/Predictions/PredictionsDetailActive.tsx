import { Box, Typography } from "@mui/material";
import PredictionsCard, { PredictionsCardProps } from "./PredictionsCard";

const predictions: PredictionsCardProps[] = [
  { result: "Barcelona", points: 13, status: "Pending" },
  { result: "Barcelona", points: 13, status: "Pending" },
];

const PredictionsDetailActive = () => {
  return (
    <Box>
      {predictions?.length == 0 && (
        <Typography align="center" p={3}>
          -
        </Typography>
      )}
      {predictions?.map((prediction, index) => (
        <PredictionsCard
          key={index}
          result={prediction.result}
          points={prediction.points}
          status={prediction.status}
        />
      ))}
    </Box>
  );
};

export default PredictionsDetailActive;
