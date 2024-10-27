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
import GamesGameBadge from "./GamesGameBadge";
import { GameData } from "../../../context/GameContext";
import { useGameContext } from "../../../hooks/useGameContext";
import setLeagueIcon from "../../../utils/league-set-icons";

const GamesDetailLeagues = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const [gamesData, setGamesData] = useState<GameData[] | undefined>([]);

  const { leagues, games, dateValue } = useGameContext();

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      if (newExpanded) {
        setGamesData(games);
      } else {
        setGamesData([]);
      }
      event.preventDefault();
    };

  return (
    leagues && (
      <Paper elevation={3}>
        {leagues.map((league, index) => {
          const icon = setLeagueIcon(league.name);
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
                  <img width={32} height={32} src={league.logoUrl || icon} />
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {league.country}
                  </Typography>
                  <Typography variant="caption">{league.name}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ minHeight: 150, p: 0 }}>
                {gamesData &&
                  gamesData
                    .filter((game) => game.date === dateValue)
                    .filter(
                      (game) => game.stageAPI.leagueAPI.name === league.name
                    )
                    .map((game, index) => (
                      <div key={index}>
                        <GamesGameBadge gameData={game} />
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

export default GamesDetailLeagues;
