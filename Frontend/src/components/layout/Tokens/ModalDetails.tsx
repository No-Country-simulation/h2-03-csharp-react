import { Box, Divider, Paper, Typography } from "@mui/material";
import argFlag from "../../../assets/arg-flag.svg";
import calendarIcon from "../../../assets/calendar-icon.svg";
import footballPitchIcon from "../../../assets/football-pitch-icon.svg";
import whistleIcon from "../../../assets/whistle-icon.svg";

const ModalDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 1,
        padding: 3,
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "500" }}>
        Datos del jugador
      </Typography>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={argFlag}
            alt="argentinan flag"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Nacionalidad
            </Typography>
            <Typography variant="body1">Argentina</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={calendarIcon}
            alt="calendar icon"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Edad
            </Typography>
            <Typography variant="body1">37</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={footballPitchIcon}
            alt="football pitch icon"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Posición
            </Typography>
            <Typography variant="body1">Delantero</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={whistleIcon}
            alt="whistle icon"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Posición
            </Typography>
            <Typography variant="body1">Delantero</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ModalDetails;
