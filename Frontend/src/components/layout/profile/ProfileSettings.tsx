import { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import SwitchButton from "../../buttons/SwitchButton";

const ProfileSettings = () => {
  const [settingsList] = useState([
    "Todoa la comunidad",
    "Amigos de mis amigos",
    "Nadie",
  ]);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        marginBottom: "7rem",
        padding: 2,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
          borderRadius: "10px",
          color: "white",
          padding: "2rem 1.5rem",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="body1">No molestar</Typography>
          <Typography variant="body2">
            Desactiva todas las notifiaciones
          </Typography>
        </Box>
        <SwitchButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
          borderRadius: "10px",
          color: "white",
          gap: 2,
          padding: "2rem 1.5rem",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="body1">
            Recibir solicitudes de amistad
          </Typography>
          <Typography variant="body2">
            Selecciona quién puede enviarte solicitudes de amistad
          </Typography>
        </Box>
        <Autocomplete
          disablePortal
          options={settingsList}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            />
          )}
          sx={{
            backgroundColor: theme.palette.secondary.dark,
            borderRadius: "15px",
            width: "85%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "18px",
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ProfileSettings;
