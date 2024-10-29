import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PlayerSearchBar from "./search components/PlayerSearchBar";
import SearchHistory from "./search components/SearchHistory";
import TrendingChart from "./search components/TrendingChart";
import TokensPlayersRanking from "./TokensPlayersRanking";

const TokensPlayersSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearchs] = useState([
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Mbappe",
    "Jugador 4",
    "Jugador 5",
  ]);

  const handleSearchSubmit = () => {
    if (searchQuery && !recentSearches.includes(searchQuery)) {
      setRecentSearches((prev) => [searchQuery, ...prev]);
    }
    setSearchQuery("");
  };

  const handleDelete = (index: number) => {
    setRecentSearches((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        width: "30%",
        "@media (max-width: 768px)": {
          width: "100%",
        },
      }}
    >
      {!isTyping && (
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            margin: "0.5rem auto 0 1.5rem",
          }}
        >
          Ranking de jugadores
        </Typography>
      )}
      <PlayerSearchBar
        setSearchQuery={setSearchQuery}
        isTyping={setIsTyping}
        onSubmit={handleSearchSubmit}
      />
      {isTyping ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 1,
              width: "90%",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Búsquedas recientes
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "400",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => setRecentSearches([])}
            >
              Borrar
            </Typography>
          </Box>

          <SearchHistory data={recentSearches} onDelete={handleDelete} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: 1,
              width: "90%",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Búsquedas en tendencia
            </Typography>
          </Box>
          <TrendingChart data={trendingSearchs} />
        </>
      ) : (
        <TokensPlayersRanking />
      )}
    </Box>
  );
};

export default TokensPlayersSearch;
