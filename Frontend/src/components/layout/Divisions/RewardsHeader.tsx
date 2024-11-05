import React from "react";
import { Box, Typography } from "@mui/material";
import bronze from "../../../assets/bronze.png";
import silver from "../../../assets/silver.png";
import gold from "../../../assets/gold.png";
import { useTheme } from "@mui/material/styles";

interface RewardsHeaderProps {
  division: string;
}

const RewardsHeader: React.FC<RewardsHeaderProps> = ({ division }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box
        component="img"
        src={
          division === "bronze" ? bronze : division === "silver" ? silver : gold
        }
        alt="division trophy"
        sx={{ marginBottom: "1rem", width: "79px" }}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: "18px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Estás en la
      </Typography>
      <Typography
        variant="body1"
        sx={{
          // Add gradient color to text
          background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          fontSize: "22px",
          fontWeight: 700,
          textAlign: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {division === "bronze"
          ? "División Bronce"
          : division === "silver"
          ? "División Plata"
          : "División Oro"}
      </Typography>
    </Box>
  );
};

export default RewardsHeader;
