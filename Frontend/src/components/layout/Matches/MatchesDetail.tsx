import { useState } from "react";
import { Box } from "@mui/material";
import MatchesDetailFilterBar from "./MatchesDetailFilterBar";
import MatchesDetailLeagues from "./MatchesDetailLeagues";
import MatchesDetailSchedule from "./MatchesDetailSchedule";
import MatchesDetailTrending from "./MatchesDetailTrending";
import PredictionAddedModal from "../../modals/Predictions/PredictionAddedModal";
import PredictionsModal from "../../modals/Predictions/PredictionsModal";
import { useMatchContext } from "../../../hooks/useMatchContext";
import PredictionsCombinedModal from "../../modals/Predictions/PredictionsCombinedModal";
import PredictionsCombinedMatchModal from "../../modals/Predictions/PredictionsCombinedMatchModal";
import PredictionsByDayModal from "../../modals/Predictions/PredictionsByDayModal";
import PredictionStopModal from "../../modals/Predictions/PredictionStopModal";

const MatchesDetail = () => {
  const [details, setDetail] = useState("Ligas");
  const { match } = useMatchContext();

  const handleSelect = (label: string) => {
    setDetail(label);
  };

  return (
    <Box sx={{ px: 3, mb: 15 }}>
      <MatchesDetailFilterBar label={details} handle={handleSelect} />
      {details == "Ligas" && <MatchesDetailLeagues />}
      {details == "Horario" && <MatchesDetailSchedule />}
      {details == "Trending" && <MatchesDetailTrending />}
      {match && <PredictionsModal />}
      {match && <PredictionsCombinedModal match={match} />}
      {match && <PredictionsCombinedMatchModal match={match} />}
      {match && <PredictionsByDayModal />}
      <PredictionStopModal />
      <PredictionAddedModal />
    </Box>
  );
};

export default MatchesDetail;
