import { Box, Stack } from "@mui/material";
import landingPageImage from "../../../assets/lading-page-image1.svg";

const LpgSecondSection = () => {
  return (
    <Stack sx={{ padding: "2rem 0.5rem 2rem 1rem" }}>
      <Box
        component="img"
        src={landingPageImage}
        alt="Foto de Emiliano Martinez con descripción de predicciones"
      ></Box>
    </Stack>
  );
};

export default LpgSecondSection;
