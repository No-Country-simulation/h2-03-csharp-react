import React from "react";
import { LinearProgress, Box } from "@mui/material";
import { useTheme } from "@mui/material";

interface ProgressBarProps {
  currentPoints: number;
  totalPoints: number;
}

const MissionProgressBar: React.FC<ProgressBarProps> = ({
  currentPoints,
  totalPoints,
}) => {
  const progress = (currentPoints / totalPoints) * 100;
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          backgroundColor: "white",
          border: "2px solid purple",
          borderRadius: "25px",
          height: "18px",
          "& .MuiLinearProgress-bar": {
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            borderRadius: "25px",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "5%",
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.8rem",
        }}
      >
        {currentPoints}/{totalPoints}
      </Box>
    </Box>
  );
};

export default MissionProgressBar;
