import { Box, Paper, Typography, Modal, Divider } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import RewardCard from "./RewardCard";
import headerBG from "../../../../assets/division-header-top-bg.svg";
import bronze from "../../../../assets/bronze.png";
import silver from "../../../../assets/silver.png";
import gold from "../../../../assets/gold.png";
import silverGiftIcon from "../../../../assets/silver-gift-icon.svg";
import goldenGiftIcon from "../../../../assets/golden-gift-icon.svg";
import firstPlaceRibbonIcon from "../../../../assets/first-place-ribbon-icon.svg";
import dolarIcon from "../../../../assets/dollar-icon.svg";
import theme from "../../../../styles/theme";
import RankingTab from "./RankingTab";

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

interface DivisionsRewardsDetailsProps {
  divisionInfo: DivisionInfo;
  open: boolean;
  onClose: () => void;
}

const DivisionsRewardsDetails: React.FC<DivisionsRewardsDetailsProps> = ({
  divisionInfo,
  open,
  onClose,
}) => {
  const handleIcon = (text: string) => {
    switch (true) {
      case text.includes("mes"):
        return firstPlaceRibbonIcon;
      case text.includes("mensual") && text.includes("Plata"):
        return silverGiftIcon;
      case text.includes("mensual") && text.includes("Oro"):
        return goldenGiftIcon;
      case text.includes("mensual") && text.includes("Bronce"):
        return silverGiftIcon;
      case text.includes("tokens"):
        return dolarIcon;
      default:
        return "";
    }
  };

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
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: "30px 0",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
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
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 4,
                }}
              >
                División{" "}
                {divisionInfo.division === "bronze"
                  ? "Bronce"
                  : divisionInfo.division === "silver"
                  ? "Plata"
                  : "Oro"}
              </Typography>
              <Box
                component="img"
                src={
                  divisionInfo.division === "bronze"
                    ? bronze
                    : divisionInfo.division === "silver"
                    ? silver
                    : gold
                }
                alt="plata"
                sx={{ height: "111px", marginBottom: "2rem", width: "94px" }}
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
              <Typography
                color="white"
                variant="body1"
                sx={{ fontSize: "18px", fontWeight: 500 }}
              >
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
                {divisionInfo.prizes.map((prize) => (
                  <>
                    <RewardCard
                      icon={handleIcon(prize.text)}
                      alt="reward icon"
                      text={prize.text}
                    />
                    {divisionInfo.prizes.length > 1 &&
                      divisionInfo.prizes.indexOf(prize) !==
                        divisionInfo.prizes.length - 1 && (
                        <Divider
                          sx={{ border: "1px solid gray", width: "100%" }}
                        />
                      )}
                  </>
                ))}
              </Box>
              <Typography
                color="white"
                variant="body1"
                sx={{ fontSize: "18px", fontWeight: 500 }}
              >
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
                  src={divisionInfo.monthlyPrize}
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
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontSize: "18px", fontWeight: 500 }}
                >
                  Tokens división{" "}
                  {divisionInfo.division === "bronze"
                    ? "Bronce"
                    : divisionInfo.division === "silver"
                    ? "Plata"
                    : "Oro"}
                </Typography>
                <Typography
                  color={theme.palette.primary.dark}
                  variant="body1"
                  sx={{ fontSize: "14px", fontWeight: 600 }}
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
                  <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
                    #
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      textAlign: "left",
                    }}
                  >
                    Jugador
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
                    Liberados
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
                    {" "}
                    Precio
                  </Typography>
                  <Box sx={{ display: "none" }} />
                </Box>
                <Divider sx={{ border: "1px solid gray", width: "100%" }} />
                {divisionInfo.players.map((player) => (
                  <>
                    <RankingTab
                      position={divisionInfo.players.indexOf(player) + 1}
                      player={player.name}
                      released={player.tokens}
                      price={player.price}
                    />
                    {divisionInfo.players.length > 1 &&
                      divisionInfo.players.indexOf(player) !==
                        divisionInfo.players.length - 1 && (
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
