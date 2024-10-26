import Modal from "@mui/material/Modal";
import { Divider, Paper, Stack, Typography, useTheme } from "@mui/material";
import { GameData } from "../../context/GameContext";
import { RxCross1 } from "react-icons/rx";
import MainButton from "../buttons/MainButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { FaCircle, FaRegCircle } from "react-icons/fa6";
import React from "react";

interface PredictionsModalProps {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  open: boolean;
  handleClose: () => void;
  game: GameData;
}

const PredictionsModal: React.FC<PredictionsModalProps> = ({
  selected,
  setSelected,
  open,
  handleClose,
  game,
}) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          maxHeight: "100vh",
          bgcolor: "background.paper",
          borderRadius: 2,
          background: `linear-gradient(45deg, rgba(0, 0, 0, 0.15) 25%, rgba(0, 0, 0, 0.00) 25%, rgba(0, 0, 0, 0.00) 75%, rgba(0, 0, 0, 0.00) 75%, rgba(1, 16, 39, 0.30) 100%), linear-gradient(45deg, rgba(1, 16, 39, 0.30) 25%, rgba(1, 16, 39, 0.30) 25%, rgba(34, 41, 69, 0.30) 75%, rgba(1, 16, 39, 0.30) 75%), ${theme.palette.primary.main}`,
          pt: 2,
        }}
      >
        <Stack sx={{ flexWrap: "wrap", px: 3, color: "white" }}>
          <Typography
            variant="h5"
            align="right"
            onClick={handleClose}
            sx={{ cursor: "pointer" }}
          >
            <RxCross1 />
          </Typography>
          <Typography variant="h5" align="center">
            Predice el resultado
          </Typography>
          <Typography variant="subtitle1" align="center">
            Selecciona una opción
          </Typography>
        </Stack>
        <Divider
          sx={{
            my: 1,
            "&.MuiDivider-root": {
              borderWidth: "3px",
              borderStyle: "solid",
              borderImage: `linear-gradient(to right, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%) 1`,
            },
          }}
        />
        <Stack
          sx={{
            maxWidth: 400,
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            pt: 2,
            px: 5,
            gap: 2,
          }}
        >
          <Stack
            direction="row"
            sx={{ width: "100%", justifyContent: "space-between", gap: 2 }}
          >
            <Stack
              onClick={() => setSelected("local")}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: 150,
                height: 120,
                borderRadius: 3,
                backgroundColor:
                  selected == "local" ? "secondary.main" : "white",
                color: selected == "local" ? "white" : "black",
                cursor: "pointer",
              }}
            >
              <img
                src={game.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
                width={48}
                height={48}
              />
              <Typography fontWeight="bold">
                {game.teamsAPI.homeAPI.teamAPI.name}
              </Typography>
              <Typography variant="caption">15</Typography>
            </Stack>
            <Stack
              onClick={() => setSelected("visit")}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: 150,
                height: 120,
                borderRadius: 3,
                backgroundColor:
                  selected == "visit" ? "secondary.main" : "white",
                color: selected == "visit" ? "white" : "black",
                cursor: "pointer",
              }}
            >
              <img
                src={game.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
                width={48}
                height={48}
              />
              <Typography fontWeight="bold">
                {game.teamsAPI.awayAPI.teamAPI.name}
              </Typography>
              <Typography variant="caption">10</Typography>
            </Stack>
          </Stack>
          <Stack
            onClick={() => setSelected("draw")}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: 55,
              borderRadius: 3,
              backgroundColor: selected == "draw" ? "secondary.main" : "white",
              color: selected == "draw" ? "white" : "black",
              cursor: "pointer",
              p: 2,
              alignSelf: "stretch",
            }}
          >
            <Typography fontWeight="bold">Empate</Typography>
            <Typography>21</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              my: 3,
              gap: 1,
            }}
          >
            <MainButton width={150}>Predecir</MainButton>
            <SecondaryButton width={150}>Hacer combinada</SecondaryButton>
          </Stack>
        </Stack>
        <Divider
          sx={{
            my: 1,
            "&.MuiDivider-root": {
              borderWidth: "2px",
              borderStyle: "solid",
              borderImage: `linear-gradient(to right, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%) 1`,
            },
          }}
        />
        <Stack
          sx={{
            width: 310,
            mx: "auto",
            justifyContent: "center",
            alignItems: "start",
            color: "white",
            gap: 1,
            py: 1,
          }}
        >
          <Typography>Resumen:</Typography>
          <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
            <Typography>{game.teamsAPI.homeAPI.teamAPI.name}</Typography>
            <img
              src={game.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
              width={18}
              height={18}
            />
            <Typography>vs</Typography>
            <img
              src={game.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
              width={18}
              height={18}
            />
            <Typography>{game.teamsAPI.awayAPI.teamAPI.name}</Typography>
          </Stack>
          <Typography>Resultado final:</Typography>
          <Divider
            sx={{
              width: "100%",
              "&.MuiDivider-root": {
                border: "1px solid",
                borderColor: "primary.main",
              },
            }}
          />
          <Typography variant="h6">Puntos totales</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            height: 64,
            justifyContent: "space-around",
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            background: "white",
          }}
        >
          <Typography variant="body2" color="primary" fontWeight="bold">
            Predicciones utilizadas de hoy:
          </Typography>
          <Stack
            direction="row"
            sx={{ color: "primary.main", gap: 1, fontSize: 10 }}
          >
            <FaCircle />
            <FaRegCircle />
            <FaRegCircle />
            <FaRegCircle />
            <FaRegCircle />
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default PredictionsModal;
