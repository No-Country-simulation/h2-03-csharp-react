import { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GameData } from "../../../context/GameContext";
import { IoStatsChartSharp } from "react-icons/io5";
import PredictionsModal from "../../modals/Predictions/PredictionsModal";
import { useGameContext } from "../../../hooks/useGameContext";
import GameStatsModal from "../../modals/Games/GameStatsModal";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import PredictionAddedModal from "../../modals/Predictions/PredictionAddedModal";

interface GamesGameBadgeProps {
  gameData: GameData;
}

const GamesGameBadge: React.FC<GamesGameBadgeProps> = ({ gameData }) => {
  const [openStats, setOpenStats] = useState(false);

  const handleOpenStats = () => setOpenStats(true);
  const handleCloseStats = () => setOpenStats(false);

  const navigate = useNavigate();

  const { setGameData } = useGameContext();
  const { setPredictionWinner, openModals, handleOpenModals, handlePredictionType } =
    usePredictionsContext();

  const handleGameDetail = () => {
    if (!openStats && !openModals) {
      navigate(`/partidos/${gameData.entityPublicKey}`);
    }
    setGameData(gameData);
  };

  const handleShowStats = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleOpenStats();
    event.stopPropagation();
  };

  const handleShowPredic = (
    event: React.MouseEvent<HTMLSpanElement>,
    selected: string
  ) => {
    setPredictionWinner(selected);
    handlePredictionType("result")
    handleOpenModals(2);
    event.stopPropagation();
  };

  return (
    <div onClick={handleGameDetail}>
      <Stack
        sx={{
          height: 150,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "secondary.light",
          cursor: "pointer",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: 350,
            justifyContent: "center",
            gap: 8,
            alignItems: "flex-end",
          }}
        >
          <Stack
            sx={{
              flexBasis: "30%",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={gameData.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
              width={55}
              height={55}
            />
            <Typography noWrap variant="caption" sx={{ maxWidth: 120 }}>
              {gameData.teamsAPI.homeAPI.teamAPI.name}
            </Typography>
          </Stack>
          <Stack
            sx={{
              justifyContent: "start",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <IconButton
              onClick={handleShowStats}
              size="small"
              sx={{ color: "primary.main" }}
            >
              <IoStatsChartSharp />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              {gameData.time}
            </Typography>
            <Typography variant="caption">{" - "}</Typography>
          </Stack>
          <Stack
            sx={{
              flexBasis: "30%",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={gameData.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
              width={55}
              height={55}
            />
            <Typography noWrap variant="caption" sx={{ maxWidth: 120 }}>
              {gameData.teamsAPI.awayAPI.teamAPI.name}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "center",
            gap: 2,
            alignItems: "flex-end",
            mt: 1,
          }}
        >
          <Stack
            onClick={(event) => handleShowPredic(event, "home")}
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
              cursor: "pointer",
            }}
          >
            <Typography variant="caption">{gameData.oddsAPI.home}</Typography>
          </Stack>
          <Stack
            onClick={(event) => handleShowPredic(event, "draw")}
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
              cursor: "pointer",
            }}
          >
            <Typography variant="caption">{gameData.oddsAPI.draw}</Typography>
          </Stack>
          <Stack
            onClick={(event) => handleShowPredic(event, "away")}
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
              cursor: "pointer",
            }}
          >
            <Typography variant="caption">{gameData.oddsAPI.away}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <GameStatsModal
        open={openStats}
        handleClose={handleCloseStats}
        game={gameData}
      />
      <PredictionsModal game={gameData} />
      <PredictionAddedModal />
    </div>
  );
};

export default GamesGameBadge;
