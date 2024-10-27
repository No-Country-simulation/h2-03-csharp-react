import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface DivisionsHeaderProps {
  choice: number;
  setChoice: (choice: number) => void;
}

const DivisionsHeader: React.FC<DivisionsHeaderProps> = ({
  // Variables recibidas para cambiar la vista
  choice,
  setChoice,
}) => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        pt: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.primary.dark,
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ ml: 2, color: "primary.main" }}>
        Divisiones
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
          { label: "Recompensas", id: 1 },
          { label: "Misiones", id: 2 },
        ].map(({ label, id }) => (
          <Box
            key={id}
            sx={{
              width: "33.3%",
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

export default DivisionsHeader;
