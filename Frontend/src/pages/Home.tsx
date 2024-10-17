import { Typography, Stack, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        background: `linear-gradient(180deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
      }}
    >
      <Typography
        align="center"
        color="primary.light"
        fontWeight="bolder"
        sx={{ fontSize: 67 }}
      >
        WAKI
      </Typography>
    </Stack>
  );
};

export default Home;
