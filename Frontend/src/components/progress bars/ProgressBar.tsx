import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import bronzeMini from "../../assets/bronze-mini-icon.svg";
import silverMini from "../../assets/silver-mini.png";
import goldMini from "../../assets/gold-mini-icon.svg";
import { useTheme } from "@mui/material";

interface ProgressBarProps {
  currentPoints: number;
  pointsToNextLevel: number;
  division: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentPoints,
  division,
  pointsToNextLevel,
}) => {
  const progress = (currentPoints / pointsToNextLevel) * 100;
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", width: "100%", mt: 3 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          backgroundColor: "white",
          border: "2px solid purple",
          borderRadius: "25px",
          height: "40px",
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
          gap: 1,
          justifyContent: "left",
          alignItems: "center",
          color: "white",
        }}
      >
        <Box
          component={"img"}
          src={
            division === "bronze"
              ? bronzeMini
              : division === "silver"
              ? silverMini
              : goldMini
          }
          alt="silver-mini"
          sx={{ height: "23px", width: "18px" }}
        />
        <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 400 }}>
          {division === "bronze"
            ? "Bronce"
            : division === "silver"
            ? "Plata"
            : "Oro"}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
