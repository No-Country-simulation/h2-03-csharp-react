import { Box, TextField, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import MainButton from "../../buttons/MainButton";
import SearchBar from "./SearchBar";

interface AddFriendProps {
  userCode: number;
}

const AddFriend: React.FC<AddFriendProps> = ({ userCode }) => {
  const theme = useTheme();

  const copyUserCode = () => {
    navigator.clipboard.writeText(userCode.toString());
  };

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
        padding: "1rem 1.5rem 2rem",
        width: "100%",
      }}
    >
      <Typography variant="body1" sx={{ fontSize: "18px", fontWeight: "600" }}>
        Tu código de amigo
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
          gap: 2,
          width: "100%",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "32px",
            fontWeight: "400",
          }}
        >
          {userCode}
        </Typography>
        <MainButton children="Copiar" width="60%" onClick={copyUserCode} />
      </Box>
      <Typography variant="body1" sx={{ fontSize: "12px", fontWeight: "500" }}>
        Introducir el código de amigo para invitarlo a conectarse.
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        sx={{ backgroundColor: "white", borderRadius: "8px" }}
      />
      <Typography
        variant="body1"
        sx={{ fontSize: "18px", fontWeight: "600", paddingTop: "1.5rem" }}
      >
        Intenta buscar a tu amigo
      </Typography>
      <SearchBar width="90%" />
    </Box>
  );
};

export default AddFriend;
