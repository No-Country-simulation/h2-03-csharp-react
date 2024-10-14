import { Grid2, Paper, Typography } from "@mui/material";
import { FiCalendar } from "react-icons/fi";
import MatchesTabs from "./MatchesTabs";

interface MatchesHeaderProps {
  value: number;
  handle: (event: React.SyntheticEvent, newValue: number) => void;
}

const MatchesHeader: React.FC<MatchesHeaderProps> = ({ value, handle }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        flexGrow: 1,
        width: "100%",
        pt: 6,
      }}
    >
      <Grid2 container spacing={3} sx={{ mb: 1 }}>
        <Grid2 size="grow"></Grid2>
        <Grid2 size={6}>
          <Typography
            variant="h5"
            align="center"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Partidos
          </Typography>
        </Grid2>
        <Grid2 size="grow">
          <Typography variant="h5" align="center" color="primary">
            <FiCalendar />
          </Typography>
        </Grid2>
      </Grid2>
      <MatchesTabs value={value} handleChange={handle} />
    </Paper>
  );
};

export default MatchesHeader;
