import { useState } from "react";
import { Stack } from "@mui/material";
import MatchesHeader from "../components/layout/Matches/MatchesHeader";
import MatchesSearch from "../components/layout/Matches/MatchesSearchBar";
import MatchesDetail from "../components/layout/Matches/MatchesDetail";

const MatchesPage = () => {
  const [value, setValue] = useState(3);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event.preventDefault();
  };

  return (
    <Stack>
      <MatchesHeader value={value} handle={handleChange} />
      <MatchesSearch />
      <MatchesDetail />
    </Stack>
  );
};

export default MatchesPage;
