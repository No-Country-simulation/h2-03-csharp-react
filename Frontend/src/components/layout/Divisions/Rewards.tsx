import { Box } from "@mui/material";
import RewardsHeader from "./RewardsHeader";
import RewardsBody from "./RewardsBody";

const Rewards = () => {
  return (
    <Box mb={9}>
      <RewardsHeader division="bronze" />
      <RewardsBody />
    </Box>
  );
};

export default Rewards;
