import { Backdrop, Fade, Modal, Stack, Typography } from "@mui/material";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionLimitModal = () => {
  const { openModals, handleCloseModals } = usePredictionsContext();

  return (
    <Modal
      open={openModals === 6 ? true : false}
      onClose={handleCloseModals}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModals === 6 ? true : false}>
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 290,
            height: 175,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            justifyContent: "center",
            alignContent: "center",
            p: 1,
            gap: 1,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            color="secondary"
            fontWeight="bold"
          >
            2/2
          </Typography>
          <Typography variant="subtitle1" align="center" fontWeight="bold">
            No tienes más predicciones
          </Typography>
          <Typography variant="subtitle2" align="center">
            Alcanzaste el limite de predicciones para días futuros
          </Typography>
        </Stack>
      </Fade>
    </Modal>
  );
};

export default PredictionLimitModal;
