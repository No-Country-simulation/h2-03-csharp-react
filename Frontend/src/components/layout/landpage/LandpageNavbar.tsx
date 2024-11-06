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
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              background: `linear-gradient(90deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
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
