import { Box, Divider, Typography } from "@mui/material";
import { PiHandCoinsBold } from "react-icons/pi";
import MissionProgressBar from "../../progress bars/MissionProgressBar";

interface MissionsCardProps {
  mission: string;
  score: number;
  goal: number;
  reward: number;
}

const MissionsCard: React.FC<MissionsCardProps> = ({
  mission,
  score,
  goal,
  reward,
}) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ gap: 5, p: 2, width: "100%" }}
      >
        <PiHandCoinsBold fontSize={40} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "80%" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ px: 1, width: "100%" }}
          >
            <Typography>{mission}</Typography>
            <Typography>{reward} puntos</Typography>
          </Box>
          <MissionProgressBar currentPoints={score} totalPoints={goal} />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default MissionsCard;
