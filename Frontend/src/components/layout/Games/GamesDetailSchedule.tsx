import { Box, Divider, Stack } from "@mui/material";
import { games } from "../../../utils/games";
import GamesGameBadgeContainer from "./GamesGameBadgeContainer";
import GamesGameBadge from "./GamesGameBadge";

const GamesDetailSchedule = () => {
  const schedules = ["En vivo", "Entre tiempo"];

  return (
    <Stack>
      {schedules.map((schedule, index) => (
        <Box sx={{ minHeight: 200 }}>
          <Divider
            key={index}
            textAlign="left"
            sx={{
              my: 1,
              "&.MuiDivider-root::before": { display: "none" },
              "&.MuiDivider-root::after": { borderColor: "primary.dark" },
            }}
          >
            {schedule}
          </Divider>
          {games &&
            games
              .filter((game) => game.state == schedule && game.state )
              .map((game, index) => (
                <GamesGameBadgeContainer key={index} league={game.league}>
                  <GamesGameBadge gameData={game} />
                </GamesGameBadgeContainer>
              ))}
        </Box>
      ))}
    </Stack>
  );
};

export default GamesDetailSchedule;
