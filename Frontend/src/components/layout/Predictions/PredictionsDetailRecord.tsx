import { Box, Typography } from "@mui/material";
import PredictionsCard, { PredictionsCardProps } from "./PredictionsCard";

const predictions: PredictionsCardProps[] = [
  { result: "Barcelona", points: 13, status: "UnearnedPoints" },
  { result: "Barcelona", points: 13, status: "PointsEarned" },
];

const PredictionsDetailRecord = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: "primary", my: 2 }}>
        Pasadas
      </Typography>
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

export default PredictionsDetailRecord;
