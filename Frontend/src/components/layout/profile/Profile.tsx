import { useState } from "react";
import { Box } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import ProfileHomeStats from "./ProfileHomeStats";
import ProfileHomeBody from "./ProfileHomeBody";
import Activities from "./Activities";
import AddFriend from "./AddFriend";
import FriendsHeader from "./FriendsHeader";
import FriendsBody from "./FriendsBody";
import ProfileData from "./ProfileData";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  const [view, setView] = useState("home");
  let viewTitle = view;

  const userData = {
    name: "Usuario",
    predictions: 24,
    wins: 14,
    tokens: 2,
    addFriendCode: 14011222,
  };
  const [predictions] = useState(24);
  const [wins] = useState(14);
  const [tokens] = useState(2);
  let component;

  if (view === "home") {
    viewTitle = userData.name;
    component = <ProfileHomeBody onClick={setView} />;
  } else if (view === "activities") {
    viewTitle = "Actividades de mis amigos";
    component = <Activities />;
  } else if (view === "addFriend") {
    viewTitle = "Agregar amigo";
    component = <AddFriend userCode={userData.addFriendCode} />;
  } else if (view === "friends") {
    viewTitle = "Amigos";
    component = <FriendsBody />;
  } else if (view === "profileData") {
    viewTitle = "Mis datos";
    component = <ProfileData />;
  } else if (view === "profileSettings") {
    viewTitle = "Ajustes";
    component = <ProfileSettings />;
  }

  return (
    <Box
      sx={{
        margin: "auto",
        width: "30%",
        "@media (max-width: 800px)": { width: "100%" },
      }}
    >
      <ProfileHeader
        name={viewTitle}
        exit={view !== "home"}
        onClick={() => setView("home")}
      />
      {view === "home" && (
        <ProfileHomeStats
          predictions={predictions}
          wins={wins}
          tokens={tokens}
        />
      )}
      {view === "friends" && <FriendsHeader />}
      {component}
    </Box>
  );
};

export default Profile;
