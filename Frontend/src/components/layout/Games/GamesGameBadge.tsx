import { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GameData } from "../../../context/GameContext";
import { FaCircle } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import GameStatsModal from "../../modals/GameStatsModal";
import PredictionsModal from "../../modals/PredictionsModal";

interface GamesGameBadgeProps {
  gameData: GameData;
}

const GamesGameBadge: React.FC<GamesGameBadgeProps> = ({ gameData }) => {
  const [openStats, setOpenStats] = useState(false);
  const [openPredic, setOpenPredic] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleOpenStats = () => setOpenStats(true);
  const handleCloseStats = () => setOpenStats(false);

  const handleOpenPredic = () => setOpenPredic(true);
  const handleClosePredic = () => setOpenPredic(false);

  const navigate = useNavigate();

  const handleGameDetail = () => {
    if (!openStats && !openPredic) {
      navigate(`/partidos/${gameData.id}`);
    }
  };

  const handleShowStats = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleOpenStats();
    event.stopPropagation();
  };

  const handleShowPredic = (
    event: React.MouseEvent<HTMLSpanElement>,
    selected: string | null
  ) => {
    handleOpenPredic();
    setSelected(selected);
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
            <img src={gameData.local.shield} width={55} height={55} />
            <Typography noWrap variant="caption">
              {gameData.local.name}
            </Typography>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
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
              {gameData.result}
            </Typography>
            <Typography variant="caption">
              {gameData.state == "Finalizado" && "FT"}
              {gameData.state == "En vivo" && (
                <span>
                  <FaCircle color="red" style={{ width: 6, marginRight: 2 }} />
                  {gameData.schedule}
                </span>
              )}
            </Typography>
          </Stack>
          <Stack
            sx={{
              flexBasis: "30%",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={gameData.visit.shield} width={55} height={55} />
            <Typography noWrap variant="caption">
              {gameData.visit.name}
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
            onClick={(event) => handleShowPredic(event, "local")}
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
              cursor: "pointer"
            }}
          >
            <Typography variant="caption">{gameData.localRatio}</Typography>
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
              cursor: "pointer"
            }}
          >
            <Typography variant="caption">{gameData.drawRatio}</Typography>
          </Stack>
          <Stack
            onClick={(event) => handleShowPredic(event, "visit")}
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
              cursor: "pointer"
            }}
          >
            <Typography variant="caption">{gameData.visitRatio}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <GameStatsModal
        open={openStats}
        handleClose={handleCloseStats}
        game={gameData}
      />
      <PredictionsModal
        selected={selected}
        setSelected={setSelected}
        open={openPredic}
        handleClose={handleClosePredic}
        game={gameData}
      />
    </div>
  );
};

export default GamesGameBadge;
