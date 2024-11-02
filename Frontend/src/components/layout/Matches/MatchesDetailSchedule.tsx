import { Box, Divider, Stack } from "@mui/material";
import MatchesMatchBadgeContainer from "./MatchesMatchBadgeContainer";
import MatchesMatchBadge from "./MatchesMatchBadge";
import { useMatchContext } from "../../../hooks/useMatchContext";
import { convertUtcToLocalTime } from "../../../utils/local-time";

const MatchesDetailSchedule = () => {
  const { matchesForPredictions, dateValue } = useMatchContext();

  const schedules: string[] | undefined = matchesForPredictions
    ?.filter((match) => match.date == dateValue)
    .map((match) => match.time);

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
            {convertUtcToLocalTime(schedule)}
          </Divider>
          {matchesForPredictions &&
            matchesForPredictions
              .filter((match) => match.date == dateValue)
              .filter((match) => match.time == schedule )
              .map((match, index) => (
                <MatchesMatchBadgeContainer
                  key={index}
                  league={match.stageAPI.leagueAPI.name}
                >
                  <MatchesMatchBadge matchData={match} />
                </MatchesMatchBadgeContainer>
              ))}
        </Box>
      ))}
    </Stack>
  );
};

export default MatchesDetailSchedule;
