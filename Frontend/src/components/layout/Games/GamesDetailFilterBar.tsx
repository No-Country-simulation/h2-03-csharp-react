import { Box, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";
import GamesFilterMenu from "./GamesFilterMenu";

interface GamesDetailFilterBarProps {
  label: string;
  handle: (label: string) => void
}

const GamesDetailFilterBar: React.FC<GamesDetailFilterBarProps> = ({
  label,
  handle
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "400" }}>
          {label}
        </Typography>
        <MainButton onClick={() => navigate("/predicciones")}>
          Mis predicciones
        </MainButton>
      </Box>
      <GamesFilterMenu selected={label} handleSelect={handle} />
    </Box>
  );
};

export default GamesDetailFilterBar;
