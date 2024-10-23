import Modal from "@mui/material/Modal";
import { Divider, Paper, Stack, Typography, useTheme } from "@mui/material";
import { GameData } from "../../context/GameContext";
import { RxCross1 } from "react-icons/rx";

interface PredictionsModalProps {
  open: boolean;
  handleClose: () => void;
  game: GameData;
}

const PredictionsModal: React.FC<PredictionsModalProps> = ({
  open,
  handleClose,
  game,
}) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "75vh",
          bgcolor: "background.paper",
          borderRadius: 2,
          background: `linear-gradient(45deg, rgba(0, 0, 0, 0.15) 25%, rgba(0, 0, 0, 0.00) 25%, rgba(0, 0, 0, 0.00) 75%, rgba(0, 0, 0, 0.00) 75%, rgba(1, 16, 39, 0.30) 100%), linear-gradient(45deg, rgba(1, 16, 39, 0.30) 25%, rgba(1, 16, 39, 0.30) 25%, rgba(34, 41, 69, 0.30) 75%, rgba(1, 16, 39, 0.30) 75%), ${theme.palette.primary.main}`,
        }}
      >
        <Stack sx={{ pt: 2, px: 3, gap: 1, color: "white" }}>
          <Typography variant="h5" align="right">
            <RxCross1 />
          </Typography>
          <Typography variant="h5" align="center">
            Predice el resultado
          </Typography>
          <Typography variant="subtitle1" align="center">
            Selecciona una opción
          </Typography>
        </Stack>
        <Divider
          sx={{
            my: 1,
            "&.MuiDivider-root": {
              borderWidth: "3px",
              borderStyle: "solid",
              borderImage: `linear-gradient(to right, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%) 1`,
            },
          }}
        />
        <Stack>
          
        </Stack>
        <Typography>{game.local.name}</Typography>
      </Paper>
    </Modal>
  );
};

export default PredictionsModal;
