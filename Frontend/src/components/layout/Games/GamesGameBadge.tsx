import { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GameData } from "../../../context/GameContext";
import { FaCircle } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import GameStatsModal from "../../modals/GameStatsModal";

interface GamesGameBadgeProps {
  gameData: GameData;
}

const GamesGameBadge: React.FC<GamesGameBadgeProps> = ({ gameData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleGameDetail = () => {
    if (!open) {
      navigate(`/partidos/${gameData.id}`);
    }
  };

  const handleShowStats = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleOpen();
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
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
            }}
          >
            <Typography variant="caption">{gameData.localRatio}</Typography>
          </Stack>
          <Stack
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
            }}
          >
            <Typography variant="caption">{gameData.drawRatio}</Typography>
          </Stack>
          <Stack
            sx={{
              bgcolor: "white",
              width: 70,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: "1px solid grey",
            }}
          >
            <Typography variant="caption">{gameData.visitRatio}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <GameStatsModal open={open} handleClose={handleClose} game={gameData} />
    </div>
  );
};

export default GamesGameBadge;
