import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import haderBG from "../../../assets/profile-header-top-bg.svg";
import { FaArrowLeftLong } from "react-icons/fa6";

interface ProfileHeaderProps {
  name: string;
  exit?: boolean;
  onClick?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  exit,
  onClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${haderBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 1,
            color: "white",
            cursor: "pointer",
            margin: "30px 0 0 30px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={onClick}
        >
          {exit ? (
            <Fragment>
              <FaArrowLeftLong /> Perfil
            </Fragment>
          ) : undefined}
        </Typography>
        <Box
          component="img"
          src="https://i.ibb.co/9Q7Gw7H/Profile-1.png"
          sx={{
            borderRadius: "50%",
            height: "200px",
            margin: "15px 0",
            width: "200px",
          }}
        />
        <Typography
          variant="body1"
          sx={{ fontSize: "22px", fontWeight: "700" }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
