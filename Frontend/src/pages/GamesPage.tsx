import { Stack } from "@mui/material";
import GamesHeader from "../components/layout/Games/GamesHeader";
import GamesSearch from "../components/layout/Games/GamesSearchBar";
import GamesDetail from "../components/layout/Games/GamesDetail";

const GamesPage = () => {
  return (
    <Stack>
      <GamesHeader />
      <GamesSearch />
      <GamesDetail />
    </Stack>
  );
};

export default GamesPage;
