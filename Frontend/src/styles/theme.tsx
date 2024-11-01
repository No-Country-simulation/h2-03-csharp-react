import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: "#FCFCFC",//Blanco primario
      main: "#8F3BEF",//Violete primario
      dark: "#011027",//Azul primario
    },
    secondary: {
      light: "#F3F4F5",//Gris claro
      main: "#317EF4",//Celeste
      dark: "#181818",//Gris oscuro
      contrastText: "#C694FF"
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
