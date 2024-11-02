import { Box, Stack, useTheme } from "@mui/material";
import MatchNavButton from "../../buttons/MatchNavButton";
import MatchDetailResult from "./MatchDetailResult";

const MatchDetailHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `radial-gradient(88.6% 55.7% at 21.5% 50%, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        width: "100%",
        color: "white",
        pt: 6,
        pb: 3,
      }}
    >
      <MatchNavButton />
      <Stack>
        <MatchDetailResult />
      </Stack>
    </Box>
  );
};

export default MatchDetailHeader;
