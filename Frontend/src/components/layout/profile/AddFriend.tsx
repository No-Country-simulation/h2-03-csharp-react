import { useState } from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import MainButton from "../../buttons/MainButton";
import SearchBar from "./SearchBar";

const AddFriend = () => {
  const [userCode] = useState(14011222);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "flex-start",
        backgroundImage: `linear-gradient(90deg,#327EF3, ${theme.palette.secondary.dark})`,
        borderRadius: "10px",
        color: "white",
        gap: 1,
        padding: "1rem 1rem 2rem",
        width: "100%",
      }}
    >
      <Typography variant="body1">Tu código de amigo</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: "0.5rem 2rem",
          gap: 2,
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
          {userCode}
        </Typography>
        <MainButton children="Copiar" onClick={() => {}} />
      </Box>
      <Typography variant="body2">
        Introducir el código de amigo para invitarlo a conectarse.
      </Typography>
      <Typography variant="body1" sx={{ paddingTop: "1.5rem" }}>
        Intenta buscar a tu amigo
      </Typography>
      <SearchBar />
    </Box>
  );
};

export default AddFriend;
