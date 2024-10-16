import { Box, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";
import MatchesFilterMenu from "./MatchesFilterMenu";

const MatchesDetailFilterBar = () => {
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
          Ligas
        </Typography>
        <MainButton onClick={() => navigate("/predicciones")}>
          Mis predicciones
        </MainButton>
      </Box>
      <MatchesFilterMenu />
    </Box>
  );
};

export default MatchesDetailFilterBar;
