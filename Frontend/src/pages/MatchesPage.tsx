import { Stack } from "@mui/material";
import MatchesHeader from "../components/layout/Matches/MatchesHeader";
import MatchesSearch from "../components/layout/Matches/MatchesSearchBar";
import MatchesDetail from "../components/layout/Matches/MatchesDetail";

const MatchesPage = () => {
  return (
    <Stack>
      <MatchesHeader />
      <MatchesSearch />
      <MatchesDetail />
    </Stack>
  );
};

export default MatchesPage;
