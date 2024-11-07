import { Box, Stack } from "@mui/material";
import landingPageImage2 from "../../../assets/landing-page-image2.svg";
import landingPageCubes from "../../../assets/landing-page-cubes-bg.svg";

const LpgThirdSection = () => {
  return (
    <Stack>
      <Box
        component="img"
        src={landingPageImage2}
        alt="Foto del token de Mbappe"
      />
      <Box component="img" src={landingPageCubes} alt="Foto de cubos" />
    </Stack>
  );
};

export default LpgThirdSection;
