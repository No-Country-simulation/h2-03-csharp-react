import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const GameDetailPredictionsBadge = () => {
  const { predictions } = usePredictionsContext();

  return predictions.map((prediction) => (
    <Paper
      key={prediction.id}
      elevation={5}
      sx={{ maxHeight: 100, mb: 1, px: 2, borderRadius: 2 }}
    >
      <Stack direction="row" sx={{ height: 68 }}>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography variant="caption">
              {prediction.type == "resultado" && "Resultado final:"}
              {prediction.type == "gol" && "Gol:"}
            </Typography>
            <Typography variant="h6">{prediction.bet}</Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{
              color: "primary.main",
              ...(prediction.result == "ganado" && {
                color: "secondary.main",
              }),
              ...(prediction.result == "perdido" && {
                textDecoration: "line-through",
                color: "primary.dark",
              }),
            }}
          >
            {prediction.points} puntos
          </Typography>
        </Stack>
      </Stack>
      <Divider />
      <Box sx={{ height: 32 }}>
        <Typography variant="caption">
          {prediction.result == "perdido" && (
            <>
              <MdOutlineCancel color="red" /> No ganaste puntos con esta
              predicción
            </>
          )}
          {prediction.result == "ganado" && (
            <>
              <FaCheck color="green" /> Ganaste 13 puntos con esta predicción
            </>
          )}
        </Typography>
      </Box>
    </Paper>
  ));
};

export default GameDetailPredictionsBadge;
