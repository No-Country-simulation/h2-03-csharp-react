import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import { LuClock9 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

interface GamesRecentSearchesProps {
  data: string[];
  handle: (index: number) => void;
}

const GamesRecentSearches: React.FC<GamesRecentSearchesProps> = ({
  data,
  handle,
}) => {
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
              <LuClock9 color="#B1B1B1" />
              <Typography>{result}</Typography>
            </Box>
            <IconButton color="primary" onClick={() => handle(index)}>
              <RxCross2 />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default GamesRecentSearches;
