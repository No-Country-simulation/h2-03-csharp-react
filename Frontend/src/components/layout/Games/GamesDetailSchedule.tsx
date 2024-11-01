import { Box, Divider, Stack } from "@mui/material";
import GamesGameBadgeContainer from "./GamesGameBadgeContainer";
import GamesGameBadge from "./GamesGameBadge";
import { useGameContext } from "../../../hooks/useGameContext";

const GamesDetailSchedule = () => {
  const { games, dateValue } = useGameContext();

  const schedules: string[] | undefined = games
    ?.filter((game) => game.date == dateValue)
    .map((game) => game.time);

  return (
    <Stack>
      {schedules?.map((schedule, index) => (
        <Box key={index} sx={{ minHeight: 200 }}>
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
              .filter((game) => game.date == dateValue)
              .filter((game) => game.time == schedule && game.time)
              .map((game, index) => (
                <GamesGameBadgeContainer
                  key={index}
                  league={game.stageAPI.leagueAPI.name}
                >
                  <GamesGameBadge gameData={game} />
                </GamesGameBadgeContainer>
              ))}
        </Box>
      ))}
    </Stack>
  );
};

export default GamesDetailSchedule;
