import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FaArrowLeftLong } from "react-icons/fa6";
import PredictionsTabs from "./PredictionsTabs";
import PredictionsBuyPaper from "./PredictionsBuyPaper";
import { NavLink } from "react-router-dom";

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
        background: `linear-gradient(90deg, ${theme.palette.primary.main} -0.04%, ${theme.palette.secondary.main} 99.96%)`,
        width: "100%",
        color: "white",
        py: 3,
      }}
    >
      <Typography variant="caption" sx={{ ml: 2, color: "primary.light" }}>
        <NavLink to="/partidos" style={{ textDecoration: "none", color: "inherit" }}>
          <FaArrowLeftLong /> <span>Partidos</span>
        </NavLink>
      </Typography>
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
