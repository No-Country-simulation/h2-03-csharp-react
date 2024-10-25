import { Box, Divider, Paper, Typography } from "@mui/material";
import ProfileHeaderTab from "./ProfileHeaderTab";
import friendActivityIcon from "../../../assets/friends-activity-icon.svg";
import friendsIcon from "../../../assets/friends-icon.svg";
import addFriendIcon from "../../../assets/add-friends-icon.svg";
import userDataIcon from "../../../assets/user-data-icon.svg";
import walletIcon from "../../../assets/wallet-icon.svg";
import { useTheme } from "@mui/material/styles";
import bottomBG from "../../../assets/profile-body-bot-bg.svg";

interface ProfileHomeBodyProps {
  onClick: (setView: string) => void;
}

const ProfileHomeBody: React.FC<ProfileHomeBodyProps> = ({ onClick }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: `url(${bottomBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        padding: "1.5rem 1.5rem 7rem 1.5rem",
        width: "100%",
      }}
    >
      <Typography sx={{ margin: "0 0 1rem" }}>Comunidad Waki</Typography>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `linear-gradient(90deg,#327EF3, ${theme.palette.secondary.dark})`,
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <ProfileHeaderTab
          icon={friendActivityIcon}
          text="Actividad de amigos"
          bgColor="primary.light"
          onClick={() => onClick("activities")}
        ></ProfileHeaderTab>
        <Divider
          sx={{ border: "none", borderTop: "1px solid white", width: "100%" }}
        />
        <ProfileHeaderTab
          icon={friendsIcon}
          text="Amigos"
          bgColor="primary.light"
          onClick={() => onClick("friends")}
        ></ProfileHeaderTab>
        <Divider
          sx={{ border: "none", borderTop: "1px solid white", width: "100%" }}
        />

        <ProfileHeaderTab
          icon={addFriendIcon}
          text="Agregar amigos"
          bgColor="primary.light"
          onClick={() => onClick("addFriend")}
        ></ProfileHeaderTab>
      </Paper>
      <Typography sx={{ margin: "1rem 0 1rem" }}>Mi cuenta</Typography>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `linear-gradient(270deg,${theme.palette.primary.dark}, #8F3BEF)`,
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <ProfileHeaderTab
          icon={userDataIcon}
          text="Mis datos"
          bgColor="primary.light"
          onClick={() => onClick("profileData")}
        ></ProfileHeaderTab>
        <Divider
          sx={{ border: "none", borderTop: "1px solid white", width: "100%" }}
        />
        <ProfileHeaderTab
          icon={walletIcon}
          text="Mi cuenta"
          bgColor="primary.light"
          onClick={() => onClick("profileSettings")}
        ></ProfileHeaderTab>
        <Divider
          sx={{ border: "none", borderTop: "1px solid white", width: "100%" }}
        />
        <ProfileHeaderTab
          icon={walletIcon}
          text="Mi cuenta"
          bgColor="primary.light"
          onClick={() => onClick("profileSettings")}
        ></ProfileHeaderTab>
      </Paper>
    </Box>
  );
};

export default ProfileHomeBody;
