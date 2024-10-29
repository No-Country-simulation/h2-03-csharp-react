import { useState } from "react";
import { Box, Typography, Modal, Divider } from "@mui/material";
import headerBG from "../../../assets/tokens-header-top-bg.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import messiProfPic from "../../../assets/messi-profile-pic.svg";
import profPicBG from "../../../assets/profile-pic-bg.svg";
import ModalDetails from "./ModalDetails";
import ModalTokens from "./ModalTokens";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="tokens-chart-tab-modal-title"
      aria-describedby="tokens-chart-tab-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundImage: `url(${headerBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          bgcolor: "background.paper",
          borderRadius: "10px",
          minHeight: "100vh",
          width: "30%",
          "@media (max-width: 600px)": {
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
            mt: 3,
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
        {choice == 0 ? <ModalDetails /> : <ModalTokens />}
      </Box>
    </Modal>
  );
};

export default TokenViewerModal;
