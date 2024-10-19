import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RankingsHeader from "./RankingsHeader";
import RankingsBody from "./RankingsBody";

const Rankigs = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        p: 3,
        mb: 3,
      }}
    >
      <RankingsHeader division="bronce" />
      <RankingsBody />
    </Box>
  );
};

export default Rankigs;
