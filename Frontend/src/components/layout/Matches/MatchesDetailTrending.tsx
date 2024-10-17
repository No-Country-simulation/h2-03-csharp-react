import { Stack } from "@mui/material";
import MatchesMatchBadge from "./MatchesMatchBadge";
import { matches } from "../../../utils/matches";
import MatchesMatchBadgeContainer from "./MatchesMatchBadgeContainer";

const MatchesDetailTrending = () => {
  return (
    <Stack>
      {matches &&
        matches.map((match, index) => (
          <MatchesMatchBadgeContainer key={index} league={match.league}>
            <MatchesMatchBadge matchData={match} />
          </MatchesMatchBadgeContainer>
        ))}
    </Stack>
  );
};

export default MatchesDetailTrending;
