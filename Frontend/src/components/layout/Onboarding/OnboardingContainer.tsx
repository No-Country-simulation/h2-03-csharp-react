import { Box, Typography } from "@mui/material";
import arrowRightLong from "../../../assets/arrow-right-long.svg";
import { useTheme } from "@mui/material/styles";

interface OnboardingContainerProps {
  image: string;
  text: string;
  onClick: () => void;
  video?: string;
}

const OnboardingContainer: React.FC<OnboardingContainerProps> = ({
  image,
  text,
  onClick,
  video,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ height: "90vh" }}>
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
            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            height: "10vh",
          }}
          onClick={onClick}
        >
          <Typography
            variant="body1"
            sx={{ color: "white", flex: 1, textAlign: "center" }}
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
