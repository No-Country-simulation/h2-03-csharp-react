import { Box, Button, Typography } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import { LuArrowDownUp } from "react-icons/lu";

const MatchesDetailFilterBar = () => {
  return (
    <Box sx={{ mb: 1}}>
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
        <MainButton>Mis predicciones</MainButton>
      </Box>
      <Button startIcon={<LuArrowDownUp />} sx={{ textTransform: "none" }}>
        <Typography color="secondary">Ordenar por</Typography>
      </Button>
    </Box>
  );
};

export default MatchesDetailFilterBar;
