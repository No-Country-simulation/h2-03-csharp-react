import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface DivisionsHeaderProps {
  choice: number;
  setChoice: (choice: number) => void;
}
const DivisionsHeader: React.FC<DivisionsHeaderProps> = ({
  choice,
  setChoice,
}) => {
  const theme = useTheme();
  return (
    <Box
      component="header"
      width={"100%"}
      pt={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `${theme.palette.primary.dark}}`,
        color: "white",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ ml: 2, color: "primary.main" }}>
          Divisiones
        </Typography>
      </Box>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Box
          width={"33.3%"}
          onClick={() => setChoice(0)}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            variant="caption"
            mb={3}
            mt={3}
            sx={{
              ml: 2,
              color: choice === 0 ? "primary.main" : "primary.light",
            }}
          >
            Ranking
          </Typography>
          <Divider
            sx={{
              width: "100%",
              color: choice === 0 ? "primary.main" : "secondary.dark",
              border: "2px solid",
            }}
          />
        </Box>
        <Box
          width={"33.3%"}
          onClick={() => setChoice(1)}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            mb={3}
            mt={3}
            variant="caption"
            sx={{
              ml: 2,
              color: choice === 1 ? "primary.main" : "primary.light",
            }}
          >
            Recompensas
          </Typography>
          <Divider
            sx={{
              width: "100%",
              color: choice === 1 ? "primary.main" : "secondary.dark",
              border: "2px solid",
            }}
          />
        </Box>
        <Box
          width={"33.3%"}
          onClick={() => setChoice(2)}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            mb={3}
            mt={3}
            variant="caption"
            sx={{
              ml: 2,
              color: choice === 2 ? "primary.main" : "primary.light",
            }}
          >
            Misiones
          </Typography>
          <Divider
            sx={{
              width: "100%",
              color: choice === 2 ? "primary.main" : "secondary.dark",
              border: "2px solid",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DivisionsHeader;
