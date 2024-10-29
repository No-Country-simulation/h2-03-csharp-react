import { Box, Divider, Typography } from "@mui/material";
import headerBG from "../../../assets/tokens-header-top-bg.svg";

interface TokensHeaderProps {
  choice: number;
  setChoice: (choice: number) => void;
}

const TokensHeader: React.FC<TokensHeaderProps> = ({
  // Variables recibidas para cambiar la vista
  choice,
  setChoice,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${headerBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: 3,
      }}
    >
      <Typography variant="h6" sx={{ ml: 2, color: "primary.main" }}>
        Scout Players
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {[
          { label: "Ranking", id: 0 },
          { label: "Market", id: 1 },
        ].map(({ label, id }) => (
          <Box
            key={id}
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            onClick={() => setChoice(id)}
          >
            <Typography
              variant="caption"
              sx={{
                mb: 3,
                mt: 3,
                ml: 2,
                color: choice === id ? "primary.main" : "primary.light",
              }}
            >
              {label}
            </Typography>
            <Divider
              sx={{
                width: "100%",
                color: choice === id ? "primary.main" : "secondary.dark",
                border: "2px solid",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TokensHeader;
