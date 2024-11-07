import { useEffect } from "react";
import { useUserContext } from "../hooks/UserContext";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import LpgFirstSection from "../components/layout/landpage/LpgFirstSection";
import LpgSecondSection from "../components/layout/landpage/LpgSecondSection";
import freeBetsBgText from "../assets/free-bets-bg-text.svg";
import LpgThirdSection from "../components/layout/landpage/LpgThirdSection";
import LpgFourthSection from "../components/layout/landpage/LpgFourthSection";
import LpgFifthSection from "../components/layout/landpage/LpgFifthSection";

const Home = () => {
  const { state } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.token) {
      navigate("/partidos");
    }
  }, [state, navigate]);

  return (
    <Stack>
      <LpgFirstSection />
      <LpgSecondSection />
      <Box component={"img"} src={freeBetsBgText} alt="free-bets-bg-text" />
      <LpgThirdSection />
      <LpgFourthSection />
      <LpgFifthSection users={10000} prizes={200} />
    </Stack>
  );
};

export default Home;
