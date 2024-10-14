import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
} from "@mui/material";
import MatchesDetailFilterBar from "./MatchesDetailFilterBar";

const MatchesDetail = () => {
  return (
    <Box sx={{ p: 3 }}>
      <MatchesDetailFilterBar />
      <Paper>
        <Accordion>
          <AccordionSummary></AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
};

export default MatchesDetail;
