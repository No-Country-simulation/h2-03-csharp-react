import { useState } from "react";
import { Box } from "@mui/material";
import RankingsHeader from "./RankingsHeader";
import RankingsBody from "./RankingsBody";

interface RankingData {
  name: string;
  points: number;
}

interface UserData {
  division: "bronze" | "silver" | "gold";
  name: string;
  points: number;
}

const Rankings = () => {
  const [currentUserData] = useState<UserData>({
    division: "bronze",
    name: "Usuario",
    points: 35,
  });

  const [division, setDivision] = useState<UserData["division"]>(
    currentUserData.division
  );

  // Division data stored in an object for easy access
  const divisionData: Record<UserData["division"], RankingData[]> = {
    bronze: [
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
    ].sort((a, b) => b.points - a.points),
    silver: [
      { name: "Sayid", points: 200 },
      { name: "Kate", points: 190 },
      { name: "Jin", points: 180 },
      { name: "Sawyer", points: 170 },
      { name: "Lapidus", points: 160 },
      { name: "Hurley", points: 150 },
      { name: "Sun", points: 140 },
      { name: "Jack", points: 130 },
      { name: "Shannon", points: 120 },
      { name: "Miles", points: 110 },
    ].sort((a, b) => b.points - a.points),
    gold: [
      { name: "Sayid", points: 300 },
      { name: "Kate", points: 290 },
      { name: "Jin", points: 280 },
      { name: "Sawyer", points: 270 },
      { name: "Lapidus", points: 260 },
      { name: "Hurley", points: 250 },
      { name: "Sun", points: 240 },
      { name: "Jack", points: 230 },
      { name: "Shannon", points: 220 },
      { name: "Miles", points: 210 },
    ].sort((a, b) => b.points - a.points),
  };

  return (
    <Box>
      <RankingsHeader
        userDivision={currentUserData.division}
        division={division}
        setDivision={setDivision}
      />
      <RankingsBody
        rankings={divisionData[division]}
        currentUser={currentUserData}
      />
    </Box>
  );
};

export default Rankings;
