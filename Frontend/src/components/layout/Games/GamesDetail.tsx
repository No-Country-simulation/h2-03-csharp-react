import { useState } from "react";
import { Box } from "@mui/material";
import GamesDetailFilterBar from "./GamesDetailFilterBar";
import GamesDetailLeagues from "./GamesDetailLeagues";
import GamesDetailSchedule from "./GamesDetailSchedule";
import GamesDetailTrending from "./GamesDetailTrending";

const GamesDetail = () => {
  const [details, setDetail] = useState("Ligas");

  const handleSelect = (label: string) => {
    setDetail(label);
  };

  return (
    <Box sx={{ px: 3, mb: 15 }}>
      <GamesDetailFilterBar label={details} handle={handleSelect} />
      {details == "Ligas" && <GamesDetailLeagues />}
      {details == "Horario" && <GamesDetailSchedule />}
      {details == "Trending" && <GamesDetailTrending />}
    </Box>
  );
};

export default GamesDetail;
