import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { SlArrowDown } from "react-icons/sl";
import GamesGameBadge from "./GamesGameBadge";
import predictions from "../../../services/predictions";
import { GameData } from "../../../context/GameContext";

interface League {
  leagueId: number;
  name: string;
  logoUrl: string | null;
}

const GamesDetailLeagues = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const [leagues, setLeagues] = useState<League[]>([]);
  const [games, setGames] = useState<GameData[]>([]);
  const [loadingGames, setLoadingGames] = useState(false);

  useEffect(() => {
    predictions.getLeagues().then((res) => setLeagues(res?.data));
  }, []);

  const fetchGames = async (index: number) => {
    const leagueId = leagues[index].leagueId;
    setLoadingGames(true);

    predictions
      .getGamesByLeague(leagueId)
      .then((res) => setGames(res.data.items))
      .finally(() => setLoadingGames(false));
  };

  const handleChange =
    (panel: number) =>
    async (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      if (newExpanded) {
        fetchGames(panel);
      } else {
        setGames([]);
      }
      event.preventDefault();
    };

  return (
    leagues && (
      <Paper elevation={3}>
        {leagues.map((league, index) => (
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
                  {"Pais"}
                </Typography>
                <Typography variant="caption">{league.name}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ minHeight: 150, p: 0 }}>
              {loadingGames && (
                <Skeleton variant="rectangular" width="100%" height={150} />
              )}
              {!loadingGames &&
                games.map((game, index) => (
                  <div key={index}>
                    <GamesGameBadge gameData={game} />
                    <Divider sx={{ border: "1px solid grey" }} />
                  </div>
                ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    )
  );
};

export default GamesDetailLeagues;
