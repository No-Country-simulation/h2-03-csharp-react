import { Box, Stack } from "@mui/material";
import landingPageImage2 from "../../../assets/landing-page-image2.svg";
import landingPageWaki from "../../../assets/landing-page-image-waki.svg";
import MainButton from "../../buttons/MainButton";

const LpgThirdSection = () => {
  return (
    <Stack>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={landingPageImage2}
          alt="Foto del token de Mbappe"
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <MainButton>DESCUBRE MÁS</MainButton>
        </Box>
      </Box>
      <Box component="img" src={landingPageWaki} alt="Foto de cubos" />
    </Stack>
  );
};

export default LpgThirdSection;
