import { Stack, Typography } from "@mui/material";
import { GameData } from "../../../context/GameContext";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionResult = ({ game }: { game: GameData }) => {
  const { winner, setPredictionWinner } = usePredictionsContext();

  return (
    <Stack
      sx={{
        maxWidth: 300,
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
        mb: 3,
        pt: 2,
        gap: 2,
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Stack
          onClick={() => setPredictionWinner("home")}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: 150,
            height: 120,
            borderRadius: 3,
            backgroundColor: winner == "home" ? "secondary.main" : "white",
            color: winner == "home" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          <img
            src={game.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
            width={48}
            height={48}
          />
          <Typography noWrap fontWeight="bold" sx={{ maxWidth: 100 }}>
            {game.teamsAPI.homeAPI.teamAPI.name}
          </Typography>
          <Typography variant="caption">
            {Math.ceil(game.oddsAPI.home * 10)}
          </Typography>
        </Stack>
        <Stack
          onClick={() => setPredictionWinner("away")}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: 150,
            height: 120,
            borderRadius: 3,
            backgroundColor: winner == "away" ? "secondary.main" : "white",
            color: winner == "away" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          <img
            src={game.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
            width={48}
            height={48}
          />
          <Typography noWrap fontWeight="bold" sx={{ maxWidth: 100 }}>
            {game.teamsAPI.awayAPI.teamAPI.name}
          </Typography>
          <Typography variant="caption">
            {Math.ceil(game.oddsAPI.away * 10)}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        onClick={() => setPredictionWinner("draw")}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: 55,
          borderRadius: 3,
          backgroundColor: winner == "draw" ? "secondary.main" : "white",
          color: winner == "draw" ? "white" : "black",
          cursor: "pointer",
          p: 2,
          alignSelf: "stretch",
        }}
      >
        <Typography fontWeight="bold">Empate</Typography>
        <Typography>{Math.ceil(game.oddsAPI.draw * 10)}</Typography>
      </Stack>
    </Stack>
  );
};

export default PredictionResult;
