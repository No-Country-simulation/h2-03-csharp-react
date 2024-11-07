import { Box, Divider, Paper, Typography } from "@mui/material";
import landingPageTokens from "../../../assets/landing-page-tokens.svg";
import { useTheme } from "@mui/material/styles";

const LpgFourthSection = () => {
  const theme = useTheme();
  return (
    <Paper
      elevation={24}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: `linear-gradient(210deg, #ffffff 40%, ${theme.palette.secondary.main} 100%)`,
        marginBottom: "2rem",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
        TOKENS VALIOSOS
      </Typography>
      <Divider
        sx={{
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          width: "90%",
        }}
      />
      <Box
        component="img"
        src={landingPageTokens}
        alt="Foto del token de Mbappe"
      />
    </Paper>
  );
};

export default LpgFourthSection;
