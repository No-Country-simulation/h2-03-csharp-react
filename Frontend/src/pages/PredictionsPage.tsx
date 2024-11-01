import { Stack } from "@mui/material";
import PredictionsHeader from "../components/layout/Predictions/PredictionsHeader";
import PredictionsDetail from "../components/layout/Predictions/PredictionsDetail";

const PredictionsPage = () => {
  return (
    <Stack>
      <PredictionsHeader />
      <PredictionsDetail />
    </Stack>
  );
};

export default PredictionsPage;
