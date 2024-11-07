import { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MatchForPredictionsData } from "../../../types/MatchesTypes";
import { IoStatsChartSharp } from "react-icons/io5";
import { useMatchContext } from "../../../hooks/useMatchContext";
import GameStatsModal from "../../modals/Matches/MatchStatsModal";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { useCountBetsContext } from "../../../hooks/useCountBetsContext";

interface MatchesMatchBadgeProps {
  matchData: MatchForPredictionsData;
}

const MatchesMatchBadge: React.FC<MatchesMatchBadgeProps> = ({ matchData }) => {
  const [openStats, setOpenStats] = useState(false);

  const handleOpenStats = () => setOpenStats(true);
  const handleCloseStats = () => setOpenStats(false);

  const navigate = useNavigate();

  const { countFutureBetsByDay } = useCountBetsContext();
  const { setMatchData, match } = useMatchContext();
  const {
    setPredictionWinner,
    openModals,
    handleOpenModals,
    handlePredictionType,
  } = usePredictionsContext();

  const handleGameDetail = () => {
    if (!openStats && !openModals) {
      navigate(`/partidos/${matchData.entityPublicKey}`);
    }
  };

  const handleShowStats = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleOpenStats();
    event.stopPropagation();
  };

  const handleShowPredic = (
    event: React.MouseEvent<HTMLSpanElement>,
    selected: string
  ) => {
    if (match?.winner == "tbd" || countFutureBetsByDay !== 2) {
      setMatchData(matchData);
      setPredictionWinner(selected);
      handlePredictionType("result");
      handleOpenModals(2);
      event.stopPropagation();
    } else if (countFutureBetsByDay == 2) {
      handleOpenModals(6)
    }
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
              src={matchData.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
              width={55}
              height={55}
            />
            <Typography noWrap variant="caption" sx={{ maxWidth: 120 }}>
              {matchData.teamsAPI.homeAPI.teamAPI.name}
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
              {matchData.winner === "tbd"
                ? matchData.adjustedTime
                : `${matchData.homeFtGoals} - ${matchData.awayFtGoals}`}
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
              src={matchData.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
              width={55}
              height={55}
            />
            <Typography noWrap variant="caption" sx={{ maxWidth: 120 }}>
              {matchData.teamsAPI.awayAPI.teamAPI.name}
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
            <Typography variant="caption">{matchData.oddsAPI.home}</Typography>
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
            <Typography variant="caption">{matchData.oddsAPI.draw}</Typography>
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
            <Typography variant="caption">{matchData.oddsAPI.away}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <GameStatsModal
        open={openStats}
        handleClose={handleCloseStats}
        match={matchData}
      />
    </div>
  );
};

export default MatchesMatchBadge;
