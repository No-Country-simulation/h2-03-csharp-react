import { Box } from "@mui/material";
import RewardsHeader from "./RewardsHeader";
import RewardsPointsCard from "./RewardsPointsCard";
import RewardsDivisionsCard from "./RewardsDivisionsCard";

const Rewards = () => {
  const userData = {
    points: 120,
    division: "bronze",
    pointsToNextDivision: 300,
  };
  return (
    <Box mb={9}>
      <RewardsHeader division={userData.division} />
      <RewardsPointsCard {...userData} />
      <RewardsDivisionsCard />
    </Box>
  );
};

export default Rewards;
