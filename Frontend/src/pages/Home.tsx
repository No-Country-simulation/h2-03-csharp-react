import { Stack } from "@mui/material"
import LandpageSection from "../components/layout/landpage/LandpageSection"
import LpgFirstSection from "../components/layout/landpage/LpgFirstSection"

const Home = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center"
      }}
    >
      <LandpageSection>
        <LpgFirstSection/>
      </LandpageSection>
    </Stack>
  );
};

export default Home;
