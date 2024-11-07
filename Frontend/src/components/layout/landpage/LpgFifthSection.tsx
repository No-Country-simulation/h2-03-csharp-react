import { Box, Typography } from "@mui/material";
import landigPageImage3 from "../../../assets/landing-page-image3.svg";
import landingPageImage4 from "../../../assets/landing-page-image4.svg";
import { useTheme } from "@mui/material/styles";
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";

interface Props {
  users: number;
  prizes: number;
}

const LpgFifthSection: React.FC<Props> = ({ users, prizes }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem",
        marginBottom: "3.5rem",
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
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src={landigPageImage3}
          alt="premios"
          sx={{ marginLeft: "1rem", width: "100%" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "90%",
          }}
        >
          <MainButton onClick={() => navigate("/ingresar")}>
            JUGAR AHORA
          </MainButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={landingPageImage4}
          alt="foto de Messi con el balón de oro"
          sx={{ margin: "2rem 0" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "15%",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "800" }}
          >
            TU NUEVO LUGAR
          </Typography>
          <Typography
            sx={{
              background: `linear-gradient(180deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "23px",
              fontWeight: "800",
            }}
          >
            EL FUTBOL TE ESPERA EN WAKI
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "75%",
          }}
        >
          <MainButton onClick={() => navigate("/ingresar")}>
            SUMATE A LA PASIÓN
          </MainButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LpgFifthSection;
