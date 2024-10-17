import { Typography, Stack, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        background: `linear-gradient(180deg, ${theme.palette.primary.main} -0.04%, ${theme.palette.secondary.main} 99.96%)`,
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
