import React from "react";
import { Box } from "@mui/material";
import Rankings from "./Rankings";
import Rewards from "./Rewards";
import Quests from "./Quests";

interface DivisionProps {
  view: string;
}

const DivisionsBody: React.FC<DivisionProps> = ({ view }) => {
  let bodyComponent;
  if (view === "rankings") {
    bodyComponent = <Rankings />;
  } else if (view === "rewards") {
    bodyComponent = <Rewards />;
  } else if (view === "quests") {
    bodyComponent = <Quests />;
  }
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        p: 3,
        mb: 3,
      }}
    >
      {bodyComponent}
    </Box>
  );
};

export default DivisionsBody;
