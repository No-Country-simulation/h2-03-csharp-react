import { Box, Typography } from "@mui/material";
import arrowRightLong from "../../../assets/arrow-right-long.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

interface OnboardingContainerProps {
  image: string;
  text: string;
  onClick: () => void;
}

const OnboardingContainer: React.FC<OnboardingContainerProps> = ({
  image,
  text,
  onClick,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={{ cursor: "pointer", position: "relative" }} onClick={onClick}>
      <Typography
        sx={{ position: "absolute", top: "2%", right: "5%", color: "white" }}
        onClick={() => navigate("/partidos")}
      >
        OMITIR
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", height: "90vh" }}>
        <Box
          component="img"
          src={image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            height: "10vh",
            padding: "2rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "white",
              flex: 1,
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {text}
          </Typography>
          <Box component={"img"} src={arrowRightLong} sx={{ width: "40%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingContainer;
