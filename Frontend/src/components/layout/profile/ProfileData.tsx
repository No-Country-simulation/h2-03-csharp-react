import { Box, TextField, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

const ProfileData = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "white",
        gap: 2,
        padding: "2rem 3rem 8rem",
        backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
        width: "100%",
      }}
    >
      <Typography variant="body2">Nombre</Typography>
      <TextField
        variant="outlined"
        placeholder="Introduce tu nombre"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "100%",
        }}
      />
      <Typography variant="body2">Apellido</Typography>
      <TextField
        variant="outlined"
        placeholder="Introduce tu apellido"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "100%",
        }}
      />
      <Typography variant="body2">Email</Typography>
      <TextField
        variant="outlined"
        placeholder="Introduce tu email"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "100%",
        }}
      />
      <Typography variant="body2">Teléfono</Typography>
      <TextField
        variant="outlined"
        placeholder="Introduce tu número de teléfono"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "100%",
        }}
      />
      <Typography variant="body2">Provincia</Typography>
      <TextField
        variant="outlined"
        placeholder="Introduce tu provincia"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default ProfileData;
