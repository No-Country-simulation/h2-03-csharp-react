import { Box } from "@mui/material";
import RewardsPointsCard from "./RewardsPointsCard";
import RewardsDivisionsCard from "./RewardsDivisionsCard";

const RewardsBody = () => {
  return (
    <Box>
      <RewardsPointsCard />
      <RewardsDivisionsCard />
    </Box>
  );
};

export default RewardsBody;
