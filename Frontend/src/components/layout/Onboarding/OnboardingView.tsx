import { useState } from "react";
import { Box } from "@mui/material";
import onb1 from "../../../assets/onb-1.svg";
import onb2 from "../../../assets/onb-2.svg";
import onb3 from "../../../assets/onb-3.svg";
import onb4 from "../../../assets/onb-4.svg";
import onb5 from "../../../assets/onb-5.svg";
import OnboardingContainer from "./OnboardingContainer";
import { useNavigate } from "react-router-dom";

const OnboardingView = () => {
  const [choice, setChoice] = useState(0);
  const choices = [
    {
      component: onb1,
      text: "PREDICE",
    },
    {
      component: onb2,
      text: "COMPRA",
    },
    {
      component: onb3,
      text: "TOKENS",
    },
    {
      component: onb4,
      text: "PREMIOS",
    },
    {
      component: onb5,
      text: "COMENZAR",
    },
  ];
  const navigate = useNavigate();

  const handleChoice = () => {
    if (choice < 4) {
      setChoice(choice + 1);
    } else {
      navigate("/partidos");
    }
  };

  return (
    <Box>
      <OnboardingContainer
        image={choices[choice].component}
        text={choices[choice].text}
        onClick={handleChoice}
      />
    </Box>
  );
};

export default OnboardingView;
