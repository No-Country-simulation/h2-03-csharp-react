import { Box } from "@mui/material";
import TokensPlayersSearch from "./TokensPlayersSearch";
import TokensMarket from "./TokensMarket";

interface TokensBodyProps {
  view: string;
}

const TokensBody: React.FC<TokensBodyProps> = ({ view }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      {view === "rankings" ? <TokensPlayersSearch /> : <TokensMarket />}
    </Box>
  );
};

export default TokensBody;
