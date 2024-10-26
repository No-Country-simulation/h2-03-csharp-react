import Modal from "@mui/material/Modal";
import { Divider, Paper, Stack, Typography, useTheme } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { TbSoccerField } from "react-icons/tb";
import { LiaTshirtSolid } from "react-icons/lia";

interface PredictionsByDayModalProps {
  open: boolean;
  handleClose: () => void;
}

const PredictionsByDayModal: React.FC<PredictionsByDayModalProps> = ({
  open,
  handleClose,
}) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          minHeight: "75vh",
          bgcolor: "background.paper",
          borderRadius: 2,
          background: `linear-gradient(45deg, rgba(0, 0, 0, 0.15) 25%, rgba(0, 0, 0, 0.00) 25%, rgba(0, 0, 0, 0.00) 75%, rgba(0, 0, 0, 0.00) 75%, rgba(1, 16, 39, 0.30) 100%), linear-gradient(45deg, rgba(1, 16, 39, 0.30) 25%, rgba(1, 16, 39, 0.30) 25%, rgba(34, 41, 69, 0.30) 75%, rgba(1, 16, 39, 0.30) 75%), ${theme.palette.primary.main}`,
          pt: 2,
        }}
      >
        <Stack sx={{ flexWrap: "wrap", px: 3, color: "white" }}>
          <Typography
            variant="h5"
            align="right"
            onClick={handleClose}
            sx={{ cursor: "pointer" }}
          >
            <RxCross1 />
          </Typography>
          <Typography variant="h5" align="center">
            ¿Que vas a predecir?
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
        <Stack
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
            gap: 2,
          }}
        >
          <Stack
            direction="row"
            onClick={() => {}}
            sx={{
              width: 300,
              height: 80,
              justifyContent: "start",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 2,
              pl: 3,
              gap: 2,
            }}
          >
            <TbSoccerField size={40} color={theme.palette.secondary.main} />
            <Typography fontWeight="bold">Resultado final</Typography>
          </Stack>
          <Stack
            direction="row"
            onClick={() => {}}
            sx={{
              width: 300,
              height: 80,
              justifyContent: "start",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 2,
              pl: 3,
              gap: 2,
            }}
          >
            <LiaTshirtSolid size={35} color={theme.palette.secondary.main} />
            <Typography fontWeight="bold">Goles</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default PredictionsByDayModal;
