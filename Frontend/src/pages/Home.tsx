import { useEffect } from "react";
import { Typography, Stack, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/UserContext";

const Home = () => {
  const theme = useTheme();

  const { state } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.token) {
      navigate("/partidos");
    }
  }, [state, navigate]);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        background: `linear-gradient(180deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
      }}
    >
      <Typography
        align="center"
        color="primary.light"
        fontWeight="bolder"
        sx={{ fontSize: 67 }}
      >
        WAKI
      </Typography>
      <Typography
        align="center"
        color="primary.light"
        fontWeight="bolder"
        sx={{ fontSize: 30 }}
      >
        <Link
          to="/ingresar"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Ingresar |{" "}
        </Link>
        <Link
          to="/predicciones"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Predicciones |{" "}
        </Link>
        <Link
          to="/partidos"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Partidos |{" "}
        </Link>
        <Link
          to="/divisiones"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Divisiones |{" "}
        </Link>
        <Link to="/tokens" style={{ textDecoration: "none", color: "inherit" }}>
          Tokens
        </Link>
      </Typography>
    </Stack>
  );
};

export default Home;
