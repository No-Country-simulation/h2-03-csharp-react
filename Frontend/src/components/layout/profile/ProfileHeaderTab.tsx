import { Box, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

interface profileHeaderTabProps {
  icon: string;
  text: string | React.ReactNode;
  backgroundColor?: string;
  color?: string;
  onClick: () => void;
}

const ProfileHeaderTab: React.FC<profileHeaderTabProps> = ({
  icon,
  text,
  backgroundColor,
  color = "white",
  onClick,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr 1fr",
        alignItems: "center",
        backgroundColor: { backgroundColor },
        cursor: "pointer",
        padding: "10px 8px 10px 24px",
        textAlign: "center",
        width: "100%",
        "&:hover": {
          opacity: 0.7,
        },
      }}
      onClick={onClick}
    >
      <Box component="img" src={icon} />

      <Typography sx={{ color: { color }, textAlign: "left" }}>
        {text}
      </Typography>
      <Box>
        <IoIosArrowForward color="white" />
      </Box>
    </Box>
  );
};

export default ProfileHeaderTab;
