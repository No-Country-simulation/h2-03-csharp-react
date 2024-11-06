import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";

const LandpageNavbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "transparent",
        padding: "1rem",
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: `2px solid ${theme.palette.primary.main}`,
            paddingBottom: "1rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              background: `linear-gradient(90deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
              fontSize: "29px",
              fontWeight: "900",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WAKI
          </Typography>
          <MainButton onClick={() => navigate("/ingresar")}>
            Ingresar
          </MainButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LandpageNavbar;
