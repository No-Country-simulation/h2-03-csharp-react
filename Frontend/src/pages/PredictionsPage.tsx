import { useState } from "react";
import { Box } from "@mui/material";
import PredictionsHeader from "../components/layout/Predictions/PredictionsHeader";
import PredictionsDetail from "../components/layout/Predictions/PredictionsDetail";

const PredictionsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <PredictionsHeader value={value} handle={handleChange} />
      <PredictionsDetail value={value} />
    </Box>
  );
};

export default PredictionsPage;
