import { Box } from "@mui/material";
import MissionsPointsCard from "./MissionsPointsCard";
import MissionsBody from "./MissionsBody";

const Missions = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={9}
    >
      <MissionsPointsCard />
      <MissionsBody />
    </Box>
  );
};

export default Missions;
