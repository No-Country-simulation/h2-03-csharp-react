import { Box, Stack } from "@mui/material";
import landingPageImage2 from "../../../assets/landing-page-image2.svg";
import landingPageWaki from "../../../assets/landing-page-image-waki.svg";
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";

const LpgThirdSection = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={landingPageImage2}
          alt="Foto del token de Mbappe"
          sx={{ marginLeft: "1.5rem", width: "95%" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "80%",
          }}
        >
          <MainButton onClick={() => navigate("/ingresar")}>
            DESCUBRE MÁS
          </MainButton>
        </Box>
      </Box>
      <Box component="img" src={landingPageWaki} alt="Foto de cubos" />
    </Stack>
  );
};

export default LpgThirdSection;
