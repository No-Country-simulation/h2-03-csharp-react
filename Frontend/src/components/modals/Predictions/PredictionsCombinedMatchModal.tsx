import Modal from "@mui/material/Modal";
import {
  Backdrop,
  Divider,
  Grid2,
  Paper,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import PredictionsCount from "./PredictionsCount";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { MatchForPredictionsData } from "../../../types/MatchesTypes";
import { useMatchContext } from "../../../hooks/useMatchContext";
import { useDatesContext } from "../../../hooks/useDatesContext";
import PredictionsCombinerTabs from "./PredictionsCombinedTabs";

const PredictionsCombinedMatchModal = ({
  match,
}: {
  match: MatchForPredictionsData;
}) => {
  const theme = useTheme();

  const { matchesForPredictions, setMatchData, matchesForCombined } = useMatchContext();
  const { datePredictionValue } = useDatesContext();

  const {
    winners,
    openModals,
    handleCloseModals,
    handleOpenModals,
  } = usePredictionsContext();


  const handleSetGameAndOpenNext = (match: MatchForPredictionsData) => {
    setMatchData(match);
    handleOpenModals(1);
  };

  return (
    <Modal
      open={openModals === 8 ? true : false}
      onClose={handleCloseModals}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Slide direction="up" in={openModals === 8 ? true : false}>
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
              ¿Con qué vas a combinar?
            </Typography>
            <Typography variant="subtitle1" align="center">
              Elige un partido dentro de los próximos 5 días
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
          <PredictionsCombinerTabs />
          <Stack
            sx={{
              height: 250,
              alignItems: "center",
              gap: 1,
              mt: 5,
              pb: 10,
              overflowY: "auto",
              whiteSpace: "nowrap",
            }}
          >
            {matchesForPredictions
              ?.filter((match) => match.adjustedDate === datePredictionValue)
              .map((match, index) => (
                <Stack
                  onClick={() => handleSetGameAndOpenNext(match)}
                  key={index}
                  sx={{
                    width: 350,
                    background: "white",
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                >
                  <Stack sx={{ height: 30 }}>
                    <Typography align="center" fontWeight="bold">
                      {match.adjustedTime}hs
                    </Typography>
                  </Stack>
                  <Divider
                    sx={{
                      "&.MuiDivider-root": {
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "secondary.main",
                      },
                    }}
                  />
                  <Grid2
                    container
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: 60 }}
                  >
                    <Grid2 size={5} justifyContent="flex-end" container gap={1}>
                      <Typography
                        noWrap
                        variant="caption"
                        sx={{ maxWidth: 100 }}
                      >
                        {match.teamsAPI.homeAPI.teamAPI.name}
                      </Typography>
                      <img
                        src={match.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
                        width={18}
                        height={18}
                      />
                    </Grid2>
                    <Grid2 size={2} justifyContent="center">
                      <Typography color="primary" align="center">
                        VS.
                      </Typography>
                    </Grid2>
                    <Grid2
                      size={5}
                      justifyContent="flex-start"
                      container
                      gap={1}
                    >
                      <img
                        src={match.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
                        width={18}
                        height={18}
                      />
                      <Typography
                        noWrap
                        variant="caption"
                        sx={{ maxWidth: 100 }}
                      >
                        {match.teamsAPI.awayAPI.teamAPI.name}
                      </Typography>
                    </Grid2>
                  </Grid2>
                </Stack>
              ))}
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
              justifyContent: "center",
              alignItems: "start",
              color: "white",
              gap: 1,
              py: 1,
              overflowY: "auto",
              whiteSpace: "nowrap",
            }}
          >
            <Typography>Resumen:</Typography>
            {matchesForCombined.length > 0 &&
              matchesForCombined.map((match, index) => (
                <div key={index}>
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
                  <Stack
                    direction="row"
                    sx={{ width: 300, justifyContent: "space-between" }}
                  >
                    <Typography>
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
            {winners && (
              <Stack
                direction="row"
                sx={{ width: 300, justifyContent: "space-between" }}
              >
                <Typography variant="h6">Puntos totales</Typography>
                <Typography variant="h6">
                  {winners[winners.length - 1] === "home" &&
                    Math.ceil(match.oddsAPI.home * 10)}
                  {winners[winners.length - 1] === "draw" &&
                    Math.ceil(match.oddsAPI.draw * 10)}
                  {winners[winners.length - 1] === "away" &&
                    Math.ceil(match.oddsAPI.away * 10)}
                </Typography>
              </Stack>
            )}
          </Stack>
          {winners && <PredictionsCount />}
        </Paper>
      </Slide>
    </Modal>
  );
};

export default PredictionsCombinedMatchModal;
