import { Box, Button, Typography } from "@mui/material";
import MatchesRecentSearches from "./MatchesRecentSearches";
import MatchesSearchTrends from "./MatchesSearchTrends";
import { useState } from "react";

const recentSearches = [
  "Liverpool",
  "Leo Messi",
  "Aguero barcelona",
  "Champions league",
  "Mo Salah Liverpool",
];

const trends = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Cristiano Ronaldo",
  "Cristiano Ronaldo",
];

const MatchesSearch = () => {
  const [data, setData] = useState({ recentSearches, trends });

  const handleClearRecentSearches = () => {
    const newData: [] = [];
    setData({ recentSearches: newData, trends });
  };

  const handleDeleteRecentSearch = (index: number) => {
    const newData: string[] | [] = data.recentSearches;
    newData.splice(index, 1);
    setData({ recentSearches: newData, trends });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 220,
        width: "100%",
        height: "120%",
        px: 3,
        backgroundColor: "white",
      }}
    >
      <Box sx={{ minHeight: "25vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Busquedas recientes</Typography>
          <Button
            color="primary"
            onClick={handleClearRecentSearches}
            sx={{ textTransform: "none" }}
          >
            Borrar
          </Button>
        </Box>
        {data.recentSearches && (
          <MatchesRecentSearches
            data={data.recentSearches}
            handle={handleDeleteRecentSearch}
          />
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography>Busquedas en tendencia</Typography>
        {data.trends && <MatchesSearchTrends data={data.trends} />}
      </Box>
    </Box>
  );
};

export default MatchesSearch;
