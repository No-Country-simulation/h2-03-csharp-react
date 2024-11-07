import { Box, Divider, Paper, Typography } from "@mui/material";
import PredictionCardLeague from "./PredictionsCardLeague";
import PredictionsCardTeam from "./PredictionsCardTeam";
import PredictionsCardStatus from "./PredictionsCardStatus";
import { PredictionMatch } from "../../../types/PredictionsTypes";
import { useMatchContext } from "../../../hooks/useMatchContext";
import { useNavigate } from "react-router-dom";

const PredictionsCard = ({ bet }: { bet: PredictionMatch }) => {
  const { setMatchData } = useMatchContext();
  const navigate = useNavigate();

  const handleGameDetail = () => {
    setMatchData(bet.match);
    navigate(`/partidos/${bet.match.entityPublicKey}`);
  };

  return (
    <Paper
      onClick={handleGameDetail}
      elevation={4}
      sx={{ my: 1, py: 1, px: 2, borderRadius: 3, cursor: "pointer" }}
    >
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
          <Typography noWrap variant="h6" sx={{ maxWidth: 120 }}>
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
            ...(bet.match.winner == "Win" && {
              color: "secondary.main",
            }),
            ...(bet.match.winner == "Lose" && {
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
        status={bet.winPrediction}
        points={bet.pointsPrediction}
      />
    </Paper>
  );
};

export default PredictionsCard;
