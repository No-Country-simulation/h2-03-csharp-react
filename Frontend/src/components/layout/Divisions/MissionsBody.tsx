import { Box, Paper, Typography } from "@mui/material";
import MissionsCard from "./MissionsCard";

const MissionsBody = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        borderRadius: "10px",
        width: "30%",
        "@media (max-width: 800px)": { width: "100%" },
      }}
    >
      <Typography sx={{ margin: "12px 0" }}>Logros</Typography>
      <Paper elevation={4} sx={{ borderRadius: "10px", width: "100%" }}>
        <MissionsCard
          mission="Gana 2 apuestas"
          score={1}
          goal={2}
          reward={10}
        />
        <MissionsCard
          mission="Gana 2 apuestas combinadas"
          score={0}
          goal={2}
          reward={10}
        />
        <MissionsCard
          mission="Gana 3 apuestas de goles"
          score={2}
          goal={3}
          reward={10}
        />
        <MissionsCard mission="Gana 10" score={7} goal={10} reward={10} />
        <MissionsCard mission="Gana 8" score={7} goal={8} reward={10} />
        <MissionsCard mission="Gana 4" score={1} goal={4} reward={10} />
      </Paper>
    </Box>
  );
};

export default MissionsBody;
