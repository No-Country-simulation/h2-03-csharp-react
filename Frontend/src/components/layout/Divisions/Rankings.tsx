import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import RankingsHeader from "./RankingsHeader";
import RankingsBody from "./RankingsBody";

const Rankigs = () => {
  // const theme = useTheme();
  return (
    <Box>
      <RankingsHeader division="bronze" />
      <RankingsBody />
    </Box>
  );
};

export default Rankigs;
