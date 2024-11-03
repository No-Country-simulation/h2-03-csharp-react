import { useState } from "react";
import { Box, Typography, Modal, Divider } from "@mui/material";
import headerBG from "../../../assets/tokens-header-top-bg.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import messiProfPic from "../../../assets/messi-profile-pic.svg";
import profPicBG from "../../../assets/profile-pic-bg.svg";
import PlayerDetails from "./PlayerDetails";
import PlayerTokens from "./PlayerTokens";
import { useTheme } from "@mui/material/styles";
import argFlag from "../../../assets/arg-flag.svg";

interface TokenViewerModalProps {
  open: boolean;
  handleClose: () => void;
  position: number;
  name: string;
  div: string;
  tokens: number;
  price: number;
}

const TokenViewerModal: React.FC<TokenViewerModalProps> = ({
  open,
  handleClose,
  name,
}) => {
  const [choice, setChoice] = useState(0);
  const [player] = useState({
    nationality: "Argentina",
    flag: argFlag,
    age: 37,
    position: "Delantero",
    goals: 672,
    matches: 779,
    minutes: 779,
    assists: 779,
    yellowCards: 12,
    redCards: 12,
    achievements: [
      { description: "Balón de oro", date: "2019" },
      { description: "Citación a selección nacional", date: "2019" },
      { description: "Citación a selección nacional", date: "2019" },
      { description: "Citación a selección nacional", date: "2019" },
      { description: "Copa América", date: "2019" },
    ],
  });
  const theme = useTheme();
  return (
    <Modal open={open} onClose={handleClose}>
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
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            height: "100%",
            backgroundColor: "white",
            backgroundImage: `url(${headerBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Box
            onClick={handleClose}
            color="secondary"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor: "pointer",
              margin: "5% 0 0 5%",
              zIndex: 5,
            }}
          >
            <FaArrowLeftLong size={20} color="white" />{" "}
            <Typography
              sx={{
                color: "white",
                ml: 1,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Scout players
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "3% auto 1%",
              position: "relative",
              height: "200px",
              width: "200px",
            }}
          >
            <Box
              component="img"
              src={profPicBG}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              src={messiProfPic}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "160%",
                height: "160%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: 1.5,
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "secondary.dark",
              cursor: "pointer",
              paddingTop: 1.5,
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "50%" }}
              onClick={() => setChoice(0)}
            >
              <Typography
                sx={{
                  color: choice == 0 ? "primary.main" : "white",
                  paddingBottom: 1.5,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Detalles
              </Typography>
              <Divider
                sx={{
                  border:
                    choice == 0
                      ? `2px solid ${theme.palette.primary.main}`
                      : null,
                }}
              />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "50%" }}
              onClick={() => setChoice(1)}
            >
              <Typography
                sx={{
                  color: choice == 1 ? "primary.main" : "white",
                  paddingBottom: 1.5,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Token
              </Typography>
              <Divider
                sx={{
                  border:
                    choice == 1
                      ? `2px solid ${theme.palette.primary.main}`
                      : null,
                }}
              />
            </Box>
          </Box>
          {choice == 0 ? <PlayerDetails player={player} /> : <PlayerTokens />}
        </Box>
      </Box>
    </Modal>
  );
};

export default TokenViewerModal;

{
  /* <Box
          onClick={handleClose}
          color="secondary"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            margin: "5% 0 0 5%",
          }}
        >
          <FaArrowLeftLong size={20} color="white" />{" "}
          <Typography
            sx={{
              color: "white",
              ml: 1,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Scout players
          </Typography>
        </Box>

        <Box
          sx={{
            margin: "3% auto 1%",
            position: "relative",
            height: "200px",
            width: "200px",
          }}
        >
          <Box
            component="img"
            src={profPicBG}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src={messiProfPic}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "160%",
              height: "160%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: 1.5,
            textAlign: "center",
          }}
        >
          {name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "secondary.dark",
            cursor: "pointer",
            paddingTop: 1.5,
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "50%" }}
            onClick={() => setChoice(0)}
          >
            <Typography
              sx={{
                color: choice == 0 ? "primary.main" : "white",
                paddingBottom: 1.5,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Detalles
            </Typography>
            <Divider
              sx={{
                border:
                  choice == 0
                    ? `2px solid ${theme.palette.primary.main}`
                    : null,
              }}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "50%" }}
            onClick={() => setChoice(1)}
          >
            <Typography
              sx={{
                color: choice == 1 ? "primary.main" : "white",
                paddingBottom: 1.5,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Token
            </Typography>
            <Divider
              sx={{
                border:
                  choice == 1
                    ? `2px solid ${theme.palette.primary.main}`
                    : null,
              }}
            />
          </Box>
        </Box>
        {choice == 0 ? <DetailsModal player={player} /> : <TokensModal />} */
}
