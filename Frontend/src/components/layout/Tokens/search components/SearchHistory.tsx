import { Fragment } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import clock from "../../../../assets/clock-icon.svg";
import xIcon from "../../../../assets/x-icon.svg";

interface SearchHistoryProps {
  data: string[];
  onDelete: (index: number) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ data, onDelete }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: "10px",
        margin: "auto",
        width: "90%",
      }}
    >
      {data.slice(0, 5).map((item, index) => (
        <Fragment key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "8px 10px",
            }}
          >
            <Box component="img" src={clock} alt="clock icon" />
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", margin: "0 auto 0 10px" }}
            >
              {item}
            </Typography>
            <Box
              component="img"
              src={xIcon}
              alt="x icon"
              onClick={() => onDelete(index)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          {index < 4 && <Divider />}
        </Fragment>
      ))}
    </Paper>
  );
};

export default SearchHistory;
