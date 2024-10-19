import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface DivisionsHeaderProps {
  selected: number;
}

const DivisionsHeader: React.FC<DivisionsHeaderProps> = ({ selected }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `${theme.palette.primary.dark}}`,
        width: "100%",
        color: "white",
        py: 3,
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
          margin: "3% 0 2%",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            ml: 2,
            color: selected === 0 ? "primary.main" : "primary.light",
          }}
        >
          Ranking
        </Typography>
        <Typography
          variant="caption"
          sx={{
            ml: 2,
            color: selected === 1 ? "primary.main" : "primary.light",
          }}
        >
          Recompensas
        </Typography>
        <Typography
          variant="caption"
          sx={{
            ml: 2,
            color: selected === 2 ? "primary.main" : "primary.light",
          }}
        >
          Misiones
        </Typography>
      </Box>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Divider
          sx={{
            width: "33%",
            color: selected === 0 ? "primary.main" : "secondary.dark",
            border: "2px solid",
          }}
        />
        <Divider
          sx={{
            width: "33%",
            color: selected === 1 ? "primary.main" : "secondary.dark",
            border: "2px solid",
          }}
        />
        <Divider
          sx={{
            width: "33%",
            color: selected === 2 ? "primary.main" : "secondary.dark",
            border: "2px solid",
          }}
        />
      </Box>
    </Box>
  );
};

export default DivisionsHeader;
