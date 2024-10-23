import { useState } from "react";
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
import { leagues } from "../../../utils/leagues";
import { games } from "../../../utils/games";
import GamesGameBadge from "./GamesGameBadge";

const GamesDetailLeagues = () => {
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
              <img width={32} height={32} src={league.src} />
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {league.country}
              </Typography>
              <Typography variant="caption">{league.name}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ minHeight: 150, p: 0 }}>
            {games &&
              games
                .filter((game) => game.league === league.name)
                .map((game, index) => (
                  <div key={index}>
                    <GamesGameBadge gameData={game} />
                    <Divider sx={{ border: "1px solid grey" }} />
                  </div>
                ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default GamesDetailLeagues;
