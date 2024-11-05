import { useState } from "react";
import { Box } from "@mui/material";
import RankingsHeader from "./RankingsHeader";
import RankingsBody from "./RankingsBody";

interface Data {
  name: string;
  points: number;
}

const Rankings = () => {
  const [bronzeRankingData] = useState<Data[]>(
    [
      { name: "Sayid", points: 100 },
      { name: "Kate", points: 90 },
      { name: "Jin", points: 80 },
      { name: "Sawyer", points: 70 },
      { name: "Lapidus", points: 60 },
      { name: "Hurley", points: 50 },
      { name: "Sun", points: 40 },
      { name: "Jack", points: 30 },
      { name: "Shannon", points: 20 },
      { name: "Miles", points: 10 },
    ].sort((a, b) => b.points - a.points)
  );
  const [currentUserData] = useState<Data>({ name: "Usuario", points: 35 });
  return (
    <Box>
      <RankingsHeader division="bronze" />
      <RankingsBody
        rankings={bronzeRankingData}
        currentUser={currentUserData}
      />
    </Box>
  );
};

export default Rankings;
