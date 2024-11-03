import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { SlArrowDown } from "react-icons/sl";
import {
  LeagueData,
  MatchForPredictionsData,
} from "../../../types/MatchesTypes";
import capitalize from "../../../utils/capitalize";
import { useMatchContext } from "../../../hooks/useMatchContext";
import MatchesMatchBadge from "./MatchesMatchBadge";
import { useDatesContext } from "../../../hooks/useDatesContext";

const MatchesDetailLeagues = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const [matchesData, setMatchesData] = useState<
    MatchForPredictionsData[] | undefined
  >([]);

  const { leagues, matchesForPredictions } = useMatchContext();
  const { dateMatchValue } = useDatesContext()

  useEffect(() => {
    setMatchesData(matchesForPredictions);
  }, [matchesForPredictions]);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      if (newExpanded) {
        setMatchesData(matchesForPredictions);
      } else {
        setMatchesData([]);
      }
      event.preventDefault();
    };

  return (
    leagues && (
      <Paper elevation={3}>
        {leagues.map((league: LeagueData, index: number) => {

          return (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              slotProps={{ transition: { unmountOnExit: true } }}
              sx={{
                "&:not(:last-child)": {
                  borderBottom: 0,
                },
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Typography color="primary">
                    <SlArrowDown />
                  </Typography>
                }
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img width={32} height={32} src={league.logoUrl || ""} />
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {capitalize(league.country.name)}
                  </Typography>
                  <Typography variant="caption">{league.name}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ minHeight: 150, p: 0 }}>
                {matchesData &&
                  matchesData
                    .filter((match) => match.adjustedDate === dateMatchValue)
                    .filter(
                      (match) => match.stageAPI.leagueAPI.name === league.name
                    )
                    .map((match, index) => (
                      <div key={index}>
                        <MatchesMatchBadge matchData={match} />
                        <Divider sx={{ border: "1px solid grey" }} />
                      </div>
                    ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Paper>
    )
  );
};

export default MatchesDetailLeagues;
