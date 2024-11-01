import { Backdrop, Fade, Modal, Stack, Typography } from "@mui/material";
import check from "../../../assets/icons/check.svg";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";

const PredictionAddedModal = () => {
  const { openModals, handleCloseModals } = usePredictionsContext();

  return (
    <Modal
      open={openModals === 3 ? true : false}
      onClose={handleCloseModals}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModals === 3 ? true : false}>
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
            p: 4,
            gap: 1,
          }}
        >
          <Typography align="center"><img src={check} width={70} height={70} /></Typography>
          <Typography variant="h6" align="center">
            Se ha añadido tu predicción
          </Typography>
        </Stack>
      </Fade>
    </Modal>
  );
};

export default PredictionAddedModal;
