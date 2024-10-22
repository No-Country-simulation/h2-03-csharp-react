import { Box, Paper, Typography } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import silver from "../../../assets/silver.png";

const DivisionsRewardsDetails = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
        <Typography>
          <FaArrowLeftLong /> Recompensas
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h6">División plata</Typography>
        <img src={silver} alt="plata" />
      </Box>
      <Paper elevation={4} sx={{ borderRadius: 4 }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h6">Recompensas</Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Crear componente reutilizable y dinámico
          </Box>
          <Typography variant="h6">Premios del mes</Typography>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {" "}
            Crear componente reutilizable y dinámico
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h6">Tokens división Plata</Typography>
            <Typography variant="h6">
              Ir al ranking <FaArrowRightLong />
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Crear componente reutilizable y dinámico
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default DivisionsRewardsDetails;
