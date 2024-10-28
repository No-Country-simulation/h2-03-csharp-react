import { Backdrop, Fade, Modal, Stack, Typography } from "@mui/material";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { TbHandStop } from "react-icons/tb";

const PredictionStopModal = () => {
  const { openModals, handleCloseModals } = usePredictionsContext();
  return (
    <Modal
      open={openModals === 5 ? true : false}
      onClose={handleCloseModals}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModals === 5 ? true : false}>
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 290,
            height: 200,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            justifyContent: "center",
            alignContent: "center",
            p: 4,
            gap: 1,
          }}
        >
          <Typography align="center">
            <TbHandStop size={50} />
          </Typography>
          <Typography variant="h6" align="center">
            Ya apostaste por el resultado de este partido
          </Typography>
        </Stack>
      </Fade>
    </Modal>
  );
};

export default PredictionStopModal;
