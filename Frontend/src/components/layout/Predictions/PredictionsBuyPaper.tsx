import { Paper, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionsBuyPaper = () => {
  const { handleOpenModals } = usePredictionsContext();

  return (
    <Paper
      sx={{
        display: "flex",
        m: 2,
        p: 1,
        pl: 3,
        minWidth: 350,
        minHeight: 48,
        borderRadius: 3,
      }}
    >
      <Typography variant="body2" sx={{ mr: 1 }}>
        ¿Te quedaste sin predicciones?
      </Typography>
      <MainButton onClick={() => handleOpenModals(4)}>
        Comprar predicciones
      </MainButton>
    </Paper>
  );
};

export default PredictionsBuyPaper;
