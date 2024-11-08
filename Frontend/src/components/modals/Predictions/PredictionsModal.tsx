import Modal from "@mui/material/Modal";
import {
  Backdrop,
  CircularProgress,
  Divider,
  Paper,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import MainButton from "../../buttons/MainButton";
import SecondaryButton from "../../buttons/SecondaryButton";
import PredictionsCount from "./PredictionsCount";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import PredictionResult from "./PredictionResult";
import { useMatchContext } from "../../../hooks/useMatchContext";
import { useCountBetsContext } from "../../../hooks/useCountBetsContext";

const PredictionsModal = () => {
  const theme = useTheme();

  const {
    match,
    matchesForCombined,
    addMatchesForCombined,
    handleCombinedMatchesReset,
  } = useMatchContext();

  const { fullBets } = useCountBetsContext();

  const {
    currentWinner,
    winners,
    addWinner,
    handleCombinedReset,
    predictionType,
    openModals,
    isLoading,
    handleCloseModals,
    handleCreateBet,
    handleOpenModals,
  } = usePredictionsContext();

  const handleCombined = () => {
    addWinner();
    addMatchesForCombined();
    handleOpenModals(7);
  };

  const handleCloseAndReset = () => {
    handleCloseModals();
    handleCombinedMatchesReset();
    handleCombinedReset();
  };

  return (
    match && (
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
                onClick={handleCloseAndReset}
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
            {predictionType == "result" && <PredictionResult />}
            <Stack
              direction="row"
              sx={{
                width: 300,
                justifyContent: fullBets == false ? "space-between" : "center",
                alignItems: "center",
                my: 3,
                mx: "auto",
                gap: 1,
                mt: currentWinner ? 0 : "10vh",
              }}
            >
              {isLoading ? (
                <Stack sx={{ width: "100%", alignItems: "center" }}>
                  <CircularProgress color="secondary" />
                </Stack>
              ) : (
                <>
                  <MainButton
                    onClick={handleCreateBet}
                    width={150}
                    disabled={!currentWinner ? true : false}
                  >
                    Predecir
                  </MainButton>
                  {fullBets == false && (
                    <SecondaryButton
                      onClick={handleCombined}
                      width={150}
                      disabled={!currentWinner ? true : false}
                    >
                      Hacer combinada
                    </SecondaryButton>
                  )}
                </>
              )}
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
                height: 200,
                mx: "auto",
                justifyContent: "start",
                alignItems: "start",
                color: "white",
                gap: 1,
                pt: 1,
                mt: 5,
                pb: 10,
                overflowY: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <Typography>Resumen:</Typography>
              {matchesForCombined.length > 0 &&
                matchesForCombined.map((match, index) => (
                  <div key={index}>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", gap: 1, mb: 1 }}
                    >
                      <Typography noWrap sx={{ maxWidth: 120 }}>
                        {match.teamsAPI.homeAPI.teamAPI.name}
                      </Typography>
                      <img
                        src={match.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
                        width={18}
                        height={18}
                      />
                      <Typography>vs</Typography>
                      <img
                        src={match.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
                        width={18}
                        height={18}
                      />
                      <Typography noWrap sx={{ maxWidth: 120 }}>
                        {match.teamsAPI.awayAPI.teamAPI.name}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ width: 300, justifyContent: "space-between" }}
                    >
                      <Typography noWrap sx={{ maxWidth: 250 }}>
                        Resultado final:{" "}
                        {winners[index] === "home" &&
                          match.teamsAPI.homeAPI.teamAPI.name}
                        {winners[index] === "draw" && "Empate"}
                        {winners[index] === "away" &&
                          match.teamsAPI.awayAPI.teamAPI.name}
                      </Typography>
                      <Typography>
                        {winners[index] === "home" &&
                          Math.ceil(match.oddsAPI.home * 10)}
                        {winners[index] === "draw" &&
                          Math.ceil(match.oddsAPI.draw * 10)}
                        {winners[index] === "away" &&
                          Math.ceil(match.oddsAPI.away * 10)}
                      </Typography>
                    </Stack>
                  </div>
                ))}
              <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
                <Typography noWrap sx={{ maxWidth: 120 }}>
                  {match.teamsAPI.homeAPI.teamAPI.name}
                </Typography>
                <img
                  src={match.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
                  width={18}
                  height={18}
                />
                <Typography>vs</Typography>
                <img
                  src={match.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
                  width={18}
                  height={18}
                />
                <Typography noWrap sx={{ maxWidth: 120 }}>
                  {match.teamsAPI.awayAPI.teamAPI.name}
                </Typography>
              </Stack>
              {currentWinner && (
                <Stack
                  direction="row"
                  sx={{ width: 300, justifyContent: "space-between" }}
                >
                  <Typography>
                    Resultado final:{" "}
                    {currentWinner === "home" &&
                      match.teamsAPI.homeAPI.teamAPI.name}
                    {currentWinner === "draw" && "Empate"}
                    {currentWinner === "away" &&
                      match.teamsAPI.awayAPI.teamAPI.name}
                  </Typography>
                  <Typography>
                    {currentWinner === "home" &&
                      Math.ceil(match.oddsAPI.home * 10)}
                    {currentWinner === "draw" &&
                      Math.ceil(match.oddsAPI.draw * 10)}
                    {currentWinner === "away" &&
                      Math.ceil(match.oddsAPI.away * 10)}
                  </Typography>
                </Stack>
              )}
              {winners && (
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
              <Stack
                direction="row"
                sx={{ width: 300, justifyContent: "space-between" }}
              >
                <Typography variant="h6">Puntos totales</Typography>
                {matchesForCombined.length == 0 && (
                  <Typography variant="h6">
                    {currentWinner === "home" &&
                      Math.ceil(match.oddsAPI.home * 10)}
                    {currentWinner === "draw" &&
                      Math.ceil(match.oddsAPI.draw * 10)}
                    {currentWinner === "away" &&
                      Math.ceil(match.oddsAPI.away * 10)}
                  </Typography>
                )}
              </Stack>
            </Stack>
            {winners && <PredictionsCount />}
          </Paper>
        </Slide>
      </Modal>
    )
  );
};

export default PredictionsModal;
