import { Box } from "@mui/material";
import RankingsHeader from "./RankingsHeader";
import RankingsBody from "./RankingsBody";

const Rankigs = () => {
  return (
    <Box>
      <RankingsHeader division="bronze" />
      <RankingsBody />
    </Box>
  );
};

export default Rankigs;
