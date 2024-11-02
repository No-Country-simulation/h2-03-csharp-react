import { Stack, useTheme } from "@mui/material";
import LandpageSection from "../components/layout/landpage/LandpageSection"

const Home = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        background: "black",
      }}
    >
      <LandpageSection/>
    </Stack>
  );
};

export default Home;
