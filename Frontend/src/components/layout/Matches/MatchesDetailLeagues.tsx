import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { SlArrowDown } from "react-icons/sl";
import { leagues } from "../../../utils/leagues";
import MatchesMatchBadge from "./MatchesMatchBadge";
import { matches } from "../../../utils/matches";

const MatchesDetailLeagues = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      event.preventDefault();
    };

  return (
    <Paper elevation={3}>
      {leagues.map((league, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={
              <Typography color="primary">
                <SlArrowDown />
              </Typography>
            }
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img width={32} height={32} src={league.src} />
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {league.country}
              </Typography>
              <Typography variant="caption">{league.name}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#F3F4F5" }}>
            <MatchesMatchBadge matchData={matches[0]} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default MatchesDetailLeagues;
