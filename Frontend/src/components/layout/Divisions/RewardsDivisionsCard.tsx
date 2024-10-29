import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { alpha } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { IoIosArrowForward } from "react-icons/io";
import gold from "../../../assets/gold.png";
import silver from "../../../assets/silver.png";
import bronze from "../../../assets/bronze.png";
import DivisionsRewardsDetails from "./Divisions Rewards/DivisionsRewardsDetails";

const RewardsDivisionsCard = () => {
  const theme = useTheme();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const cardStyles = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    mb: 1,
    p: 1,
    background: `linear-gradient(90deg, ${alpha(
      theme.palette.primary.main,
      0.7
    )}, ${alpha(theme.palette.secondary.dark, 0.7)})`,
    borderRadius: "10px",
    padding: "1.5rem 0.8rem",
    "@media (max-width: 768px)": {
      padding: "0.6rem 0.8rem",
    },
    cursor: "pointer",
  };

  return (
    <Paper
      elevation={2}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(225deg, #222945, ${theme.palette.secondary.dark})`,
        border: "1px solid purple",
        borderRadius: "10px",
        margin: "2% auto 0",
        padding: "0 10px 8px",
        overflow: "hidden",
        width: "30%",
        "@media (max-width: 800px)": {
          width: "100%",
        },
      }}
    >
      {/* Esquina derecha superior */}
      <Box
        sx={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "300px",
          height: "300px",
          backgroundColor: theme.palette.primary.dark,
          rotate: "45deg",
        }}
      />
      {/* Esquina izquierda inferior */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "300px",
          height: "300px",
          backgroundColor: theme.palette.primary.dark,
          rotate: "45deg",
        }}
      />
      <Box
        sx={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          textAlign="center"
          p={1}
          variant="h5"
          width="100%"
          sx={{ position: "relative", zIndex: 5 }}
        >
          ¡Premios todos los meses!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          width: "100%",
          backgroundColor: "transparent",
          color: "white",
          zIndex: 1,
        }}
      >
        <Box sx={cardStyles} onClick={handleOpenModal}>
          <Box sx={{ display: "flex" }}>
            <img src={gold} alt="gold reward" height={90} width={70} />
          </Box>
          <Box>
            <Typography pl={2} fontSize={14}>
              Descubre las recompensas
            </Typography>
            <Typography pl={2} fontSize={14}>
              de esta división.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IoIosArrowForward
              color={theme.palette.secondary.main}
              fontSize={25}
            />
          </Box>
        </Box>
        <Box sx={cardStyles} onClick={handleOpenModal}>
          <Box sx={{ display: "flex" }}>
            <img src={silver} alt="silver reward" height={90} width={70} />
          </Box>
          <Box>
            <Typography pl={2} fontSize={14}>
              Descubre las recompensas
            </Typography>
            <Typography pl={2} fontSize={14}>
              de esta división.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IoIosArrowForward
              color={theme.palette.secondary.main}
              fontSize={25}
            />
          </Box>
        </Box>
        <Box sx={cardStyles} onClick={handleOpenModal}>
          <Box sx={{ display: "flex" }}>
            <img src={bronze} alt="bronze reward" height={90} width={70} />
          </Box>
          <Box>
            <Typography pl={2} fontSize={14}>
              Descubre las recompensas
            </Typography>
            <Typography pl={2} fontSize={14}>
              de esta división.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IoIosArrowForward
              color={theme.palette.secondary.main}
              fontSize={25}
            />
          </Box>
        </Box>
      </Box>
      <DivisionsRewardsDetails open={modalOpen} onClose={handleCloseModal} />
    </Paper>
  );
};

export default RewardsDivisionsCard;
