import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import ProgressBar from "../../progress bars/ProgressBar";
import { useTheme } from "@mui/material/styles";

const MissionsPointsCard = () => {
  const [points] = useState(120);
  // const [points, setPoints] = useState(200);
  const [division] = useState("bronze");
  // const [division, setDivision] = useState("bronze");
  const [pointsToNextDivision] = useState(300);
  // const [pointsToNextDivision, setPointsToNextDivision] = useState(300);

  const theme = useTheme();

  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: "10px",
        width: "30%",
        "@media (max-width: 800px)": { width: "100%" },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.primary.dark,
          border: "2px solid purple",
          borderRadius: "10px",
          color: "white",
          p: 2,
          width: "100%",
        }}
      >
        <Typography variant="h5">Tus puntos</Typography>
        <Typography variant="h3">{points}</Typography>
        <Typography sx={{ ml: 2, width: "100%" }}>
          {points} de {pointsToNextDivision} puntos
        </Typography>
        <ProgressBar
          currentPoints={points}
          division={division}
          pointsToNextLevel={pointsToNextDivision}
        />
      </Box>
    </Paper>
  );
};

export default MissionsPointsCard;
