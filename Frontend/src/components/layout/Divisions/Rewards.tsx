import { Box } from "@mui/material";
import RewardsHeader from "./RewardsHeader";
import RewardsPointsCard from "./RewardsPointsCard";
import RewardsDivisionsCard from "./RewardsDivisionsCard";

const Rewards = () => {
  return (
    <Box mb={9}>
      <RewardsHeader division="bronze" />
      <RewardsPointsCard />
      <RewardsDivisionsCard />
    </Box>
  );
};

export default Rewards;
