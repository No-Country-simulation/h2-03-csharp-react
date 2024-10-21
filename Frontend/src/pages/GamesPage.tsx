import { useState } from "react";
import { Stack } from "@mui/material";
import GamesHeader from "../components/layout/Games/GamesHeader";
import GamesSearch from "../components/layout/Games/GamesSearchBar";
import GamesDetail from "../components/layout/Games/GamesDetail";

const GamesPage = () => {
  const [value, setValue] = useState(3);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event.preventDefault();
  };

  return (
    <Stack>
      <GamesHeader value={value} handle={handleChange} />
      <GamesSearch />
      <GamesDetail />
    </Stack>
  );
};

export default GamesPage;
