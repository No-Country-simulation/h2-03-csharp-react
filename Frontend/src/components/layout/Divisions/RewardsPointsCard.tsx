import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import scoreIcon from "../../../assets/score-icon.png";
import ProgressBar from "../../progress bars/ProgressBar";
import { useTheme } from "@mui/material/styles";

const RewardsPointsCard = () => {
  const [points] = useState(200);
  // const [points, setPoints] = useState(200);
  const [division] = useState("bronze");
  // const [division, setDivision] = useState("bronze");
  const [pointsToNextDivision] = useState(300);
  // const [pointsToNextDivision, setPointsToNextDivision] = useState(300);

  const theme = useTheme();

  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid purple",
        borderRadius: "10px",
        "@media (max-width: 768px)": { width: "100%" },
        margin: "auto",
        width: "30%",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "9px 9px 0 0",
          color: "white",
          p: 2,
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <img src={scoreIcon} alt="score-icon" /> Tus puntos
        </Typography>
        <Typography variant="h5">{points}</Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        p={2}
        width={"95%"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography>Desbloquear división</Typography>
          <Typography>{points} de 300 puntos</Typography>
        </Box>
        <ProgressBar
          currentPoints={points}
          division={division}
          pointsToNextLevel={pointsToNextDivision}
        />
      </Box>
    </Paper>
  );
};

export default RewardsPointsCard;
