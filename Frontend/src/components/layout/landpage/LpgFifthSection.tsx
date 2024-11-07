import { Box, Typography } from "@mui/material";
import landigPageImage3 from "../../../assets/landing-page-image3.svg";
import landingPageImage4 from "../../../assets/landing-page-image4.svg";
import { useTheme } from "@mui/material/styles";

interface Props {
  users: number;
  prizes: number;
}

const LpgFifthSection: React.FC<Props> = ({ users, prizes }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem",
        marginBottom: "5.5rem",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "900" }}>
        ÚNETE A LA COMUNIDAD
      </Typography>
      <Typography
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.primary.main} -0.04%, ${theme.palette.primary.dark} 99.96%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "96px",
          fontWeight: "900",
        }}
      >
        {users}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: "900" }}>
        USUARIOS REGISTRADOS
      </Typography>
      <Typography
        sx={{
          background: `linear-gradient(180deg, ${theme.palette.primary.main} -0.04%, ${theme.palette.primary.dark} 99.96%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "96px",
          fontWeight: "900",
        }}
      >
        {prizes}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: "900" }}>
        PREMIOS SEMANALES
      </Typography>
      <Box
        component={"img"}
        src={landigPageImage3}
        alt="premios"
        sx={{ width: "100%" }}
      />
      <Box
        component="img"
        src={landingPageImage4}
        alt="foto de Messi con el balón de oro"
        sx={{ margin: "2rem 0" }}
      />
    </Box>
  );
};

export default LpgFifthSection;
