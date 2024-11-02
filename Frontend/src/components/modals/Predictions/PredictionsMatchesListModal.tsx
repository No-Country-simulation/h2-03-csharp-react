import { useEffect } from "react";
import {
  Backdrop,
  Divider,
  Grid2,
  Modal,
  Paper,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import GamesSearchBar from "../../layout/Matches/MatchesSearchBar";
import { useMatchContext } from "../../../hooks/useMatchContext";
import dates from "../../../utils/predictions-tab-dates";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { MatchForPredictionsData } from "../../../types/MatchesTypes";

const PredictionsMatchesListModal = () => {
  const theme = useTheme();
  const { match, matchesForPredictions, dateValue, setMatchData } =
    useMatchContext();
  const {
    openModals,
    handleCloseModals,
    handleOpenModals,
    setPredictionDataByParam,
  } = usePredictionsContext();

  useEffect(() => {
    if (match) {
      setPredictionDataByParam(match?.entityPublicKey);
    }
  }, [match, setPredictionDataByParam]);

  const handleSetGameAndOpenNext = (match: MatchForPredictionsData) => {
    setMatchData(match);
    handleOpenModals(1);
  };

  return (
    <Modal
      open={openModals === 0 ? true : false}
      onClose={handleCloseModals}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Slide direction="up" in={openModals === 0 ? true : false}>
        <Paper
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100vh",
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
              {dateValue &&
                `Elige un partido de ${dates.dateFormat(dateValue)}`}
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
          <GamesSearchBar search="game" />
          <Stack
            sx={{
              height: "75vh",
              alignItems: "center",
              gap: 1,
              mt: 5,
              pb: 10,
              overflowY: "auto",
              whiteSpace: "nowrap",
            }}
          >
            {matchesForPredictions
              ?.filter((match) => match.date === dateValue)
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
                      {match.time}hs
                    </Typography>
                  </Stack>
                  <Divider
                    sx={{
                      "&.MuiDivider-root": {
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.main",
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
        </Paper>
      </Slide>
    </Modal>
  );
};

export default PredictionsMatchesListModal;
