import { Box, Divider, Paper, Typography } from "@mui/material";
import PredictionCardLeague from "./PredictionsCardLeague";
import PredictionsCardTeam from "./PredictionsCardTeam";
import PredictionsCardStatus from "./PredictionsCardStatus";

interface PredictionsCardProps {
  bet: {
    match: {
      date: string;
      time: string;
      stageAPI: {
        name: string;
        isActive: boolean;
        leagueAPI: string | null;
      };
      teamsAPI: {
        homeAPI: {
          teamAPI: {
            name: string;
            logoUrl: string;
          };
        };
        awayAPI: {
          teamAPI: {
            name: string;
            logoUrl: string;
          };
        };
      };
      winner: string;
      oddsAPI: {
        home: number;
        draw: number;
        away: number;
      };
      homeFtGoals: number;
      awayFtGoals: number;
      entityPublicKey: string;
    };
    matchPublicKey: string;
    winnerPrediction: string;
    winPrediction: null;
    ratioOfPrediction: number;
    entityPublicKey: string;
    pointsPrediction: number;
  };
}

const PredictionsCard: React.FC<PredictionsCardProps> = ({ bet }) => {
  return (
    <Paper elevation={4} sx={{ my: 1, py: 1, px: 2, borderRadius: 3 }}>
      <PredictionCardLeague leagueName={bet.match.stageAPI.name} />
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: " center",
          py: 2,
          pr: "5%",
        }}
      >
        <Box sx={{ pl: { sm: 1, md: 2 } }}>
          <Typography variant="caption">Resultado final:</Typography>
          <Typography variant="h6">
            {bet.winnerPrediction === "home" &&
              bet.match.teamsAPI.homeAPI.teamAPI.name}
            {bet.winnerPrediction === "draw" && "Empate"}
            {bet.winnerPrediction === "away" &&
              bet.match.teamsAPI.awayAPI.teamAPI.name}
          </Typography>
        </Box>
        <Box>
          <PredictionsCardTeam
            imageSrc={bet.match.teamsAPI.homeAPI.teamAPI.logoUrl}
            label={bet.match.teamsAPI.homeAPI.teamAPI.name}
          />
          <PredictionsCardTeam
            imageSrc={bet.match.teamsAPI.awayAPI.teamAPI.logoUrl}
            label={bet.match.teamsAPI.awayAPI.teamAPI.name}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            ...(bet.match.winner == "ganado" && {
              color: "secondary.main",
            }),
            ...(bet.match.winner == "perdido" && {
              textDecoration: "line-through",
              color: "primary.dark",
            }),
            ...(bet.match.winner == "tbd" && {
              color: "primary.main",
            }),
          }}
        >
          {bet.pointsPrediction}
        </Typography>
      </Box>
      <Divider />
      <PredictionsCardStatus
        status={bet.match.winner}
        points={bet.pointsPrediction}
      />
    </Paper>
  );
};

export default PredictionsCard;
