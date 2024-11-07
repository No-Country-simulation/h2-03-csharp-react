import { Box, Paper, Typography } from "@mui/material";
import scoreIcon from "../../../assets/score-icon.png";
import ProgressBar from "../../progress bars/ProgressBar";
import { useTheme } from "@mui/material/styles";

interface RewardsPointsCardProps {
  points: number;
  division: string;
  pointsToNextDivision: number;
}

const RewardsPointsCard: React.FC<RewardsPointsCardProps> = ({
  points,
  division,
  pointsToNextDivision,
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid purple",
        borderRadius: "10px",
        "@media (max-width: 768px)": { width: "100%" },
        margin: "0 auto 1rem",
        width: "30%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "9px 9px 0 0",
          color: "white",
          padding: "0.5rem 1rem",
          width: "100%",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: 500,
            gap: 1,
          }}
        >
          <img src={scoreIcon} alt="score-icon" />
          Tus puntos
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "26px", fontWeight: 600 }}>
          {points}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          p: 2,
          width: "95%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "14px", fontWeight: 400 }}
          >
            Desbloquear división
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "14px", fontWeight: 400 }}
          >
            {points} de {pointsToNextDivision} puntos
          </Typography>
        </Box>
        <ProgressBar
          currentPoints={points}
          division={division}
          pointsToNextLevel={pointsToNextDivision}
        />
      </Box>
    </Paper>
  );
};

export default RewardsPointsCard;
