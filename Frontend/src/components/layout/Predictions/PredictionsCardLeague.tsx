import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMatchContext } from "../../../hooks/useMatchContext";
import { LeagueData } from "../../../types/MatchesTypes";

const PredictionCardLeague = ({ leagueName }: { leagueName: string }) => {
  const [league, setLeague] = useState<LeagueData | undefined>();
  const { leagues } = useMatchContext();

  useEffect(() => {
    const league = leagues?.find((league) => league.name === leagueName);
    if (league) {
      setLeague(league);
    }
  }, [leagueName, leagues]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", pb: 1, gap: 1 }}>
      <img width={18} height={18} src={league?.logoUrl || ""} />
      <Typography variant="caption">{leagueName}</Typography>
    </Box>
  );
};

export default PredictionCardLeague;
