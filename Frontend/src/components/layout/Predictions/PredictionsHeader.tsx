import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PredictionsTabs from "./PredictionsTabs";
import PredictionsBuyPaper from "./PredictionsBuyPaper";
import GameNavButton from "../../buttons/MatchNavButton";
import { useMatchContext } from "../../../hooks/useMatchContext";
import dates from "../../../utils/predictions-tab-dates";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionsHeader = () => {
  const theme = useTheme();
  const { dateValue } = useMatchContext();
  const { predictions } = usePredictionsContext();

  return (
    <Box
      sx={{
        background: `radial-gradient(88.6% 55.7% at 21.5% 50%, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        width: "100%",
        color: "white",
        py: 3,
      }}
    >
      <GameNavButton />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mt: 1,
          mb: 4,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Tus predicciones
        </Typography>
        <Typography variant="h1">
          {predictions && 5 - predictions[0].countBets}
        </Typography>
        <Typography variant="caption" sx={{ color: "primary.light" }}>
          {dateValue === "Todos"
            ? "Predicciones disponibles hoy"
            : "Predicciones disponibles"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <PredictionsTabs />
        <PredictionsBuyPaper />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "primary.light", m: 2, maxWidth: 350 }}
        >
          {dateValue !== dates.generateDates()[0] &&
            dateValue !== "Todos" &&
            "Puedes hacer un máximo de 2 predicciones para días futuros"}
        </Typography>
      </Box>
    </Box>
  );
};

export default PredictionsHeader;
