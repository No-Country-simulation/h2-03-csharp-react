import React from "react";
import { Box, Typography } from "@mui/material";
import bronze from "../../../assets/bronze.png";
import silver from "../../../assets/silver.png";
import gold from "../../../assets/gold.png";

interface RewardsHeaderProps {
  division: string;
}

const RewardsHeader: React.FC<RewardsHeaderProps> = ({ division }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mb={3}
    >
      <img
        src={
          division === "bronze" ? bronze : division === "silver" ? silver : gold
        }
        alt="bronze"
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
        }}
      >
        Estás en la
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
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
