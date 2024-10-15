import { Box, Typography } from "@mui/material";

const PredictionCardLeague = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pb: 1, gap: 1 }}>
      <img
        width={18}
        height={18}
        src="https://th.bing.com/th/id/OIP.YuliVJebcNdkDLlL5ZSkXgAAAA?rs=1&pid=ImgDetMain"
      />
      <Typography variant="caption">Liga española</Typography>
    </Box>
  );
};

export default PredictionCardLeague;
