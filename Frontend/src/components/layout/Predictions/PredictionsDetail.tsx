import { Box, Paper, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import PredictionsDetailRecord from "./PredictionsDetailRecord";
import PredictionsDetailActive from "./PredictionsDetailActive";

interface PredictionsDetailProps {
  value: number;
}

const PredictionsDetail: React.FC<PredictionsDetailProps> = ({ value }) => {
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
        <MainButton>Hacer predicción</MainButton>
      </Box>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1,
          px: "5%",
          color: "secondary.light",
          borderRadius: 3,
        }}
      >
        <Typography>Predicción</Typography>
        <Typography>Partido</Typography>
        <Typography>Puntos</Typography>
      </Paper>
      <PredictionsDetailActive />
      {value === 0 && <PredictionsDetailRecord />}
    </Box>
  );
};

export default PredictionsDetail;
