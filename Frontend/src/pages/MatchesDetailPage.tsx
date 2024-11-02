import { useEffect } from "react";
import { Stack } from "@mui/material";
import { useMatchContext } from "../hooks/useMatchContext";
import { useParams } from "react-router-dom";
import { usePredictionsContext } from "../hooks/usePredictionsContext";
import MatchDetailHeader from "../components/layout/MatchDetail/MatchDetailHeader";
import MatchDetailTabs from "../components/layout/MatchDetail/MatchDetailTabs";
import MatchDetailPredictions from "../components/layout/MatchDetail/MatchDetailPredictions";

const MatchDetailPage = () => {
  const { match, setMatchDataByParam } = useMatchContext();
  const { setPredictionDataByParam } = usePredictionsContext();

  const { partidoId } = useParams();

  useEffect(() => {
    if (partidoId) {
      setMatchDataByParam(partidoId);
      setPredictionDataByParam(partidoId);
    }
  }, [setMatchDataByParam, setPredictionDataByParam, partidoId]);

  return (
    match && (
      <Stack>
        <MatchDetailHeader />
        <MatchDetailTabs />
        <MatchDetailPredictions />
      </Stack>
    )
  );
};

export default MatchDetailPage;
