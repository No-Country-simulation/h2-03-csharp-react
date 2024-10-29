import { Fragment } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import diagonalArrow from "../../../../assets/diagonal-arrow-icon.svg";

interface TrendingChartProps {
  data: string[];
}

const TrendingChart: React.FC<TrendingChartProps> = ({ data }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: "10px",
        margin: "auto auto 6rem auto",
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
            <Box component="img" src={diagonalArrow} alt="clock icon" />
            <Typography
              variant="body1"
              sx={{ flex: 1, fontSize: "14px", margin: "0 auto 0 10px" }}
            >
              {item}
            </Typography>
          </Box>
          {index < 4 && <Divider />}
        </Fragment>
      ))}
    </Paper>
  );
};

export default TrendingChart;
