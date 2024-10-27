import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import PredictionsDetailRecord from "./PredictionsDetailRecord";
import PredictionsDetailActive from "./PredictionsDetailActive";
import { useGameContext } from "../../../hooks/useGameContext";
import PredictionsGamesListModal from "../../modals/PredictionsGamesListModal";

const PredictionsDetail = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { dateValue } = useGameContext();

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
        <MainButton onClick={handleOpen}>Hacer predicción</MainButton>
      </Box>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1,
          px: "5%",
          color: "#8D8D8D",
          borderRadius: 3,
        }}
      >
        <Typography>Predicción</Typography>
        <Typography>Partido</Typography>
        <Typography>Puntos</Typography>
      </Paper>
      <PredictionsDetailActive />
      {dateValue === "Todos" && <PredictionsDetailRecord />}
      <PredictionsGamesListModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default PredictionsDetail;
