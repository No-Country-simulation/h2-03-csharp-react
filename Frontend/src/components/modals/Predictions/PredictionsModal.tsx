import Modal from "@mui/material/Modal";
import {
  Backdrop,
  Divider,
  Paper,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { GameData } from "../../../context/GameContext";
import { RxCross1 } from "react-icons/rx";
import MainButton from "../../buttons/MainButton";
import SecondaryButton from "../../buttons/SecondaryButton";
import PredictionsCount from "./PredictionsCount";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import PredictionResult from "./PredictionResult";

const PredictionsModal = ({ game }: { game: GameData }) => {
  const theme = useTheme();

  const {
    winner,
    predictionType,
    openModals,
    handleCloseModals,
    handleCreateBet
  } = usePredictionsContext();

  return (
    <Modal
      open={openModals === 2 ? true : false}
      onClose={handleCloseModals}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Slide direction="up" in={openModals === 2 ? true : false}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 0,
            width: "100%",
            minHeight: "75vh",
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
              onClick={handleCloseModals}
              sx={{ cursor: "pointer" }}
            >
              <RxCross1 />
            </Typography>
            <Typography variant="h5" align="center">
              {predictionType == "result"
                ? "Predice el resultado"
                : "¿Qué jugador anota gol?"}
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
          {predictionType == "result" && <PredictionResult game={game} />}
          <Stack
            direction="row"
            sx={{
              width: 300,
              justifyContent: "space-between",
              my: 3,
              mx: "auto",
              gap: 1,
              mt: winner ? 0 : "10vh",
            }}
          >
            <MainButton
              onClick={handleCreateBet}
              width={150}
              disabled={!winner ? true : false}
            >
              Predecir
            </MainButton>
            <SecondaryButton width={150} disabled={!winner ? true : false}>
              Hacer combinada
            </SecondaryButton>
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
              flexGrow: 1,
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
              <Typography noWrap sx={{ maxWidth: 120 }}>
                {game.teamsAPI.homeAPI.teamAPI.name}
              </Typography>
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
              <Typography noWrap sx={{ maxWidth: 120 }}>
                {game.teamsAPI.awayAPI.teamAPI.name}
              </Typography>
            </Stack>
            {winner && (
              <Stack
                direction="row"
                sx={{ width: 300, justifyContent: "space-between" }}
              >
                <Typography>Resultado final:</Typography>
                <Typography>
                  {winner === "home" && Math.ceil(game.oddsAPI.home * 10)}
                  {winner === "draw" && Math.ceil(game.oddsAPI.draw * 10)}
                  {winner === "away" && Math.ceil(game.oddsAPI.away * 10)}
                </Typography>
              </Stack>
            )}
            {winner && (
              <Divider
                sx={{
                  width: "100%",
                  "&.MuiDivider-root": {
                    border: "1px solid",
                    borderColor: "primary.main",
                  },
                }}
              />
            )}
            {winner && (
              <Stack
                direction="row"
                sx={{ width: 300, justifyContent: "space-between" }}
              >
                <Typography variant="h6">Puntos totales</Typography>
                <Typography variant="h6">
                  {winner === "home" && Math.ceil(game.oddsAPI.home * 10)}
                  {winner === "draw" && Math.ceil(game.oddsAPI.draw * 10)}
                  {winner === "away" && Math.ceil(game.oddsAPI.away * 10)}
                </Typography>
              </Stack>
            )}
          </Stack>
          {winner && <PredictionsCount />}
        </Paper>
      </Slide>
    </Modal>
  );
};

export default PredictionsModal;
