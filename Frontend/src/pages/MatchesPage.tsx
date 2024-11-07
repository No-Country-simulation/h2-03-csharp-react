import { Stack } from "@mui/material";
import MatchesHeader from "../components/layout/Matches/MatchesHeader";
import MatchesSearch from "../components/layout/Matches/MatchesSearchBar";
import MatchesDetail from "../components/layout/Matches/MatchesDetail";
import ComingSoonModal from "../components/modals/Predictions/ComingSoonModal";

const MatchesPage = () => {
  return (
    <Stack>
      <MatchesHeader />
      <MatchesSearch />
      <MatchesDetail />
      <ComingSoonModal />
    </Stack>
  );
};

export default MatchesPage;
