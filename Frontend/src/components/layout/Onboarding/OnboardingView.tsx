import { Box } from "@mui/material";
import onb1 from "../../../assets/onb-1.svg";
import onb2 from "../../../assets/onb-2.svg";
import onb3 from "../../../assets/onb-3.svg";
import onb4 from "../../../assets/onb-4.svg";
import onb5 from "../../../assets/onb-5.svg";
import onbVideo from "../../../assets/videos/onb-bg.mp4";
import OnboardingContainer from "./OnboardingContainer";

const OnboardingView = () => {
  return (
    <Box>
      <OnboardingContainer image={onb1} text="Predice" onClick={() => {}} />
    </Box>
  );
};

export default OnboardingView;
