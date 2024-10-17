import { useState } from "react";
import { Box } from "@mui/material";
import MatchesDetailFilterBar from "./MatchesDetailFilterBar";
import MatchesDetailLeagues from "./MatchesDetailLeagues";
import MatchesDetailSchedule from "./MatchesDetailSchedule";

const MatchesDetail = () => {
  const [details, setDetail] = useState("Ligas");

  const handleSelect = (label: string) => {
    setDetail(label);
  };

  return (
    <Box sx={{ px: 3, mb: 15 }}>
      <MatchesDetailFilterBar label={details} handle={handleSelect} />
      {details == "Ligas" && <MatchesDetailLeagues />}
      {details == "Horario" && <MatchesDetailSchedule />}
    </Box>
  );
};

export default MatchesDetail;