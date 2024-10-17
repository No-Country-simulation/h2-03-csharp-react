import { Stack } from "@mui/material";
import { matches } from "../../../utils/matches";
import MatchesMatchBadgeContainer from "./MatchesMatchBadgeContainer";
import MatchesMatchBadge from "./MatchesMatchBadge";

const MatchesDetailSchedule = () => {
  return (
    <Stack>
      <section>
        {matches &&
          matches.map((match, index) => (
            <MatchesMatchBadgeContainer league={match.league}>
              <MatchesMatchBadge key={index} matchData={match} />
            </MatchesMatchBadgeContainer>
          ))}
      </section>
      <section></section>
    </Stack>
  );
};

export default MatchesDetailSchedule;
