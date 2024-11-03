import { useEffect, useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import MatchesMatchBadgeContainer from "./MatchesMatchBadgeContainer";
import MatchesMatchBadge from "./MatchesMatchBadge";
import { useMatchContext } from "../../../hooks/useMatchContext";
import { useDatesContext } from "../../../hooks/useDatesContext";
import { MatchForPredictionsData } from "../../../types/MatchesTypes";
import { compareTimes } from "../../../utils/compare-times";

interface GroupedMatches {
  [key: string]: MatchForPredictionsData[];
}

const MatchesDetailSchedule = () => {
  const [groupedMatches, setGroupedMatches] =
    useState<Record<string, MatchForPredictionsData[]>>();
  const { matchesForPredictions } = useMatchContext();
  const { dateMatchValue } = useDatesContext();

  useEffect(() => {
    const filterMatchesByExactTime = (matches: MatchForPredictionsData[]) => {
      return matches
        .filter((match) => match.date == dateMatchValue)
        .sort((a, b) => compareTimes(a.time, b.time))
        .reduce((groups, match) => {
          const time = match.adjustedTime;

          if (time && !groups[time]) {
            groups[time] = [];
            groups[time].push(match);
          }
          return groups;
        }, {} as GroupedMatches);
    };

    if (matchesForPredictions) {
      setGroupedMatches(filterMatchesByExactTime(matchesForPredictions));
    }
  }, [matchesForPredictions, dateMatchValue]);

  return (
    <Stack>
      {groupedMatches &&
        Object.entries(groupedMatches).map(([time, matches], index) => (
          <Box key={index} sx={{ minHeight: 200 }}>
            <Divider
              key={index}
              textAlign="left"
              sx={{
                my: 1,
                "&.MuiDivider-root::before": { display: "none" },
                "&.MuiDivider-root::after": {
                  borderColor: "primary.dark",
                },
              }}
            >
              {time}
            </Divider>
            {matches.map((match, index) => (
              <MatchesMatchBadgeContainer
                key={index}
                leagueIcon={match.stageAPI.leagueAPI.logoUrl || ""}
                leagueName={match.stageAPI.leagueAPI.name}
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
