import { Box } from "@mui/material";
import React from "react";
import MissionsPointsCard from "./MissionsPointsCard";
import MissionsBody from "./MissionsBody";

const Missions = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <MissionsPointsCard />
      <MissionsBody />
    </Box>
  );
};

export default Missions;
