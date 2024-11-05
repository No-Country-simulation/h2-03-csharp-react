import { useState } from "react";
import {
  Autocomplete,
  Box,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import MainButton from "../../buttons/MainButton";
import addFriendsIcon from "../../../assets/add-friends-icon.svg";
import ProfileHeaderTab from "./ProfileHeaderTab";
import userIcon from "../../../assets/user-icon.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const FriendsHeader = () => {
  const [friends] = useState([
    {
      userPhoto: userIcon,
      userName: "Sucre",
      online: true,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Michael",
      online: false,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Sarah",
      online: true,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Mahone",
      online: true,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Gretchen",
      online: false,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Theodore",
      online: false,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Lincoln",
      online: false,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Wyatt",
      online: true,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Bellick",
      online: false,
      // userID: "123456789",
    },
    {
      userPhoto: userIcon,
      userName: "Self",
      online: false,
      // userID: "123456789",
    },
  ]);
  const [onlineFriends] = useState(friends.filter((friend) => friend.online));
  const [offlineFriends] = useState(friends.filter((friend) => !friend.online));
  const friendsList = friends.map((option) => option.userName);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Autocomplete
        disablePortal
        options={friendsList}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaMagnifyingGlass /> Buscar amigos
              </Box>
            }
          />
        )}
        sx={{
          backgroundColor: theme.palette.secondary.light,
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
      <MainButton icon={addFriendsIcon} children="Agregar amigos" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.dark})`,
          borderRadius: "10px",
          color: "white",
          padding: "1.5rem 1.5rem 6rem",
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ margin: "0 0 1rem" }}>
          En línea
        </Typography>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          {onlineFriends.map((friend) => (
            <>
              <ProfileHeaderTab
                key={friend.userName}
                // icon={friend.userPhoto}
                color="black"
                icon={userIcon}
                text={friend.userName}
                // onClick={{friend.userID}}
                onClick={() => {}}
              />
              {friends.length > 1 &&
                friends.indexOf(friend) !== friends.length - 1 && (
                  <Divider
                    sx={{
                      border: "none",
                      borderTop: `1px solid ${theme.palette.secondary.main}`,
                      width: "100%",
                    }}
                  />
                )}
            </>
          ))}
        </Paper>
        <Typography variant="h6" sx={{ margin: "1rem 0 1rem" }}>
          Amigos
        </Typography>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          {offlineFriends.map((friend) => (
            <>
              <ProfileHeaderTab
                key={friend.userName}
                // icon={friend.userPhoto}
                color="black"
                icon={userIcon}
                text={friend.userName}
                // onClick={{friend.userID}}
                onClick={() => {}}
              />
              {friends.length > 1 &&
                friends.indexOf(friend) !== friends.length - 1 && (
                  <Divider
                    sx={{
                      border: "none",
                      borderTop: `1px solid ${theme.palette.secondary.main}`,
                      width: "100%",
                    }}
                  />
                )}
            </>
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default FriendsHeader;
