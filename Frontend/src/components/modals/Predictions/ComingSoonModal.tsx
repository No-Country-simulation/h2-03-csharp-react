import { Backdrop, Fade, Modal, Stack, Typography } from "@mui/material";
import { usePredictionsContext } from "../../../hooks/usePredictionsContext";
import { IoIosConstruct } from "react-icons/io";

const ComingSoonModal = () => {
  const { openModals, handleCloseModals } = usePredictionsContext();

  return (
    <Modal
      open={openModals === 4 ? true : false}
      onClose={handleCloseModals}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModals === 4 ? true : false}>
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
          <Typography align="center">
            <IoIosConstruct size={50} />
          </Typography>
          <Typography variant="h6" align="center">
            Próximamente
          </Typography>
        </Stack>
      </Fade>
    </Modal>
  );
};

export default ComingSoonModal;
