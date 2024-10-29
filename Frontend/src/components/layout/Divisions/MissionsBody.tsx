import { Box, Paper, Typography } from "@mui/material";
import MissionsCard from "./MissionsCard";

const MissionsBody = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        borderRadius: "10px",
        width: "30%",
        "@media (max-width: 800px)": {
          width: "100%",
        },
      }}
    >
      <Typography sx={{ my: 2 }}>Logros</Typography>
      <Paper elevation={4} sx={{ borderRadius: "10px", width: "100%" }}>
        {[
          { mission: "Gana 2 apuestas", score: 1, goal: 2, reward: 10 },
          {
            mission: "Gana 2 apuestas combinadas",
            score: 0,
            goal: 2,
            reward: 10,
          },
          {
            mission: "Gana 3 apuestas de goles",
            score: 2,
            goal: 3,
            reward: 10,
          },
          { mission: "Gana 10", score: 7, goal: 10, reward: 10 },
          { mission: "Gana 8", score: 7, goal: 8, reward: 10 },
          { mission: "Gana 4", score: 1, goal: 4, reward: 10 },
        ].map(({ mission, score, goal, reward }, index) => (
          <MissionsCard
            key={index}
            mission={mission}
            score={score}
            goal={goal}
            reward={reward}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default MissionsBody;
