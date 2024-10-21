import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PredictionsTabs from "./PredictionsTabs";
import PredictionsBuyPaper from "./PredictionsBuyPaper";
import MatchNavButton from "../../buttons/GameNavButton";

interface PredictionsHeaderProps {
  value: number;
  handle: (event: React.SyntheticEvent, newValue: number) => void;
}

const PredictionsHeader: React.FC<PredictionsHeaderProps> = ({
  value,
  handle,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `radial-gradient(88.6% 55.7% at 21.5% 50%, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        width: "100%",
        color: "white",
        py: 3,
      }}
    >
      <MatchNavButton />
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
        <Typography variant="h1">5</Typography>
        <Typography variant="caption" sx={{ color: "primary.light" }}>
          {value === 0
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
        <PredictionsTabs value={value} handleChange={handle} />
        <PredictionsBuyPaper />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "primary.light", m: 2, maxWidth: 350 }}
        >
          {value > 1 &&
            "Puedes hacer un máximo de 2 predicciones para días futuros"}
        </Typography>
      </Box>
    </Box>
  );
};

export default PredictionsHeader;
