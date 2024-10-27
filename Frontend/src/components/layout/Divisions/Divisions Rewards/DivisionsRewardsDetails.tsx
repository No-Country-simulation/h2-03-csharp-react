import { useState } from "react";
// import { useEffect, useState } from "react";
import { Box, Paper, Typography, Modal, Divider } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import RewardCard from "./RewardCard";
import headerBG from "../../../../assets/division-header-top-bg.svg";
// import bronze from "../../../../assets/bronze.png";
import silver from "../../../../assets/silver.png";
// import gold from "../../../../assets/gold.png";
import shirtPic from "../../../../assets/shirt-prize-pic.svg";
import silverGiftIcon from "../../../../assets/silver-gift-icon.svg";
import dolarIcon from "../../../../assets/dollar-icon.svg";
import theme from "../../../../styles/theme";
import RankingTab from "./RankingTab";

interface DivisionsRewardsDetailsProps {
  open: boolean;
  onClose: () => void;
}

const DivisionsRewardsDetails: React.FC<DivisionsRewardsDetailsProps> = ({
  open,
  onClose,
}) => {
  // const [prizes, setPrizes] = useState([{ icon: "", text: "" }]);
  const [prizes] = useState([
    {
      icon: silverGiftIcon,
      text: "Participa en el sorteo mensual por el premio de la división plata",
    },
    {
      icon: dolarIcon,
      text: "asdafa",
    },
  ]);
  // const [players, setPlayers] = useState([{ name: "", tokens: 0, price: 0 }]);
  const [players] = useState([
    { name: "Player 1", tokens: 0, price: 0 },
    { name: "Player 2", tokens: 0, price: 0 },
    { name: "Player 3", tokens: 0, price: 0 },
    { name: "Player 4", tokens: 0, price: 0 },
    { name: "Player 5", tokens: 0, price: 0 },
  ]);

  // useEffect(() => {
  //   // API call
  //   // setPlayers(response.data);
  //   // setPrizes(response.data);
  // }, []);
  return (
    <Modal open={open} onClose={onClose} hideBackdrop={false}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            height: "100%",
            backgroundColor: "white",
            position: "relative",
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${headerBG})`,
              p: 3,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              <Typography
                variant="body1"
                sx={{ color: "white", margin: "30px 0" }}
              >
                <FaArrowLeftLong /> Recompensas
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ color: "white", mb: 4 }}>
                División Plata
              </Typography>
              <Box
                component="img"
                src={silver}
                alt="plata"
                sx={{ marginBottom: 4 }}
              />
            </Box>
          </Box>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "gray",
              borderRadius: "16px 16px 0 0",
              mt: 2,
              p: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: 2,
              }}
            >
              <Typography color="white" variant="h6">
                Recompensas
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 4,
                  width: "100%",
                }}
              >
                {prizes.map((prize) => (
                  <>
                    <RewardCard
                      icon={prize.icon}
                      alt="ícono de regalo"
                      text={prize.text}
                    />
                    {prizes.length > 1 &&
                      prizes.indexOf(prize) !== prizes.length - 1 && (
                        <Divider
                          sx={{ border: "1px solid gray", width: "100%" }}
                        />
                      )}
                  </>
                ))}
              </Box>
              <Typography color="white" variant="h6">
                Premios del mes
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={shirtPic}
                  alt="shirt"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography color="white" fontSize={"1.2rem"} variant="h6">
                  Tokens división Plata
                </Typography>
                <Typography
                  color={theme.palette.primary.dark}
                  fontSize={"0.8rem"}
                  fontWeight={"bold"}
                  variant="h6"
                >
                  Ir al ranking <FaArrowRightLong />
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 4,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2fr 5fr 2fr 2fr 1fr",
                    padding: 1,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Typography>#</Typography>
                  <Typography sx={{ textAlign: "left" }}>Jugador</Typography>
                  <Typography>Liberados</Typography>
                  <Typography>Precio</Typography>
                  <Box sx={{ display: "none" }} />
                </Box>
                <Divider sx={{ border: "1px solid gray", width: "100%" }} />
                {players.map((player) => (
                  <>
                    <RankingTab
                      position={players.indexOf(player) + 1}
                      player={player.name}
                      released={player.tokens}
                      price={player.price}
                    />
                    {players.length > 1 &&
                      players.indexOf(player) !== players.length - 1 && (
                        <Divider
                          sx={{ border: "1px solid gray", width: "100%" }}
                        />
                      )}
                  </>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Modal>
  );
};

export default DivisionsRewardsDetails;
