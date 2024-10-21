import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GameData } from "../../../context/GameContext";
import { FaCircle } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

interface GamesGameBadgeProps {
  gameData: GameData;
}

const GamesGameBadge: React.FC<GamesGameBadgeProps> = ({ gameData }) => {
  //const date = new Date().toLocaleTimeString();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/partidos/${gameData.id}`)}>
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
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <IoIosStar color="orange" style={{ width: 12, marginRight: 2 }} />
              <Typography variant="caption">{gameData.score}</Typography>
            </Stack>
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
    </div>
  );
};

export default GamesGameBadge;
