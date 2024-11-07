import Box from "@mui/material/Box";
import Spline from "@splinetool/react-spline";
import LandpageNavbar from "./LandpageNavbar";
import LpgTeamsSlider from "./LpgTeamsSlider";
import LpgFirstTextGroup from "./LpgFirstTextGroup";
import { Stack } from "@mui/material";
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";
import LpgSecondTextGroup from "./LpgSecondTextGroup";

const LpgFirstSection = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        position: "relative",
        height: "100vh",
        justifyContent: "center",
        background: "black",
        margin: "0",
        "@media (max-width: 800px)": {
          height: "95vh",
        },
      }}
    >
      <Spline
        scene="https://prod.spline.design/BQaBZbFbtTUK3GQe/scene.splinecode"
        style={{ position: "absolute", inset: "0px", zIndex: 0 }}
      />
      <LandpageNavbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          gap: 4,
        }}
      >
        <LpgFirstTextGroup />
        <LpgSecondTextGroup />
        <MainButton onClick={() => navigate("/ingresar")}>
          Empieza a jugar ahora
        </MainButton>
      </Box>
      <LpgTeamsSlider />
    </Stack>
  );
};

export default LpgFirstSection;
