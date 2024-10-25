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
  const [predictions] = useState(24);
  const [wins] = useState(14);
  const [tokens] = useState(2);
  let component;

  if (view === "home") {
    component = <ProfileHomeBody onClick={setView} />;
  } else if (view === "activities") {
    component = <Activities />;
  } else if (view === "addFriend") {
    component = <AddFriend />;
  } else if (view === "friends") {
    component = <FriendsBody />;
  } else if (view === "profileData") {
    component = <ProfileData />;
  } else if (view === "profileSettings") {
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
        name="Usuario"
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
