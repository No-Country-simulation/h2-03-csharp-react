import { Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IoIosArrowForward } from "react-icons/io";
import gold from "../../../assets/gold.png";
import silver from "../../../assets/silver.png";
import bronze from "../../../assets/bronze.png";

const RewardsDivisionsCard = () => {
  const theme = useTheme();
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
        border: "1px solid purple",
        borderRadius: "10px",
        margin: "2% auto 0",
        padding: "0 10px 8px",
        width: "30%",
        "@media (max-width: 800px)": {
          width: "100%",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          textAlign={"center"}
          p={1}
          variant="h5"
          width={"100%"}
        >
          ¡Premios todos los meses!
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        p={1}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.primary.dark,
          color: "white",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          mb={1}
          p={1}
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
            borderRadius: "10px",
          }}
        >
          <Box display={"flex"}>
            <img src={gold} height={90} width={80}></img>
          </Box>
          <Box>
            <Typography>División oro</Typography>
            <Typography>Descubre las recompensas</Typography>
            <Typography>de esta división.</Typography>
          </Box>
          <Box display={"flex"}>
            <IoIosArrowForward
              color={theme.palette.secondary.main}
              fontSize={25}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          mb={1}
          p={1}
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
            borderRadius: "10px",
          }}
        >
          <Box display={"flex"}>
            <img src={silver} height={90} width={80}></img>
          </Box>
          <Box>
            <Typography>División oro</Typography>
            <Typography>Descubre las recompensas</Typography>
            <Typography>de esta división.</Typography>
          </Box>
          <Box display={"flex"}>
            <IoIosArrowForward
              color={theme.palette.secondary.main}
              fontSize={25}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          p={1}
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
            borderRadius: "10px",
          }}
        >
          <Box display={"flex"}>
            <img src={bronze} height={90} width={80}></img>
          </Box>
          <Box>
            <Typography>División oro</Typography>
            <Typography>Descubre las recompensas</Typography>
            <Typography>de esta división.</Typography>
          </Box>
          <Box display={"flex"}>
            <IoIosArrowForward
              color={theme.palette.secondary.main}
              fontSize={25}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default RewardsDivisionsCard;
