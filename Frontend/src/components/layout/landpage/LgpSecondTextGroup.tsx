import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LpgSecondTextGroup = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: "0 10%",
        textAlign: "right",
        width: "30%",
        zIndex: 1,
        "@media (max-width: 800px)": { marginLeft: 0, width: "100%" },
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
        ¡Haz tus
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontSize: "38px",
          fontWeight: "900",
        }}
      >
        PREDICCIONES Y
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontSize: "40px",
          fontWeight: "900",
        }}
      >
        GANA{" "}
        <span style={{ color: theme.palette.secondary.main }}>GRANDES</span>
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontSize: "40px",
          fontWeight: "900",
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        PREMIOS!
      </Typography>
    </Box>
  );
};

export default LpgSecondTextGroup;
