import { Typography, Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        variant="h1"
        align="center"
        color="primary.light"
        fontWeight="bolder"
      >
        WAKI
      </Typography>
    </Stack>
  );
};

export default Home;
