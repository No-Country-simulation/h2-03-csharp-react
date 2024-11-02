import { useState } from "react";
import { IconButton, Grid2, Paper, Typography } from "@mui/material";
import MatchesTabs from "./MatchesTabs";
import MatchesCalendar from "./MatchesCalendar";
import calendarIcon from "../../../assets/icons/calendar.svg";

const MatchesHeader = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper
      elevation={4}
      sx={{
        flexGrow: 1,
        width: "100%",
        pt: 6,
        bgcolor: "primary.dark",
      }}
    >
      <Grid2 container spacing={3} gap={6} sx={{ mb: 1, py: 0 }}>
        <Grid2 size="grow"></Grid2>
        <Grid2 size={6}>
          <Typography
            variant="h5"
            align="center"
            color="secondary.contrastText"
            sx={{ fontWeight: 600 }}
          >
            Partidos
          </Typography>
        </Grid2>
        <Grid2 size="grow">
          <IconButton
            onClick={handleOpen}
            sx={{
              py: 0,
            }}
          >
            <img src={calendarIcon} />
          </IconButton>
        </Grid2>
      </Grid2>
      <MatchesTabs />
      <MatchesCalendar open={open} handleClose={handleClose} />
    </Paper>
  );
};

export default MatchesHeader;
