import { Box, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import ProfileHeaderTab from "./ProfileHeaderTab";
import userIcon from "../../../assets/user-icon.svg";

const Activities = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.dark})`,
        borderRadius: "10px",
        color: "white",
        padding: "1.5rem",
        width: "100%",
      }}
    >
      <Typography variant="h6">En línea</Typography>
      <ProfileHeaderTab
        icon={userIcon}
        text="Cuenta"
        bgColor="white"
        onClick={() => {}}
      />
    </Box>
  );
};

export default Activities;
