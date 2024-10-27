import React from "react";
import { Box } from "@mui/material";
import Rankings from "./Rankings";
import Rewards from "./Rewards";
import Missions from "./Missions";

interface DivisionProps {
  view: string;
}

const DivisionsBody: React.FC<DivisionProps> = ({ view }) => {
  let bodyComponent;
  // Muestra diferentes componentes dependiendo del valor de la variable recibida desde el Header y transformada a texto en el DivisionsPage
  if (view === "rankings") {
    bodyComponent = <Rankings />;
  } else if (view === "rewards") {
    bodyComponent = <Rewards />;
  } else if (view === "missions") {
    bodyComponent = <Missions />;
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
