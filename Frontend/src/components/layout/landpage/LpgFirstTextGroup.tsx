import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LpgFirstTextGroup = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginRight: "10%",
        textAlign: "left",
        width: "30%",
        zIndex: 1,
        "@media (max-width: 800px)": { marginRight: 0, width: "100%" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontSize: "40px",
          fontWeight: "900",
        }}
      >
        SIENTE LA
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "40px",
          fontWeight: "900",
          background: `linear-gradient(90deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ADRENALINA
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontSize: "40px",
          fontWeight: "900",
        }}
      >
        DEL FÚTBOL
      </Typography>
    </Box>
  );
};

export default LpgFirstTextGroup;
