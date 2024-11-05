import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/system";
import { IoIosArrowForward } from "react-icons/io";
import gold from "../../../assets/gold.png";
import silver from "../../../assets/silver.png";
import bronze from "../../../assets/bronze.png";
import DivisionsRewardsDetails from "./Divisions Rewards/DivisionsRewardsDetails";
import shirtPic from "../../../assets/shirt-prize-pic.svg";

interface Prize {
  text: string;
}

interface Player {
  name: string;
  tokens: number;
  price: number;
}

interface DivisionInfo {
  division: string;
  prizes: Prize[];
  players: Player[];
  monthlyPrize: string;
}

const RewardsDivisionsCard = () => {
  const [divisionInfo, setDivisionInfo] = useState<DivisionInfo>({
    division: "",
    prizes: [],
    players: [],
    monthlyPrize: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();

  const BronzeDivisionInfo = {
    division: "bronze",
    prizes: [
      {
        text: "Participa en el sorteo mensual por el premio de la división Bronce",
      },
    ],
    players: [
      { name: "Player 1", tokens: 120, price: 120 },
      { name: "Player 2", tokens: 100, price: 100 },
      { name: "Player 3", tokens: 80, price: 80 },
      { name: "Player 4", tokens: 60, price: 60 },
      { name: "Player 5", tokens: 40, price: 40 },
    ],
    monthlyPrize: shirtPic,
  };

  const SilverDivisionInfo = {
    division: "silver",
    prizes: [
      {
        text: "Participa en el sorteo mensual por el premio de la división Plata",
      },
      {
        text: "Acceso a los tokens de los jugadores de la división Oro y Plata",
      },
    ],
    players: [
      { name: "Player 1", tokens: 120, price: 120 },
      { name: "Player 2", tokens: 100, price: 100 },
      { name: "Player 3", tokens: 80, price: 80 },
      { name: "Player 4", tokens: 60, price: 60 },
      { name: "Player 5", tokens: 40, price: 40 },
    ],
    monthlyPrize: shirtPic,
  };

  const GoldDivisionInfo = {
    division: "gold",
    prizes: [
      {
        text: "El usuario en el primer puesto de esta división ganará el premio del mes",
      },
      {
        text: "Participar en el sorteo mensual por el premio de la división Oro",
      },
      {
        text: "Participa en el sorteo mensual por el premio de la división Plata",
      },
      {
        text: "Acceso a los tokens de los jugadores de la división Oro y Plata",
      },
    ],
    players: [
      { name: "Player 1", tokens: 120, price: 120 },
      { name: "Player 2", tokens: 100, price: 100 },
      { name: "Player 3", tokens: 80, price: 80 },
      { name: "Player 4", tokens: 60, price: 60 },
      { name: "Player 5", tokens: 40, price: 40 },
    ],
    monthlyPrize: shirtPic,
  };

  const handleOpenModal = (division: string) => {
    setDivisionInfo(
      division === "bronze"
        ? BronzeDivisionInfo
        : division === "silver"
        ? SilverDivisionInfo
        : GoldDivisionInfo
    );
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
        opacity: 0.9,
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
          gap: 1,
          p: 1,
          width: "100%",
          backgroundColor: "transparent",
          color: "white",
          zIndex: 1,
        }}
      >
        <Box
          component={"div"}
          sx={cardStyles}
          onClick={() => handleOpenModal("gold")}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              component={"img"}
              src={gold}
              alt="gold reward"
              sx={{ height: "80px", width: "70px" }}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 400 }}
            >
              Descubre las recompensas
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 400 }}
            >
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
        <Box
          component={"div"}
          sx={cardStyles}
          onClick={() => handleOpenModal("silver")}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              component={"img"}
              src={silver}
              alt="silver reward"
              sx={{ height: "80px", width: "70px" }}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 400 }}
            >
              Descubre las recompensas
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 400 }}
            >
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
        <Box
          component={"div"}
          sx={cardStyles}
          onClick={() => handleOpenModal("bronze")}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              component={"img"}
              src={bronze}
              alt="bronze reward"
              sx={{ height: "80px", width: "70px" }}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 400 }}
            >
              Descubre las recompensas
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 400 }}
            >
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
      <DivisionsRewardsDetails
        open={modalOpen}
        onClose={handleCloseModal}
        divisionInfo={divisionInfo}
      />
    </Paper>
  );
};

export default RewardsDivisionsCard;
