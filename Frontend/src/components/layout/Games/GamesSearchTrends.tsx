import { Box, Divider, Paper, Typography } from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";

interface GamesSearchTrends {
  data: string[];
}

const GamesSearchTrends: React.FC<GamesSearchTrends> = ({ data }) => {
  return (
    <Paper elevation={4} sx={{ mt: 1, px: 2, borderRadius: 3 }}>
      {data.map((result: string, index: number) => (
        <Box key={index}>
          {index > 0 && <Divider />}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                py: 1.5,
              }}
            >
              <BsArrowUpRight color="#B1B1B1" />
              <Typography>{result}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default GamesSearchTrends;
