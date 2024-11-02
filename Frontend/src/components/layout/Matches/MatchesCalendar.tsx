import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Modal, Typography } from "@mui/material";
import {
  ArrowDropDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@mui/x-date-pickers";
import { useTheme } from "@mui/material/styles";

interface MatchCalendarProps {
  open: boolean;
  handleClose: () => void;
}

const MatchesCalendar: React.FC<MatchCalendarProps> = ({
  open,
  handleClose,
}) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          pt: 6,
        }}
      >
        <Typography variant="h6" align="center" fontWeight="bold">
          Selecciona una fecha
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            slots={{
              leftArrowIcon: () => (
                <ArrowLeftIcon sx={{ color: theme.palette.primary.main }} />
              ),
              rightArrowIcon: () => (
                <ArrowRightIcon sx={{ color: theme.palette.primary.main }} />
              ),
              switchViewIcon: () => (
                <ArrowDropDownIcon sx={{ color: theme.palette.primary.main }} />
              ),
            }}
          />
        </LocalizationProvider>
      </Box>
    </Modal>
  );
};

export default MatchesCalendar;
