import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ProfileHomeStatsProps {
  predictions: number;
  wins: number;
  losses: number;
}

const ProfileHomeStats: React.FC<ProfileHomeStatsProps> = ({
  predictions,
  wins,
  losses,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: " 20px auto",
        width: "100%",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
          color: "white",
          padding: "10px",
          width: "27%",
        }}
      >
        <Typography variant="body2">Predicciones</Typography>
        <Typography variant="h5">{predictions}</Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
          color: "white",
          padding: "10px",
          width: "27%",
        }}
      >
        <Typography variant="body2">Acertadas</Typography>
        <Typography variant="h5">{wins}</Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
          color: "white",
          padding: "10px",
          width: "27%",
        }}
      >
        <Typography variant="body2">Erradas</Typography>
        <Typography variant="h5">{losses}</Typography>
      </Paper>
    </Box>
  );
};

export default ProfileHomeStats;
